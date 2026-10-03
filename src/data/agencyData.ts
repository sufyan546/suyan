import { Project, Service, ProcessStep, ClientCategory } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_product_cinematic_1791031858517.jpg';
export const COMPARISON_AFTER_IMAGE = '/src/assets/images/product_comparison_cinematic_1791031931391.jpg';

export const PROJECTS: Project[] = [
  {
    id: 'surge',
    brand: 'SURGE',
    category: 'Protein / Fitness',
    campaignType: 'Cinematic Protein Bar Campaign',
    description: 'High-contrast macro textures, explosive momentum, and directional studio rim light designed to break the feed.',
    image: '/src/assets/images/work_surge_protein_bar_1791031883488.jpg',
    aspectRatio: '4:3',
    deliverables: ['15s Hero Commercial', '9:16 Paid Social Suite (6 hooks)', '8x 4K Macro Stills', 'Dynamic Packaging Cutdowns'],
    metrics: [
      { label: 'Meta ROAS', value: '3.8x' },
      { label: 'Hook Retention Rate', value: '74%' },
      { label: 'First Week Sellout', value: '100%' }
    ],
    creativeHook: 'The Texture Break: Slow-motion fracture showing gourmet fudge density and roasted almond flakes at 240fps.',
    directorNotes: 'Lighting rigged with high-angle key and low amber rim to emphasize tactile food texture over sterile fitness packaging.',
    storyboardShots: [
      'Macro close-up on chocolate shell crack',
      'Airborne sea salt and almond flakes floating in zero-g atmosphere',
      'Bold typographic lockup over dark charcoal slate',
      'Hero product reveal with dramatic silhouette sweep'
    ]
  },
  {
    id: 'abcoffee',
    brand: 'ABCOFFEE',
    category: 'Coffee',
    campaignType: 'Signature Blend Product Campaign',
    description: 'Artisanal dark roast bean scatter, copper backlight illumination, and tactile packaging close-ups.',
    image: '/src/assets/images/work_abcoffee_campaign_1791031899970.jpg',
    aspectRatio: '4:3',
    deliverables: ['30s Brand Commercial', 'Amazon Brand Store Visuals', '12x Social Ad Variations', 'Short-Form TikTok Cuts'],
    metrics: [
      { label: 'Organic Views', value: '420K' },
      { label: 'Pre-Order Velocity', value: '+185%' },
      { label: 'CTR on TikTok', value: '4.2%' }
    ],
    creativeHook: 'The Sensory Aroma: Rich rising vapor and cascading roasted beans hitting warm Italian marble.',
    directorNotes: 'Warm amber tones and copper specular highlights designed to convey heritage craftsmanship and bold morning intensity.',
    storyboardShots: [
      'Glossy whole beans tumbling in macro slow motion',
      'Subtle rising morning steam against dark walnut background',
      'Crema swirl vortex in double-walled glass',
      'Matte black bag reveal with golden foil deboss catchlight'
    ]
  },
  {
    id: 'max-protein',
    brand: 'MAX PROTEIN',
    category: 'Fitness / Nutrition',
    campaignType: 'Social Product Campaign',
    description: 'Explosive carbon-finish drink can with frosted ice shards, energetic water splashes, and high-velocity pacing.',
    image: '/src/assets/images/product_comparison_cinematic_1791031931391.jpg',
    aspectRatio: '4:3',
    deliverables: ['10x 9:16 High-Energy Hooks', 'Hero 3D Can Rotation', 'DTC Homepage Hero Visual', 'Retail Pitch Kit'],
    metrics: [
      { label: 'Paid Social Impressions', value: '2.4M' },
      { label: 'Customer Acquisition Cost', value: '-34%' },
      { label: 'Thumb-Stop Rate', value: '68%' }
    ],
    creativeHook: 'Zero-Lag Energy: Rapid cold-burst sequence with shattering ice crystals and hyper-crisp carbonation audio cues.',
    directorNotes: 'High-contrast studio lighting paired with neon amber accent vectors to dominate crowded social feeds.',
    storyboardShots: [
      'Rapid pull-out from macro condensation droplets',
      'Explosive ice ring shockwave on beat drop',
      'Can sliding across wet obsidian surface',
      'Electrolyte formula breakdown with stylized typography'
    ]
  },
  {
    id: 'skincare-concept',
    brand: 'SKINCARE CONCEPT',
    category: 'Beauty',
    campaignType: 'Premium Skincare Launch',
    description: 'Dewy droplet macros, frosted jade glass bottle, and serene architectural daylight reflections.',
    image: '/src/assets/images/work_skincare_launch_1791031914085.jpg',
    aspectRatio: '4:3',
    deliverables: ['20s Cinematic Launch Film', 'Sephora Digital Shelf Assets', '8x Texture Macro Stills', 'UGC-Complementary Creatives'],
    metrics: [
      { label: 'Launch Day Revenue', value: '$340K' },
      { label: 'Instagram Engagement', value: '8.4%' },
      { label: 'Return Customer Rate', value: '41%' }
    ],
    creativeHook: 'Purity in Motion: Microscopic suspended botanicals and a single golden dew drop descending along frosted glass.',
    directorNotes: 'Ultra-soft diffuse daylight combined with crystal water caustic reflections to evoke effortless clinical luxury.',
    storyboardShots: [
      'Surface tension droplet resting on jade dropper pipette',
      'Subtle water wave cresting around frosted glass vessel',
      'Minimalist ingredient hierarchy in clean serif typography',
      'Warm sunlight beam crossing serene morning bathroom set'
    ]
  },
  {
    id: 'noir-essence',
    brand: 'NOIR ESSENCE',
    category: 'Fashion & Lifestyle',
    campaignType: 'Luxury Scent Launch',
    description: 'Obsidian glass flacon enveloped in slow vapor with razor-sharp rim highlights and midnight velvet palette.',
    image: '/src/assets/images/hero_product_cinematic_1791031858517.jpg',
    aspectRatio: '16:9',
    deliverables: ['Global Digital Campaign Stills', '15s Teaser Reel', 'Billboard 8K Renders', 'High-End Retail Display Loop'],
    metrics: [
      { label: 'Editorial Reach', value: '4.1M' },
      { label: 'Vogue Digital Feature', value: 'Pick' },
      { label: 'Wholesale Orders', value: '+260%' }
    ],
    creativeHook: 'The Scent of Gravity: Monolithic perfume bottle emerging slowly from darkness through dense cinematic fog.',
    directorNotes: 'Chiaroscuro lighting technique with razor-thin gold edge illumination to position the product as pure luxury artifact.',
    storyboardShots: [
      'Pitch black screen pierced by single golden rim light',
      'Fine mist plume illuminated by warm directional spot',
      'Gold embossed brand typography catching specular gleam',
      'Full product resting on wet dark slate with reflections'
    ]
  }
];

