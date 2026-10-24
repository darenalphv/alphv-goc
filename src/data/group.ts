// Site content for the ALPHV group, taken from alphv.com, academy.alphv.com, devrel.alphv.com and
// recruit.alphv.com. Pages and components read from here so copy lives in one place.

export const contact = {
  email: 'hello@alphv.com',
  phone: '+60 16-518 7740',
  phoneHref: 'tel:+60165187740',
  whatsapp: 'https://wa.me/60165187740',
  recruitPhone: '+60 19-476 5833',
  recruitPhoneHref: 'tel:+60194765833',
  address: [
    'Unit 21-05, Level 21, Tower A',
    'The Vertical Business Suites',
    '8 Jalan Kerinchi, Bangsar South',
    '59200 Kuala Lumpur',
  ],
};

export const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/alphv-technologies' },
  { label: 'Instagram', href: 'https://www.instagram.com/alphvgroup/' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61571678193968' },
];

export const entities = [
  { name: 'ALPHV Technologies Sdn Bhd', reg: '202301015604 (1509526-V)', note: 'Incorporated 2023' },
  { name: 'Agensi Pekerjaan ALPHV Sdn. Bhd.', reg: '1597069-U', note: 'EA License JTKSM 1807' },
];

export interface Company {
  id: string;
  verb: string;
  name: string;
  short: string;
  category: string;
  url: string;
  domain: string;
  summary: string;
  detail: string;
  services: { title: string; text: string }[];
  facts: { value: string; label: string }[];
  image?: { src: string; alt: string };
}

export const companies: Company[] = [
  {
    id: 'technologies',
    verb: 'Build',
    name: 'ALPHV Technologies',
    short: 'Technologies',
    category: 'AI systems integration',
    url: 'https://alphv.com',
    domain: 'alphv.com',
    summary:
      'Designs, integrates and runs production AI for legal, insurance, healthcare, hospitality, finance and retail teams, from first model to measurable outcomes.',
    detail:
      'Most companies have tried AI. Far fewer have it running inside the systems that earn their revenue. ALPHV Technologies embeds AI into the core systems a business already runs, then stays to improve it. The engineers who scope the work are the ones who ship it.',
    services: [
      { title: 'AI engineering', text: 'Knowledge integration, RAG and specialised fine-tuning on your own data.' },
      { title: 'Agentic automation', text: 'Agentic process automation, custom MCP tooling and multi-agent systems.' },
      { title: 'System integration', text: 'AI built into ERP, CRM, case management and third-party portals.' },
      { title: 'Computer vision', text: 'People counting, traffic analytics and smart city deployments.' },
      { title: 'Web and mobile apps', text: 'Full-stack product engineering, from concept to deployment.' },
      { title: 'Data, RPA and MLOps', text: 'Pipelines, automation and monitoring after go-live.' },
    ],
    facts: [
      { value: '80%', label: 'Less manual data entry, Singapore hospitality group' },
      { value: '90+', label: 'Portal automations for a 36-year-old law firm' },
      { value: 'MY · SG · VN', label: 'Client base' },
    ],
    image: { src: '/images/GHa4BAjiwhelgAStwsITxXFvryI.png', alt: 'ALPHV engineers reviewing code together' },
  },
  {
    id: 'academy',
    verb: 'Train',
    name: 'ALPHV Academy',
    short: 'Academy',
    category: 'HRDC-certified training',
    url: 'https://academy.alphv.com',
    domain: 'academy.alphv.com',
    summary:
      'Delivers HRDC-certified programs in AI, data science and emerging technology for professionals and enterprise teams.',
    detail:
      'Every session is led by practitioners who work in AI, data and technology. Programs run in person, online or hybrid, and the Academy team handles grant applications, HRD Corp documentation and claim submissions.',
    services: [
      { title: 'Tech certification programs', text: 'HRDC-claimable training in AI, data science and cloud.' },
      { title: 'AI train-the-trainer', text: 'Equip in-house trainers to deliver AI programs.' },
      { title: 'GenAI and data workshops', text: 'Hands-on sessions, from building LLM applications to analytics.' },
      { title: 'Bootcamps and talks', text: 'Industry sessions on generative AI and emerging architectures.' },
    ],
    facts: [
      { value: '467+', label: 'Professionals trained' },
      { value: '9', label: 'Countries reached' },
      { value: '100%', label: 'Hands-on curriculum' },
    ],
    image: { src: '/images/qiplSkiBBYKKxgegzuqc7GQYBY.jpg', alt: 'ALPHV Academy training session' },
  },
  {
    id: 'devrel',
    verb: 'Grow',
    name: 'ALPHV DevRel',
    short: 'DevRel',
    category: 'Developer relations',
    url: 'https://devrel.alphv.com',
    domain: 'devrel.alphv.com',
    summary:
      'Connects technology companies with the developers in Developer Kaki, the community ALPHV has built since 2019.',
    detail:
      'ALPHV DevRel helps technology companies build developer connections, accelerate product adoption and reach the decision makers shaping the regional tech landscape. Every program is built around one goal: turning developer attention into measurable outcomes.',
    services: [
      { title: 'Developer marketing', text: 'Strategy, content and campaigns developers recommend.' },
      { title: 'Engagement events', text: 'Workshops, dev nights and technical sessions.' },
      { title: 'Hackathons', text: 'Build sprints that ship demo-ready projects in 48 hours.' },
      { title: 'Executive roundtables', text: 'Invite-only dinners with CIOs, CTOs and founders.' },
    ],
    facts: [
      { value: '75,000+', label: 'Developers in the community' },
      { value: '7,500+', label: 'Developers onboarded' },
      { value: '17+', label: 'Industry partners' },
    ],
    image: { src: '/images/9jvJVjkD9jYYoV2ZAZqw2jnkM0.jpg', alt: 'Developer Kaki community event' },
  },
  {
    id: 'recruit',
    verb: 'Hire',
    name: 'ALPHV Recruit',
    short: 'Recruit',
    category: 'Tech recruitment',
    url: 'https://recruit.alphv.com',
    domain: 'recruit.alphv.com',
    summary:
      'Data-driven executive search and tech recruitment for companies across Malaysia and Southeast Asia.',
    detail:
      'ALPHV Recruit sources, assesses and places the people who define a company’s next chapter, from a single C-suite hire to entire engineering teams. Each consultant specialises in a vertical, and every placement carries a replacement guarantee.',
    services: [
      { title: 'Executive search', text: 'C-suite and board-level leaders, placed confidentially.' },
      { title: 'Tech talent recruiting', text: 'Engineers, data scientists, product managers and CTOs.' },
      { title: 'Contract and project staffing', text: 'Pre-vetted professionals ready from day one.' },
      { title: 'Talent advisory', text: 'Compensation benchmarking and workforce planning.' },
      { title: 'Regional expansion', text: 'Founding teams for new Southeast Asian markets.' },
    ],
    facts: [
      { value: '4', label: 'Step process, from brief to placement' },
      { value: 'Days', label: 'To a shortlist, not weeks' },
      { value: 'JTKSM 1807', label: 'Licensed employment agency' },
    ],
    image: { src: '/images/rqiIGDbeDRiobhyef2bGIyvLg.png', alt: 'Selecting a candidate profile' },
  },
];

