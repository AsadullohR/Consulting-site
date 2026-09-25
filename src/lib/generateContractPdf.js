import { jsPDF } from "jspdf";
import html2canvas from "html2canvas-pro";

// Rasterizes the given DOM node (the printable contract view) into a
// multi-page A4 PDF and triggers a browser download. We render via
// html2canvas rather than jsPDF's vector text API so Uzbek Latin
// characters (oʻ, gʻ, etc.) always match whatever is on screen instead of
// depending on a manually embedded font.
export async function generateContractPdf(node, filename) {
  // html2canvas rasterizes whatever is painted right now — if the Sora /
  // Plus Jakarta Sans webfonts (loaded via Google Fonts, index.html) are
  // still downloading when a fast signer hits "download", it silently
  // bakes in the fallback system font instead. document.fonts.ready
  // resolves once every requested face has actually loaded.
  if (document.fonts?.ready) {
    await document.fonts.ready;
  }

  const pdf = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  // ReviewStep marks every heading/paragraph/signature block with
  // data-pdf-block so we know where it's safe to cut a page — naive
  // fixed-height slicing (the old approach) chops straight through
  // whatever text happens to land on the page boundary, splitting a
  // clause or a signature block in half. Collect each block's vertical
  // span (in mm, matching the final image) *before* rasterizing.
  const nodeRect = node.getBoundingClientRect();
  const domHeightPx = node.offsetHeight;

  const canvas = await html2canvas(node, {
    scale: 1.5,
    useCORS: true,
    backgroundColor: "#ffffff",
  });

  const imgWidth = pageWidth;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;
  const mmPerPx = imgHeight / domHeightPx;

  const blocks = Array.from(node.querySelectorAll("[data-pdf-block]")).map((el) => {
    const r = el.getBoundingClientRect();
    const top = (r.top - nodeRect.top) * mmPerPx;
    const bottom = top + r.height * mmPerPx;
    return { top, bottom, isHeading: el.dataset.pdfBlock === "heading" };
  });

  // Work out where each page should actually end: start from the naive
  // fixed-height cut, and if that line falls near a block, pull it back to
  // that block's top so the whole block moves to the next page instead of
  // being split. MARGIN is deliberately generous (not just a tie-breaking
  // epsilon): getBoundingClientRect() on the live DOM and the html2canvas
  // rasterization it's converted against drift apart by a few mm over a
  // full page (confirmed by an actual split clause during testing with a
  // tight 0.5mm margin), so "near" has to mean several mm, not sub-pixel.
  // A block taller than a full page (shouldn't happen for contract
  // clauses/signatures) falls back to the naive cut rather than looping
  // forever.
  const MARGIN = 6;
  const pageBreaks = [0];
  let current = 0;
  while (current < imgHeight - 0.5) {
    let cut = Math.min(current + pageHeight, imgHeight);
    if (cut < imgHeight) {
      const straddling = blocks.find((b) => b.top < cut + MARGIN && b.bottom > cut - MARGIN);
      if (straddling && straddling.top > current) {
        cut = straddling.top;
      } else {
        // Nothing straddles the cut, but if a heading ends up as the very
        // last thing on the page (its content pushed to the next one),
        // move it down too rather than stranding it alone at the bottom.
        const lastOnPage = blocks
          .filter((b) => b.bottom <= cut + MARGIN && b.top >= current - MARGIN)
          .sort((a, b) => b.top - a.top)[0];
        if (lastOnPage?.isHeading && lastOnPage.top > current) {
          cut = lastOnPage.top;
        }
      }
    }
    if (cut <= current) cut = Math.min(current + pageHeight, imgHeight);
    pageBreaks.push(cut);
    current = cut;
  }

  // JPEG instead of PNG: the source is a plain white contract page, so the
  // lossy compression is invisible but shrinks a ~5MB PDF down to ~a few
  // hundred KB, which matters when students download this on mobile data.
  const imgData = canvas.toDataURL("image/jpeg", 0.92);

  for (let i = 0; i < pageBreaks.length - 1; i++) {
    if (i > 0) pdf.addPage();
    const position = -pageBreaks[i];
    pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
  }

  pdf.save(filename);
}
