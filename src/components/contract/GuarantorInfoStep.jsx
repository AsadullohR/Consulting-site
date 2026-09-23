const FIELDS = [
  { name: "fullName", label: "Kafilning F.I.Sh.", type: "text", required: true },
  {
    name: "relationship",
    label: "Talabaga qarindoshligi",
    type: "text",
    placeholder: "Masalan: otasi, onasi, akasi",
    required: true,
  },
  { name: "passportNumber", label: "Kafilning passport seriya/raqami", type: "text", required: true },
  { name: "phone", label: "Kafilning telefon raqami", type: "tel", required: true },
];

// VIP-only step: the source contract holds the student ("Buyurtmachi") and
// their guarantor ("Kafil") jointly liable for a 250,000,000 so'm penalty
// clause (see contractTemplate.js), so the guarantor needs their own
// identifying info and, later, their own signature — not just a text field.
export default function GuarantorInfoStep({ data, onChange, onNext, onBack }) {
  function handleChange(e) {
    onChange({ ...data, [e.target.name]: e.target.value });
  }

  const requiredFilled = FIELDS.filter((f) => f.required).every(
    (f) => (data[f.name] || "").trim() !== ""
  );

  return (
    <div>
      <h2 className="text-sm font-semibold tracking-wide text-gray-500 uppercase mb-1">
        Kafil ma'lumotlari
      </h2>
      <p className="text-sm text-gray-500 mb-4">
        VIP tarif bo'yicha shartnomada talaba bilan birga kafil (odatda ota-ona) ham
        imzo qo'yadi va shartnoma shartlari uchun birgalikda javobgar bo'ladi.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {FIELDS.map((f) => (
          <label key={f.name} className="block">
            <span className="text-sm font-medium text-gray-700">
              {f.label}
              {f.required && <span className="text-red-500"> *</span>}
            </span>
            <input
              className="mt-1 w-full p-3 border rounded"
              type={f.type}
              name={f.name}
              placeholder={f.placeholder}
              value={data[f.name] || ""}
              onChange={handleChange}
              required={f.required}
            />
          </label>
        ))}
      </div>

      <div className="mt-8 flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50"
        >
          Orqaga
        </button>
        <button
          type="button"
          disabled={!requiredFilled}
          onClick={onNext}
          className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Davom etish
        </button>
      </div>
    </div>
  );
}
