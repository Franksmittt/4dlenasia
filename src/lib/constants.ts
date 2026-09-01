/** Set to false to restore the live marketing site. */
export const PREVIEW_LOCKED = true;

export const DEVELOPER = {
  name: "Frank Smit",
  phone: "+27769724559",
  phoneDisplay: "076 972 4559",
  whatsapp: "27769724559",
} as const;

export const WHATSAPP_DEVELOPER =
  `https://wa.me/${DEVELOPER.whatsapp}?text=${encodeURIComponent(
    "Hi Frank, I'd like to restore the website preview.",
  )}`;

export const SITE = {
  name: "4D Ultrasound Studio",
  tagline: "Meet your baby before they are born",
  url: "https://4dultrasoundstudio.co.za",
  phone: "+27833024862",
  phoneDisplay: "+27 83 302 4862",
  whatsapp: "27833024862",
  email: "4dultrasoundstudio@gmail.com",
  address: {
    street: "38 Suikerbos Street",
    locality: "Lenasia",
    region: "Gauteng",
    postalCode: "1821",
    country: "ZA",
    full: "38 Suikerbos Street, Lenasia, Gauteng, 1821",
  },
  geo: { lat: -26.3155, lng: 27.8288 },
  areas: ["Lenasia", "Soweto", "Mondeor", "Ennerdale", "Kibler Park", "Southgate"],
} as const;

export const WHATSAPP_BOOK =
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Hi Nasreen, I'd like to book a scan at 4D Ultrasound Studio.",
  )}`;

export const WHATSAPP_TRACKER_UNLOCK =
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Hi, I'd like to unlock the week 13–40 size illustrations on the pregnancy tracker.",
  )}`;

