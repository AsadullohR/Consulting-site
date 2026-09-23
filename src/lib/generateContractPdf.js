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

  const canvas = await html2canvas(node, {
    scale: 1.5,
    useCORS: true,
    backgroundColor: "#ffffff",
  });

  const pdf = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const imgWidth = pageWidth;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  // JPEG instead of PNG: the source is a plain white contract page, so the
  // lossy compression is invisible but shrinks a ~5MB PDF down to ~a few
  // hundred KB, which matters when students download this on mobile data.
  const imgData = canvas.toDataURL("image/jpeg", 0.92);

  let heightLeft = imgHeight;
  let position = 0;

  pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;

  while (heightLeft > 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
  }

  pdf.save(filename);
}
