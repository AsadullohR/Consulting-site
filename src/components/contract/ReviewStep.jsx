import { forwardRef } from "react";
import { contractTitle, renderContractBody } from "../../data/contractTemplate";

// forwardRef so the parent wizard can hand this exact DOM node to
// html2canvas when generating the PDF — what's rendered here is exactly
// what ends up in the downloaded contract.
const ReviewStep = forwardRef(function ReviewStep(
  { studentData, tariff, signatureDataUrl, printable = false },
  ref
) {
  const date = new Date().toLocaleDateString("uz-UZ");
  const paragraphs = renderContractBody({
    ...studentData,
    tariffName: tariff?.name,
    date,
  });

  return (
    <div
      ref={ref}
      className={printable ? "bg-white p-10 w-[794px]" : "bg-white p-6 rounded-lg border"}
    >
      <h1 className="text-2xl font-bold mb-1">{contractTitle}</h1>
      <p className="text-sm text-gray-500 mb-6">Sana: {date}</p>

      <div className="space-y-4 text-gray-800 leading-relaxed">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-10">
        <p className="text-sm font-medium text-gray-700 mb-2">Imzo:</p>
        {signatureDataUrl ? (
          <img src={signatureDataUrl} alt="Imzo" className="h-24" />
        ) : (
          <div className="h-24 w-64 border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm">
            Imzo hali qo'yilmagan
          </div>
        )}
        <p className="mt-2 text-sm text-gray-600">{studentData.fullName}</p>
      </div>
    </div>
  );
});

export default ReviewStep;
