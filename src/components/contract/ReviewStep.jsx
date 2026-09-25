import { forwardRef } from "react";
import { getContractDocuments } from "../../data/contractTemplate";

// data-pdf-block marks every element that must not be sliced in half when
// generateContractPdf.js paginates the rasterized canvas — see that file
// for how the block list is used. data-pdf-block="heading" additionally
// tells it to avoid stranding a heading alone at the very bottom of a page
// with its content pushed to the next one.
function Block({
  block,
  isTitle,
  isSubtitle,
  signatureDataUrl,
  guarantorSignatureDataUrl,
  studentName,
  guarantorName,
}) {
  if (block.heading) {
    if (isTitle) {
      return (
        <h1
          data-pdf-block="heading"
          className="text-2xl font-bold text-center leading-snug mb-1"
        >
          {block.heading}
        </h1>
      );
    }
    if (isSubtitle) {
      return (
        <h2
          data-pdf-block="heading"
          className="text-lg font-semibold text-center text-gray-700 mb-6"
        >
          {block.heading}
        </h2>
      );
    }
    return (
      <h2
        data-pdf-block="heading"
        className="text-base font-bold uppercase tracking-wide mt-8 mb-3 pb-1 border-b border-gray-200"
      >
        {block.heading}
      </h2>
    );
  }
  if (block.signature) {
    if (block.executorOnly) {
      return (
        <div data-pdf-block="text" className="mt-4 mb-6">
          <p className="text-sm text-gray-600">Imzo: ____________________</p>
        </div>
      );
    }
    const isKafil = block.role === "kafil";
    const dataUrl = isKafil ? guarantorSignatureDataUrl : signatureDataUrl;
    const name = isKafil ? guarantorName : studentName;
    return (
      <div data-pdf-block="text" className="mt-4 mb-6">
        <p className="text-sm font-medium text-gray-700 mb-2">Imzo:</p>
        {dataUrl ? (
          <img src={dataUrl} alt="Imzo" className="h-20" />
        ) : (
          <div className="h-20 w-56 border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-xs">
            Imzo hali qo'yilmagan
          </div>
        )}
        <p className="mt-1 text-sm text-gray-600">{name}</p>
      </div>
    );
  }
  return (
    <p
      data-pdf-block="text"
      className="whitespace-pre-line leading-7 text-gray-800 mb-3"
    >
      {block.text}
    </p>
  );
}

// forwardRef so the parent wizard can hand this exact DOM node to
// html2canvas when generating the PDF — what's rendered here is exactly
// what ends up in the downloaded contract. Renders every document that
// applies to the selected tariff (Standard = 2 documents; VIP = 1 document,
// with its own "kafil"-role signature block for the guarantor), separated
// by a divider so each starts visually distinct in the flattened PDF.
const ReviewStep = forwardRef(function ReviewStep(
  { studentData, tariff, signatureDataUrl, guarantorSignatureDataUrl, printable = false },
  ref
) {
  const date = new Date().toLocaleDateString("sv-SE");
  const documents = getContractDocuments(tariff?.id, { ...studentData, date });

  return (
    <div ref={ref} className={printable ? "bg-white w-[794px]" : "bg-white rounded-lg border"}>
      {documents.map((doc, docIndex) => {
        // The first run of consecutive heading blocks is the document's
        // title group (main title + any subtitle line, e.g. VIP's tariff
        // name right under the contract number) — styled centered and
        // distinct from the numbered section headings that follow.
        let inTitleGroup = true;
        let titleSeen = false;
        return (
          <div
            key={doc.key}
            className={`${printable ? "p-10" : "p-6"} ${
              docIndex > 0 ? "mt-4 border-t-4 border-gray-300 pt-10" : ""
            }`}
          >
            {doc.body.map((block, i) => {
              if (!block.heading) inTitleGroup = false;
              const isTitle = block.heading && inTitleGroup && !titleSeen;
              const isSubtitle = block.heading && inTitleGroup && titleSeen;
              if (isTitle) titleSeen = true;
              return (
                <Block
                  key={i}
                  block={block}
                  isTitle={isTitle}
                  isSubtitle={isSubtitle}
                  signatureDataUrl={signatureDataUrl}
                  guarantorSignatureDataUrl={guarantorSignatureDataUrl}
                  studentName={studentData.fullName}
                  guarantorName={studentData.guarantor?.fullName}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
});

export default ReviewStep;
