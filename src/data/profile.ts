export type Highlight = { value: string; label: string };
export type CareerItem = { name: string; years: string; points: string[] };
export type InvestmentItem = { title: string; body: string };
export type CharityItem = {
  year?: string;
  title: string;
  body: string;
  image?: string;
};
export type TimelineItem = { year: string; title: string; body: string };

export const profile = {
  meta: {
    title: "Lucy Bailey | Personal Profile",
    description: "The personal website of Lucy Bailey, focused on cross-cultural perspective, asset allocation, long-term value creation, and philanthropy.",
    url: "https://example.com",
    siteName: "Lucy Bailey",
    ogImage: "/images/og-placeholder.svg",
    lastUpdated: "2021-07-23",
  },
  person: {
    name: "Lucy Bailey",
    title: "Cross-cultural Investor and Asset Allocation Practitioner",
    email: "lucy198609126@gmail.com",
    linkedin: "https://www.facebook.com/Ella.Windsor.13408",
    portrait: "/images/home-photo.jpg",
    statement: "I have always believed that in an uncertain environment clarity of judgment and a long term perspective matter far more than short term outcomes.",
    summary: "I grew up in a multicultural environment received an international education and lived and studied in multiple countries which gradually shaped a stable rational and long term oriented way of thinking.",
    success: [
      "In my professional path I deepened my understanding of business and value through cross disciplinary practice from entrepreneurship in the medical aesthetics industry to optimizing brand and offline business operations developing an approach centered on structure efficiency and long term sustainability.",
      "Rather than focusing on identity I place greater importance on my role as a connector and a driver integrating resources building structures and turning ideas into systems that can operate and sustain over time.",
      "In life I maintain discipline and rhythm placing importance on long term development in physical health cognition and inner stability I believe real value lies in the ability to consistently make clear and sound decisions."
      "Looking ahead I will focus on directions that allow for accumulation and compounding continuing to develop businesses related to lifestyle health and aesthetics while building a long term platform that connects resources accumulates experience and creates lasting value and contributing to education and philanthropy in a steady and sustainable way",
      "The difference between individuals is not defined by short term choices but by whether they possess stable judgment and the ability to continuously evolve"
    ]
  },
  highlights: [
    { value: "15+ Years", label: "Long-term experience across education, finance, and business" },
    { value: "$6M", label: "Capital milestone during a major structural transition" },
    { value: "€400K", label: "Approximate annual return from a consumer brand investment" }
  ] as Highlight[],
  education: {
    school: "Shanghai American School · London School of Economics and Political Science",
    years: "1989–2011",
    text: "My education began in an international environment at Shanghai American School, where I developed cross-cultural communication, independent thinking, and a global perspective. I later studied Economics and Politics at the London School of Economics and Political Science, building a structured understanding of macroeconomics, financial systems, public policy, and capital markets.",
    awards: [
      "International and bilingual academic foundation",
      "Training in economics, policy analysis, and systems thinking",
      "Strong cross-cultural communication and independent judgment",
      "A long-term framework for understanding markets, risk, and structural change"
    ]
  },
  career: [
    {
      name: "Kleinwort Benson",
      years: "2010–2013 · London, United Kingdom",
      points: [
        "Worked in wealth management support for high-net-worth individuals and family clients.",
        "Contributed to cross-border asset structuring and risk-control work inside a European private banking environment.",
        "This period taught me that wealth is not merely earned. It is preserved, structured, and managed through systems."
      ]
    },
    {
      name: "Capital Transition Stage",
      years: "2016 · Europe",
      points: [
        "Exited part of an equity position during a banking merger and acquisition process.",
        "Secured approximately $3 million in capital that later became the foundation for entrepreneurial and investment activity.",
        "This was a turning point from being a participant in a system to becoming a capital decision-maker."
      ]
    },
    {
      name: "LUX MedSpa Brickell",
      years: "2018–Present · Miami, United States",
      points: [
        "Became a joint investor in the medical aesthetics sector, recognizing the long-term growth driven by migration patterns and consumption upgrades.",
        "Participated in financing, investment decisions, and resource integration related to the business.",
        "This experience deepened my understanding that consumer-facing industries are built on emotional value, trust, and repeat relationships."
      ]
    },
    {
      name: "Kaffeine",
      years: "2022–Present · London, United Kingdom",
      points: [
        "Acquired a 25% stake during the post-pandemic undervaluation period and became one of the largest shareholders.",
        "Invested €1.2 million while remaining focused on capital support rather than day-to-day operations.",
        "The investment has generated approximately €400,000 in annual returns and reinforced a core principle: the best opportunities are often found when others are retreating."
      ]
    },
    {
      name: "Asset Allocation Transition",
      years: "2020–Present · Global Markets",
      points: [
        "Experienced losses in real estate and operating businesses during the pandemic period, then rebuilt through public market exposure.",
        "Recovered roughly 70% of losses within six months through securities-market participation before shifting toward more liquid markets such as foreign exchange and gold.",
        "The most important lesson was clear: risk control matters more than chasing returns."
      ]
    }
  ] as CareerItem[],
  brandStats: [
    "Cross-cultural perspective shaped by Chinese, British, and American environments",
    "Experience across wealth management, consumer investment, and liquid markets",
    "Focus on asset allocation, risk management, and long-term capital judgment",
    "Practical understanding of both institutional finance and real-sector businesses"
  ],
  investmentText: "My investment philosophy was not formed in a single moment. It was built through cycles, mistakes, recovery, and structural change. I learned that strong returns without discipline are fragile, and that real resilience comes from liquidity, judgment, and risk control. Today I focus on asset allocation, consumer-sector investing, and financial-market participation with a long-term and systems-based mindset.",
  investments: [
    { title: "Asset Allocation", body: "A disciplined framework for balancing opportunity, liquidity, and downside protection across cycles." },
    { title: "Consumer Business Investment", body: "A focus on sectors where trust, behavior, and emotional value shape durable commercial outcomes." },
    { title: "Foreign Exchange and Gold", body: "A move toward more liquid markets where timing, macro judgment, and risk management matter deeply." },
    { title: "Long-term Capital Discipline", body: "An approach centered on structure, patience, and entering quality opportunities during dislocation rather than euphoria." }
  ] as InvestmentItem[],
  charityIntro: "Philanthropy is not separate from how I think about wealth. Direct exposure to children living without access to clean water, stable education, or basic security changed my view of what resources truly mean.",
  charity: [
    {
      title: "Education and Child Support in Africa",
      body: "Long-term participation in projects that support children in underserved African communities through education, living assistance, and basic resources.",
      image: "/images/charity-1.jpg"
    },
    {
      title: "Field Visit to Sierra Leone",
      body: "Visited Sierra Leone in person to better understand local living conditions, educational access, and survival challenges faced by children.",
      image: "/images/charity-2.jpg"
    },
    {
      title: "Basic Living Support",
      body: "Provided practical support including food, water-related assistance, and other essential resources for daily life.",
      image: "/images/charity-3.jpg"
    },
    {
      title: "Focus on Education",
      body: "Continued support aimed at improving children's access to learning opportunities and more stable developmental environments.",
      image: "/images/charity-4.jpg"
    },
    {
      title: "Responsibility Through Wealth",
      body: "These experiences reinforced a lasting belief: wealth is not only possession, but also responsibility.",
      image: "/images/charity-5.jpg"
    },
    {
      title: "Future Personal Foundation",
      body: "A long-term goal to establish a personal charitable foundation dedicated to education and child welfare.",
      image: "/images/charity-6.jpg"
    }
  ] as CharityItem[],
  givingRule: "My long-term goal is to build a personal charitable foundation and continue supporting education and child survival initiatives with consistency and care.",
  timeline: [
    { year: "1989–2005", title: "Shanghai American School", body: "Built an international foundation through English-language education, cross-cultural exposure, and independent thinking." },
    { year: "2006–2011", title: "London School of Economics and Political Science", body: "Studied Economics and Politics while developing a structured understanding of systems, markets, and policy." },
    { year: "2010–2013", title: "Kleinwort Benson", body: "Entered the world of wealth management and private banking in London." },
    { year: "2016", title: "Capital Transition", body: "Exited part of an equity position during a major banking transition and secured startup capital." },
    { year: "2018–Present", title: "LUX MedSpa Brickell", body: "Expanded into consumer-sector investment through medical aesthetics in Miami." },
    { year: "2020–Present", title: "Asset Allocation Transition", body: "Shifted from traditional business exposure toward more liquid and risk-aware market participation." },
    { year: "2022–Present", title: "Kaffeine", body: "Invested in a London consumer brand during a dislocated period and built a stable return profile." }
  ] as TimelineItem[]
} as const;

export type Profile = typeof profile;