export const stats = [
  { value: '75,000+', label: 'Developers in the Developer Kaki community' },
  { value: '467+', label: 'Professionals trained across 9 countries' },
  { value: '20+', label: 'Developer events and hackathons hosted' },
  { value: '4', label: 'Companies under one group' },
];

// Recent work across the group, newest first.
export const work = [
  { company: 'DevRel', client: 'TNG Digital', title: 'TNGDigital Finhack 2026', date: 'Apr 2026' },
  { company: 'Academy', client: 'Modefair', title: 'Building LLM Applications', date: 'Apr 2026' },
  { company: 'DevRel', client: 'NVIDIA', title: 'Developer Kaki x NVIDIA GTC Watch Party', date: 'Mar 2026' },
  { company: 'Academy', client: 'Great Eastern', title: 'GE Future Ready Leaders Workshop', date: 'Mar 2026' },
  { company: 'Academy', client: 'Amway', title: 'AI-Driven Efficiency Initiative', date: 'Jan 2026' },
  { company: 'Technologies', client: 'Abraham Ooi & Partners', title: 'Sovereign AI case management for a law firm', date: '2025' },
  { company: 'Technologies', client: 'Singapore hospitality group', title: 'WhatsApp AI agents cut manual entry by 80%', date: '2025' },
  { company: 'Technologies', client: 'Fundaztic and iPajak', title: 'Core lending and pawn broking systems', date: '2025' },
];

