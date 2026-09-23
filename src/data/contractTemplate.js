// Real contract text, sourced from the client's signed Word templates
// (Sept 2026): "Talaba va ONE ACADEMY & CONSULTING o'rtasidagi shartnoma"
// (standard), "Xujjatlarni apostillash hamda qo'shimcha xizmatlar bo'yicha
// shartnoma" (documents/apostille addendum, signed together with Standard),
// and "(ONE PRO MAX ULTRA) TA'RIFI" (VIP). Company name/legal form kept as
// "ONE ACADEMY & CONSULTING" NTM per the source docs.
//
// KNOWN GAPS — do not treat this as launch-ready as-is:
// - The VIP source contract's own opening paragraph only names two parties
//   (Bajaruvchi/Buyurtmachi), even though the body repeatedly refers to a
//   "Kafil" (guarantor) and the source document's signature block has a
//   line for one. That's a gap in the client's original template. Rather
//   than reproduce the inconsistency, the opening paragraph here formally
//   introduces the guarantor as a third party when one is provided, and
//   clause 5.14's liability is written as joint (Buyurtmachi and Kafil
//   together), matching how the rest of the body already talks about them.
// - Pricing is case-by-case in the source docs (varies by university/
//   country), so it's captured here as a free-text field the staff/student
//   fill in per contract, not a fixed price list.
// - `contractNumber` is a client-generated reference (timestamp-based),
//   not a sequential official register — there's no backend to guarantee
//   uniqueness/order across submissions.

const COMPANY_NAME = "«ONE ACADEMY & CONSULTING» NTM";

// Each source document introduces the party slightly differently (only the
// Standard "Talaba" contract includes the passport number inline; the
// other two mention it later in the signature block only), so these stay
// as separate helpers rather than one shared line, to match each original
// document's wording exactly.
function studentPartyLine(data) {
  return `fuqaro ${data.fullName || "[F.I.Sh.]"}, (ID/passport raqami: ${
    data.passportNumber || "[passport seriya/raqami]"
  }), bundan buyon "Talaba"`;
}

// Full requisites (bank/INN/OKONX) — used only where the source document
// actually lists them (the Hujjatlar addendum and the VIP contract).
function requisitesBlock({ inn, xr, mfo, okonx, phones }) {
  return [
    { heading: "BAJARUVCHI" },
    { text: COMPANY_NAME },
    { text: "Manzil: Andijon sh, SH. Rashidov ko'chasi 26/4 uy." },
    { text: "Bank: OATB «Xamkorbank» Andijon filiali" },
    { text: `X/R: ${xr}` },
    { text: `MFO: ${mfo}` },
    { text: `INN: ${inn}` },
    { text: `OKONX: ${okonx}` },
    { text: `Tel: ${phones}` },
    { text: "Direktor: S. Kasimov" },
  ];
}

// The Standard student contract's own source document lists only
// director/address/phone for the executor — no bank/INN/OKONX — so this
// stays separate rather than borrowing the addendum's or VIP's banking
// details, which aren't in that document.
function minimalRequisitesBlock() {
  return [
    { heading: "BAJARUVCHI" },
    { text: COMPANY_NAME },
    { text: "Direktor: S. Kasimov" },
    { text: "Manzil: Andijon sh, SH. Rashidov ko'chasi 26/4 uy" },
    { text: "Tel: +998939103377" },
  ];
}

