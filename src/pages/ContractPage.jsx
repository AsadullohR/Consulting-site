import { useRef, useState } from "react";
import logo from "/public/One-Consulting-Nobg.png";
import { tariffs } from "../data/tariffs";
import PackageStep from "../components/contract/PackageStep";
import StudentInfoStep from "../components/contract/StudentInfoStep";
import ReviewStep from "../components/contract/ReviewStep";
import SignaturePad from "../components/contract/SignaturePad";
import { generateContractPdf } from "../lib/generateContractPdf";

const STEPS = ["package", "info", "review", "sign", "done"];

export default function ContractPage() {
  const [step, setStep] = useState(0);
  const [tariffId, setTariffId] = useState(null);
  const [studentData, setStudentData] = useState({});
  const [signatureDataUrl, setSignatureDataUrl] = useState(null);
  const [agreed, setAgreed] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [pdfError, setPdfError] = useState(null);

  const printableRef = useRef(null);
  const tariff = tariffs.find((t) => t.id === tariffId) || null;

  function goTo(index) {
    setStep(Math.max(0, Math.min(STEPS.length - 1, index)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleGeneratePdf() {
    if (!printableRef.current) return;
    setGenerating(true);
    setPdfError(null);
    try {
      const filenameSafeName = (studentData.fullName || "shartnoma")
        .trim()
        .replace(/\s+/g, "_");
      await generateContractPdf(printableRef.current, `${filenameSafeName}_shartnoma.pdf`);
      goTo(4);
    } catch (err) {
      setPdfError("PDF yaratishda xatolik yuz berdi. Qaytadan urinib ko'ring.");
      console.error(err);
    } finally {
      setGenerating(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md sticky top-0 z-50 p-3 px-6 flex items-center justify-between">
        <a href="/">
          <img src={logo} alt="One Consulting" className="h-12 object-contain" />
        </a>
        <span className="text-sm font-semibold text-gray-500">Onlayn shartnoma</span>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-10">
        {/* Step indicator */}
        <div className="flex items-center gap-2 mb-8">
          {STEPS.slice(0, 4).map((s, i) => (
            <div
              key={s}
              className={`h-1.5 flex-1 rounded-full ${
                i <= step ? "bg-blue-600" : "bg-gray-200"
              }`}
            />
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
          {step === 0 && (
            <PackageStep
              selectedId={tariffId}
              onSelect={setTariffId}
              onNext={() => goTo(1)}
            />
          )}

          {step === 1 && (
            <StudentInfoStep
              data={studentData}
              onChange={setStudentData}
              onNext={() => goTo(2)}
              onBack={() => goTo(0)}
            />
          )}

          {step === 2 && (
            <div>
              <h2 className="text-sm font-semibold tracking-wide text-gray-500 uppercase mb-4">
                Shartnoma matni bilan tanishing
              </h2>
              <div className="max-h-96 overflow-y-auto border rounded-lg">
                <ReviewStep studentData={studentData} tariff={tariff} />
              </div>
              <label className="mt-4 flex items-start gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1"
                />
                <span>Men shartnoma shartlari bilan tanishdim va roziman.</span>
              </label>
              <div className="mt-8 flex gap-3">
                <button
                  type="button"
                  onClick={() => goTo(1)}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50"
                >
                  Orqaga
                </button>
                <button
                  type="button"
                  disabled={!agreed}
                  onClick={() => goTo(3)}
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Davom etish
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-sm font-semibold tracking-wide text-gray-500 uppercase mb-4">
                Imzo qo'ying
              </h2>
              <SignaturePad onChange={setSignatureDataUrl} />
              {pdfError && <p className="mt-3 text-sm text-red-600">{pdfError}</p>}
              <div className="mt-8 flex gap-3">
                <button
                  type="button"
                  onClick={() => goTo(2)}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50"
                >
                  Orqaga
                </button>
                <button
                  type="button"
                  disabled={!signatureDataUrl || generating}
                  onClick={handleGeneratePdf}
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {generating ? "Tayyorlanmoqda..." : "Shartnomani yuklab olish"}
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">✅</div>
              <h2 className="text-xl font-bold mb-2">Shartnoma tayyor!</h2>
              <p className="text-gray-600 mb-6">
                PDF fayl kompyuteringizga yuklab olindi. Nusxasini o'zingizda
                saqlab qo'ying.
              </p>
              <a
                href="/"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                Bosh sahifaga qaytish
              </a>
            </div>
          )}
        </div>
      </main>

      {/* Off-screen printable version used only to render the PDF snapshot.
          Kept in sync with the same data the student reviewed on-screen. */}
      <div className="fixed -left-[9999px] top-0" aria-hidden="true">
        <ReviewStep
          ref={printableRef}
          studentData={studentData}
          tariff={tariff}
          signatureDataUrl={signatureDataUrl}
          printable
        />
      </div>
    </div>
  );
}
