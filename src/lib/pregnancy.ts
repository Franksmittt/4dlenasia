export type WeekInfo = {
  week: number;
  fruit: string;
  lengthCm: number;
  weightG: number;
  note: string;
  /** Plain-English: what ultrasound typically shows this week */
  onScan: string;
};

/**
 * Week-by-week fetal size guide (gestational age from last menstrual period).
 * Biometry and size comparisons aligned to Hadlock-style averages and
 * standard obstetric fruit charts. Lengths are crown-to-rump up to week 19
 * and head-to-heel from week 20.
 */
export const FREE_THROUGH_WEEK = 12;

export const WEEKS: WeekInfo[] = [
  {
    week: 1,
    fruit: "Not yet visible",
    lengthCm: 0,
    weightG: 0,
    note: "Pregnancy dating starts from the first day of your last period. Fertilisation has not happened yet.",
    onScan: "Nothing of the pregnancy is visible yet. Ultrasound may show the lining of the uterus preparing.",
  },
  {
    week: 2,
    fruit: "Speck of dust",
    lengthCm: 0,
    weightG: 0,
    note: "Ovulation and fertilisation usually happen around now. Cells begin to divide.",
    onScan: "Still too early. The conceptus is microscopic and cannot generate an ultrasound echo.",
  },
  {
    week: 3,
    fruit: "Pinhead",
    lengthCm: 0.02,
    weightG: 0,
    note: "The blastocyst forms and begins implanting. hCG starts to rise.",
    onScan: "Usually still invisible. A faint lining reaction is occasionally seen on a high-resolution early scan.",
  },
  {
    week: 4,
    fruit: "Poppy seed",
    lengthCm: 0.1,
    weightG: 0,
    note: "The gestational sac forms. The three early tissue layers begin organising.",
    onScan: "A tiny dark fluid sac (a few millimetres) may appear inside the thickened lining on a vaginal scan.",
  },
  {
    week: 5,
    fruit: "Sesame seed",
    lengthCm: 0.2,
    weightG: 0,
    note: "The neural tube closes. The yolk sac and early embryonic pole appear.",
    onScan: "Yolk sac looks like a bright ring inside the gestational sac. A tiny linear embryonic pole may be beside it.",
  },
  {
    week: 6,
    fruit: "Lentil",
    lengthCm: 0.3,
    weightG: 0,
    note: "The heart tube starts rhythmic contractions. Early limb and eye structures form.",
    onScan: "Cardiac flicker is often detectable. Heart rate averages around 110 bpm. Embryo still looks soft and rounded.",
  },
  {
    week: 7,
    fruit: "Blueberry",
    lengthCm: 0.75,
    weightG: 1,
    note: "Brain vesicles form. Arm and leg buds become clear. Baby is about the size of a blueberry.",
    onScan: "Classic “gummy bear” shape on 3D. Limb buds stick out from the torso. A fluid space in the hindbrain is often visible.",
  },
  {
    week: 8,
    fruit: "Raspberry",
    lengthCm: 1.35,
    weightG: 1,
    note: "Fingers and toes begin to form. A normal temporary midgut herniation into the cord base is expected.",
    onScan: "Clearer outline of head and body. Early startle movements may flicker on real-time 2D or 4D.",
  },
  {
    week: 9,
    fruit: "Green olive",
    lengthCm: 2,
    weightG: 2,
    note: "Cartilage models of bone begin. The embryonic tail disappears. Crown-rump length remains the best dating tool.",
    onScan: "Spine shows as parallel bright lines. Early ossification starts to show denser areas on advanced rendering.",
  },
  {
    week: 10,
    fruit: "Kumquat",
    lengthCm: 2.75,
    weightG: 4,
    note: "The embryonic period ends and the fetal period begins. All major organ systems are in place.",
    onScan: "Limbs, joints, and an early facial profile become clearer. Movement looks more fluid and dance-like.",
  },
  {
    week: 11,
    fruit: "Fig",
    lengthCm: 3.65,
    weightG: 7,
    note: "External genitalia start differentiating. The palate fuses. Nuchal translucency screening can begin.",
    onScan: "NT measurement is taken in a precise mid-sagittal view of the head and neck. Features still look slender.",
  },
  {
    week: 12,
    fruit: "Lime",
    lengthCm: 4.8,
    weightG: 14,
    note: "The midgut returns fully into the abdomen. Kidneys begin making urine that contributes to amniotic fluid.",
    onScan: "Excellent fluid-to-size ratio. Profile, limbs, and movement are easy to see. Face still looks thin without fat.",
  },
  {
    week: 13,
    fruit: "Pea pod",
    lengthCm: 6.45,
    weightG: 23,
    note: "Vocal cords and fingerprints form. The NT screening window closes at 13 weeks and 6 days.",
    onScan: "Detailed limb profiles on 3D. Without subcutaneous fat, rendered faces can look hollow or skeletal.",
  },
  {
    week: 14,
    fruit: "Lemon",
    lengthCm: 8.7,
    weightG: 45,
    note: "Lanugo appears. Baby swallows and makes early breathing movements.",
    onScan: "4D can catch stretches and swallows. Size is still small for a keepsake face portrait.",
  },
  {
    week: 15,
    fruit: "Apple",
    lengthCm: 10.1,
    weightG: 70,
    note: "Bones harden quickly. Skin is still translucent. Meconium begins collecting in the bowel.",
    onScan: "Skeleton contrasts strongly against fluid. Great for structure views; facial soft tissue still sparse.",
  },
  {
    week: 16,
    fruit: "Avocado",
    lengthCm: 11.6,
    weightG: 100,
    note: "Lung airways branch. Coordinated limb movement often leads to first felt flutters (“quickening”).",
    onScan: "Gender can usually be confirmed on 2D. 3D face views still lack plump cheeks and can look artificial.",
  },
  {
    week: 17,
    fruit: "Turnip",
    lengthCm: 13,
    weightG: 140,
    note: "Brown fat for warmth after birth begins. Myelin starts insulating the spinal cord.",
    onScan: "High-frame-rate 4D may catch early grimaces and yawns as facial nerves mature.",
  },
  {
    week: 18,
    fruit: "Bell pepper",
    lengthCm: 14.2,
    weightG: 190,
    note: "Inner ear ossifies. Baby can hear your heartbeat and gut sounds. Anatomy survey window opens.",
    onScan: "2D remains the standard for heart, brain, and organs. 3D helps clarify surface details like the palate.",
  },
  {
    week: 19,
    fruit: "Heirloom tomato",
    lengthCm: 15.3,
    weightG: 240,
    note: "Vernix caseosa, a protective waxy coating, forms on the skin.",
    onScan: "Heart volume tools can capture a beating cycle offline. Keepsake faces are still not the priority this week.",
  },
  {
    week: 20,
    fruit: "Banana",
    lengthCm: 25.6,
    weightG: 300,
    note: "Halfway. Measurement switches to head-to-heel. Brain myelination speeds up.",
    onScan: "Mid-trimester biometry and anomaly checks peak. 4D here is diagnostic adjunct only, not cosmetic.",
  },
  {
    week: 21,
    fruit: "Carrot",
    lengthCm: 26.7,
    weightG: 360,
    note: "Bone marrow takes over blood cell production. The gut absorbs water and sugars from swallowed fluid.",
    onScan: "Active kicks and rolls. Still early for a photorealistic face; fat under the skin is limited.",
  },
  {
    week: 22,
    fruit: "Spaghetti squash",
    lengthCm: 27.8,
    weightG: 430,
    note: "Eyebrows and eyelashes form. Lanugo covers the body. Fine motor skills refine.",
    onScan: "4D may show cord grasping or thumb-sucking. Features remain delicate rather than chubby.",
  },
  {
    week: 23,
    fruit: "Large mango",
    lengthCm: 28.9,
    weightG: 500,
    note: "Type II lung cells begin making surfactant, which helps lungs stay open after birth.",
    onScan: "Blood-flow colour maps of cord and placenta are clearer. Face views still improve with more fat later.",
  },
  {
    week: 24,
    fruit: "Ear of corn",
    lengthCm: 30,
    weightG: 600,
    note: "Clinical viability threshold. Inner ear is mature. Capillaries proliferate.",
    onScan: "Bones cast stronger shadows. Operators adjust virtual light carefully if any 3D view is attempted.",
  },
  {
    week: 25,
    fruit: "Rutabaga",
    lengthCm: 34.6,
    weightG: 660,
    note: "Capillary beds wrap around tiny air passages, preparing for future gas exchange.",
    onScan: "Movement is vigorous. Cosmetic face quality is still warming up as white fat starts to build.",
  },
  {
    week: 26,
    fruit: "Scallion",
    lengthCm: 35.6,
    weightG: 760,
    note: "Eyes begin to open. White fat under the skin thickens and changes how sound reflects off the face.",
    onScan: "Facial fat is building and surfaces look smoother. Book ahead — our cosmetic 4D window is 27–32 weeks.",
  },
  {
    week: 27,
    fruit: "Cauliflower",
    lengthCm: 36.6,
    weightG: 870,
    note: "Brain folds deepen. Sleep–wake cycles settle. Cheeks start to look fuller.",
    onScan: "Ideal cosmetic 4D opens. Soft shadows and fuller features make likeness easier to recognise.",
  },
  {
    week: 28,
    fruit: "Eggplant",
    lengthCm: 37.6,
    weightG: 1150,
    note: "Peak bonding window. REM sleep is established. Baby weighs over a kilogram.",
    onScan: "Best balance of fat and fluid. Faces look fleshy and lifelike; yawns and eyelid flutters are common.",
  },
  {
    week: 29,
    fruit: "Butternut squash",
    lengthCm: 38.6,
    weightG: 1300,
    note: "Blood production is fully in bone marrow. Muscle bulk increases.",
    onScan: "Skull and ribs cast more shadow. Probe angle matters more to keep the face clear of bone shadows.",
  },
  {
    week: 30,
    fruit: "Large cabbage",
    lengthCm: 39.9,
    weightG: 1500,
    note: "Lanugo starts shedding into the fluid. Brain folds become more specialised.",
    onScan: "Still excellent for 4D if fluid is good. Soft-tissue depth relative to bone is easy to appreciate.",
  },
  {
    week: 31,
    fruit: "Coconut",
    lengthCm: 41.1,
    weightG: 1700,
    note: "In boys, testes descend. Fat is about 3.5% of body weight. Space gets tighter.",
    onScan: "Hands often cover the face. Crowding can erase the fluid edge the machine needs for a clean surface.",
  },
  {
    week: 32,
    fruit: "Jicama",
    lengthCm: 42.4,
    weightG: 1900,
    note: "Toenails form. Maternal antibodies cross the placenta. Primary cosmetic 4D window closes.",
    onScan: "Less fluid means the uterus presses on the face. Fusion artefacts (face melting into placenta) become common.",
  },
  {
    week: 33,
    fruit: "Pineapple",
    lengthCm: 43.7,
    weightG: 2100,
    note: "A knee growth centre becomes visible on 2D—a maturity marker. Pupils react to light.",
    onScan: "Focus shifts to wellbeing, fluid, and position. Cosmetic face views are rarely successful.",
  },
  {
    week: 34,
    fruit: "Cantaloupe",
    lengthCm: 45,
    weightG: 2300,
    note: "Surfactant rises sharply. Vernix thickens. Baby is packing on fat for birth.",
    onScan: "3D often looks melted or distorted when there is little fluid buffer between wall and baby.",
  },
  {
    week: 35,
    fruit: "Honeydew melon",
    lengthCm: 46.2,
    weightG: 2500,
    note: "Liver processes waste. Brain mass grows quickly. Room to tumble is almost gone.",
    onScan: "Movement looks like slow stretches against the wall rather than big rolls. Face portraits are hard.",
  },
  {
    week: 36,
    fruit: "Crenshaw melon",
    lengthCm: 47.4,
    weightG: 2750,
    note: "Most babies settle head-down. Lanugo is nearly gone.",
    onScan: "Head often deep in the pelvis. Transabdominal face views are limited; position checks matter more.",
  },
  {
    week: 37,
    fruit: "Swiss chard",
    lengthCm: 48.6,
    weightG: 2950,
    note: "Early term. Baby practises coordinated swallows and breathing reflexes.",
    onScan: "Weight estimates still use Hadlock formulas but error rises near term (± about 8–12%).",
  },
  {
    week: 38,
    fruit: "Leek",
    lengthCm: 49.8,
    weightG: 3150,
    note: "A shoulder growth centre appears. Growth speed naturally slows.",
    onScan: "2D Doppler of cord and brain vessels is the clinical priority. Cosmetic 4D has little value.",
  },
  {
    week: 39,
    fruit: "Mini watermelon",
    lengthCm: 50.7,
    weightG: 3350,
    note: "Full term. Lungs can support independent breathing. Chest looks prominent.",
    onScan: "Low fluid creates harsh acoustic boundaries. Presentation, fluid, and placenta are the useful checks.",
  },
  {
    week: 40,
    fruit: "Small pumpkin",
    lengthCm: 51.2,
    weightG: 3500,
    note: "Due-date week. Roughly 15% body fat supports warmth and energy after birth.",
    onScan: "Final size and position check if needed. 3D/4D aesthetics are not realistic at this stage.",
  },
];

