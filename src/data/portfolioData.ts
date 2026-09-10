export interface ProjectSummary {
  id: string;
  number: string;
  title: string;
  projectName: string;
  subtitle: string;
  client: string;
  categories: string[];
  coverSlide: string;
  accentColor: string;
  bgAccent: string;
  overviewNarrative: string;
}

export const SAHIL_PROFILE = {
  name: "Sahil Husain",
  location: "New Delhi",
  portfolioTitle: "Design Portfolio",
  subTitle: "Multidisciplinary Design & Product Experience",
  image: "/pdf-pages/page-02.webp",
  education: [
    { degree: "M.DES", institution: "NID INDIA" },
    { degree: "B.DES", institution: "NIFT INDIA" }
  ],
  bioParagraphs: [
    "I've had the opportunity to work across multidisciplinary projects that sit at the intersection of technology, people and everyday experiences. My work has allowed me to explore diverse problem spaces.",
    "Working across different domains has helped me understand that great experiences are created when technology, functionality and human behaviour come together. As I continue evolving as a designer, I aim to explore deeper product thinking & creating experiences that are not only usable but thoughtful adaptive and meaningful to the people who interact with them."
  ],
  pillars: [
    { title: "Technology", desc: "Understanding system capabilities, intelligent layers, and seamless physical-digital integration." },
    { title: "People", desc: "Deep multi-regional immersions, contextual user psychology, and lived domestic reality." },
    { title: "Everyday Experiences", desc: "Crafting intuitive, low-effort human rituals that transform complex tasks into natural intent." }
  ]
};

export const PROJECTS_OVERVIEW: ProjectSummary[] = [
  {
    id: "makaan",
    number: "01",
    title: "Future of Connected Living",
    projectName: "Project Makaan",
    subtitle: "Reimagining the future of connected homes through conversational AI",
    client: "Samsung",
    categories: ["Experience Design", "Product Experience Innovation", "AI Interaction Design"],
    coverSlide: "/pdf-pages/page-03.webp",
    accentColor: "#8C253B",
    bgAccent: "#FAF4F3",
    overviewNarrative: "Reimagining the future of connected homes through conversational AI — What if your home understood what you need before you navigate through interfaces?"
  },
  {
    id: "sneaker-care",
    number: "02",
    title: "Specialized Care Experience",
    projectName: "Sneaker Care",
    subtitle: "Intelligent and specialised care for diverse sneakers",
    client: "Samsung",
    categories: ["Service Design", "Product Feature Innovation", "Connected Product Experience"],
    coverSlide: "/pdf-pages/page-17.webp",
    accentColor: "#385A2E",
    bgAccent: "#F3F7F2",
    overviewNarrative: "For Indian Gen-Z sneakers are emerging as a platform for self expression and fashion driving sneaker sales massively among the cohort."
  },
  {
    id: "galaxy-cmf",
    number: "03",
    title: "Trends Forecast for Galaxy",
    projectName: "2026 CMF Design",
    subtitle: "Emerging color narratives rooted in consumer sentiment for Galaxy A, M & F series",
    client: "Samsung",
    categories: ["CMF Design", "Trend Forecasting", "Consumer Sentiment", "Material Innovation"],
    coverSlide: "/pdf-pages/page-24.webp",
    accentColor: "#5A2A78",
    bgAccent: "#F6F1FA",
    overviewNarrative: "To deep dive into lifestyle immersions & cross industry trends for identifying emerging color narratives rooted in consumer sentiment."
  }
];