function studentContractBody(data) {
  const date = data.date || "[sana]";
  return [
    { heading: "TALABA VA " + COMPANY_NAME + " O'RTASIDAGI SHARTNOMA" },
    { text: `Shartnoma № ${data.contractNumber || "[shartnoma raqami]"}` },
    { text: `Andijon shahri${" ".repeat(4)}"${date}"` },
    {
      text: `Bir tomondan, Nizom asosida faoliyat yurituvchi ${COMPANY_NAME} nomidan ish yurituvchi S. Kasimov, bundan buyon "Bajaruvchi", ikkinchi tomondan, ${studentPartyLine(
        data
      )}, birgalikda "Tomonlar" deb yuritilgan holda ushbu shartnomani quyidagilar haqida tuzdilar.`,
    },
    { heading: "1. SHARTNOMA PREDMETI" },
    {
      text: "1.1. Bajaruvchi Talabaga xorijdagi oliy ta'lim muassasasiga o'qishga topshirish, hujjatlarni tayyorlash, tarjima qilish, universitetga hujjatlarini yuborish, agar talaba anketa/application to'ldirishda qiyinchilikka duch kelsa amaliy yordam qilish, immigratsiya hujjatlari, viza jarayoni hamda boshqa tegishli xizmatlarni ko'rsatadi.",
    },
    {
      text: "1.2. Bajaruvchi Talabaga universitet tanlash, hujjatlarni tayyorlash va topshirish, immigratsiya hamda viza olish jarayonlarida amaliy yordam ko'rsatadi.",
    },
    {
      text: "1.3. Mazkur shartnoma bo'yicha ayrim xizmatlar bajarilgandan so'ng sarflangan xarajatlar qaytarilmaydi.",
    },
    { heading: "2. TOMONLARNING XIZMATLARI VA TO'LOV TARTIBI" },
    { text: "2.1. Talaba quyidagi xarajatlarni mustaqil ravishda amalga oshiradi:" },
    { text: "hujjatlarni tarjima qilish va notarial tasdiqlash xarajatlari;" },
    { text: "universitet ariza (application/anketa) to'lovlari;" },
    { text: "universitet kontrakt (tuition fee) to'lovlari;" },
    { text: "immigratsiya va elchixona yig'imlari;" },
    { text: "pochta va xalqaro yuborish xarajatlari;" },
    { text: "bank xizmatlari va xalqaro o'tkazma xarajatlari;" },
    { text: "Bankshot va moliyaviy hujjatlar uchun xarajatlar;" },
    { text: "til sertifikati va imtihon xarajatlari;" },
    { text: "boshqa zarur texnik va rasmiy xarajatlar." },
    {
      text: "2.2. Bajaruvchi Talabaga universitet va viza jarayonlari bo'yicha maslahat hamda amaliy xizmatlar ko'rsatadi.",
    },
    {
      text: "2.3. Talaba viza olmagunga qadar Bajaruvchi o'z xizmat haqqi sifatida qo'shimcha to'lov talab qilmaydi, bundan amalda sarflangan xarajatlar mustasno. Talaba viza olgan kundan boshlab 3 (uch) ish kuni ichida Bajaruvchining konsalting xizmatlari uchun belgilangan xizmat haqini to'liq hajmda amalga oshirishi shart.",
    },
    { heading: "TO'LOV SHARTLARI (ushbu shartnoma bo'yicha kelishilgan)" },
    { text: data.pricingTerms || "[to'lov summasi va shartlari kiritilmagan]" },
    { heading: "3. QAYTARILMAYDIGAN TO'LOVLAR" },
    { text: "3.1. Quyidagi xarajatlar xizmatlar bajarilganidan so'ng qaytarilmaydi:" },
    { text: "tarjima va notarial tasdiqlash xarajatlari;" },
    { text: "universitet anketa/application to'lovlari;" },
    { text: "immigratsiya yig'imlari;" },
    { text: "elchixona va konsullik yig'imlari;" },
    {
      text: "bankshot va moliyaviy hujjatlar uchun sarflangan mablag'lar agar Bajaruvchi bu masalada xizmat ko'rsatgan bo'lsa;",
    },
    { text: "pochta va xalqaro yuborish xarajatlari;" },
    { text: "texnik va elektron tizim xarajatlari;" },
    { text: "til sertifikati va imtihon xarajatlari;" },
    { text: "universitetga yuborilgan yoki sarflangan boshqa xarajatlar." },
    {
      text: "3.2. Talaba hujjat topshirish yoki viza jarayonining istalgan bosqichida o'z xohishiga ko'ra jarayonni to'xtatsa yoki o'qishdan voz kechsa, shu vaqtgacha amalga oshirilgan barcha xarajatlar qaytarilmaydi.",
    },
    {
      text: "3.3. Universitet tomonidan Talabaning hujjatlari qabul qilinmagan yoki immigratsiya hamda konsullik tomonidan rad javobi berilgan taqdirda ham, yuqorida ko'rsatilgan amalda sarflangan xarajatlar qaytarilmaydi.",
    },
    {
      text: "3.4. Talabaga Koreya Immigratsiyasi yoki O'zbekistondagi Korea Elchixonasi tomonidan viza tasdiqlanib talabaning aybi bilan viza rad berilsa firmaga to'langan to'lovdan 50% ushlab qolinadi.",
    },
    {
      text: "3.5. Koreya Immigratsiyasi yoki O'zbekistondagi Korea Elchixonasi tomonidan viza berilgandan so'ng talaba Koreaga borishdan bosh tortsa konsalting xizmatiga to'lagan to'lovi qaytarilmaydi.",
    },
    { heading: "4. VISA RAD ETILGAN HOLATDA TO'LOVLARNI QAYTARISH TARTIBI" },
    {
      text: "4.1. Talaba viza bo'yicha rad javobini olgan taqdirda, Bajaruvchi universitetga to'langan kontrakt mablag'larini qaytarish bo'yicha amaliy yordam ko'rsatadi.",
    },
    {
      text: "4.2. Bajaruvchi universitetga murojaat qilish, ariza tayyorlash va zarur hujjatlarni rasmiylashtirishda Talabaga ko'maklashadi.",
    },
    {
      text: "4.3. Universitet tomonidan qaytarilgan kontrakt mablag'lari Talabaning shaxsiy bank hisob raqamiga o'tkaziladi.",
    },
    {
      text: "4.4. Kontrakt mablag'larini qaytarish muddati universitetning ichki tartib-qoidalari hamda xalqaro bank o'tkazmalari muddatlariga bog'liq bo'ladi.",
    },
    {
      text: "4.5. Valyuta kursining o'zgarishi (oshishi yoki kamayishi), xalqaro bank o'tkazmalari, vositachi bank komissiyalari, bank tomonidan ushlab qolinadigan foizlar va boshqa moliyaviy xarajatlar sababli kontrakt summasi to'liq qaytmasligi mumkin.",
    },
    {
      text: "4.6. Mazkur kurs farqlari, bank ushlanmalari yoki xalqaro moliyaviy tizim xarajatlari uchun Bajaruvchi javobgar hisoblanmaydi.",
    },
    {
      text: "4.7. Universitet tomonidan anketa/application, registratsiya yoki boshqa qaytarilmaydigan to'lovlar ushlab qolingan taqdirda, ushbu summalar Talabaga qaytarilmaydi.",
    },
    {
      text: "4.8. Bajaruvchi universitet, immigratsiya yoki konsullikning mustaqil qarorlari uchun javobgar hisoblanmaydi.",
    },
    {
      text: "4.9. Talaba noto'g'ri ma'lumot, soxta hujjat yoki qonunchilikka zid ma'lumot taqdim etganligi sababli viza rad etilgan taqdirda, barcha javobgarlik Talabaning zimmasida bo'ladi va to'langan mablag'lar qaytarilmaydi.",
    },
    { heading: "5. TALABANING MAJBURIYATLARI" },
    { text: "5.1. Talaba quyidagilarga majbur:" },
    { text: "to'g'ri va haqqoniy ma'lumotlarni taqdim etish;" },
    { text: "zarur hujjatlarni o'z vaqtida topshirish;" },
    { text: "universitet va davlat qonun-qoidalariga rioya qilish;" },
    { text: "talab etilgan to'lovlarni belgilangan muddatda amalga oshirish." },
    { heading: "6. BAJARUVCHINING MAJBURIYATLARI" },
    { text: "6.1. Bajaruvchi quyidagilarga majbur:" },
    { text: "Talabaga universitet tanlashda yordam berish;" },
    { text: "hujjatlarni sifatli tayyorlash va yuborish;" },
    { text: "viza va immigratsiya jarayonlari bo'yicha amaliy yordam ko'rsatish;" },
    { text: "Talabani jarayon haqida xabardor qilib borish." },
    {
      text: "6.2. Bajaruvchi viza chiqishini, universitet tomonidan qabul qilinishini yoki immigratsiya qarorini kafolatlamaydi.",
    },
    { heading: "7. JAVOBGARLIK" },
    {
      text: "7.1. Tomonlar mazkur shartnoma bo'yicha majburiyatlarni bajarmaganlik yoki lozim darajada bajarmaganlik uchun O'zbekiston Respublikasining amaldagi qonunchiligiga muvofiq javobgar bo'ladilar.",
    },
    {
      text: "7.2. Konsullik, immigratsiya yoki universitet tomonidan chiqarilgan qarorlar uchun Bajaruvchi javobgar hisoblanmaydi.",
    },
    { heading: "8. FORS-MAJOR" },
    {
      text: "8.1. Tabiiy ofatlar, pandemiya, urush, davlat cheklovlari, siyosiy vaziyat yoki tomonlarga bog'liq bo'lmagan boshqa favqulodda holatlar yuz berganda tomonlar javobgarlikdan ozod qilinadilar.",
    },
    {
      text: "8.2. Fors-major holatlari yuzaga kelgan taqdirda, majburiyatlarni bajarish muddati ushbu holatlar davom etgan muddatga uzaytiriladi.",
    },
    { heading: "9. NIZOLARNI HAL ETISH TARTIBI" },
    { text: "9.1. Mazkur shartnoma yuzasidan kelib chiqadigan barcha nizolar muzokaralar yo'li bilan hal etiladi." },
    {
      text: "9.2. Tomonlar o'zaro kelishuvga erisha olmagan taqdirda, nizolar O'zbekiston Respublikasining amaldagi qonunchiligiga muvofiq sud tartibida hal etiladi.",
    },
    { heading: "10. SHARTNOMANING AMAL QILISH MUDDATI" },
    {
      text: "10.1. Mazkur shartnoma tomonlar imzolagan kundan boshlab kuchga kiradi va tomonlar o'z majburiyatlarini to'liq bajargunga qadar amal qiladi.",
    },
    { text: "10.2. Shartnoma ikki nusxada tuzilgan bo'lib, har ikki nusxa bir xil yuridik kuchga ega." },
    { heading: "TOMONLARNING REKVIZITLARI VA IMZOLARI" },
    { heading: "TALABA" },
    { text: `F.I.Sh: ${data.fullName || "[F.I.Sh.]"}` },
    { text: `Pasport/ID: ${data.passportNumber || "[passport]"}` },
    { text: `Tel: ${data.phone || "[telefon]"}` },
    { signature: true },
    ...minimalRequisitesBlock(),
    { signature: true, executorOnly: true },
  ];
}

