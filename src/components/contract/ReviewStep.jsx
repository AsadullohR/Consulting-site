import { forwardRef } from "react";
import { getContractDocuments } from "../../data/contractTemplate";

function Block({ block, signatureDataUrl, guarantorSignatureDataUrl, studentName, guarantorName }) {
  if (block.heading) {
    return <h2 className="text-lg font-bold mt-6 mb-2">{block.heading}</h2>;
  }
  if (block.signature) {
    if (block.executorOnly) {
      return (
        <div className="mt-4 mb-6">
          <p className="text-sm text-gray-600">Imzo: ____________________</p>
        </div>
      );
    }
    const isKafil = block.role === "kafil";
    const dataUrl = isKafil ? guarantorSignatureDataUrl : signatureDataUrl;
    const name = isKafil ? guarantorName : studentName;
    return (
      <div className="mt-4 mb-2">
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
  return <p className="whitespace-pre-line leading-relaxed">{block.text}</p>;
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
      {documents.map((doc, docIndex) => (
        <div
          key={doc.key}
          className={`${printable ? "p-10" : "p-6"} ${
            docIndex > 0 ? "mt-4 border-t-4 border-gray-300 pt-10" : ""
          }`}
        >
          {doc.body.map((block, i) => (
            <Block
              key={i}
              block={block}
              signatureDataUrl={signatureDataUrl}
              guarantorSignatureDataUrl={guarantorSignatureDataUrl}
              studentName={studentData.fullName}
              guarantorName={studentData.guarantor?.fullName}
            />
          ))}
        </div>
      ))}
    </div>
  );
});

export default ReviewStep;