export const MAKAAN_DATA = {
  id: "makaan",
  number: "01",
  title: "Future of Connected Living",
  projectName: "Project Makaan",
  hashtag: "#HarGharKuchKehtaHai",
  client: "Samsung",
  categories: ["Experience Design", "Product Experience Innovation", "AI Interaction Design"],
  coreStatement: "Reimagining the future of connected homes through conversational AI",
  coreQuestion: "What if your home understood what you need before you navigate through interfaces?",
  
  context: {
    title: "HOME AS AN INTELLIGENT COMPANION",
    evolution: [
      { step: "01", name: "SHELTER / SAFETY", desc: "Basic protection and security infrastructure" },
      { step: "02", name: "LIFESTYLE COMPANION", desc: "A connected ecosystem of individual smart appliances" },
      { step: "03", name: "INTELLIGENT COMPANION", desc: "Responsive environments that understand context, anticipate needs, and support everyday lives", active: true }
    ],
    narrative: "Future homes act as an intelligent companion with connected ecosystems that are moving way beyond from being a collection of appliances to becoming responsive environments that understand context anticipate needs and support everyday lives."
  },

  researchMethodology: {
    goal: "Understand how people interact with their living spaces, routines, appliances and technology",
    cohorts: [
      { name: "Layered homemakers", label: "Multigenerational living", desc: "Managing multiple generations with varying tech familiarity and household duties." },
      { name: "New home curators", label: "Newly wed to nuclear living", desc: "Setting up their own domestic ecosystem with fresh aspirational habits." },
      { name: "Urban independents", label: "Young cohorts like Gen Z / Gen Y", desc: "Fast-paced lifestyles, valuing time, convenience, and low mental overhead." }
    ],
    geographicZones: [
      { city: "Delhi", zone: "North India" },
      { city: "Guwahati", zone: "East India" },
      { city: "Hyderabad", zone: "South India" },
      { city: "Indore", zone: "Central India" },
      { city: "Mumbai", zone: "West India" }
    ],
    housingTypes: [
      { type: "Independent House", ownership: "Single owner" },
      { type: "Builder floor", ownership: "Multiple owner" },
      { type: "Apartment", ownership: "Multiple owner" }
    ],
    source: "Samsung ICXT sales data for DA business",
    toolsUsed: ["Home Immersions", "User interviews", "Photo elicitation", "Sketching solution proposals"]
  },

  researchGuide: {
    discussionParameters: [
      "How do people use appliances today?",
      "Where does technology create friction?",
      "What tasks feels repetitive or Labour Intensive?",
      "What does a comfortable home mean for different people?"
    ],
    assumptions: [
      "Users need more features and customization?",
      "Users prefer voice over apps for everyday control?",
      "Automation can save time and mental and manual effort?",
      "Users Concerned about privacy and data usage?"
    ]
  },

  affinityMapping: {
    themes: [
      { label: "TOO MANY CONTROLS", level: "Core Pain" },
      { label: "HIGH MENTAL EFFORT", level: "Cognitive Load" },
      { label: "NOT INTUITIVE", level: "Usability Barrier" },
      { label: "REPETITIVE", level: "Frictional Tasks" },
      { label: "LOW DISCOVERABILITY", level: "Feature Blindness" }
    ],
    verdict: "MORE FEATURES, MORE COMPLEXITY, MORE FRICTION",
    opportunity: "Create an experience that understands user intent and simplifies everyday interactions",
    verbatims: [
      {
        quote: "The kind of home ecosystems we are experiencing today are not seamless every device has now a different app we have to toggle between so many Visual app loads which creates a lot of confusion for me.",
        tag: "Ecosystem Fragmentation"
      },
      {
        quote: "I have to remember where each setting is and as someone who is not sitting on this app as for the whole day it feels very alien to use it when in need, I actually need a feature to act on the service I want from it in urgency and rushed hours.",
        tag: "Interface Alienation"
      },
      {
        quote: "As a working woman I have to manage between my workplace and my home and I just want the task to be done not explore features when I am busy between my daily chores.",
        tag: "Mental Bandwidth"
      },
      {
        quote: "I am aware of a lot of smart features that these apps are giving us but what I have noticed is they are not very intuitive- as my mom often finds it difficult to switch between these smart features or to actually find them.",
        tag: "Intergenerational Usability"
      }
    ]
  },

  userJourney: {
    scenario: "User comes home tired and wants to feel comfortable",
    subtitle: "A simple need becomes a complex task",
    insight: "Users are spending energy managing the home instead of experiencing it",
    steps: [
      { num: 1, title: "Reach Home", desc: "Enters tired after workday" },
      { num: 2, title: "Open Phone", desc: "Unlocks smartphone" },
      { num: 3, title: "Find Correct App", desc: "Locates SmartThings amidst app clutter" },
      { num: 4, title: "Select Device", desc: "Taps through appliance menu" },
      { num: 5, title: "Navigate Settings", desc: "Digs into modes and menus" },
      { num: 6, title: "Adjust Temperature", desc: "Selects 24°C and fan speed" },
      { num: 7, title: "Change Lighting", desc: "Switches to warm evening tone" },
      { num: 8, title: "Repeat For Other Devices", desc: "Opens curtains, audio, air purifier" },
      { num: 9, title: "Finally Relax", desc: "High mental effort spent just to sit down" }
    ]
  },

  coreInsight: {
    headline: "Ecosystems of homes are getting smarter but interfaces are getting more complicated",
    narrative: "We spoke to people across different regions of India and we understood that users are overloaded with devices, apps and settings. Users have to put a lot of manual effort in controlling how to utilise technology and appliance relationship for easier life. Users want more automated control as they don't think in apps but they do think in basic human needs.",
    vocQuote: "[VOC DELHI USER] I want to relax, I want to save energy, I want to make my home ready when I arrive not something like, open ac settings then I choose mode and then adjust temperature",
    designOpportunity: "What if the home understood intentions?",
    designShift: "A shift from controlling appliances to experiencing it"
  },

  solutionPillars: {
    name: "MAKAAN",
    definition: "Makan is a conversational intelligent layer that connects people with their homes",
    pillars: [
      { title: "UNDERSTANDS INTENT", desc: "Knows what user needs", icon: "intent" },
      { title: "UNDERSTANDS CONTEXT", desc: "Reads the situation", icon: "context" },
      { title: "LEARNS PREFERENCES", desc: "Adapts to your life", icon: "learn" },
      { title: "TRANSLATES TO ACTIONS", desc: "Makes your home responsive", icon: "action" }
    ]
  },

  experienceFlow: {
    headline: "From human intent to a smarter, more comfortable home",
    steps: [
      {
        step: 1,
        title: "USER EXPRESSES INTENT",
        desc: "User talks or types naturally about what they need.",
        example: "“I want a relaxing evening”"
      },
      {
        step: 2,
        title: "MAKAAN UNDERSTANDS",
        desc: "Makaan analyses context, mood, preferences and environment."
      },
      {
        step: 3,
        title: "MAKAAN SUGGESTS ACTIONS",
        desc: "Makaan recommends the best actions across devices for the desired outcome (Lighting, Temperature, Music, Curtains)."
      },
      {
        step: 4,
        title: "USER REVIEWS AND CONFIRMS",
        desc: "You will review the suggested actions and confirm or edit settings."
      },
      {
        step: 5,
        title: "HOME RESPONDS",
        desc: "Makaan executes actions and the home adapts to create the experience."
      },
      {
        step: 6,
        title: "LEARNS & IMPROVES",
        desc: "Makaan learns from feedback and usage to improve future suggestions."
      }
    ],
    continuousLoop: "Makan keeps learning your habits, preferences and routines to make your home smarter every day.",
    outcome: "OUTCOME: Less effort, More comfort, Complete control | From controlling devices to expressing intentions"
  },

  wireframes: {
    title: "Makan understands your intent, context & preferences and turns your home into an intelligent companion",
    screens: [
      { num: 1, title: "Home Dashboard", desc: "Overview of home at a glance with suggested routines" },
      { num: 2, title: "Conversational Screen", desc: "Talk to Makaan naturally and express intent" },
      { num: 3, title: "AI Understanding", desc: "Makan understands intent and suggests experience" },
      { num: 4, title: "Execution and Control", desc: "Review and control what Makaan will do" },
      { num: 5, title: "Routines and Memories", desc: "Learns and personalises what matters to user" }
    ],
    principles: [
      { title: "Makan understands you", desc: "Not just your individual devices" },
      { title: "Natural conversations", desc: "Speak like you normally do" },
      { title: "Context aware", desc: "Understands time, mood & habits" },
      { title: "Personalised", desc: "Learns your preferences & routines" },
      { title: "Private and secure", desc: "Your data stays completely safe" }
    ]
  },

  finalStatement: "Makaan doesn't just control your home, it understands you.",
  slides: [
    { page: 4, title: "Section Title: Future of Connected Living", src: "/pdf-pages/page-04.webp" },
    { page: 5, title: "Project Makaan Overview", src: "/pdf-pages/page-05.webp" },
    { page: 6, title: "Context: Home as an Intelligent Companion", src: "/pdf-pages/page-06.webp" },
    { page: 7, title: "Research Methodology & India Map", src: "/pdf-pages/page-07.webp" },
    { page: 8, title: "Research Guide & Photo Elicitation", src: "/pdf-pages/page-08.webp" },
    { page: 9, title: "Affinity Mapping & User Verbatims", src: "/pdf-pages/page-09.webp" },
    { page: 10, title: "User Journey & Friction Timeline", src: "/pdf-pages/page-10.webp" },
    { page: 11, title: "Core Insight: Interfaces Getting More Complicated", src: "/pdf-pages/page-11.webp" },
    { page: 12, title: "Design Opportunity: Understanding Intentions", src: "/pdf-pages/page-12.webp" },
    { page: 13, title: "Introducing Makaan: The 4 Pillars", src: "/pdf-pages/page-13.webp" },
    { page: 14, title: "Experience Flow: 6 Step Intent Cycle", src: "/pdf-pages/page-14.webp" },
    { page: 15, title: "Low Fidelity Wireframes", src: "/pdf-pages/page-15.webp" },
    { page: 16, title: "High Fidelity UI Mockups within SmartThings", src: "/pdf-pages/page-16.webp" }
  ]
};