export const WHATSAPP_VOUCHER =
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Hi Nasreen, I'd like to enquire about a gift voucher for a scan.",
  )}`;

export const PRACTITIONER = {
  name: "Nasreen Ali",
  title: "Qualified Radiographer",
  credentials: "B.Tech Radiography, University of Johannesburg",
  experience: "Specialised fetal imaging training since 2009",
  detail: "Graduated 2006 · Prenatal imaging focus from 2009",
} as const;

export const PACKAGES = [
  {
    slug: "gender-scan",
    tier: 1,
    name: "Gender Scan",
    subtitle: "2D gender & dating",
    price: 750,
    priceWas: 860,
    duration: "Session",
    weeks: "From 16 weeks",
    popular: false,
    description:
      "Discover your baby's gender from 16 weeks with a highly accurate 2D scan. Includes weight estimation, gestational aging, and printed pictures. Gender does not require 4D imaging.",
    features: [
      "Gender determination from 16 weeks (2D)",
      "Weight estimation",
      "Gestational aging / dating",
      "Foetal well-being check",
      "Printed pictures",
    ],
  },
  {
    slug: "complete-4d-scan",
    tier: 2,
    name: "Complete 4D Scan",
    subtitle: "20-minute 4D experience",
    price: 900,
    priceWas: null,
    duration: "20 min",
    weeks: "Ideal 27–32 weeks",
    popular: true,
    description:
      "A 20-minute 4D ultrasound session with online gallery access, heartbeat recording, weight estimation, gender determination, gestational aging, and 4D images on disc plus print. Ideal for cosmetic bonding between 27 and 32 weeks.",
    features: [
      "20-minute 4D session",
      "Online gallery access",
      "4D images on disc + print",
      "Recording of heartbeat",
      "Weight estimation",
      "Gender determination",
      "Gestational aging",
    ],
  },
  {
    slug: "maternal-antenatal-checkup",
    tier: 3,
    name: "Maternal Antenatal Checkup",
    subtitle: "Monitor maternal health",
    price: 250,
    priceWas: null,
    duration: "Checkup",
    weeks: "During pregnancy",
    popular: false,
    description:
      "Monitor maternal health with diagnostic checks including blood pressure, glucose, and urine tests, plus fetal growth, heartbeat, and movement. A government clinic card is required prior to the checkup. We do not issue clinic cards for delivery at government facilities.",
    features: [
      "Blood pressure, glucose & urine tests",
      "Fetal growth assessment",
      "Heartbeat & movement check",
      "Risk screening & early detection",
      "Nutritional & lifestyle guidance",
      "Government clinic card required",
    ],
  },
  {
    slug: "detailed-anatomy-scan",
    tier: 4,
    name: "Detailed Anatomy Scan",
    subtitle: "A closer look at development",
    price: 1000,
    priceWas: null,
    duration: "30–45 min",
    weeks: "Ideal 18–22 weeks",
    popular: false,
    description:
      "A comprehensive mid-pregnancy ultrasound (often 18–22 weeks) that checks your baby's organs, limbs, spine, brain, and heart, plus placenta, amniotic fluid, and cervix. A full bladder may help improve image quality.",
    features: [
      "Checks for most major physical abnormalities",
      "Monitors fetal growth and well-being",
      "Assesses placenta, fluid levels, and cervix",
      "Helps plan further care if concerns arise",
      "Abdominal ultrasound, usually 30–45 minutes",
      "Precious images to take home",
    ],
  },
  {
    slug: "nuchal-translucency-scan",
    tier: 5,
    name: "Nuchal Translucency (NT) Scan",
    subtitle: "First-trimester screening",
    price: 1000,
    priceWas: null,
    duration: "20–30 min",
    weeks: "11–14 weeks",
    popular: false,
    description:
      "An early screening ultrasound (typically 11–14 weeks) measuring the fluid at the back of baby's neck to help assess risk of certain chromosomal conditions, including Down syndrome. Confirm your exact booking window when you message us.",
    features: [
      "Non-invasive abdominal ultrasound",
      "Early screening for chromosomal conditions",
      "Combined with bloods & maternal age when available",
      "Usually 20–30 minutes",
      "Images to take home and a follow-up report",
      "A full bladder may help image quality",
    ],
  },
  {
    slug: "gynaecological-pelvic-scan",
    tier: 6,
    name: "Gynaecological Pelvic Scan",
    subtitle: "For non-pregnant women",
    price: 0,
    priceWas: null,
    duration: "Session",
    weeks: "By appointment",
    popular: false,
    description:
      "A pelvic ultrasound for non-pregnant women. Message us for timing, preparation, and current pricing.",
    features: [
      "Pelvic ultrasound for non-pregnant women",
      "Performed by a qualified radiographer",
      "Private studio setting",
      "Pricing confirmed on WhatsApp booking",
    ],
  },
] as const;

export const SUBURBS = [
  {
    slug: "soweto",
    name: "Soweto",
    drive: "A short drive from Lenasia",
    blurb:
      "Soweto families visit our Lenasia studio for 2D gender and 4D bonding scans with a qualified radiographer, away from the hospital queues.",
  },
  {
    slug: "mondeor",
    name: "Mondeor",
    drive: "Minutes from Mondeor & Southgate",
    blurb:
      "Looking for prenatal imaging in Johannesburg South? Meet your baby in 4D with Nasreen Ali, without the clinical rush.",
  },
  {
    slug: "ennerdale",
    name: "Ennerdale",
    drive: "Easy access from Ennerdale",
    blurb:
      "2D gender reveals from 16 weeks and 4D keepsake scans for Ennerdale moms who want clarity, calm, and images to take home.",
  },
  {
    slug: "kibler-park",
    name: "Kibler Park",
    drive: "Close to Kibler Park",
    blurb:
      "Book a private ultrasound experience near Kibler Park: gender, anatomy, NT, or Complete 4D, guided by Nasreen’s expert care.",
  },
  {
    slug: "southgate",
    name: "Southgate",
    drive: "Near Southgate Mall",
    blurb:
      "Skip the hospital waiting room. Southgate families visit our Lenasia studio for 4D baby scans and lasting keepsakes.",
  },
] as const;

export const FAQS = [
  {
    q: "Is the 4D ultrasound safe for my baby?",
    a: "Ultrasound does not use ionising radiation. It uses high-frequency sound waves. Major bodies such as ISUOG recommend prudent use by trained professionals (ALARA: as low as reasonably achievable). Our Complete 4D sessions are capped at 20 minutes. Bonding scans complement, and never replace, your doctor or clinic care.",
  },
  {
    q: "What is the difference between 2D, 3D, and 4D?",
    a: "2D is the classic flat black-and-white view used for gender, dating, and most clinical checks. 3D is a still surface view of baby. 4D is 3D in motion: live video of expressions and movement. “5D” is a marketing lighting look, not a medical dimension, and we do not offer 5D scanning.",
  },
  {
    q: "What will the 4D image look like?",
    a: "Real 4D is warm amber or gold with fine acoustic grain, not a crystal-clear photo in clear water. Motion can look slightly stuttery. Hands, umbilical cord, or placenta can briefly hide the face, and bone can cast hard black shadows. We prepare you for that so the real scan feels wonderful, not surprising. Read more on our Understanding Ultrasound page.",
  },
  {
    q: "When is the best time for a 4D scan?",
    a: "For cosmetic 4D bonding, the ideal window is 27–32 weeks. From 20 weeks, 4D may be used as part of a diagnostic scan only, not for cosmetic views, as features are not clearly visible. After 33 weeks, a successful face view is rarely possible. Gender is confirmed on 2D from 16 weeks and does not need 4D.",
  },
  {
    q: "What if my baby is not in a good position?",
    a: "We may ask you to take a short walk or drink something cold to encourage movement. If we still cannot achieve a clear view, we will reschedule a follow-up session at no extra cost.",
  },
  {
    q: "What do I take home after the scan?",
    a: "Gender scans include printed pictures. The Complete 4D Scan includes online gallery access, 4D images on disc plus print, and a heartbeat recording, along with weight estimation, gender determination, and gestational aging. Anatomy and NT scans include images to take home; NT also includes a follow-up report.",
  },
  {
    q: "How should I prepare?",
    a: "For a Detailed Anatomy Scan (18–22 weeks) or NT scan (typically 11–14 weeks), a full bladder may improve image quality. For a Maternal Antenatal Checkup, bring your government clinic card, as we do not issue clinic cards. Confirm any other prep tips when you book on WhatsApp.",
  },
  {
    q: "Can I buy a gift voucher?",
    a: "Message us on WhatsApp to enquire about gifting a scan. We’ll confirm availability, payment, and how the recipient books.",
  },
  {
    q: "Will medical aid cover this?",
    a: "Elective cosmetic 4D is often an out-of-pocket expense. Some diagnostic scans (such as anatomy or NT) may be claimable depending on your scheme. Ask us when you book, and confirm with your medical aid. We will never promise cover we cannot verify.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Thank u for capturing our precious Lil man after a very disappointing appointment with someone else in the field who couldn’t get any pictures only blobs. Nazreen saw us on short notice and managed to get beautiful images.",
    name: "Joezané Beeby",
    meta: "Client review · 4D Ultrasound Studio",
  },
] as const;
