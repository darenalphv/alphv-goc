// Deep links into the subsidiary websites. Every URL here was checked to respond; use these instead
// of a bare homepage when a link is about a specific service, page or action.
const tech = 'https://alphv.com';
const academy = 'https://academy.alphv.com';
const devrel = 'https://devrel.alphv.com';
const recruit = 'https://recruit.alphv.com';

export const links = {
  tech: {
    home: tech,
    services: `${tech}/services`,
    aiEngineering: `${tech}/services/ai-engineering`,
    agenticAutomation: `${tech}/services/agentic-automation`,
    systemIntegration: `${tech}/services/system-integration-and-consulting`,
    computerVision: `${tech}/services/computer-vision-and-smart-city`,
    webMobile: `${tech}/services/web-and-mobile-apps`,
    products: `${tech}/products`,
    insights: `${tech}/insights`,
    careers: `${tech}/careers`,
    contact: `${tech}/contact`,
  },
  academy: {
    home: academy,
    courses: `${academy}/courses`,
    offer: `${academy}/#what-we-offer`,
    about: `${academy}/about`,
  },
  devrel: {
    home: devrel,
    services: `${devrel}/#services`,
    developerMarketing: `${devrel}/services/developer-marketing`,
    engagementEvents: `${devrel}/services/engagement-events`,
    hackathons: `${devrel}/services/hackathons`,
    executiveRoundtables: `${devrel}/services/executive-roundtables`,
    community: `${devrel}/community`,
    events: `${devrel}/events`,
    contact: `${devrel}/#contact`,
  },
  recruit: {
    home: recruit,
    services: `${recruit}/#services`,
    jobs: `${recruit}/find-a-job`,
    hire: `${recruit}/contact?type=companies`,
    talent: `${recruit}/contact?type=talents`,
  },
};