function documentsAddendumBody(data) {
  const date = data.date || "[sana]";
  return [
    { heading: "XUJJATLARNI APOSTILLASH HAMDA QO'SHIMCHA XIZMATLAR BO'YICHA SHARTNOMA" },
    { text: `№ ${data.docsContractNumber || data.contractNumber || "[shartnoma raqami]"}` },
    { text: `Andijon sh.${" ".repeat(6)}"${date}"` },
    {
      text: `Fuqaro ${
        data.fullName || "[F.I.Sh.]"
      }, bundan keyin "Buyurtmachi" deb nomlanadi, bir tomondan, hamda Nizom asosida ish yurituvchi ${COMPANY_NAME}, bundan keyin "Bajaruvchi" deb ataladi, direktor S. Kasimov shaxsida, birgalikda "Tomonlar" deb nomlanadilar va ushbu shartnomani quyidagilar haqida tuzdilar:`,
    },
    { heading: "SHARTNOMA PREDMETI" },
    { text: "Bajaruvchi Buyurtmachiga diplomni apostillashga oid sifatli xizmatlarni ko'rsatadi." },
    {
      text: "Bundan tashqari, quyidagi hujjatlarning tarjimasini amalga oshiradi: tug'ilganlik to'g'risidagi guvohnoma, mahalladan ma'lumotnoma, kafillarning oylik ish haqi to'g'risidagi ma'lumotnoma, ota-onaning nikoh guvohnomasi va boshqa zarur qo'shimcha hujjatlar.",
    },
    { text: "Koreyaga pochta orqali hujjatlarni yuborish va pochta orqali qabul qilishni ham korxona o'z zimmasiga oladi." },
    {
      text: "Xizmatlar ko'rsatish muddati shartnoma tuzilgan kundan boshlab olti oy davomida yoki tomonlarning o'zaro kelishuvi asosida amalga oshiriladi.",
    },
    { heading: "NARXLAR VA HISOB-KITOB TARTIBI" },
    { text: data.docsPricingTerms || data.pricingTerms || "[to'lov summasi va shartlari kiritilmagan]" },
    { heading: "TOMONLARNING MAJBURIYATLARI VA JAVOBGARLIGI" },
    { text: "Buyurtmachining majburiyatlari:" },
    { text: "Bajaruvchi talab qilgan hujjatlarni o'z vaqtida taqdim etish." },
    { text: "Bajaruvchining majburiyatlari:" },
    { text: "Hujjatlarni sifatli va o'z vaqtida tarjima qilib, Buyurtmachiga taqdim etish." },
    {
      text: "Shartnoma bo'yicha majburiyatlar bajarilmagan barcha hollarda (uzrli sabablarsiz) tomonlar O'zbekiston Respublikasining amaldagi qonunchiligiga muvofiq javobgar bo'ladilar.",
    },
    {
      text: "Buyurtmachi Koreya immigratsiyasi yoki universitet tomonidan rad javobini olgan taqdirda, to'langan mablag' qaytarilmaydi va u bajarilgan hujjat ishlariga sarflangan deb hisoblanadi.",
    },
    { heading: "SHARTNOMA MUDDATI, UNI O'ZGARTIRISH VA MUDDATIDAN ILGARI BEKOR QILISH" },
    { text: "Shartnoma tuzilgan kundan boshlab unda ko'rsatilgan xizmatlar to'liq bajarilgunga qadar amal qiladi." },
    { text: "Shartnomaga o'zgartirish kiritish har ikkala tomonning o'zaro roziligi bilan amalga oshiriladi." },
    {
      text: "Bajaruvchi tomonidan shartnomadagi xizmatlar to'liq bajarilgach, shartnoma o'z kuchini yo'qotadi (muddatidan ilgari bekor qilingan hisoblanadi).",
    },
    { heading: "TARAFLARNING JAVOBGARLIGI. NIZOLARNI HAL QILISH TARTIBI" },
    {
      text: "Tomonlar o'z majburiyatlarini bajarmagan yoki lozim darajada bajarmaganliklari uchun O'zbekiston Respublikasining Fuqarolik kodeksi va boshqa qonun hujjatlariga muvofiq javobgar bo'ladilar.",
    },
    {
      text: "Tomonlar o'rtasida kelib chiqadigan nizolar o'zaro kelishuv asosida hal etiladi. Kelishuvga erishilmagan taqdirda, nizo O'zbekiston Respublikasining amaldagi qonunchiligiga muvofiq hal etiladi.",
    },
    { heading: "FORS-MAJOR" },
    {
      text: "Tomonlar o'zlariga bog'liq bo'lmagan, favqulodda va yengib bo'lmas kuch (fors-major holatlari) tufayli majburiyatlarini bajarmaganliklari uchun javobgarlikdan ozod qilinadilar. Bu holatda majburiyatlarni bajarish muddati fors-major holatining davom etish muddatiga mutanosib ravishda uzaytiriladi.",
    },
    {
      text: "Fors-major holati uzoq davom etgan taqdirda, shartnoma tomonlardan birining tashabbusi bilan bekor qilinishi mumkin. Fors-major holati yuz berganligi tegishli vakolatli davlat organining ma'lumotnomasi bilan tasdiqlanadi.",
    },
    {
      text: "Har ikki tomon mazkur shartnoma bo'yicha majburiyatlarni bajarishga to'sqinlik qiluvchi fors-major holatlarining boshlanishi va tugashi haqida bir-birini darhol xabardor qilishi lozim.",
    },
    { heading: "YAKUNLOVCHI QOIDALAR" },
    { text: "Shartnoma tomonlar imzolagan paytdan boshlab kuchga kiradi." },
    { text: "Shartnoma ikki nusxada tuzilgan bo'lib, har ikkisi bir xil yuridik kuchga ega va tomonlarga bir nusxadan beriladi." },
    { heading: "TOMONLARNING MANZIL, REKVIZIT VA IMZOLARI" },
    { heading: "BUYURTMACHI" },
    { text: `F.I.Sh: ${data.fullName || "[F.I.Sh.]"}` },
    { text: `Pasport: ${data.passportNumber || "[passport]"}` },
    { signature: true },
    ...requisitesBlock({
      inn: "302568027",
      xr: "20208000100205302001",
      mfo: "00083",
      okonx: "90310",
      phones: "+99895-201-33-77, +99891-609-33-77",
    }),
    { signature: true, executorOnly: true },
  ];
}