export const SNEAKER_CARE_DATA = {
  id: "sneaker-care",
  number: "02",
  title: "Specialized Care Experience",
  projectName: "Sneaker Care",
  client: "Samsung",
  categories: ["Service Design", "Product Feature Innovation", "Connected Product Experience"],
  headline: "Rising Sneaker-Head culture in India",
  narrative: "For Indian Gen-Z sneakers are emerging as a platform for self expression and fashion driving sneaker sales massively among the cohort.",
  
  market: {
    title: "INDIA SNEAKER MARKET",
    val2026: "$ 3.63 Bn",
    val2030: "$ 4.5 Bn",
    cagr: "5.87 %",
    drivers: [
      { title: "Health and fitness", desc: "Athletic lifestyle transition" },
      { title: "Rising disposable income", desc: "Higher young demographic spending" },
      { title: "Flaunt driven value", desc: "Social currency and drop hype" },
      { title: "Fashion trends", desc: "Streetwear integration across occasions" }
    ],
    leadingBrands: ["Nike", "Adidas", "Puma", "New Balance"]
  },

  culture: {
    consumerLifestyle: {
      demographic: "Gen Z (13 to 28 years)",
      traits: ["Fashion Forward", "Aspiration driven", "Status conscious"],
      evolution: "STATUS | IDENTITY | CULTURE",
      statement: "For Gen Z sneakers are symbol of: STATUS | IDENTITY | CULTURE",
      traceableAssets: "Gen Z use platforms like Find Your Kicks and Crepdog Crew to track resale prices and reach buyers",
      onlineCommunity: "An increasing digital community of sneaker enthusiasts bonding over drops and collections"
    },
    startups: [
      { name: "Gully Labs", focus: "INDIAN CRAFTS & CULTURE", desc: "Artisanal detailing infused with modern sneaker silhouette." },
      { name: "Comet", focus: "Global + Domestic aesthetics", desc: "Fresh colourways designed for urban Indian youth expression." },
      { name: "Thaely", focus: "Sustainability and zero waste", desc: "Sneakers crafted from 100% recycled plastic bags and bottles." }
    ]
  },

  problemSpace: {
    headline: "Sneaker washing remains a challenge",
    subhead: "Washing sneakers is a challenge, in both handwash and machine Wash. Specialised products and service emerging to pamper premium, beloved sneakers.",
    handWash: {
      title: "HAND WASH",
      points: [
        "High time and effort",
        "High risk of tear and scratches",
        "Long wash and drying time"
      ]
    },
    machineWash: {
      title: "MACHINE WASH",
      points: [
        "No specialised wash cycles",
        "Different materials need special treatment",
        "The risk of deformation and discoloration",
        "Hygiene concern in using washer for shoes"
      ]
    },
    specialisedEmergence: {
      services: {
        title: "SNEAKER WASH SERVICES",
        points: [
          "Provides pickup and drop laundry service exclusively for shoes and sneakers [$3-7]",
          "Hand wash each pair to prevent wear and tear on materials"
        ]
      },
      accessories: {
        title: "SPECIALISED ACCESSORY",
        points: [
          "Specialised bag/accessory makes washing footwear effortless while protecting shoe and the washer"
        ]
      }
    }
  },

  proposal: {
    title: "New cycle proposal:",
    cycleName: "Specialised sneaker wash",
    coreInsight: "Premium sneakers are valued but “care is complicated”",
    bridgeNarrative: "The idea is to bridge the gap between growing sneaker culture and the lack of visualised care solutions through intelligent material aware washing experiences.",
    features: [
      {
        num: "01",
        title: "Downloadable cycle",
        desc: "Add specialised sneaker care cycle to your clothing care service"
      },
      {
        num: "02",
        title: "Material guide",
        desc: "Understand your sneaker material for perfect care"
      },
      {
        num: "03",
        title: "Personalise and save",
        desc: "Create and save custom wash cycles tailored to your sneaker rotation"
      },
      {
        num: "04",
        title: "Care complete",
        desc: "Get smart feedback and keep your sneakers perfect after every wash"
      },
      {
        num: "05",
        title: "Shared with friends",
        desc: "Share your custom cycles and care wisdom with the community"
      }
    ]
  },

  materials: [
    { name: "Mesh / Knit", temp: "30°C", motion: "Gentle", spin: "Low", soak: "Off", drying: "Air Dry", care: "Lightweight & breathable. Use gentle cycle, low heat." },
    { name: "Canvas", temp: "30°C", motion: "Standard", spin: "Medium", soak: "15 min", drying: "Air Dry", care: "Durable & versatile. Use standard sneaker care." },
    { name: "Leather", temp: "Cold", motion: "Delicate", spin: "Low", soak: "Off", drying: "Air Dry", care: "Premium & classic. Use low heat, extra rinse." },
    { name: "Suede / Nubuck", temp: "Cold", motion: "Ultragentle", spin: "Off", soak: "Off", drying: "Shade Dry", care: "Delicate & soft. Avoid machine wash; use spot wash guide." },
    { name: "Synthetic / Mixed", temp: "30°C", motion: "Gentle", spin: "Low", soak: "10 min", drying: "Air Dry", care: "Performance & engineered. Use balanced care." }
  ],

  wireframes: {
    title: "Intelligent and specialised care for diverse sneakers",
    stages: [
      { num: 1, title: "Home Dashboard", desc: "Add specialised sneaker care cycle to your clothing care service" },
      { num: 2, title: "Material Guide", desc: "Identify your sneaker material for the right care" },
      { num: 3, title: "Personalize & Save", desc: "Personalise settings and save your own wash cycles" },
      { num: 4, title: "Get Ready", desc: "Share your custom cycles and care wisdoms with the community" },
      { num: 5, title: "Care Complete", desc: "Get a summary and smart feedback after every wash & share custom with friends" }
    ]
  },

  slides: [
    { page: 17, title: "Section Title: Specialized Care Experience", src: "/pdf-pages/page-17.webp" },
    { page: 18, title: "Sneaker Care Context & Culture", src: "/pdf-pages/page-18.webp" },
    { page: 19, title: "India Sneaker Market ($4.5B) & Emerging Startups", src: "/pdf-pages/page-19.webp" },
    { page: 20, title: "The Problem: Sneaker Washing Remains a Challenge", src: "/pdf-pages/page-20.webp" },
    { page: 21, title: "Proposal: Specialised Sneaker Wash Cycle", src: "/pdf-pages/page-21.webp" },
    { page: 22, title: "Low Fidelity Wireframes: 5 Stage Care Flow", src: "/pdf-pages/page-22.webp" },
    { page: 23, title: "High Fidelity UI Mockups: Simplifying Care for What Users Value", src: "/pdf-pages/page-23.webp" }
  ]
};

