const FIELDS = [
  { name: "fullName", label: "F.I.Sh.", type: "text", required: true },
  { name: "birthDate", label: "Tug'ilgan sana", type: "date", required: true },
  { name: "passportNumber", label: "Passport seriya/raqami", type: "text", required: true },
  { name: "phone", label: "Telefon raqami", type: "tel", required: true },
  { name: "email", label: "Email", type: "email", required: false },
  { name: "address", label: "Yashash manzili", type: "text", required: true },
  { name: "parentName", label: "Ota-ona/vasiy F.I.Sh.", type: "text", required: false },
  { name: "parentPhone", label: "Ota-ona/vasiy telefon raqami", type: "tel", required: false },
];

export default function StudentInfoStep({ data, onChange, onNext, onBack }) {
  function handleChange(e) {
    onChange({ ...data, [e.target.name]: e.target.value });
  }

  const requiredFilled = FIELDS.filter((f) => f.required).every(
    (f) => (data[f.name] || "").trim() !== ""
  );

  return (
    <div>
      <h2 className="text-sm font-semibold tracking-wide text-gray-500 uppercase mb-4">
        Ma'lumotlaringizni kiriting
      </h2>
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