function vipContractBody(data) {
  const date = data.date || "[sana]";
  return [
    { heading: "XIZMATLAR KO'RSATISH TO'G'RISIDA SHARTNOMA № " + (data.contractNumber || "[raqam]") },
    { heading: "(ONE PRO MAX ULTRA) TA'RIFI" },
    { text: `Andijon shahri${" ".repeat(6)}"${date}"` },
    {
      text: `Biz quyida imzo chekuvchilar bir tomondan ${COMPANY_NAME} (keyingi o'rinlarda "Bajaruvchi" deb nomlanadi) nomidan rahbar Kasimov Sarvarbek, ikkinchi tomondan fuqaro ${
        data.fullName || "[F.I.Sh.]"
      } (keyingi o'rinlarda "Buyurtmachi" deb nomlanadi)${
        data.guarantor?.fullName
          ? `, hamda fuqaro ${data.guarantor.fullName} (Buyurtmachiga qarindoshligi: ${
              data.guarantor.relationship || "[qarindoshligi]"
            }, ID/passport raqami: ${
              data.guarantor.passportNumber || "[passport]"
            }) (keyingi o'rinlarda "Kafil" deb nomlanadi)`
          : ""
      } ushbu shartnoma asosida quyidagilarga kelishdik.`,
    },
    { heading: "1. Shartnoma mazmuni" },
    {
      text: "1.1 Mazkur Shartnoma bo'yicha Bajaruvchi, Buyurtmachi topshirig'iga asosan, Buyurtmachini Koreya Respublikasining o'quv muassasasida (matn davomida — \"O'quv muassasasi\") ta'lim olishi maqsadida uning manfaatlarini ifodalash, kerakli hujjatlarni tayyorlash, Koreya Respublikasining oliy ta'lim dasturlari bo'yicha maslahatlar berish, va boshqa hizmatlar majmuasi bo'yicha pullik hizmatlarni ko'rsatish vazifasini o'z zimmasiga oladi. Shartnoma matnida keltirilmagan shartlar, jumladan, o'quv muassasasining nomi, horijda turish muddati va boshqalar, Shartnomaning ajralmas qismi deb hisoblangan 1-sonli Ilovada ko'rsatiladi.",
    },
    { text: "1.2 Mazkur Shartnoma bo'yicha Bajaruvchi o'z zimmasiga quyidagi hizmatlarni ko'rsatish majburiyatini oladi (odatda: universitetga to'liq xujjatlarni tayyorlab berish, KDB bankka belgilangan miqdorda depozit qo'yib berish, universitet kontraktini to'lab berish, elchixona to'lovlarini to'lab berish, avia chipta olib berish, kutib olish xizmati (transfer), sim karta) — aniq ro'yxat va narxlar quyida keltiriladi:" },
    { heading: "XIZMATLAR VA TO'LOV SHARTLARI (ushbu shartnoma bo'yicha kelishilgan)" },
    { text: data.pricingTerms || "[xizmatlar ro'yxati, umumiy summa, to'langan va qolgan to'lov kiritilmagan]" },
    { heading: "2. Shartnomaning narhi va hisob-kitoblar tartibi" },
    {
      text: "2.2 Maboda talabaga Universitet, elchixona yoki Immigratsiyadan qandaydur sababga ko'ra rad berilsa, xizmat ko'rsatish jarayonida sarflangan xarajatlar (bank uslugasi, elchixona to'lovi va med ko'rik, anketa to'lovlari va hujjat harajatlari) ushlab qolinadi. Universitetga to'langan kontrakt to'lovi universitetga ariza beriladi va Universitet o'zi belgilagan sanaga qaytarib beradi.",
    },
    { text: "2.4 O'qishga to'langan kontrakt qaytish davrida davlat kursi ko'tarilishi yoki pasayishiga korxona javobgar emas." },
    {
      text: "2.5 Mabodo talaba shartnoma qilganidan so'ng qandaydur sabab bo'lib shartnomani bekor qilsa, tayyorlangan xujjatlarga va ko'rsatilgan xizmatlarga to'lov ushlab qolinadi.",
    },
    {
      text: "2.6 Talaba nomiga qo'yilgan bank depoziti korxonaning mulki hisoblanadi va talaba bu pulga hech qanday da'vo qilmaydi.",
    },
    {
      text: "2.7 Agar talabaga viza chiqqanidan so'ng Koreyaga borishdan bosh tortsa, konsalting xizmati uchun firmaga shartnomada kelishilgan miqdorda jarima to'lab beradi.",
    },
    { heading: "3. Alohida shartlar" },
    {
      text: "3.1 Buyurtmachi, o'quv muassasasining xonalari tabiiy eskirish hususiyatiga ega bo'lishi, shuning uchun o'quv muassasasini tanlash jarayonida ko'rib chiqilayotgan fotosuratlar Buyurtmachi kelgan kunidagi xonalarning asl holatidan farqlanishi mumkinligi haqida habardor.",
    },
    {
      text: "3.3 O'quv muassasasida o'qish shartlari va qoidalari bo'yicha takliflar va istaklari bilan o'quv muassasasining ma'muriyatiga Buyurtmachi shahsan murojaat qilishi shart. Ijrochi yuqorida ko'rsatilgan masalalar bo'yicha vakolatlarga ega emas va ularni hal qilish choralarini ko'rishga majbur emas.",
    },
    {
      text: "3.4 Muassasaning ma'muriyati tomonidan joylashtirish taomillari o'z vaqtida bajarilishi uchun Buyurtmachi mazkur Shartnomada ko'rsatilgan to'lovlarni o'z vaqtida to'lashi, hamda o'quv muassasasiga belgilangan muddatda yetib kelib u yerda o'rnatilgan ichki qoidalarga rioya qilishi shart.",
    },
    { text: "3.6 Buyurtmachi, ko'rsatilgan hizmatlar uchun to'lovni amalga oshirib, mazkur Shartnomani har bir bosqichida bekor qilishi mumkin." },
    {
      text: "3.8 Buyurtmachining o'quv muassasasida ta'lim olish istagidan voz kechishi Bajaruvchi hizmatlari uchun to'lovlarini, shu jumladan o'quv muassasasiga ro'yxatga olish uchun amalga oshirilgan boshqa to'lovlarini qaytarib berish uchun asos bo'lmaydi.",
    },
    { heading: "4. Taraflarning huquqlari va majburiyatlari" },
    { text: "4.1 Bajaruvchining majburiyatlari:" },
    { text: "4.1.1 Hizmatlar ko'rsatilishi jarayoni haqida Buyurtmachini habardor qilish;" },
    { text: "4.1.2 Qonunchilik hamda mazkur Shartnoma talablaridan kelib chiqqan holda hizmatlarning shaklini va uslublarini mustaqil ravishda belgilash;" },
    { text: "4.1.4 Hizmatlarni ko'rsatuvchi mutahassislarni mustaqil ravishda belgilash;" },
    {
      text: "4.1.5 Universitetning hujjatlarni ko'rib chiqilganligi haqida habarni hamda o'qishga qabul qilinganligi haqidagi tasdiqnomani shahsan Buyurtmachiga, yoki vakolati notarial ishonchnomasi bilan tasdiqlangan vakiliga berish.",
    },
    { text: "4.2 Bajaruvchining huquqlari:" },
    { text: "4.2.1 Buyurtmachi tomonidan to'lovlarni amalga oshirish muddati buzilgan taqdirda hizmatlarni ko'rsatishni boshlamaslik yoki to'xtatish;" },
    { text: "4.4 Buyurtmachining huquqlari:" },
    { text: "4.4.1 Buyurtmachidan Shartnoma shartlariga qat'iy rioya qilishini talab qilish;" },
    { text: "4.4.2 Bajaruvchining tasarrufida bo'lgan ta'lim dasturiga oid ma'lumotlar bilan tanishish." },
    { text: "4.5 Buyurtmachining majburiyatlari:" },
    {
      text: "4.5.1 Bajaruvchiga mazkur Shartnoma bilan bog'liq faqat haqiqiy ma'lumotlarni taqdim etish. Buyurtmachi barcha taqdim etilgan ma'lumotlarning va ushbu ma'lumotlarni tasdiqlovchi hujjatlarning haqiqiyligi uchun javobgar bo'ladi;",
    },
    { text: "4.5.3 Barcha zarur bo'lgan hujjatlarni (arizalarni) Bajaruvchiga o'z vaqtida taqdim etish;" },
    {
      text: "4.5.5 Buyurtmachi ta'lim olish mamlakatining qonunchiligi, kirish va yashash qoidalari, shahsiy havfsizlik qoidalari, hulq-atvor qoidalari, o'quv muassasasiga qabul qilish/yashash/tahsil olish qoidalari hamda Koreya Respublikasi qonunlari va urf-odatlariga rioya qilishi shart.",
    },
    {
      text: "4.5.6 Mazkur Shartnoma imzolanganidan so'ng 7 ish kuni ichida Bajaruvchiga quyidagi hujjatlar taqdim etilishi shart: pasport (asli yoki skaner varianti), o'rta ta'lim diplomining asli, tug'ilganlik haqidagi ma'lumotnoma, o'quv rejasi (ingliz yoki koreys tilida), bank ma'lumotnomasi, ota-onasining pasportlari nusxasi, zaruriyat bo'lganida boshqa hujjatlar.",
    },
    {
      text: "4.5.7 Buyurtmachi shahsiy rejalari o'zgarganligi, belgilangan muddatda o'qishga ketishga to'sqinlik qilayotgan holatlar, shahsiy ma'lumotlari yoki aloqa ma'lumotlari (elektron manzil, telefon, pochta manzili) o'zgarganligi to'g'risida darhol Bajaruvchini ogohlantirishi shart.",
    },
    {
      text: "4.5.8 Buyurtmachi O'zbekistondan Koreyaga va Koreyadan O'zbekistonga uchish muddatlarini, shuningdek Koreya Respublikasida yashash muddatlarini Bajaruvchi bilan kelishib olishi lozim.",
    },
    {
      text: "4.5.9 Buyurtmachi o'quv darslariga muntazam ravishda tashrif buyurishi shart, hamda Universitetni Shartnomada belgilangan muddatli o'quv davri mobaynida universitet rahbariyatining ruhsatisiz tashlab ketmaslikka majbur.",
    },
    {
      text: "4.5.10 Buyurtmachi Koreya Respublikasining migratsiya hisobi va viza rejimining asosiy qoidalariga hamda Koreya davlat organlarining talablariga qat'iy rioya qilishi lozim.",
    },
    { heading: "5. Taraflarning javobgarligi" },
    {
      text: "5.1 Shartnoma bo'yicha o'z majburiyatlarini bajarmagan yoki tegishlicha bajarmagan taraf O'zbekiston Respublikasi amaldagi qonunchilikka hamda Shartnoma shartlariga asosan javobgar bo'ladi.",
    },
    {
      text: "5.2 Buyurtmachi o'quv yili davomidagi o'zini hulq-atvori uchun javobgar bo'ladi (intizom yo'qligi, universitet qoidalarini yoki horijiy davlat qonunlarini buzish, darslarga qatnashmaslik va h.k.). Bunday holatlarda universitet Buyurtmachini avval to'langan harajatlarni qaytarib bermasdan o'qishdan chetlashtirishga haqli.",
    },
    {
      text: "5.4 Bajaruvchi, uni vakolatiga va nazorati ostiga kirmaydigan, Buyurtmachining mumkin bo'lgan harakatlari yoki harakatsizligi uchun javobgar bo'lmaydi (yukni yo'qotish/zarar, konsullik hizmati, bojxona va immigratsiya hukumatining harakatlari).",
    },
    { text: "5.5 Buyurtmachi tomonidan yo'qotilgan pasport, chiptalar, yuk kvitansiyalari va boshqa hujjatlar uchun Bajaruvchi javobgar bo'lmaydi." },
    {
      text: "5.7 Bajaruvchi Buyurtmachini Shartnoma mazmuniga asosan o'quv muassasasiga kirishni tashkil etadi, ammo ta'lim muassasasi tomonidan ta'lim dasturini tashkil etish bo'yicha majburiyatlarni tegishlicha bajarilmaganligi uchun javobgar bo'lmaydi.",
    },
    {
      text: "5.8 Bajaruvchi Buyurtmachining hayoti, mulki va sog'ligi, harakatlari va harakatsizligi uchun javobgar bo'lmaydi. Bunday javobgarlik Buyurtmachi, sug'urta kompaniyasi va o'quv muassasasi zimmalariga yuklatiladi.",
    },
    {
      text: "5.9 Buyurtmachi haqiqiy shahsiy ma'lumotlarni (pasport ma'lumotlari va boshqalar) taqdim etishi uchun javobgar bo'ladi. Shahsiy ma'lumotlari o'zgarganligi uchun Buyurtmachi tegishli harajatlarga uchraydi.",
    },
    {
      text: "5.10 Bajaruvchi uchinchi taraflar (horijiy davlatning elchixonasi va konsullik bo'limlari, chegara va bojxona hizmatlari, aviakompaniyalar, viza va notarial idoralar va h.k.) ning harakatlari uchun javobgar bo'lmaydi.",
    },
    {
      text: "5.11 Buyurtmachi o'quv muassasasiga belgilangan kunida va vaqtida yetib kelishi uchun javobgar bo'ladi. Belgilangan muddatda yetib kelmagan taqdirda, o'quv muassasasi buni dasturda ishtirok etishni rad etish sifatida ko'rib chiqishi va yotoqxonada joy ajratmasligi mumkin.",
    },
    {
      text: "5.12 Bajaruvchi, Buyurtmachi tomonidan taqdim etilgan hujjatlarni o'quv muassasasiga o'z vaqtida berib yuborishi, qabul qilish va taklif xatini tayyorlash jarayonini nazorat qilishi, shuningdek Buyurtmachini universitetga borish muddatlari to'g'risida o'z vaqtida habardor qilishi shart.",
    },
    {
      text: "5.13 O'quv muassasasida o'qishni tamomlaganidan so'ng Buyurtmachi Koreya Respublikasini amaldagi qonunchilikka muvofiq qisqa muddat ichida tark etishi lozim. Aks holda Buyurtmachiga nisbatan qat'iy choralar (jarima, hibsga olish, deportatsiya) qo'llanilishi mumkin.",
    },
    {
      text: "5.14 Shartnomaning 4.5.9, 4.5.10 bandlarini buzganligi uchun Buyurtmachi va uning Kafili Bajaruvchi foydasiga shartnomada belgilangan miqdordagi jarima to'lash bo'yicha birgalikda mulkiy javobgarlikka tortiladilar. Bajaruvchi ko'rsatilgan jarima summasini Kafildan undirishga haqli. Bajaruvchi Kafilni, unga ma'lum bo'lgan, Buyurtmachining ushbu bandlarni buzganligi haqida o'z vaqtida xabardor qilishi lozim.",
    },
    { heading: "6. Fors-major holatlari" },
    {
      text: "6.1 Taraflar ihtiyoriga bog'liq bo'lmagan, oldindan bilish yoki oldini olish imkoni bo'lmagan favqulotda holatlar (fors-major) oqibatida majburiyatlar bajarilmasa, taraflar javobgarlikka tortilmaydi.",
    },
    {
      text: "6.3 Fors-major holatining vujudga kelishi vakolatli organ ma'lumotnomasi bilan tasdiqlanishi va ikkinchi tarafga 10 kun mobaynida taqdim etilishi lozim.",
    },
    {
      text: "6.4 Fors-major holati 30 kundan ortiq davom etsa, ikkinchi taraf yozma habarnoma yuborish yo'li bilan Shartnomani bir tomonlama bekor qilishga haqli.",
    },
    { heading: "7. Nizolarni hal qilish" },
    {
      text: "7.1 Mazkur Shartnoma yuzasidan vujudga kelayotgan barcha nizolar va kelishmovchiliklar, o'zaro muzokaralar yo'li bilan yechilmagan taqdirda, Andijon shahar fuqarolik ishlar bo'yicha tumanlararo sudida O'zbekiston Respublikasi qonunchiligiga muvofiq ko'rib chiqiladi.",
    },
    { heading: "8. Shartnomaning amal qilish muddati" },
    { text: "8.1 Shartnoma imzolanganidan so'ng kuchga kiradi va uning shartlari bajarilgunga qadar amalda bo'ladi." },
    { text: "8.2 To'lovlar muddati buzilganida imzolangan shartnoma bekor qilingan deb hisoblanadi." },
    { text: "8.3 Shartnoma Buyurtmachi tomonidan har qanday vaqtda bekor qilinishi mumkin, bunda sarflangan summa qaytarib berilmaydi." },
    {
      text: "8.4 Buyurtmachi tomonidan to'lov muddatlari buzilganida yoki Shartnoma bo'yicha majburiyatlari bajarilmasdan Bajaruvchiga o'z majburiyatlarini bajarish uchun to'sqinlik qilinganida, Bajaruvchi Shartnomani bir tomonlama bekor qilishi mumkin.",
    },
    {
      text: "8.6 Bajaruvchining ihtiyoriga bog'liq bo'lmagan va Buyurtmachiga hizmatlar ko'rsatishni davom ettirish imkonini bermaydigan fors-major holatlari vujudga kelganida Shartnomani amal qilinishi to'xtatiladi.",
    },
    { text: "8.7 Mazkur Shartnoma ikki nusxada, o'zbek tilida, bir xil yuridik kuchga ega bo'lgan nusxada tuzilib, bitta nusxadan taraflarga beriladi." },
    {
      text: "8.8 Mazkur Shartnomaga kiritilayotgan o'zgartirishlar va qo'shimchalar uning ajralmas qismi deb hisoblanadi va ular yozma ravishda tuzilib ikkala taraf tomonidan imzolangan bo'lsa, yuridik kuchga ega bo'ladi.",
    },
    { heading: "9. Mahfiylik" },
    {
      text: "9.1 Bajaruvchi Buyurtmachi haqidagi shahsiy va aloqa ma'lumotlarni oshkor qilmasligini kafolatlaydi (Shartnoma bo'yicha vazifalarni bajarish uchun vujudga kelgan holatlar yoki tegishli davlat organlari talablari bundan mustasno).",
    },
    { heading: "10. TARAFLAR REKVIZITLARI" },
    { heading: "BUYURTMACHI" },
    { text: `F.I.Sh: ${data.fullName || "[F.I.Sh.]"}` },
    { text: `Pasport/ID: ${data.passportNumber || "[passport]"}` },
    { text: `Tel: ${data.phone || "[telefon]"}` },
    { text: `Manzil: ${data.address || "[manzil]"}` },
    { signature: true, role: "buyurtmachi" },
    { heading: "KAFIL" },
    { text: `F.I.Sh: ${data.guarantor?.fullName || "[F.I.Sh.]"}` },
    { text: `Buyurtmachiga qarindoshligi: ${data.guarantor?.relationship || "[qarindoshligi]"}` },
    { text: `Pasport/ID: ${data.guarantor?.passportNumber || "[passport]"}` },
    { text: `Tel: ${data.guarantor?.phone || "[telefon]"}` },
    { signature: true, role: "kafil" },
    ...requisitesBlock({
      inn: "305612610",
      xr: "20208000400939842001",
      mfo: "00083",
      okonx: "617264",
      phones: "+99891-609-33-77, +99893-910-33-77",
    }),
    { signature: true, executorOnly: true },
  ];
}

// Returns one entry per legal document that must be generated/signed for
// the selected tariff: Standard bundles the student contract with the
// documents/apostille addendum (signed together, per the client); VIP
// (ONE PRO MAX ULTRA) is a single standalone contract.
export function getContractDocuments(tariffId, data) {
  if (tariffId === "vip") {
    return [{ key: "vip", title: "ONE PRO MAX ULTRA shartnomasi", body: vipContractBody(data) }];
  }
  return [
    { key: "student", title: "Talaba shartnomasi", body: studentContractBody(data) },
    { key: "docs", title: "Hujjatlar/apostil shartnomasi", body: documentsAddendumBody(data) },
  ];
}
