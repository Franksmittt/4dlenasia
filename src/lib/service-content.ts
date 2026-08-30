export type ServiceFaq = { q: string; a: string };

export type ServiceContent = {
  slug: string;
  h1: string;
  intro: string;
  sections: { title: string; body: string }[];
  prepare: string[];
  faqs: ServiceFaq[];
  relatedSlugs: string[];
};

/**
 * Authoritative service-page copy derived from clinical research
 * (ISUOG / FMF / SASOG-aligned) for The 4D Ultrasound Studio.
 */
export const SERVICE_CONTENT: ServiceContent[] = [
  {
    slug: "gender-scan",
    h1: "Gender Scans in Lenasia: Clear Baby Gender Determination from 16 Weeks",
    intro:
      "A focused 2D ultrasound to determine your baby's biological sex from 16 weeks, with dating, weight estimation, and printed pictures. Gender does not require 4D imaging; 2D remains the clear, reliable method.",
    sections: [
      {
        title: "What is a 2D gender scan?",
        body: "High-frequency sound waves create real-time cross-sectional images so we can see the perineal region clearly. In a boutique studio setting, this is primarily a bonding and keepsake moment that helps families prepare, plan reveals, and take home thermal prints, while still following careful imaging technique.",
      },
      {
        title: "Why from 16 weeks?",
        body: "Early on, male and female genitalia develop from the same structure (the genital tubercle). By 16 weeks, hormonal differentiation is usually far enough along for reliable sonographic identification (often described as the “hamburger” or “turtle” signs) under good fetal positioning.",
      },
      {
        title: "What we look at in your session",
        body: "We optimise the viewing angle, confirm fetal lie, and focus on an unobstructed view between the legs. Your package also includes gestational dating, weight estimation, a foetal well-being check, and printed pictures. A comfortably full bladder often helps as an acoustic window earlier in the mid-trimester.",
      },
      {
        title: "Limitations & honest expectations",
        body: "4D is not better for gender. It is a surface render, not the gold standard for sex determination. Crossed legs, breech position, reduced fluid, or higher BMI can obscure the view. We never claim “100% guaranteed” gender accuracy; ultrasound confirms what we can see, not chromosomes.",
      },
    ],
    prepare: [
      "Arrive with a comfortably full bladder for clearer early–mid trimester views",
      "Bring your partner or support person. Family is welcome",
      "Wear clothing that makes your belly easy to access",
      "Allow a short focused session; we prioritise a clear answer when baby cooperates",
    ],
    faqs: [
      {
        q: "How early can you accurately see the gender?",
        a: "We perform gender scans from 16 weeks, when external genitalia are usually differentiated enough for reliable 2D identification under good conditions.",
      },
      {
        q: "Do I need a full bladder?",
        a: "A comfortably full bladder often helps displace bowel and improve the acoustic window. We’ll guide you when you book.",
      },
      {
        q: "What if baby’s legs are crossed?",
        a: "Positioning can hide the view. We use gentle techniques to encourage movement. If we still can’t see clearly, we’ll be honest and advise next steps.",
      },
      {
        q: "Is 4D better for finding out the gender?",
        a: "No. Gender is determined on 2D. 4D is for lifelike surface bonding later in pregnancy and does not improve sex-determination accuracy.",
      },
      {
        q: "Does medical aid cover elective gender scans?",
        a: "Elective gender reveals are usually out-of-pocket cash services and are rarely funded as Prescribed Minimum Benefits. Ask your scheme if unsure.",
      },
      {
        q: "Can a gender scan be wrong?",
        a: "Accuracy is high from 16 weeks with a clear view, but no ultrasound can claim absolute certainty. Positioning and image quality matter.",
      },
    ],
    relatedSlugs: ["detailed-anatomy-scan", "complete-4d-scan"],
  },
  {
    slug: "complete-4d-scan",
    h1: "Complete 4D Bonding Ultrasound in Lenasia",
    intro:
      "A 20-minute 4D session with online gallery access, heartbeat recording, weight estimation, gender determination, gestational aging, and 4D images on disc plus print. Ideal for cosmetic bonding between 27 and 32 weeks.",
    sections: [
      {
        title: "Meet your baby before birth",
        body: "2D shows cross-sections; 4D surface-renders a moving three-dimensional view in real time. At our studio this is for emotional bonding (yawns, stretches, and expressions) and does not replace diagnostic anatomy screening or routine clinic care.",
      },
      {
        title: "The golden window: 27–32 weeks",
        body: "From about 26 weeks, white fat under the skin starts to thicken so surface renders look less skeletal. Our cosmetic booking window is 27–32 weeks, when facial fat and amniotic fluid usually give the clearest bonding images (often peaking around week 28). After 33 weeks, baby is often too large and fluid too low for a successful face view. Earlier 4D (from 20 weeks) may support diagnostic work only, not keepsake portraits.",
      },
      {
        title: "What 4D looks like in the room",
        body: "Expect warm amber tones, fine acoustic grain, and slightly stuttery live motion—not a polished photo in clear water. Yawns and expressions are common; hands, cord, or placenta can briefly hide the face. Hard black shadows behind bone are normal acoustic physics. We set expectations honestly so the real scan feels magical.",
      },
      {
        title: "If baby is shy",
        body: "We may ask you to take a short walk or drink something cold to encourage movement. If we still cannot achieve a clear view, we will reschedule a follow-up session at no extra cost.",
      },
      {
        title: "Safety & what 4D is not",
        body: "We follow ALARA (as low as reasonably achievable) and cap Complete 4D sessions at 20 minutes. A bonding scan does not diagnose genetic syndromes or replace a mid-trimester anatomy assessment.",
      },
    ],
    prepare: [
      "Ideal booking window: 27–32 weeks for cosmetic 4D",
      "Confirm any bladder or snack guidance when you book",
      "Bonding 4D complements, never replaces, your doctor or clinic visits",
    ],
    faqs: [
      {
        q: "What is the difference between 3D and 4D?",
        a: "3D is a still surface-rendered volume. 4D is that volume in motion: a live video of baby’s face and movements.",
      },
      {
        q: "Why can’t I get a great 4D scan at 36 weeks?",
        a: "After 33 weeks, fluid often decreases and baby is larger, so a successful cosmetic face view is rarely possible. Our ideal cosmetic window is 27–32 weeks.",
      },
      {
        q: "Is 4D ultrasound safe?",
        a: "Ultrasound does not use ionising radiation. Used prudently by trained professionals with sensible session length, it is generally considered safe. We cap Complete 4D at 20 minutes.",
      },
      {
        q: "Will medical aid pay for a 4D scan?",
        a: "Elective cosmetic 4D is often an out-of-pocket expense. Confirm with your medical aid; we will not promise cover we cannot verify.",
      },
      {
        q: "What if baby covers their face?",
        a: "We may ask you to walk or drink something cold. If the view is still unclear, we reschedule a follow-up at no extra cost.",
      },
      {
        q: "Can I find out the gender during a 4D scan?",
        a: "Gender can be confirmed during the session, but the accurate method is still 2D visualisation, not the 4D surface render itself.",
      },
    ],
    relatedSlugs: ["gender-scan", "maternal-antenatal-checkup"],
  },
  {
    slug: "maternal-antenatal-checkup",
    h1: "Routine Maternal Antenatal Checkups in Lenasia",
    intro:
      "Monitor maternal health with diagnostic checks including blood pressure, glucose, and urine tests, plus fetal growth, heartbeat, and movement. Affordable primary monitoring at R250. A government clinic card is required, as we do not issue clinic cards.",
    sections: [
      {
        title: "What an antenatal checkup is (and isn’t)",
        body: "This visit monitors mum’s baseline health and basic fetal viability. It is not a structural ultrasound of baby’s organs. Hearing the heartbeat is deeply reassuring, but the clinical purpose is early detection of common maternal concerns such as rising blood pressure or urinary issues.",
      },
      {
        title: "What we typically check",
        body: "Blood pressure, glucose, urine tests, fetal growth assessment, heartbeat and movement check, risk screening, and nutritional or lifestyle guidance, matching what we list on the studio services page.",
      },
      {
        title: "Clinic card required",
        body: "Please bring your government clinic card before the checkup. We do not issue clinic cards for you. Findings can still support shared care with your clinic or obstetrician.",
      },
      {
        title: "Shared care in Johannesburg South",
        body: "Many families combine state hospital delivery plans with private queue-free checkups. If readings are concerning, for example elevated blood pressure or abnormal urine findings, escalate promptly to the appropriate clinician or emergency pathway.",
      },
    ],
    prepare: [
      "Bring your government clinic card (required, as we do not issue cards)",
      "Wear clothing that’s easy for blood pressure and tummy access",
      "List any symptoms (headache, swelling, reduced movements) to mention",
      "This visit does not replace your dedicated obstetric / clinic care",
    ],
    faqs: [
      {
        q: "What is included in the R250 checkup?",
        a: "Routine maternal monitoring such as blood pressure, urine dipstick, growth assessment, and heartbeat/movement check, plus practical guidance.",
      },
      {
        q: "Do I get an ultrasound during this checkup?",
        a: "Not routinely. This is a maternal health checkup, not a full structural scan. Book a dedicated ultrasound service for imaging.",
      },
      {
        q: "Can I use this if I’m delivering at a government hospital?",
        a: "Yes. Many patients use private checkups between state visits for faster access and peace of mind.",
      },
      {
        q: "What happens if my blood pressure is high?",
        a: "We take it seriously and guide you to urgent clinical follow-up. Antenatal checkups are screening, not a substitute for emergency care.",
      },
      {
        q: "Does medical aid cover antenatal visits?",
        a: "Many schemes fund a set number of antenatal visits from maternity benefits. Confirm your plan’s rules and keep your invoices.",
      },
    ],
    relatedSlugs: ["detailed-anatomy-scan", "nuchal-translucency-scan"],
  },
  {
    slug: "detailed-anatomy-scan",
    h1: "Detailed Fetal Anatomy Scan (18–22 Weeks) in Lenasia",
    intro:
      "The mid-trimester anomaly scan is a systematic medical ultrasound to assess your baby’s structural development (brain, spine, heart, organs, limbs) plus placenta, fluid, and cervix. Clinical focus first; precious images when baby cooperates.",
    sections: [
      {
        title: "The most important structural screen of pregnancy",
        body: "This scan follows international mid-trimester practice: a careful head-to-toe review designed to detect most major physical abnormalities and monitor growth and well-being. It usually takes 30–45 minutes of quiet, concentrated scanning.",
      },
      {
        title: "Why 18–22 weeks?",
        body: "By this window, organs are large enough to evaluate in detail, while the skeleton has not yet calcified so heavily that ribs and spine block views of the heart. Waiting much later can make cardiac screening harder.",
      },
      {
        title: "What we examine",
        body: "Brain planes, face and spine, heart screening views, abdominal wall and organs, and growth biometry (head, abdomen, femur). We also assess placenta, amniotic fluid, and cervical length when indicated. You receive a formal written report for your doctor.",
      },
      {
        title: "What a “normal” scan does and does not mean",
        body: "Ultrasound assesses structure, not every genetic or metabolic condition. Soft markers and limited views (BMI, fluid, position) can affect what we see. If something needs specialist review, we guide referral, including fetal medicine pathways when appropriate.",
      },
    ],
    prepare: [
      "Book ideally between 18 and 22 weeks",
      "A moderately full bladder may help cervical assessment. We’ll advise",
      "Bring your partner; the room is family-friendly",
      "Expect a longer appointment than a quick bonding scan",
    ],
    faqs: [
      {
        q: "Why between 18 and 22 weeks?",
        a: "It’s the best balance of fetal size and image clarity for a full structural survey before heavy bone shadowing.",
      },
      {
        q: "How long does it take?",
        a: "Usually 30–45 minutes, depending on baby’s position and how much we need to complete the checklist.",
      },
      {
        q: "Can I find out the gender during this scan?",
        a: "Often yes, if the view allows and if you want to know. Tell us your preference at the start.",
      },
      {
        q: "Does a normal scan mean no genetic conditions?",
        a: "No. It screens for many structural issues. It cannot rule out all chromosomal or genetic conditions.",
      },
      {
        q: "Will I get a medical report?",
        a: "Yes. A formal sonographic report for your referring clinician is part of proper diagnostic practice.",
      },
      {
        q: "Does medical aid cover this scan?",
        a: "The mid-trimester anomaly scan is commonly funded as a maternity / PMB-related antenatal screen in South Africa. Bring your membership details and ask your scheme about co-payments.",
      },
    ],
    relatedSlugs: ["nuchal-translucency-scan", "maternal-antenatal-checkup"],
  },
  {
    slug: "nuchal-translucency-scan",
    h1: "Nuchal Translucency (NT) Scan: 11–14 Week Screening in Lenasia",
    intro:
      "A specialised early ultrasound measuring fluid at the back of baby’s neck. Combined with maternal age and first-trimester bloods when available, it helps estimate the chance of certain chromosomal conditions, including Down syndrome.",
    sections: [
      {
        title: "What the NT scan is",
        body: "We measure the nuchal translucency, a temporary fluid space behind the fetal neck, on a precise mid-sagittal view. This is a screening test that produces a risk estimate (for example 1 in 150), not a yes/no diagnosis.",
      },
      {
        title: "The critical window: 11 weeks to 13 weeks + 6 days",
        body: "International practice ties the scan to crown–rump length roughly 45–84 mm. After about 14 weeks the fluid space often drains, so the measurement loses screening value. If you’re unsure of dates, book early so we can confirm timing.",
      },
      {
        title: "What else we look for",
        body: "Besides NT thickness, we assess early profile markers such as the nasal bone when visible, and survey for major early structural concerns. Some pathways also include blood tests (PAPP-A and free β-hCG) to improve detection rates.",
      },
      {
        title: "Understanding results calmly",
        body: "A thicker NT raises probability. It does not mean baby “has” a condition. Combined screening can detect a large majority of Trisomy 21 pregnancies while keeping false positives lower than age alone. High-risk results lead to counselling and optional further tests (NIPT or invasive diagnostics), not automatic conclusions.",
      },
    ],
    prepare: [
      "Book strictly in the 11–14 week window (ideally with known dates)",
      "A partially full bladder may help; transvaginal imaging is sometimes needed",
      "Bring any blood-test forms or referral notes",
      "Plan 20–30 minutes; precision matters more than speed",
    ],
    faqs: [
      {
        q: "What exactly does the NT scan measure?",
        a: "The depth of fluid at the back of baby’s neck on a standardised ultrasound plane, used in a risk calculation.",
      },
      {
        q: "Does a thick NT mean my baby has Down syndrome?",
        a: "No. It increases the calculated chance and guides next steps. Only diagnostic genetic tests can confirm chromosomal status.",
      },
      {
        q: "Why can’t I have an NT scan at 15 weeks?",
        a: "The nuchal fluid space typically resolves after the first-trimester window, so the measurement is no longer valid for this screen.",
      },
      {
        q: "Is a blood test required?",
        a: "Bloods improve accuracy when combined with NT, but pathways vary. Ask us what your clinician recommends.",
      },
      {
        q: "Does medical aid cover the 12-week scan?",
        a: "Many private schemes fund first-trimester screening from maternity benefits. Confirm tariff and ICD coding with your scheme.",
      },
      {
        q: "Is the NT scan dangerous?",
        a: "It is a standard ultrasound screen. Doppler modes, if used, are applied briefly under ALARA principles.",
      },
    ],
    relatedSlugs: ["detailed-anatomy-scan", "gender-scan"],
  },
  {
    slug: "gynaecological-pelvic-scan",
    h1: "Gynaecological Pelvic Ultrasound in Lenasia",
    intro:
      "Diagnostic ultrasound of the uterus, endometrium, ovaries, and surrounding pelvis for non-pregnant women, investigating pain, bleeding, suspected fibroids, PCOS, and related concerns in a private studio setting.",
    sections: [
      {
        title: "What a pelvic ultrasound assesses",
        body: "We visualise reproductive anatomy to help your clinician understand symptoms such as abnormal bleeding, pelvic pain, irregular cycles, or suspected masses. It is a first-line imaging tool, not a cervical cancer screen (that remains Pap / HPV testing).",
      },
      {
        title: "Transabdominal vs transvaginal",
        body: "A full bladder helps the transabdominal view. Higher-resolution transvaginal imaging is often needed after emptying the bladder, with clear consent and dignity-first practice. We’ll explain each step before we begin.",
      },
      {
        title: "Timing in your cycle",
        body: "Scans can be done most days, but some questions (endometrial thickness, follicle counts) are clearer early after a period. Tell us why you were referred so we can time the appointment well.",
      },
      {
        title: "Reports, privacy & next steps",
        body: "Findings are documented for your referring practitioner. Sensitive reproductive data is handled carefully. Pricing is confirmed when you enquire on WhatsApp.",
      },
    ],
    prepare: [
      "Ask whether you need a full bladder for the first part of the scan",
      "Bring your referral letter and prior results if available",
      "You may be offered a chaperone for transvaginal scanning",
      "Message us for current pricing and appointment length",
    ],
    faqs: [
      {
        q: "What’s the difference between TA and TV scanning?",
        a: "Transabdominal uses a probe on the tummy (full bladder). Transvaginal uses a higher-frequency probe closer to the organs for sharper detail, after consent.",
      },
      {
        q: "Does a transvaginal ultrasound hurt?",
        a: "It can feel uncomfortable, but shouldn’t be sharply painful. Tell us immediately if you need to pause.",
      },
      {
        q: "Can I have a pelvic scan on my period?",
        a: "Often yes. For some indications we may suggest early-cycle timing. We’ll advise when you book.",
      },
      {
        q: "Do I need a doctor’s referral?",
        a: "A referral helps us answer the right clinical question and route the report correctly. Ask us what’s required for your case.",
      },
      {
        q: "Can ultrasound detect cervical cancer?",
        a: "No. Early cervical disease needs cytology/HPV pathways. Ultrasound assesses uterus, ovaries, and pelvic structures.",
      },
      {
        q: "Can ultrasound detect endometriosis?",
        a: "It can suggest certain features or endometriomas, but not all endometriosis is visible on ultrasound. Your clinician interprets imaging with your symptoms.",
      },
    ],
    relatedSlugs: ["maternal-antenatal-checkup", "gender-scan"],
  },
];

export function getServiceContent(slug: string) {
  return SERVICE_CONTENT.find((s) => s.slug === slug);
}
