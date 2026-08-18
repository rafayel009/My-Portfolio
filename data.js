/* ============================================================
   SITE CONTENT — edit anything below, the page updates itself.
   ------------------------------------------------------------
   This is the ONLY file you need to touch to add, remove, or
   change content. Nothing here needs HTML or CSS knowledge.

   - To ADD an item to a list (education, projects, skills...),
     copy an existing { ... } block inside that array, paste it
     as a new entry, and edit the text.
   - To REMOVE an item, delete its whole { ... } block.
     (Delete the matching comma too if it was the last one.)
   - To hide an entire section, see the bottom of this file.
   ============================================================ */

const SITE = {

  // ---------- Identity ----------
  name: "Kazi Shaikat Hossain",
  role: "Semiconductor Device Engineer — TCAD & Nanoscale MOSFET Research",
  location: "Dhaka, Bangladesh",
  email: "shaikathossain.edu@gmail.com",
  phone: "+880 1410-674763",
  linkedin: "https://www.linkedin.com/in/kazi-shaikat-hossain-aa47b6237/", // TODO: paste your full LinkedIn URL
  resumeFile: "assets/resume.pdf",      // add your PDF at this path, or delete the button in index.html
  photo: "assets/profile.jpg",

  summary:
    "Recent B.Sc. graduate in Electrical and Electronic Engineering with undergraduate research experience in semiconductor device simulation, TCAD modeling, and high-k dielectric MOSFET optimization. Comfortable across Silvaco TCAD, COMSOL Multiphysics, MATLAB, and Cadence, with a habit of writing up findings clearly — from lab notebook to conference manuscript.",

  // ---------- Quick facts strip (under the hero) ----------
  quickFacts: [
    { label: "GPA", value: "3.87 / 4.00" },
    { label: "Graduated", value: "2026" },
    { label: "Research focus", value: "TCAD device simulation" },
    { label: "Publication", value: "ECCT-2026 (accepted)" },
  ],

  // ---------- Education ----------
  education: [
    {
      degree: "B.Sc. in Electrical & Electronic Engineering",
      institution: "Dhaka International University",
      year: "2026",
      detail: "GPA 3.87 / 4.00",
      note: "Coursework: Semiconductor Devices, Microelectronics, Digital Electronics, Power Electronics, Digital Signal Processing, Control Systems.",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Govt. Sayed Hatem Ali College",
      year: "2020",
      detail: "GPA 5.00 / 5.00 (Golden)",
      note: "",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Palordi Model School & College",
      year: "2018",
      detail: "GPA 5.00 / 5.00 (Golden)",
      note: "",
    },
  ],

  // ---------- Thesis & research ----------
  research: {
    title:
      "Comparative Analysis of 50 nm Si, 4H-SiC and Ge MOSFETs with SiO₂ and HfO₂ Gate Dielectrics in Different Oxide Thickness",
    publication: {
      label: "Conference manuscript",
      title:
        "Comparative Performance Analysis of Si and SiC MOSFETs Using HfO₂ High-k Gate Dielectric and Different Metal Work Functions at Different Oxide Thicknesses",
      venue: "ECCT-2026",
      status: "Accepted",
    },
    bullets: [
      "Simulated 50 nm planar bulk nMOSFETs using Silvaco TCAD Atlas.",
      "Compared Si, 4H-SiC, and Ge channel materials with SiO₂ / HfO₂ gate dielectrics.",
      "Investigated oxide thickness and metal work-function effects on device performance.",
      "Extracted Ion, Ioff, Ion/Ioff, threshold voltage, subthreshold swing, gate leakage, and thermal characteristics.",
      "Prepared the undergraduate thesis and accompanying research manuscript.",
    ],
    // physical models applied — shown as small tags
    models: ["SRH", "Auger", "Fermi–Dirac", "Field mobility", "Band-to-band tunneling"],
  },

  // ---------- Engineering projects ----------
  projects: [
    {
      title: "MOSFET Device Simulation",
      description:
        "Designed and analyzed nanoscale MOSFET structures in Silvaco TCAD, sweeping channel material and gate-dielectric stack to compare device performance.",
      tags: ["Silvaco TCAD", "Device physics", "Simulation"],
    },
    {
      title: "Smart Irrigation System",
      description:
        "Arduino-based automatic irrigation system using soil-moisture sensing to trigger watering without manual input.",
      tags: ["Arduino", "Embedded systems", "Sensors"],
    },
    {
      title: "DC–DC Boost Converter",
      description:
        "Designed and analyzed a voltage step-up converter for power-electronics applications.",
      tags: ["Power electronics", "Circuit design"],
    },
  ],

  // ---------- Experience ----------
  experience: [
    {
      role: "Private Tutor",
      org: "Self-employed",
      period: "~5 years",
      bullets: [
        "Tutored SSC and HSC students in Mathematics and Physics.",
        "Developed personalized lesson plans and assessments.",
        "Managed multiple students and schedules independently.",
      ],
    },
  ],

  // ---------- Skills ----------
  skills: [
    { category: "Simulation", items: ["Silvaco TCAD Atlas", "COMSOL Multiphysics", "Cadence (basic)"] },
    { category: "Programming", items: ["C", "Arduino", "Verilog (basic)"] },
    {
      category: "Engineering",
      items: ["Semiconductor devices", "MOSFET modeling", "Device physics", "Circuit analysis", "Power electronics", "Digital electronics"],
    },
    { category: "Software", items: ["Cisco Packet Tracer", "Overleaf", "Mendeley", "MATLAB", "Microsoft Office"] },
  ],

  // ---------- Languages ----------
  languages: [
    { name: "Bengali", level: "Native" },
    { name: "English", level: "Professional working proficiency" },
  ],

  /* ------------------------------------------------------------
     Section visibility — set any of these to false to hide that
     whole section from the page (e.g. languages: false).
  ------------------------------------------------------------ */
  show: {
    education: true,
    research: true,
    projects: true,
    experience: true,
    skills: true,
    languages: true,
  },
};
