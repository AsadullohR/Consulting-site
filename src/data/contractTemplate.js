// PLACEHOLDER — replace with One Consulting's real contract text once the
// client sends the source document. Do NOT let real students sign against
// this placeholder; it has no legal terms, payment/refund policy, or company
// requisites in it.
//
// `renderContractBody(data)` returns an array of paragraph strings with the
// student's filled-in fields interpolated. Keep it a plain data-in,
// strings-out function so the review/PDF step can render it without caring
// about the underlying template format.
export function renderContractBody(data) {
  const { fullName, tariffName, passportNumber, phone, address, date } = data;

  return [
    "[CONTRACT TEXT PLACEHOLDER — awaiting the real contract from the client. " +
      "This page is scaffolding only; replace this function's contents with " +
      "the actual clauses (services, obligations, payment schedule, refund " +
      "policy, company requisites, dispute resolution, signatures block) " +
      "before this flow goes live.]",
    `[Buyurtmachi]: ${fullName || "[F.I.Sh.]"}, passport: ${
      passportNumber || "[passport seriya/raqami]"
    }, tel: ${phone || "[telefon]"}, manzil: ${address || "[manzil]"}.`,
    `[Tanlangan tarif]: ${tariffName || "[tarif]"}.`,
    `[Sana]: ${date || "[sana]"}.`,
  ];
}

export const contractTitle = "[Onlayn shartnoma — PLACEHOLDER]";