export const MIN_WEEK = WEEKS[0].week;
export const MAX_WEEK = WEEKS[WEEKS.length - 1].week;

export function getWeekInfo(week: number): WeekInfo {
  const clamped = Math.min(Math.max(week, MIN_WEEK), MAX_WEEK);
  return WEEKS.find((w) => w.week === clamped) ?? WEEKS[0];
}

const DAY_MS = 86_400_000;

export type DatingMode = "lmp" | "conception";

/**
 * Gestational age is counted from the first day of the last menstrual period
 * (LMP). If the user knows their conception date instead, LMP is estimated as
 * 14 days earlier, per standard obstetric dating.
 */
export function calcPregnancy(dateISO: string, mode: DatingMode, today = new Date()) {
  const picked = new Date(`${dateISO}T00:00:00`);
  if (Number.isNaN(picked.getTime())) return null;

  const lmpMs = mode === "conception" ? picked.getTime() - 14 * DAY_MS : picked.getTime();
  const now = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
  const days = Math.floor((now - lmpMs) / DAY_MS);
  if (days < 0 || days > 320) return null;

  return {
    weeks: Math.floor(days / 7),
    days: days % 7,
    dueDate: new Date(lmpMs + 280 * DAY_MS),
  };
}

export function scanWindowFor(week: number) {
  if (week < 16)
    return {
      label: "Planning ahead",
      text: "A little early for keepsake scans. Gender reveals start at 16 weeks, so now is the perfect time to book ahead.",
      cta: "Plan your gender reveal",
    };
  if (week <= 17)
    return {
      label: "Gender reveal window",
      text: "Gender can be confirmed accurately right now on 2D. Our Gender Scan (R750) is made for this moment.",
      cta: "Book the Gender Scan",
    };
  if (week <= 22)
    return {
      label: "Anatomy & gender window",
      text: "Ideal time for the Detailed Anatomy Scan (18–22 weeks). Gender can still be confirmed on 2D if you haven’t done it yet.",
      cta: "Book the Anatomy Scan",
    };
  if (week <= 26)
    return {
      label: "Growth & bonding window",
      text: "Baby is active and growing fast. Book ahead for your Complete 4D Scan (R900) in the ideal 27–32 week window.",
      cta: "Book the Complete 4D Scan",
    };
  if (week <= 32)
    return {
      label: "The golden 4D window",
      text: "Cheeks are full, features are defined, and there is still room to move. This is the ideal time for a cosmetic 4D scan.",
      cta: "Book your Complete 4D Scan",
    };
  return {
    label: "Almost time",
    text: "Faces are harder to capture now, but heartbeat and position checks are still a beautiful reason to visit.",
    cta: "Ask us what's possible",
  };
}