export const SERVICES: Service[] = [
  {
    number: '01',
    title: 'PRODUCT FILMS',
    tagline: 'Short cinematic commercials designed for social media.',
    description: 'Bespoke high-fidelity commercials with macro lighting, camera choreography, and dynamic sound design built to capture instant attention on modern feeds.',
    deliverables: ['15s & 30s Hero Commercials', 'Vertical 9:16 Cutdowns', 'Sound Design & Score', 'End-Card Brand Animations'],
    turnaround: '5–7 Days',
    formats: ['9:16 (Reels/TikTok)', '16:9 (YouTube/CTV)', '4:5 (Feed)']
  },
  {
    number: '02',
    title: 'PRODUCT PHOTOGRAPHY',
    tagline: 'Premium product imagery without the traditional production overhead.',
    description: 'Flawless studio and environmental stills. Macro packaging details, dynamic splash physics, and editorial lighting with zero physical shoot delays.',
    deliverables: ['E-Commerce Hero Stills', 'Lifestyle Environment Renders', 'Macro Texture Stills', 'Transparent Cutouts (PNG)'],
    turnaround: '3–5 Days',
    formats: ['High-Res 8K TIFF', 'Web-Optimized JPEG', 'Transparent PNG']
  },
  {
    number: '03',
    title: 'SOCIAL ADS',
    tagline: 'Scroll-stopping creative designed for Instagram, TikTok and paid social.',
    description: 'Performance-engineered ad assets with hook variations, text overlays, and narrative angles built specifically to lower CAC and scale paid media.',
    deliverables: ['Multi-Hook Variations (5–10 per concept)', 'Dynamic Motion Overlays', 'Direct-Response Storyboards', 'Split-Test Ready Assets'],
    turnaround: '4–6 Days',
    formats: ['9:16 Vertical Video', '1:1 Square Carousel', '4:5 Feed Stills']
  },
  {
    number: '04',
    title: 'CAMPAIGN CONCEPTS',
    tagline: 'Big ideas, hooks, visual direction and complete campaign systems.',
    description: 'From market research and visual positioning to hook scripting and shot architecture. We develop the big creative ideas that make campaigns memorable.',
    deliverables: ['Creative Brief & Positioning', 'Hook Library (20+ scripts)', 'Visual Moodboards', 'Comprehensive Art Direction Guidelines'],
    turnaround: '3–4 Days',
    formats: ['Interactive PDF Deck', 'Figma Brand Board', 'Production Blueprint']
  },
  {
    number: '05',
    title: 'LIFESTYLE CREATIVE',
    tagline: 'Product + human storytelling with cinematic environments.',
    description: 'Show your product in authentic, aspirational environments without renting villas or flying crews across the world. Photorealistic contextual advertising.',
    deliverables: ['Architectural Interior Sets', 'Outdoor & Nature Environments', 'Human Interaction Stills', 'Motion Background Loops'],
    turnaround: '5–7 Days',
    formats: ['4:3 Editorial', '16:9 Cinematic', '9:16 Social']
  },
  {
    number: '06',
    title: 'PRODUCT LAUNCHES',
    tagline: 'A complete visual system for launching a new product.',
    description: 'The end-to-end creative package: teaser assets, hero launch film, paid social creative suite, digital shelf photography, and PR-ready media kits.',
    deliverables: ['Teaser Campaign (3 assets)', 'Hero Launch Commercial', 'Digital Shelf Kit (12 stills)', 'Full Paid Social Launch Kit'],
    turnaround: '7–10 Days',
    formats: ['Omnichannel Full Suite (9:16, 1:1, 16:9, 4:5)']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    tagline: 'We understand the product, audience and objective.',
    description: 'You share your product details, target customer profile, and campaign goals. We dissect the category to uncover visual whitespace and high-converting angles.',
    milestones: ['Product intake & 3D / photo reference review', 'Competitor visual audit', 'Primary commercial objective definition'],
    timeline: 'Day 1'
  },
  {
    number: '02',
    title: 'CONCEPT',
    tagline: 'We develop the creative direction, hooks and storyboard.',
    description: 'We present 3 distinct creative routes with visual moodboards, hook scripts, lighting directions, and precise shot-by-shot storyboards for your sign-off.',
    milestones: ['Creative moodboards & tone setting', 'Hook scripting for paid social', 'Shot-by-shot storyboard delivery'],
    timeline: 'Days 2–3'
  },
  {
    number: '03',
    title: 'CREATE',
    tagline: 'We produce cinematic product visuals, photography and video.',
    description: 'Our studio generates ultra-high-fidelity product visuals, fluid dynamics, macro details, and motion choreography, combining strategic taste with modern AI production.',
    milestones: ['Macro 8K texture rendering', 'Cinematic motion & camera tracking', 'Sound design, foley & color grading'],
    timeline: 'Days 4–5'
  },
  {
    number: '04',
    title: 'DELIVER',
    tagline: 'You receive ready-to-use advertising assets for your campaigns.',
    description: 'All assets arrive organized by format, resolution, and hook angle—ready to upload straight into Meta Ads Manager, TikTok, or your e-commerce storefront.',
    milestones: ['All omnichannel aspect ratios (9:16, 16:9, 1:1)', 'Multiple hook variants for A/B testing', 'Complete archive & raw master files'],
    timeline: 'Day 6–7'
  }
];