export const clients = [
  { src: '/images/1s8eaXak6E1AmOixaC3z5hmVPY.png', alt: 'Amway' },
  { src: '/images/w8vtulBj47ZLAGTUpXLQfDEmefI.png', alt: 'Great Eastern' },
  { src: '/images/eh2TfHhhma1lNuT4Z5iQYOTHNM.png', alt: 'NVIDIA' },
  { src: '/images/C6niXQ0dd1c0LLjzPEDN0Ha32IA.png', alt: 'TNG Digital' },
  { src: '/images/pOk1LAsGvHxsWj4dGKDmjxeHw.png', alt: 'Carlsberg' },
  { src: '/images/Mk045SeWWzIzz9owFZZjanXiZTM.png', alt: 'Alibaba Cloud' },
  { src: '/images/29OzE28h9JRVZszpT1BQY3lMXE.png', alt: 'VMware' },
  { src: '/images/Pv1nIsbSPVXnsz9vIsceEjhU.png', alt: 'Dynatrace' },
  { src: '/images/QkjFDrAp3rRKdrIhwrpVFbW5ILY.png', alt: 'Akamai' },
  { src: '/images/vnfmrW9NXmuj1iCOt3QQl6HdDA.png', alt: 'Fundaztic' },
  { src: '/images/sSMPwtT1lYLYlQtlosl49Jp2DZ0.png', alt: 'Pixlr' },
  { src: '/images/8Dkr9WlVxOzYVIYF6S6b9Ru4EYQ.png', alt: 'Sonar' },
];

export const certifications = [
  { src: '/images/tSzVVuPHqmbeOMKR8p0hzHBgb1E.png', alt: 'Malaysia Digital' },
  { src: '/images/ndaERycq1x1vA0zMlDpd6F00Qzg.png', alt: 'HRD Corp Registered Training Provider' },
  { src: '/images/FNAS5R3YGmbRXfuAQSmtFbi3pE.jpeg', alt: 'Government of Malaysia ePerolehan' },
];

export const press = [
  {
    outlet: 'FPT',
    title: 'FPT and ALPHV partner to accelerate AI innovation in Malaysia',
    href: 'https://fpt.com/en/news/fpt-news/fpt-va-alphv-hop-tac-thuc-day-doi-moi-sang-tao-ai-tai-malaysia',
    date: 'Apr 2026',
  },
  {
    outlet: 'FPT AI Factory',
    title: 'FPT AI Factory and ALPHV announce strategic partnership',
    href: 'https://factory.fpt.ai/news/fpt-ai-factory-and-alphv-announce-strategic-partnership-to-accelerate-ai-innovation-in-malaysia',
    date: 'Apr 2026',
  },
  {
    outlet: 'BFM 89.9',
    title: '$100K AI bills? 4 drivers of token bill shock',
    href: 'https://www.bfm.my/content/podcast/dollar100k-ai-bills-4-drivers-of-token-bill-shock',
    date: 'Mar 2026',
  },
  {
    outlet: 'BFM 89.9',
    title: 'Shadow AI and the true cost of LLMs',
    href: 'https://www.bfm.my/content/podcast/shadow-ai-and-the-true-cost-of-llms',
    date: 'Mar 2026',
  },
  {
    outlet: 'The Star',
    title: 'The rise of vibe coding: programming made easy with AI',
    href: 'https://www.thestar.com.my/tech/tech-news/2025/09/01/the-rise-of-vibe-coding-programming-made-easy-with-ai',
    date: 'Sep 2025',
  },
  {
    outlet: 'BFM 89.9',
    title: 'How this freelancer dev built a fast-growing tech biz',
    href: 'https://www.bfm.my/content/podcast/how-this-freelancer-dev-built-a-fast-growing-tech-biz',
    date: 'Feb 2025',
  },
];

export const faqs = [
  {
    q: 'What is ALPHV?',
    a: 'ALPHV is a Kuala Lumpur-based group of four companies: ALPHV Technologies (AI and software), ALPHV Academy (HRDC-certified training), ALPHV DevRel (developer relations and the Developer Kaki community) and ALPHV Recruit (tech recruitment and executive search).',
  },
  {
    q: 'How do the companies work together?',
    a: 'Each company stands on its own. Together they form one ecosystem: Technologies builds the systems, Academy trains the people who run them, DevRel grows the developer community around them, and Recruit places the talent to scale them. You can work with one company or several.',
  },
  {
    q: 'Are Academy courses HRDC-claimable?',
    a: 'Yes. ALPHV Academy is an HRDC-registered training provider. Public and in-house programs are claimable under Skim Bantuan Latihan (SBL) for Malaysian employers, and the Academy team manages the paperwork.',
  },
  {
    q: 'Can ALPHV keep our data in-house?',
    a: 'Yes. ALPHV Technologies chooses models, hosting and guardrails around your data, cost and residency needs, including locally hosted models where data must stay inside your organisation.',
  },
  {
    q: 'Which markets does ALPHV serve?',
    a: 'ALPHV is headquartered in Kuala Lumpur with a presence in Singapore. Clients and programs span Malaysia, Singapore, Vietnam and the wider Southeast Asian region.',
  },
  {
    q: 'How do I get started?',
    a: 'Email hello@alphv.com or message the group on WhatsApp. You can also go straight to the company you need through its own website.',
  },
];
