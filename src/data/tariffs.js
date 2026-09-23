// Two real packages, per the client (Sept 2026): Standard bundles the
// student contract together with the documents/apostille addendum; VIP
// ("ONE PRO MAX ULTRA") is its own standalone, more inclusive contract.
// Pricing is case-by-case (depends on university/country), so there's no
// fixed price shown here — the actual amount is captured per student in
// the wizard's "to'lov shartlari" field, exactly as in the source contracts.
export const tariffs = [
  {
    id: "standard",
    name: "Standart tarif",
    description:
      "Universitet tanlash, hujjatlarni tayyorlash va topshirish, immigratsiya hamda viza olish jarayonida amaliy yordam. Talaba universitet/elchixona to'lovlarini mustaqil amalga oshiradi.",
    features: [
      "Universitetga topshirish va hujjatlarni tayyorlash bo'yicha maslahat",
      "Immigratsiya va viza jarayoni bo'yicha amaliy yordam",
      "Diplomni apostillash va zarur hujjatlar tarjimasi (alohida shartnoma bilan birga imzolanadi)",
    ],
    price: "Kelishilgan holda",
  },
  {
    id: "vip",
    name: "VIP tarif (ONE PRO MAX ULTRA)",
    description:
      "To'liq hamrohlik: hujjatlarni tayyorlash, bank depoziti, universitet kontrakti va elchixona to'lovlari, aviachipta, kutib olish xizmati va sim-karta bitta shartnoma doirasida.",
    features: [
      "Universitetga to'liq hujjatlarni tayyorlab berish",
      "Bank depoziti, universitet kontrakti va elchixona to'lovlarini to'lab berish",
      "Aviachipta, kutib olish (transfer) va sim-karta xizmati",
    ],
    price: "Kelishilgan holda",
  },
];
