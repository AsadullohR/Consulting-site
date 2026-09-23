import { tariffs } from "../../data/tariffs";

export default function PackageStep({ selectedId, onSelect, onNext }) {
  return (
    <div>
      <h2 className="text-sm font-semibold tracking-wide text-gray-500 uppercase mb-4">
        Qaysi tarif bo'yicha shartnoma tuzasiz?
      </h2>
      <div className="space-y-4">
        {tariffs.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => onSelect(t.id)}
            className={`w-full text-left p-5 rounded-lg border-2 transition ${
              selectedId === t.id
                ? "border-blue-600 bg-blue-50"
                : "border-gray-200 bg-white hover:border-blue-300"
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">{t.name}</h3>
              {t.price && (
                <span className="text-blue-600 font-semibold">{t.price}</span>
              )}
            </div>
            <p className="text-gray-600 mt-1">{t.description}</p>
            <ul className="mt-3 space-y-1">
              {t.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-green-600">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </button>
        ))}
      </div>

      <button
        type="button"
        disabled={!selectedId}
        onClick={onNext}
        className="mt-8 w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Davom etish
      </button>
    </div>
  );
}
