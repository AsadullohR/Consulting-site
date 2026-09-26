import { useRef, useState } from "react";
import badge from "../assets/one-badge-logo.png";
import { tariffs } from "../data/tariffs";
import PackageStep from "../components/contract/PackageStep";
import StudentInfoStep from "../components/contract/StudentInfoStep";
import GuarantorInfoStep from "../components/contract/GuarantorInfoStep";
import ReviewStep from "../components/contract/ReviewStep";
import SignaturePad from "../components/contract/SignaturePad";
import { generateContractPdf } from "../lib/generateContractPdf";

// VIP holds the student and their guarantor ("Kafil") jointly liable (see
// contractTemplate.js), so that tariff gets two extra steps: collecting the
// guarantor's details and their own signature. Steps are looked up by name
// (not a fixed index) so switching tariffs mid-flow — e.g. going back and
// picking Standard after starting VIP — can't leave the wizard pointing at
// a step that doesn't exist for the newly selected tariff.
function stepsFor(isVip) {
  return isVip
    ? ["package", "info", "guarantor", "review", "sign", "signGuarantor", "done"]
    : ["package", "info", "review", "sign", "done"];
}

export default function ContractPage() {
  const [stepIndex, setStepIndex] = useState(0);
  const [tariffId, setTariffId] = useState(null);
  const [studentData, setStudentData] = useState({});
  const [guarantorData, setGuarantorData] = useState({});
  const [signatureDataUrl, setSignatureDataUrl] = useState(null);
  const [guarantorSignatureDataUrl, setGuarantorSignatureDataUrl] = useState(null);
  const [agreed, setAgreed] = useState(false);
  const [guarantorAgreed, setGuarantorAgreed] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [pdfError, setPdfError] = useState(null);

  const printableRef = useRef(null);
  const tariff = tariffs.find((t) => t.id === tariffId) || null;
  const isVip = tariff?.id === "vip";
  const steps = stepsFor(isVip);
  const step = steps[stepIndex] || steps[0];

  // Client-generated reference only — there's no backend/DB here to hand
  // out a real sequential contract register number, so this just needs to
  // be a stable, reasonably unique tag for this submission.
  const [contractNumber] = useState(() => {
    const now = new Date();
    const d = String(now.getDate()).padStart(2, "0");
    const m = String(now.getMonth() + 1).padStart(2, "0");
    const rand = Math.floor(1000 + Math.random() * 9000);
    return `${d}${m}-${rand}`;
  });

  const studentDataWithMeta = {
    ...studentData,
    contractNumber,
    guarantor: isVip ? guarantorData : undefined,
  };

  function goToStep(name) {
    const index = steps.indexOf(name);
    setStepIndex(index === -1 ? 0 : index);
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
      goToStep("done");
    } catch (err) {
      setPdfError("PDF yaratishda xatolik yuz berdi. Qaytadan urinib ko'ring.");
      console.error(err);
    } finally {
      setGenerating(false);
    }
  }

  const progressSteps = steps.slice(0, -1);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md sticky top-0 z-50 p-3 px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img
            src={badge}
            alt="One Academy & Consulting"
            className="h-10 w-10 object-contain"
          />
          <span className="font-display font-bold text-blue-950 leading-tight text-sm sm:text-base">
            Academy & Consulting
          </span>
        </a>
        <span className="uppercase tracking-[0.15em] text-xs font-semibold text-blue-600">
          Onlayn shartnoma
        </span>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-10">
        {/* Step indicator */}
        <div className="flex items-center gap-2 mb-8">
          {progressSteps.map((s, i) => (
            <div
              key={s}
              className={`h-1.5 flex-1 rounded-full ${
                i <= stepIndex ? "bg-blue-600" : "bg-gray-200"
              }`}
            />
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8">
          {step === "package" && (
            <PackageStep
              selectedId={tariffId}
              onSelect={setTariffId}
              onNext={() => goToStep("info")}
            />
          )}

          {step === "info" && (
            <StudentInfoStep
              data={studentData}
              tariff={tariff}
              onChange={setStudentData}
              onNext={() => goToStep(isVip ? "guarantor" : "review")}
              onBack={() => goToStep("package")}
            />
          )}

          {step === "guarantor" && (
            <GuarantorInfoStep
              data={guarantorData}
              onChange={setGuarantorData}
              onNext={() => goToStep("review")}
              onBack={() => goToStep("info")}
            />
          )}

          {step === "review" && (
            <div>
              <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-4">
                Shartnoma matni bilan tanishing
              </p>
              <div className="max-h-96 overflow-y-auto border rounded-lg">
                <ReviewStep studentData={studentDataWithMeta} tariff={tariff} />
              </div>
              <label className="mt-4 flex items-start gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1"
                />
                <span>
                  {isVip
                    ? "Men (Buyurtmachi/Talaba) shartnoma shartlari bilan tanishdim va roziman."
                    : "Men shartnoma shartlari bilan tanishdim va roziman."}
                </span>
              </label>
              {isVip && (
                <label className="mt-2 flex items-start gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={guarantorAgreed}
                    onChange={(e) => setGuarantorAgreed(e.target.checked)}
                    className="mt-1"
                  />
                  <span>
                    Men (Kafil, {guarantorData.fullName || "kafil"}) shartnoma shartlari,
                    jumladan 5.14-band bo'yicha birgalikdagi javobgarlik bilan tanishdim va
                    roziman.
                  </span>
                </label>
              )}
              <div className="mt-8 flex gap-3">
                <button
                  type="button"
                  onClick={() => goToStep(isVip ? "guarantor" : "info")}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50"
                >
                  Orqaga
                </button>
                <button
                  type="button"
                  disabled={!agreed || (isVip && !guarantorAgreed)}
                  onClick={() => goToStep("sign")}
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Davom etish
                </button>
              </div>
            </div>
          )}

          {step === "sign" && (
            <div>
              <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-4">
                {isVip ? "Talaba imzosi" : "Imzo qo'ying"}
              </p>
              <SignaturePad onChange={setSignatureDataUrl} />
              {!isVip && pdfError && <p className="mt-3 text-sm text-red-600">{pdfError}</p>}
              <div className="mt-8 flex gap-3">
                <button
                  type="button"
                  onClick={() => goToStep("review")}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50"
                >
                  Orqaga
                </button>
                {isVip ? (
                  <button
                    type="button"
                    disabled={!signatureDataUrl}
                    onClick={() => goToStep("signGuarantor")}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Davom etish
                  </button>
                ) : (
                  <button
                    type="button"
                    disabled={!signatureDataUrl || generating}
                    onClick={handleGeneratePdf}
                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {generating ? "Tayyorlanmoqda..." : "Shartnomani yuklab olish"}
                  </button>
                )}
              </div>
            </div>
          )}

          {step === "signGuarantor" && (
            <div>
              <p className="text-sm font-semibold tracking-wide text-blue-600 uppercase mb-1">
                Kafil imzosi
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Endi kafil ({guarantorData.fullName || "kafil"}) shu qurilmada o'z imzosini
                qo'ysin.
              </p>
              <SignaturePad onChange={setGuarantorSignatureDataUrl} />
              {pdfError && <p className="mt-3 text-sm text-red-600">{pdfError}</p>}
              <div className="mt-8 flex gap-3">
                <button
                  type="button"
                  onClick={() => goToStep("sign")}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50"
                >
                  Orqaga
                </button>
                <button
                  type="button"
                  disabled={!guarantorSignatureDataUrl || generating}
                  onClick={handleGeneratePdf}
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {generating ? "Tayyorlanmoqda..." : "Shartnomani yuklab olish"}
                </button>
              </div>
            </div>
          )}

          {step === "done" && (
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
          Kept in sync with the same data reviewed on-screen. */}
      <div className="fixed -left-[9999px] top-0" aria-hidden="true">
        <ReviewStep
          ref={printableRef}
          studentData={studentDataWithMeta}
          tariff={tariff}
          signatureDataUrl={signatureDataUrl}
          guarantorSignatureDataUrl={guarantorSignatureDataUrl}
          printable
        />
      </div>
    </div>
  );
}
