export const CONTACT_TECH = {
  name: 'Sahil Rathee',
  role: 'Technical Lead & Systems Architect',
  phone: '+91 96252 13480',
  rawPhone: '919625213480',
  email: 'sahil.artits.rathee@gmail.com',
  whatsapp: 'https://wa.me/919625213480',
};

export const CONTACT_MARKETING = {
  name: 'Vinay',
  role: 'Growth, Marketing & Content Strategy',
  phone: '+91 72067 51515',
  rawPhone: '917206751515',
  whatsapp: 'https://wa.me/917206751515',
};

export const CONTACT_PHONE_IN = '+91 96252 13480';
export const CONTACT_PHONE_MARKETING = '+91 72067 51515';
export const CONTACT_PHONE_US = '+1 (917) 735-9752';
export const WHATSAPP_LINK = 'https://wa.me/919625213480';
export const WHATSAPP_LINK_MARKETING = 'https://wa.me/917206751515';
export const INSTAGRAM_HANDLE = '@growth_hikes';
export const INSTAGRAM_URL = 'https://www.instagram.com/growth_hikes';

export const SOCIAL_MEDIA_PACKAGES = [
  {
    tier: 'Basic',
    name: 'Basic Social Media Marketing',
    price: '20,000/-',
    priceINR: '₹20,000',
    popular: false,
    items: [
      '6 Videos (Basic Shot)',
      '6 Instagram Stories',
      '3 Overview Posts',
      '3 Posters'
    ],
    inclusions: [
      'Video Editing',
      'Monthly Reports',
      'Video Shooting',
      'Creative Script',
      'Brand Awareness',
      'Video Script (Content Research)'
    ]
  },
  {
    tier: 'Most Popular',
    name: 'Growth Social Media Marketing',
    price: '30,000/-',
    priceINR: '₹30,000',
    popular: true,
    badge: 'Most Popular',
    items: [
      '10 Videos (Gimbal Shot)',
      '10 Instagram Stories',
      '3 Ads',
      '5 Overview Posts',
      '5 Posters'
    ],
    inclusions: [
      'Video Editing',
      'Monthly Reports',
      'Video Shooting',
      'Creative Script',
      'Brand Awareness',
      'Video Script (Content Research)'
    ]
  },
  {
    tier: 'Premium',
    name: 'Premium Social Media & Production',
    price: '50,000/-',
    priceINR: '₹50,000',
    popular: false,
    badge: 'Premium Enterprise',
    items: [
      '15 Videos (Professional Camera & Drone Shoot)',
      '15 Instagram Stories (Business Clips)',
      '6 Ads',
      '10 Feed Posts',
      '10 Posters',
      'Website Included'
    ],
    inclusions: [
      'Video Editing',
      'Monthly Reports',
      'Video Shooting',
      'Creative Script',
      'Brand Awareness',
      'Video Script (Content Research)'
    ]
  }
];

export const SERVICES_CATEGORIES = [
  { id: 'all', name: 'All Capabilities' },
  { id: 'growth', name: 'Growth & Paid Media' },
  { id: 'software', name: 'Software & App Engineering' },
  { id: 'ai', name: 'AI & Automation' },
  { id: 'production', name: 'Creative & Aerial Production' }
];

export const SERVICE_CATEGORIES = SERVICES_CATEGORIES;