export const GALAXY_CMF_DATA = {
  id: "galaxy-cmf",
  number: "03",
  title: "Trends Forecast for Galaxy",
  projectName: "2026 CMF Design",
  subtitle: "Emerging color narratives rooted in consumer sentiment for Galaxy A, M & F series",
  client: "Samsung",
  categories: ["CMF Design", "Trend Forecasting", "Consumer Sentiment", "Material Innovation"],
  scope: "To deep dive into lifestyle immersions & cross industry trends for identifying emerging color narratives rooted in consumer sentiment for Galaxy A,M & F series",

  marketScenario: {
    title: "Expansion of Mid & High price segments — Growing SKUs globally",
    tagline: "Growing premium offerings in mid-premium & premium is largely driven by CMF strategies",
    priceTiers: [
      { tier: "ENTRY", price: "< $ 190", desc: "Accessible foundational devices" },
      { tier: "MID", price: "< $ 190 - $ 300", desc: "Accelerated SKU growth & feature trickle-down" },
      { tier: "HIGH", price: "$ 300 - $ 500", desc: "Key driver of premium visual cues & refined finishes" },
      { tier: "FLAGSHIP", price: "$ 500 +", desc: "Leading brand tech & experimental materials" }
    ],
    cmfComparison: {
      global: {
        title: "Global CMF",
        points: ["Subtle overall patterns in soft hues", "Nature inspired marketing narratives", "Subtle yet growing bolder"]
      },
      swa: {
        title: "SWA CMF (South West Asia)",
        points: ["Bold holistic CMF experience", "New motifs in vivid hues", "Marketing narratives with strong regional appeal", "Increase in pattern play"]
      }
    }
  },

  consumerSegments: {
    aSeries: {
      name: "A SERIES",
      persona: "Quite Statement Seeker",
      desc: "The users of the A Series Smartphones expect powerful and an all-rounder device that offers a range of features to cater to their needs.",
      references: ["District Vision", "Skims", "Bose", "Miu Miu"]
    },
    mfSeries: {
      name: "M & F SERIES",
      persona: "Trend Setter",
      desc: "The users of the M & F Series Smartphones expect unprecedented style and experience while also wanting the best of everything.",
      references: ["Amit Agarwal", "Chamar Studio", "Daily Objects", "Jay Walking"]
    }
  },

  consumerSentiment: {
    headline: "In pursuit of expressive & soothing realities.",
    paragraphs: [
      "In a world shaped by change and possibility, consumers in 2026 seek gentle stimulation — visuals no longer lie dormant, but pulse, breathe and evoke emotion.",
      "This stems from a deeper desire for surrounding oneself in aesthetics that offer uplifting comfort, emotive experiences and leave room for explorative, self expression."
    ]
  },

  globalDrivers: [
    {
      driver: "/ New hues of care",
      desc: "Colour as a language of emotional wellbeing. Soothing nurturing tones that communicate calm and quite optimism.",
      references: ["FENTY", "UGG", "AESOP"]
    },
    {
      driver: "/ Softened maximalism",
      desc: "Expressive forms in soft colours — gentle yet bold.",
      references: ["UNITED NUDE", "STUDIO VEDET", "HAY X ASICS"]
    },
    {
      driver: "/ Sensorial Supernormal",
      desc: "Sensory materials and colours that evoke warmth and bring gentle vibrance to everyday objects.",
      references: ["OUR PLACE", "GOOGLE NEST WIFI Pro", "OWALA"]
    },
    {
      driver: "/ Expression follows function",
      desc: "Functional products take on a personality revamp through play of colours.",
      references: ["RARE BEAUTY", "NATASHA DENONA"]
    }
  ],

  galaxyASeries: {
    concept: "Gently Pleasant",
    subhead: "Soft brights that evokes calm confidence and effortless charm",
    manifesto: "Through the harmony of soft visuals and gentle but potent hues, aesthetics becomes sentient shaping experiences that are quietly powerful and deeply pleasant.",
    deviceConcepts: [
      { model: "A 57", title: "Gentle Glaze", desc: "A serene fusion of soft solidity and elegant gloss that exude understated lux and an emotive experience." },
      { model: "A 37", title: "Pleasant Gleam", desc: "A luminous interplay of hues that capture imagination, reflecting a radiant appeal." },
      { model: "A 27", title: "Bright Spark", desc: "A soft yet expressive blend of playful energy and charming sophistication." }
    ],
    palettes: [
      {
        category: "CORE DARK",
        name: "Classic Darks / Classic Navy",
        desc: "Deep, classic navy are a symbol of status and luxury, as they exude refined quality and elevated appeal.",
        references: ["DISTRICT VISION", "SKIMS", "BOSE", "MIU MIU"],
        swatches: [
          { model: "A 57", pantone: "PANTONE 19-4017 TPG", name: "Spellbound", hex: "#232839", finish: "Glass Gloss & Metal" },
          { model: "A 37", pantone: "PANTONE 19-4103 TPG", name: "Silhouette", hex: "#242838", finish: "Glass Gloss & Metal" },
          { model: "A 27", pantone: "PANTONE 19-3922 TPG", name: "Sky Captain", hex: "#262835", finish: "Glass Gloss & Metal" }
        ]
      },
      {
        category: "NEUTRAL LIGHT",
        name: "Silverine Greys",
        desc: "A refined palette of cool, balanced neutrals that are quietly expressive and evoke a sensory response.",
        references: ["RAKUTEN", "UNITED NUDE", "RHODE SKIN", "TALLER MARMO"],
        swatches: [
          { model: "A 57", pantone: "PANTONE 14-4205 TPG / 11-3900 TPG", name: "Cathedral Spire / Wispy Clouds", hex: "#9EA0A5", finish: "Glass Gloss & Metal" },
          { model: "A 37", pantone: "PANTONE 13-4108 TPG", name: "Nimbus Cloud", hex: "#D4D5D8", finish: "Glass Gloss & Metal" },
          { model: "A 27", pantone: "PANTONE 2706 U", name: "Soft Silver Blue", hex: "#C7D3E8", finish: "Glass Gloss & Metal" }
        ]
      },
      {
        category: "TREND A (COOL)",
        name: "Renew Blues",
        desc: "A fresh spectrum of serene blues that embody future-forward qualities while being restorative, in feeling.",
        references: ["BOSE ULTRA", "HOKA", "ISSEY MIYAKE", "OUR PLACE"],
        swatches: [
          { model: "A 57", pantone: "PANTONE 16-3920 TPG / 3558 C", name: "Cool Purple (Lavender Lustre)", hex: "#989DCB", finish: "Tone on tone" },
          { model: "A 37", pantone: "PANTONE 16-4114 TPG / 9441 U", name: "Cool Teal (Stone Blue)", hex: "#6D8795", finish: "Tone on tone" },
          { model: "A 27", pantone: "PANTONE 292 C / 14-4122 TPG", name: "Tranquil Blue (Airy Blue)", hex: "#6BAFE1", finish: "Tone on tone" }
        ]
      },
      {
        category: "TREND B (WARM)",
        name: "Radiant Warms",
        desc: "This delicate warm palette brings a radiant warmth, dream-like elegance and hints of playfulness.",
        references: ["OWALA", "UFUK YILMAZ", "HOKA", "YUKI BUTTONS"],
        swatches: [
          { model: "A 57", pantone: "PANTONE 9263 C / 434 U / 12-2400 TPG", name: "Pink Frost", hex: "#E5D2D5", finish: "Glass Gloss & Metal" },
          { model: "A 37", pantone: "PANTONE 13-2807 TPG / 13-1716 TPG / 2665 U", name: "Vibrant Warm (Ballerina / Pale Rosette / Iridescent)", hex: "#F2B8BE", finish: "Iridescent Effect" },
          { model: "A 27", pantone: "PANTONE 2572 U / 2635 C", name: "Electric Purple", hex: "#7E5892", finish: "Glass Gloss & Metal" }
        ]
      }
    ],
    ndaNotice: "Exact Pantone color and codes are withheld under NDA"
  },

  galaxyMFSeries: {
    concept: "Uplifted Brilliance",
    conceptDesc: "CMF Harmony that feels like an experience with surfaces that respond to light, finishes that evoke emotion and colours that shift fascinatingly.",
    pillars: ["Layered Visual", "Tactility", "Immersive harmony"],
    swaDrivers: [
      { name: "Hyperphysical Experiences", desc: "Redefining phygital world by evoking emotion led engagements", brands: ["VIBHOR SOGANI", "DAILY OBJECTS"] },
      { name: "Cultural Belonging", desc: "Creating emotional value with tech through context of cultural resonance", brands: ["AMIT AGARWAL", "CHAMAR STUDIO"] },
      { name: "Restorative Possibilities", desc: "Uplifted luxury crafted with the undertone of sensory calmness and indulgence", brands: ["MARISOL FOR NILA", "FIG LIVING"] },
      { name: "Reinterpreted Materials", desc: "Re imagined material intelligence to create relevance in context of past and future", brands: ["COLLEKTKLOVE", "EK KALAKAAR"] }
    ],
    lifestyleNote: "A new identity is emerging: Shaped by sensory experiences, rooted in regional resonance.",
    mSeries: {
      name: "Galaxy M Series",
      concept: "Lively Luxe",
      desc: "A balanced palette of lively, Energetic, hues with a touch of luxe.",
      patternConcept: "Light crossing in lines, shimmering with spectrum. Linear patterns reflect the clarity of light and lively luxe colour.",
      moodboardBrands: ["CLAYMENAESTHETICS", "CORD STUDIO", "AMIT AGARWAL", "JAY WALKING"],
      keyColors: [
        { code: "2376 C", hex: "#3A3D54", name: "Luxe Navy" },
        { code: "134110 TPG", hex: "#D1D5DA", name: "Cool Muted Grey" },
        { code: "3135 C", hex: "#009AA6", name: "Energetic Cyan" },
        { code: "18-1634 TPG", hex: "#AE4156", name: "Rich Crimson" },
        { code: "2072 C", hex: "#B899D8", name: "Lively Lilac" }
      ]
    },
    fSeries: {
      name: "Galaxy F Series",
      concept: "Radiant Flair",
      desc: "Rich shades that glisten and wear like accessories for a confident expression.",
      patternConcept: "A rhythm of waves and a burst of glistening rich hues. Flowing patterns meet radiant bold colour.",
      moodboardBrands: ["FIRST COFFEE", "CHAMAAR STUDIO", "BIJOLIYO", "DAILY OBJECTS", "RATA LOVE"],
      keyColors: [
        { code: "6217 C", hex: "#4A4C50", name: "Graphite" },
        { code: "2768 C", hex: "#111C4E", name: "Deep Cobalt" },
        { code: "2726 C", hex: "#3750B2", name: "Electric Blue" },
        { code: "6144 C", hex: "#00A88F", name: "Radiant Emerald" },
        { code: "5545 C", hex: "#4E6961", name: "Deep Sage" },
        { code: "19-2630 TPG", hex: "#8F2C54", name: "Berry Plum" },
        { code: "252 C", hex: "#C74DB5", name: "Radiant Magenta" }
      ]
    },
    candidateMatrix: {
      mSeries: [
        { model: "M 5X", finish: "Glossy", core: "PANTONE 2376 C", neutral: "PANTONE 134110 TPG", trendy: "PANTONE 18-1634 TPG" },
        { model: "M 3X", finish: "Haze", core: "PANTONE 2376 C", neutral: "PANTONE 134110 TPG", trendy: "PANTONE 18-1634 TPG" },
        { model: "M 0X", finish: "Pattern", core: "PANTONE 2376 C", neutral: "—", trendy: "PANTONE 3135 C & 2072 C" }
      ],
      fSeries: [
        { model: "F 5X", finish: "Glossy", core: "PANTONE 2768 C", trendy: "PANTONE 5545 C", special: "PANTONE 19-2630 TPG" },
        { model: "F 3X", finish: "Haze", core: "PANTONE 6217 C / 2726 C", trendy: "PANTONE 6144 C", special: "PANTONE 252 C" },
        { model: "F 0X", finish: "Pattern", core: "PANTONE 2768 C", trendy: "PANTONE 6144 C", special: "PANTONE 252 C" }
      ]
    }
  },

  slides: [
    { page: 24, title: "Section Title: Trends Forecast for Galaxy", src: "/pdf-pages/page-24.webp" },
    { page: 25, title: "2026 CMF Design for Galaxy A Series", src: "/pdf-pages/page-25.webp" },
    { page: 26, title: "Smartphone Market Scenario & SKU Price Bands", src: "/pdf-pages/page-26.webp" },
    { page: 27, title: "Consumer Segments: A Series vs M & F Series", src: "/pdf-pages/page-27.webp" },
    { page: 28, title: "Consumer Sentiment 2026: Expressive & Soothing Realities", src: "/pdf-pages/page-28.webp" },
    { page: 29, title: "Global Consumer Drivers: Exploring Joy through Comfort", src: "/pdf-pages/page-29.webp" },
    { page: 30, title: "CMF Concept: Gently Pleasant", src: "/pdf-pages/page-30.webp" },
    { page: 31, title: "Galaxy A Series Color Proposal: A57, A37, A27", src: "/pdf-pages/page-31.webp" },
    { page: 32, title: "Dark Core: Classic Darks & Classic Navy", src: "/pdf-pages/page-32.webp" },
    { page: 33, title: "Light Neutral: Silverine Greys", src: "/pdf-pages/page-33.webp" },
    { page: 34, title: "Trend A Cool: Renew Blues", src: "/pdf-pages/page-34.webp" },
    { page: 35, title: "Trend B Warm: Radiant Warms", src: "/pdf-pages/page-35.webp" },
    { page: 36, title: "Galaxy A Series Master Color Matrix (NDA Notice)", src: "/pdf-pages/page-36.webp" },
    { page: 37, title: "2026 CMF Design for Galaxy M & F Series", src: "/pdf-pages/page-37.webp" },
    { page: 38, title: "SWA Consumer Drivers: Cultural Resonance & Restorative Possibilities", src: "/pdf-pages/page-38.webp" },
    { page: 39, title: "SWA Lifestyle: A New Identity Emerging", src: "/pdf-pages/page-39.webp" },
    { page: 40, title: "CMF Concept: Uplifted Brilliance", src: "/pdf-pages/page-40.webp" },
    { page: 41, title: "CMF Impression: Layered Visual Tactility & Immersive Harmony", src: "/pdf-pages/page-41.webp" },
    { page: 42, title: "Galaxy M Series Concept: Lively Luxe", src: "/pdf-pages/page-42.webp" },
    { page: 43, title: "Galaxy M Series Linear Patterns", src: "/pdf-pages/page-43.webp" },
    { page: 44, title: "Galaxy M Series Moodboard & Key Tones", src: "/pdf-pages/page-44.webp" },
    { page: 45, title: "Galaxy F Series Concept: Radiant Flair", src: "/pdf-pages/page-45.webp" },
    { page: 46, title: "Galaxy F Series Wave Patterns", src: "/pdf-pages/page-46.webp" },
    { page: 47, title: "Galaxy F Series Moodboard & Dynamic Tones", src: "/pdf-pages/page-47.webp" },
    { page: 48, title: "2026 Galaxy M / F Color Candidates Matrix", src: "/pdf-pages/page-48.webp" },
    { page: 49, title: "End of Document", src: "/pdf-pages/page-49.webp" }
  ]
};