export const CLIENT_CATEGORIES: ClientCategory[] = [
  {
    id: 'fitness',
    name: 'FITNESS & PROTEIN',
    tagline: 'High-momentum energy, explosive macro textures, and athletic intensity.',
    aesthetic: 'Chiseled rim lighting, chalk dust, ice shards, and visceral macro food/supplement textures.',
    lightingSetup: 'High-contrast studio directional strobes with moody carbon-slate backdrops.',
    typicalDeliverables: '15s High-Energy Social Ads, Pre-Workout Shaker Motion, Protein Bar Cross-Sections.',
    sampleBrandTypes: 'Functional Food, Protein Snacks, Electrolyte Drinks, Fitness Gear.'
  },
  {
    id: 'food-beverage',
    name: 'FOOD & BEVERAGE',
    tagline: 'Irresistible appetite appeal, fluid physics, and sensory close-ups.',
    aesthetic: 'Crisp condensation droplets, slow-motion syrup/liquid pours, rich natural tones.',
    lightingSetup: 'Warm golden backlighting to illuminate beverage clarity and rich culinary surfaces.',
    typicalDeliverables: 'Appetite-driven Reel Commercials, Digital Menu Assets, Launch Packaging Still Suites.',
    sampleBrandTypes: 'Craft Beverages, Plant-Based Snacks, Luxury Condiments, Healthy Confectionery.'
  },
  {
    id: 'beauty',
    name: 'BEAUTY & SKINCARE',
    tagline: 'Effortless clinical elegance, delicate hydration, and architectural light.',
    aesthetic: 'Frosted glass translucency, water ripples, suspended botanical extracts, radiant skin textures.',
    lightingSetup: 'Ultra-soft diffuse daylight with caustic reflections and pristine minimalist surfaces.',
    typicalDeliverables: 'Sephora/Ulta Digital Shelf Imagery, Formula Reveal Loops, Serum Droplet Macro Stills.',
    sampleBrandTypes: 'Clean Cosmetics, Dermatology Serums, Botanical Skincare, Haircare Rituals.'
  },
  {
    id: 'coffee',
    name: 'COFFEE',
    tagline: 'Artisanal craft, roasting warmth, and morning ritual atmosphere.',
    aesthetic: 'Warm copper and walnut palettes, roasted bean scatter, dense crema swirls, slow morning vapor.',
    lightingSetup: 'Directional sunlight passing through morning steam and architectural window frames.',
    typicalDeliverables: 'Signature Blend Films, Packaging Reveal Stills, Subscription Launch Creatives.',
    sampleBrandTypes: 'Specialty Roasters, Cold Brew Brands, Espresso Hardware, Pod Subscriptions.'
  },
  {
    id: 'fashion',
    name: 'FASHION & APPAREL',
    tagline: 'Bold editorial silhouettes, tactile fabric weaves, and runway mood.',
    aesthetic: 'Brutalist studio sets, dramatic drapery physics, high-fashion monochrome and sculptural forms.',
    lightingSetup: 'Sharp high-fashion key light with subtle fill and textured architectural concrete.',
    typicalDeliverables: 'Lookbook Motion Stills, Seasonal Drop Teasers, E-Commerce Model Context Imagery.',
    sampleBrandTypes: 'Luxury Streetwear, Performance Outerwear, Minimalist Tailoring, Footwear.'
  },
  {
    id: 'lifestyle',
    name: 'LIFESTYLE & HOME',
    tagline: 'Aspirational living, serene environments, and tactile luxury.',
    aesthetic: 'Natural linen, travertine stone, warm oak, morning sunbeams, and lived-in sophistication.',
    lightingSetup: 'Natural Scandinavian daylight with soft organic interior fall-off.',
    typicalDeliverables: 'Interior Context Stills, Candle/Scent Mood Films, D2C Lifestyle Ad Suites.',
    sampleBrandTypes: 'Home Fragrance, Designer Ceramics, Wellness Tech, Bedding & Linens.'
  },
  {
    id: 'consumer-products',
    name: 'CONSUMER PRODUCTS & TECH',
    tagline: 'Industrial precision, tactile materials, and sleek engineering reveals.',
    aesthetic: 'Anodized aluminum, micro-perforations, ergonomic curves, and futuristic studio minimalism.',
    lightingSetup: 'Technical edge sweeps and precision laser/studio rim lighting against obsidian glass.',
    typicalDeliverables: 'Hardware Feature Breakdowns, Kickstarter Launch Commercials, Unboxing Teasers.',
    sampleBrandTypes: 'Acoustic Audio, Wearables, Everyday Carry, Smart Home Devices.'
  }
];

export const COMPARISON_DATA = {
  traditional: {
    turnaround: '6 to 10 Weeks',
    cost: '$60,000 – $150,000+',
    volume: '1 Commercial + 5 Stills',
    iterations: 'Rigid: Reshoots require another studio day',
    logistics: 'Renting studio, hiring crew, shipping samples, insurance, weather delays'
  },
  adCreative: {
    turnaround: '5 to 7 Days',
    cost: 'Fraction of traditional budget',
    volume: 'Full Multivariant Suite (20+ assets)',
    iterations: 'Agile: Lighting, angles, and backgrounds can be adjusted rapidly',
    logistics: 'Seamless digital pipeline: send product details, get cinematic ready-to-run ads'
  }
};