export const SERVICES_DATA = [
  {
    id: 'drone-shooting',
    slug: 'drone-cinematography',
    category: 'production',
    categoryLabel: 'Creative & Aerial Production',
    name: 'Drone Cinematography & FPV Aerials',
    title: 'Drone Cinematography & FPV Aerials',
    icon: 'Camera',
    tagline: 'High-velocity 4K/60fps and 10-bit HDR aerial walkthroughs that stop the scroll.',
    shortDesc: 'FAA & DGCA certified commercial drone shoots, dynamic indoor FPV flythroughs, and luxury real estate cinematics.',
    description: 'FAA & DGCA certified commercial drone shoots, dynamic indoor FPV flythroughs, and luxury real estate cinematics.',
    priceStarts: '₹14,999',
    startingPrice: '₹14,999',
    priceFrom: '$350',
    priceINR: '₹14,999',
    timeline: '3 - 5 Days',
    turnaround: '3 - 5 Days',
    type: 'Per Shoot / Retainer',
    metric: '4K 60FPS HDR • DGCA Certified',
    metrics: ['4K 60FPS HDR', '100% DGCA Compliant', 'Sub-3-Day Turnaround'],
    deliverables: [
      'Raw 10-bit D-Log 4K footage + color-graded master cuts',
      'Dynamic indoor FPV walkthroughs optimized for 9:16 vertical Reels',
      'High-resolution orthomosaic aerial property mapping',
      'Pre-cleared flight permissions and liability insurance'
    ],
    features: [
      'Indoor & outdoor dynamic FPV flying',
      'Cinematic color grading & sound design',
      'Vertical 9:16 & horizontal 16:9 master deliverables',
      'Same-week expedited delivery available'
    ]
  },
  {
    id: 'hyperlocal-seo',
    slug: 'hyperlocal-seo-gmb',
    category: 'growth',
    categoryLabel: 'Growth & Paid Media',
    name: 'Hyperlocal SEO & Google Business Profile',
    title: 'Hyperlocal SEO & Google Business Profile',
    icon: 'MapPin',
    tagline: 'Own the top 3 spots in Google Local 3-Pack and dominate area searches.',
    shortDesc: 'Aggressive local map ranking, Google Business Profile optimization, local citations, and review automation funnels.',
    description: 'Aggressive local map ranking, Google Business Profile optimization, local citations, and review automation funnels.',
    priceStarts: '₹9,999/mo',
    startingPrice: '₹9,999/mo',
    priceFrom: '$400/mo',
    priceINR: '₹9,999/mo',
    timeline: 'Monthly Retainer',
    turnaround: 'Monthly Retainer',
    type: 'Monthly Retainer',
    metric: 'Top 3 Map Pack Guarantee',
    metrics: ['Top 3 Map Pack', '300%+ Inbound Calls', '50+ NAP Citations'],
    deliverables: [
      'Full GBP category tuning, service cataloging, and geo-tagged media',
      'Citation generation across 50+ high-authority business directories',
      'Automated post-purchase review collection via WhatsApp/SMS',
      'Geo-targeted local landing pages and localized schema markup'
    ],
    features: [
      'Google Maps proximity grid rank tracking',
      'Negative review suppression & response management',
      'Direct call-to-lead tracking numbers',
      'Weekly geo-tagged photo and update publication'
    ]
  },
  {
    id: 'instagram-meta-management',
    slug: 'instagram-meta-growth',
    category: 'growth',
    categoryLabel: 'Growth & Paid Media',
    name: 'Instagram Reels & Social Media Marketing',
    title: 'Instagram Reels & Social Media Marketing',
    icon: 'Instagram',
    tagline: 'Transform casual scrollers into engaged followers and booked clients with high-retention video.',
    shortDesc: 'End-to-end short-form vertical video production, professional shooting, feed curation, trend research, and DM lead funnels.',
    description: 'End-to-end short-form vertical video production, professional shooting, feed curation, trend research, and DM lead funnels.',
    priceStarts: '₹20,000/mo',
    startingPrice: '₹20,000/mo',
    priceFrom: '$250/mo',
    priceINR: '₹20,000/mo',
    timeline: 'Monthly Retainer',
    turnaround: 'Monthly Retainer',
    type: 'Monthly Retainer',
    metric: 'Starting ₹20k • 6-15 Reels/mo',
    metrics: ['Packages from ₹20,000', 'Basic, Popular & Premium', 'Full Shooting & Scripting Included'],
    packages: SOCIAL_MEDIA_PACKAGES,
    deliverables: [
      'Scripted, recorded, edited, and posted vertical Reels (6 to 15 shoots/mo)',
      'High-converting carousel slides, overview posts, and visual grid architecture',
      'Automated Meta / WhatsApp DM lead qualification triggers',
      'Creative scriptwriting, content research, and monthly analytics reporting'
    ],
    features: [
      'Gimbal shots, professional camera & drone shoots available',
      'Full video editing, sound design, and motion subtitles included',
      'Brand awareness amplification and hashtag strategy',
      'Monthly performance audit and strategy refinement'
    ]
  },
  {
    id: 'paid-ads',
    slug: 'paid-advertising-capi',
    category: 'growth',
    categoryLabel: 'Growth & Paid Media',
    name: 'Paid Advertising (Meta, Google & CAPI)',
    title: 'Paid Advertising (Meta, Google & CAPI)',
    icon: 'Target',
    tagline: 'Laser-targeted customer acquisition with verified positive ROAS.',
    shortDesc: 'Full-funnel media buying across Meta Ads (Reels, Feed), Google Search, Performance Max, and YouTube in-stream.',
    description: 'Full-funnel media buying across Meta Ads (Reels, Feed), Google Search, Performance Max, and YouTube in-stream.',
    priceStarts: '₹19,999/mo',
    startingPrice: '₹19,999/mo',
    priceFrom: '$650/mo',
    priceINR: '₹19,999/mo',
    timeline: 'Monthly Retainer',
    turnaround: 'Monthly Retainer',
    type: 'Monthly Retainer',
    metric: '4.8x Avg Client ROAS',
    metrics: ['4.8x Average ROAS', 'Server-Side CAPI', 'Zero Wasted Ad Spend'],
    deliverables: [
      'Audience segmentation, competitor research, and creative angle testing',
      'Meta Conversions API (CAPI) bypass for iOS 14.5+ tracking',
      'High-converting landing page copywriting and CRO audits',
      'Real-time automated ROAS dashboard and weekly strategy calls'
    ],
    features: [
      'A/B testing of 10+ hook variants every month',
      'Lookalike audience modeling and retargeting pools',
      'Negative keyword sculpting on Google Search & PMax',
      'Direct budget guardrails preventing budget depletion'
    ]
  },
  {
    id: 'ugc-creators',
    slug: 'ugc-creator-engine',
    category: 'production',
    categoryLabel: 'Creative & Aerial Production',
    name: 'User Generated Content (UGC Engine)',
    title: 'User Generated Content (UGC Engine)',
    icon: 'Camera',
    tagline: 'Authentic creator videos that outperform polished corporate ads by 300%.',
    shortDesc: 'Vetted creator network of relatable creators producing hook-tested problem/solution videos ready for TikTok, Reels, and Meta Ads.',
    description: 'Vetted creator network of relatable creators producing hook-tested problem/solution videos ready for TikTok, Reels, and Meta Ads.',
    priceStarts: '₹12,999',
    startingPrice: '₹12,999',
    priceFrom: '$300',
    priceINR: '₹12,999',
    timeline: '1 - 2 Weeks',
    turnaround: '1 - 2 Weeks',
    type: 'Per Campaign',
    metric: '100+ Vetted Creators',
    metrics: ['100+ Vetted Creators', 'Full Ad Whitelisting', 'B-Roll Library'],
    deliverables: [
      'Complete raw footage + finished 9:16 vertical video edits',
      'Full commercial advertising usage and creator whitelisting rights',
      'Hook variations tested for paid media campaigns',
      'Product unboxing, testimonial, and tutorial formats'
    ],
    features: [
      'Direct creator sourcing and product dispatch management',
      'Strict creative briefs aligned with your brand guidelines',
      'High-energy vertical captions and dynamic pacing',
      'Quick turnaround with revision rounds included'
    ]
  },
  {
    id: 'email-marketing',
    slug: 'email-sms-funnels',
    category: 'growth',
    categoryLabel: 'Growth & Paid Media',
    name: 'Automated Email & SMS Funnels',
    title: 'Automated Email & SMS Funnels',
    icon: 'Mail',
    tagline: 'Turn one-time purchasers into high-LTV repeat brand advocates.',
    shortDesc: 'Complete lifecycle email funnels (Klaviyo, Mailchimp) and high-deliverability B2B outbound sequences with SPF/DKIM/DMARC hardening.',
    description: 'Complete lifecycle email funnels (Klaviyo, Mailchimp) and high-deliverability B2B outbound sequences with SPF/DKIM/DMARC hardening.',
    priceStarts: '₹11,999/mo',
    startingPrice: '₹11,999/mo',
    priceFrom: '$350/mo',
    priceINR: '₹11,999/mo',
    timeline: 'Monthly Retainer',
    turnaround: 'Monthly Retainer',
    type: 'Monthly Retainer',
    metric: '42% Avg Open Rate',
    metrics: ['42% Open Rate', 'Zero Spam Folder', '30%+ Retention Lift'],
    deliverables: [
      'Welcome sequence, Abandoned Cart recovery, and Post-Purchase upsells',
      'Custom HTML/CSS email templates responsive on mobile and desktop',
      'B2B personalized outbound campaigns with inbox rotation',
      'Strict DNS deliverability setup (SPF, DKIM, DMARC, BIMI, MX)'
    ],
    features: [
      'Predictive customer segmentation based on buying behavior',
      'A/B tested subject lines and preview text',
      'Zero-cookie attribution tracking',
      'Automated list hygiene and unengaged subscriber pruning'
    ]
  },
  {
    id: 'web-development',
    slug: 'custom-web-platforms',
    category: 'software',
    categoryLabel: 'Software & App Engineering',
    name: 'WordPress Websites & Custom Next.js Platforms',
    title: 'WordPress Websites & Custom Next.js Platforms',
    icon: 'Globe',
    tagline: 'WordPress websites starting at ₹24,999 or ultra-fast Next.js apps with 95+ Core Web Vitals.',
    shortDesc: 'Production-ready WordPress business websites and custom Next.js 15 web applications built for speed, SEO, and conversions.',
    description: 'We deliver polished WordPress websites starting at ₹24,999 and custom Next.js full-stack web platforms hosted on global edge networks with sub-second page loads.',
    priceStarts: '₹24,999',
    startingPrice: '₹24,999',
    priceFrom: '$300',
    priceINR: '₹24,999',
    timeline: '1 - 3 Weeks',
    turnaround: '1 - 3 Weeks',
    type: 'Project Sprint',
    metric: '99+ Lighthouse Score',
    metrics: ['WordPress from ₹24,999', 'Next.js 15 & Vite', '<800ms LCP & 100% SEO'],
    deliverables: [
      'Full WordPress website or custom Next.js responsive platform',
      'SSR/SSG architecture hosted on Cloudflare Edge global CDN',
      'CMS integration (WordPress, WooCommerce, Sanity, or Strapi)',
      'Built-in analytics, GA4, Meta CAPI, and schema markup'
    ],
    features: [
      'Zero-CLS layout stability and mobile-first responsive fluid grids',
      'Interactive micro-animations and conversion-optimized CTAs',
      'End-to-end type safety, SEO meta tags, and SSL security',
      'Automated CI/CD deployment pipelines'
    ]
  },
  {
    id: 'mobile-app-development',
    slug: 'mobile-apps-react-flutter',
    category: 'software',
    categoryLabel: 'Software & App Engineering',
    name: 'Cross-Platform Mobile Apps (React Native & Flutter)',
    title: 'Cross-Platform Mobile Apps (React Native & Flutter)',
    icon: 'Smartphone',
    tagline: 'Native performance on iOS and Android from a unified, maintainable codebase.',
    shortDesc: 'High-speed mobile applications built with Flutter and React Native with offline sync, push notifications, and biometric auth.',
    description: 'High-speed mobile applications built with Flutter and React Native with offline sync, push notifications, and biometric auth.',
    priceStarts: '₹79,999',
    startingPrice: '₹79,999',
    priceFrom: '$999',
    priceINR: '₹79,999',
    timeline: '3 - 6 Weeks',
    turnaround: '3 - 6 Weeks',
    type: 'Project Sprint',
    metric: '60 FPS Native Performance',
    metrics: ['₹79,999 Full Package', 'iOS & Android Ready', 'Play & App Store Submission'],
    deliverables: [
      'Production-ready APK, AAB, and iOS IPA builds',
      'App Store & Google Play Store submission and review compliance',
      'FCM push notification and deep-linking infrastructure',
      'Automated OTA (Over-The-Air) differential patch updates'
    ],
    features: [
      'Biometric authentication (FaceID & Fingerprint)',
      'Offline-first SQLite/Isar database synchronization',
      'Payment gateway integrations (Razorpay, Stripe, Apple Pay)',
      'Custom native device sensors, camera, and GPS access'
    ]
  },
  {
    id: 'whatsapp-bots',
    slug: 'whatsapp-cloud-api-bots',
    category: 'ai',
    categoryLabel: 'AI & Automation',
    name: 'Meta Omnichannel Chatbots (Instagram & WhatsApp)',
    title: 'Meta Omnichannel Chatbots (Instagram & WhatsApp)',
    icon: 'MessageSquare',
    tagline: 'Automate inquiries, bookings, and commerce across Instagram DMs and WhatsApp.',
    shortDesc: 'Official Meta chatbot solution covering WhatsApp Business Cloud API and Instagram Direct automation with instant replies and CRM syncing.',
    description: 'Unified Meta chatbot solution covering WhatsApp Business Cloud API and Instagram Direct automation with automated catalogs, quick-reply menus, and instant PDF quote generation.',
    priceStarts: '₹24,999',
    startingPrice: '₹24,999',
    priceFrom: '$300',
    priceINR: '₹24,999',
    timeline: '1 - 2 Weeks',
    turnaround: '1 - 2 Weeks',
    type: 'Setup + Retainer',
    metric: 'Meta Omnichannel • 98% Open Rate',
    metrics: ['Instagram & WhatsApp Unified', 'Instant Quote PDF', 'Official Meta API Verified'],
    deliverables: [
      'Official Meta WhatsApp Business Cloud & Instagram DM API integration',
      'Interactive button menus, list pickers, and product catalogs',
      'Dynamic PDF quotation generator sent instantly in chat',
      'Automated order and appointment confirmation notifications'
    ],
    features: [
      'Multi-agent shared inbox for human support staff',
      'Automated abandoned lead follow-up sequences across IG & WA',
      'Webhook integration with Shopify, WooCommerce, and CRMs',
      'Zero risk of number bans using official Cloud API'
    ]
  },
  {
    id: 'ai-support-agents',
    slug: 'autonomous-support-concierge',
    category: 'ai',
    categoryLabel: 'AI & Automation',
    name: 'Autonomous AI Support Concierges (RAG)',
    title: 'Autonomous AI Support Concierges (RAG)',
    icon: 'Bot',
    tagline: '24/7 intelligent customer support powered by your business documentation.',
    shortDesc: 'Custom RAG-powered AI chat concierges trained on your company knowledge, handling queries in 40+ languages with zero downtime.',
    description: 'Custom RAG-powered AI chat concierges trained on your company knowledge, handling queries in 40+ languages with zero downtime.',
    priceStarts: '₹19,999',
    startingPrice: '₹19,999',
    priceFrom: '$500',
    priceINR: '₹19,999',
    timeline: '1 - 2 Weeks',
    turnaround: '1 - 2 Weeks',
    type: 'Setup + Retainer',
    metric: '85% Deflection Rate',
    metrics: ['40+ Languages', '<2s Response Time', '85% Deflection Rate'],
    deliverables: [
      'Embedded responsive web widget with custom branding',
      'Vector database knowledge retrieval (RAG) against your FAQs/docs',
      'Seamless fallback escalation to human operators via WhatsApp/Email',
      'CRM sync into HubSpot, Zoho, Google Sheets, or custom database'
    ],
    features: [
      'Hallucination guardrails and strict brand tone guidelines',
      'Interactive appointment booking and lead scoring',
      'Real-time conversation transcripts and sentiment analytics',
      'Self-improving feedback loop from human operator corrections'
    ]
  },
  {
    id: 'ai-calling-agents',
    slug: 'autonomous-voice-calling-agents',
    category: 'ai',
    categoryLabel: 'AI & Automation',
    name: 'Autonomous AI Voice Calling Agents (Concierge Included)',
    title: 'Autonomous AI Voice Calling Agents (Concierge Included)',
    icon: 'PhoneCall',
    tagline: 'Ultra-low latency human-like voice agents for inbound receptionist & 60s callbacks. Autonomous Support Concierge included as a subset!',
    shortDesc: 'Never let another lead go cold. Low-latency AI voice agents over standard telephone lines, with 24/7 Autonomous Support Concierge included in the package.',
    description: 'Never let another lead go cold. Our autonomous AI voice agents dial inbound or outbound over standard telephone networks with fluid, natural pauses, answering questions and booking calendar slots. Includes Autonomous Support Concierge as an integrated subset.',
    priceStarts: '₹24,999',
    startingPrice: '₹24,999',
    priceFrom: '$300',
    priceINR: '₹24,999',
    timeline: '2 - 3 Weeks',
    turnaround: '2 - 3 Weeks',
    type: 'Setup + Usage',
    metric: '<600ms Voice Latency • Concierge Included',
    metrics: ['Support Concierge Included', '<600ms Latency', 'English & Hindi Accents'],
    deliverables: [
      '60-second automatic callback to newly captured leads',
      'Inbound front-desk telephone reception & call triage',
      'Autonomous Support Concierge chatbot integrated as a core subset',
      'Twilio, Deepgram Whisper STT & ElevenLabs natural voice pipeline',
      'Automated call recording, transcription, and CRM sync'
    ],
    features: [
      'Human-like interruption detection and turn-taking',
      'Direct calendar booking via Google/Outlook links',
      'Live call transfer to human executives upon sentiment escalation',
      'Detailed call analytics and lead qualification scoring'
    ]
  },
  {
    id: 'technical-consultancy',
    slug: 'technical-consultancy-architecture',
    category: 'software',
    categoryLabel: 'Software & App Engineering',
    name: 'Technical Architecture & Plan Selection Consultancy',
    title: 'Technical Architecture & Plan Selection Consultancy',
    icon: 'Zap',
    tagline: '1-on-1 direct session with Lead Architect Sahil Rathee for custom tech roadmaps and plan selection.',
    shortDesc: 'Special fee of ₹499 / $5 for custom tech solution blueprinting, Kubernetes/cloud architecture advice, and right plan selection.',
    description: 'Get 1-on-1 direct access to our systems architect. We analyze your tech requirements, infrastructure costs (AWS/GCP/Azure/Self-hosted), and prescribe the exact engineering and growth plan for your company.',
    priceStarts: '₹499',
    startingPrice: '₹499',
    priceFrom: '$5',
    priceINR: '₹499',
    timeline: 'Same-Day / 24h',
    turnaround: '24 Hours',
    type: '1-on-1 Advisory Session',
    metric: '₹499 / $5 Consultation',
    metrics: ['Direct with Sahil Rathee', 'Custom Cloud Architecture', 'Kubernetes / Multi-Cloud Roadmap'],
    deliverables: [
      '1-on-1 30-minute direct technical architecture video/voice call',
      'Written custom tech stack blueprint and cloud hosting estimate',
      'Right plan selection across GrowthHikes engineering & marketing services',
      'Immediate infrastructure diagnosis (AWS, GCP, Azure, Self-hosted)'
    ],
    features: [
      'Led by Sahil Rathee (+91 96252 13480)',
      'Actionable recommendations before committing to major builds',
      'Full consultation fee credited back upon project kickoff',
      'Fast turnaround within 24 hours of booking'
    ]
  },
  {
    id: 'ecommerce-mentorship',
    slug: 'ecommerce-mentorship',
    category: 'growth',
    categoryLabel: 'Growth & Paid Media',
    name: '1-on-1 Ecommerce & Growth Mentorship',
    title: '1-on-1 Ecommerce & Growth Mentorship',
    icon: 'Zap',
    tagline: 'Direct playbook transfer to scale your D2C brand from 5-figures to 7-figures.',
    shortDesc: 'Hands-on executive coaching covering supply chain, pricing psychology, creative strategy, media buying, and unit economics.',
    description: 'Hands-on executive coaching covering supply chain, pricing psychology, creative strategy, media buying, and unit economics.',
    priceStarts: '₹25,000/mo',
    startingPrice: '₹25,000/mo',
    priceFrom: '$750/mo',
    priceINR: '₹25,000/mo',
    timeline: 'Quarterly Cohort',
    turnaround: 'Quarterly Cohort',
    type: 'Mentorship Retainer',
    metric: '1-on-1 Founder Access',
    metrics: ['Weekly 1-on-1 Calls', 'Direct WhatsApp Access', 'Full SOP Library'],
    deliverables: [
      'Weekly 60-minute strategic review calls with growth directors',
      'Full financial modeling and contribution margin calculators',
      'Creative audit of existing ads, landing pages, and email flows',
      'Supplier negotiation scripts and logistics optimization guide'
    ],
    features: [
      'Private Slack/WhatsApp hotline for emergency ad reviews',
      'Access to GrowthHikes internal creator contracts and templates',
      'Benchmarking against top 1% industry conversion rates',
      'Quarterly in-person or virtual planning summits'
    ]
  },
  {
    id: 'brand-ui-ux-design',
    slug: 'brand-ui-ux-design',
    category: 'software',
    categoryLabel: 'Software & App Engineering',
    name: 'Brand Identity & High-Converting UI/UX',
    title: 'Brand Identity & High-Converting UI/UX',
    icon: 'Sparkles',
    tagline: 'Design systems that command premium pricing and turn visitors into buyers.',
    shortDesc: 'Comprehensive visual identity, typography pairing, logo systems, and conversion-optimized Figma UI kits for modern web and mobile apps.',
    description: 'Comprehensive visual identity, typography pairing, logo systems, and conversion-optimized Figma UI kits for modern web and mobile apps.',
    priceStarts: '₹18,999',
    startingPrice: '₹18,999',
    priceFrom: '$450',
    priceINR: '₹18,999',
    timeline: '1 - 2 Weeks',
    turnaround: '1 - 2 Weeks',
    type: 'Design Sprint',
    metric: 'Design Systems in Figma',
    metrics: ['Figma Design System', 'Responsive Prototypes', 'Brand Style Guide'],
    deliverables: [
      'Complete vector logo suite in SVG/PNG (dark, light, monochrome)',
      'Design token library (typography, spacing, shadows, color palettes)',
      'Interactive Figma prototypes with fluid auto-layouts',
      'Comprehensive brand guideline PDF for team alignment'
    ],
    features: [
      'WCAG AAA accessible contrast standards',
      'Ready for immediate developer handoff via Figma Dev Mode',
      'Social media profile avatars, banners, and template cards',
      'Unlimited revisions during the active design sprint'
    ]
  },
  {
    id: 'analytics-attribution',
    slug: 'analytics-attribution-pipelines',
    category: 'growth',
    categoryLabel: 'Growth & Paid Media',
    name: 'Attribution & Performance Data Pipelines',
    title: 'Attribution & Performance Data Pipelines',
    icon: 'Target',
    tagline: 'Track every dollar spent back to the exact creative and customer session.',
    shortDesc: 'Server-side tracking infrastructure using Google Tag Manager (sGTM), Meta CAPI, Google BigQuery, and custom Looker Studio dashboards.',
    description: 'Server-side tracking infrastructure using Google Tag Manager (sGTM), Meta CAPI, Google BigQuery, and custom Looker Studio dashboards.',
    priceStarts: '₹16,999',
    startingPrice: '₹16,999',
    priceFrom: '$450',
    priceINR: '₹16,999',
    timeline: '1 - 2 Weeks',
    turnaround: '1 - 2 Weeks',
    type: 'Infrastructure Setup',
    metric: '100% Data Accuracy',
    metrics: ['Zero Lost Conversions', 'Looker Studio Sync', 'sGTM Cloud Run'],
    deliverables: [
      'Server-side GTM setup on Cloudflare Workers or Google Cloud Run',
      'Meta Conversions API (CAPI) deduplication with event match quality > 8.5',
      'Automated Looker Studio executive reporting dashboard',
      'UTM tracking standardization across all outbound marketing channels'
    ],
    features: [
      'Cookie-less first-party tracking resilience against iOS updates',
      'Direct purchase event webhook to your internal database',
      'Automated slack notification on abnormal ROAS drops',
      'Full documentation and handover training'
    ]
  }
];

// Aliases for compatibility
export const SERVICES = SERVICES_DATA;
export const SERVICES_CATALOG = SERVICES_DATA;
