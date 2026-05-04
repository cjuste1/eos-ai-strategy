// ═══════════════════════════════════════
// EOS × AI STRATEGY — DATA
// All deck content lives here
// ═══════════════════════════════════════

const DATA = {

  platforms: [
    {
      name: 'TikTok',
      cls: 'p-tiktok',
      number: '1.3M',
      body: '10.5M likes. Viral moments happening daily with no system capturing them as product or supply chain signals.',
      gap: 'Gap: No trend-to-supply chain pipeline'
    },
    {
      name: 'Instagram',
      cls: 'p-instagram',
      number: '2M',
      body: '3,618 posts. Engagement falling industry-wide from 16.9% → 9.7% YoY. Scent communities going untracked.',
      gap: 'Gap: No scent affinity intelligence'
    },
    {
      name: 'YouTube',
      cls: 'p-youtube',
      number: '950%',
      body: 'Likes surged Mar 2024–Feb 2025. Fastest growing channel in the portfolio. Treated as an afterthought.',
      gap: 'Gap: No content repurposing system'
    },
    {
      name: 'Facebook',
      cls: 'p-facebook',
      number: 'Untapped',
      body: 'Stable millennial reach with 1.4–2.4% engagement. No AI retargeting or cross-platform conversion flow.',
      gap: 'Gap: No cross-platform intelligence'
    }
  ],

  flow: [
    { icon: '📡', title: 'Scan', sub: 'TikTok · Instagram · YouTube · Facebook · Reddit — twice daily via Make' },
    { icon: '🧠', title: 'Synthesize', sub: 'Perplexity + Claude API process, score, and cluster signals by theme' },
    { icon: '📬', title: 'Deliver', sub: 'Tailored brief per team — Social Media Manager, Marketing, Product — every morning' }
  ],

  recipients: [
    {
      cls: 'r-social',
      title: '📱 Social Media Manager',
      items: ['Daily co-pilot brief', 'Top comments to engage', 'Trending sounds + formats', 'Organic creator opportunities']
    },
    {
      cls: 'r-marketing',
      title: '📣 Marketing',
      items: ['Weekly campaign intelligence', 'Community language to use in copy', 'Content format winners this week', 'Sentiment shifts by product line']
    },
    {
      cls: 'r-product',
      title: '🧪 Product',
      items: ['Monthly innovation signals', 'Unmet product requests by volume', 'Packaging complaints before they trend', 'New market signals (e.g. men\'s line)']
    }
  ],

  scents: [
    {
      cls: 'sc-vanilla',
      badge: 'New — Men\'s Line',
      badgeCls: 'badge-vanilla',
      name: 'Vanilla Silk Latte',
      tagline: '"smooth. warm. always on point."',
      products: 'Body Wash · 24H Moisture Lotion · Oil Perfume\nwarm vanilla + creamy espresso · natural shea · sensitive skin',
      img: 'assets/images/vanilla-silk-latte.png'
    },
    {
      cls: 'sc-coconut',
      badge: 'New — Men\'s Line',
      badgeCls: 'badge-coconut',
      name: 'Coconut Brûlée',
      tagline: '"warm. toasted. unforgettable."',
      products: 'Body Wash · 24H Moisture Lotion · Oil Perfume\ntoasted coconut + vanilla · natural shea · sensitive skin',
      img: 'assets/images/coconut-brulee.png'
    }
  ],

  craft: [
    { letter: 'C', word: 'Capture' },
    { letter: 'R', word: 'Refine' },
    { letter: 'A', word: 'Activate' },
    { letter: 'F', word: 'Fine-tune' },
    { letter: 'T', word: 'Track' }
  ],

  engine: [
    {
      title: '📚 Prompt Library',
      body: 'Custom prompts per role, per platform. eos brand voice + governance guidelines baked in. Built once — every system and every team benefits.',
      hasIframe: true,
      iframeUrl: 'https://ai-sme-portfolio-cw3v.vercel.app/prompts'
    },
    {
      title: '📋 AI Playbook',
      body: 'A 5-step governed framework. Every pilot approved before launch. Human always in the loop at the review stage. No black boxes.',
      hasPlaybook: true
    },
    {
      title: '🤖 AI Agents',
      body: 'Three agents. Each governed by the playbook. Each powered by the prompt library. Each serving a different team.',
      hasAgents: true
    }
  ],

  playbook: [
    { num: '1', label: 'Use Case Submitted', human: false },
    { num: '2', label: 'Prompt Assigned', human: false },
    { num: '3', label: 'Pilot Approved', human: false },
    { num: '4', label: '👤 Human Review', human: true },
    { num: '5', label: 'Scale', human: false }
  ],

  agents: [
    { name: 'Social Pulse', desc: 'Scans platforms + delivers briefs twice daily' },
    { name: 'Aria', desc: 'Employee AI enablement agent' },
    { name: 'Content Brief', desc: 'Turns signals into campaign starters' }
  ],

  roi: [
    { number: '3×', label: 'Content velocity', source: 'Beauty brands with GenAI content workflows vs. without — industry benchmark' },
    { number: '40%', label: 'Faster trend response', source: 'Brands using social listening AI vs. manual monitoring — industry benchmark' }
  ],

  cmdTags: ['Pilot tracker', 'ROI by initiative', 'Risk flags', 'Adoption rate', 'Human review queue'],

  people: [
    {
      label: 'Hands-on Training',
      items: [
        { strong: 'Build, don\'t watch', text: 'People trust what they build themselves' },
        { strong: 'Plain language always', text: '"Talk to AI" not "prompt engineering"' },
        { strong: 'Role-specific examples', text: 'Marketing sees marketing. Finance sees finance.' }
      ]
    },
    {
      label: 'AI Starter Kits',
      items: [
        { strong: 'Leadership', text: 'Week 1 · Governance + roadmap', badge: 'Week 1' },
        { strong: 'Marketing', text: 'Week 2 · Content + briefs', badge: 'Week 2' },
        { strong: 'Supply Chain', text: 'Week 3 · Signals + vendors', badge: 'Week 3' },
        { strong: 'Finance', text: 'Week 4 · ROI + reporting', badge: 'Week 4' }
      ]
    },
    {
      label: 'eos AI Crew',
      items: [
        { strong: 'Prompt sharing', text: 'Crew shares what works across functions' },
        { strong: 'Win board', text: 'Small wins celebrated publicly' },
        { strong: 'Request queue', text: 'Teams ask for what they need next' },
        { strong: 'Feedback loop', text: 'Continuous improvement built in' }
      ]
    }
  ],

  measures: ['Weekly active AI users', 'Prompts shared', 'Win board posts', 'Request queue volume', 'Feedback score'],

  aiMenu: [
    {
      cls: 'am-openai',
      logo: '⬛',
      name: 'OpenAI',
      role: 'Content creation at scale. Campaign ideation. Image generation for mockups. Lowest adoption resistance — most employees already know it.',
      tag: 'Marketing · Social Team',
      tagCls: 'tag-openai'
    },
    {
      cls: 'am-claude',
      logo: '🟣',
      name: 'Anthropic Claude',
      role: 'Long-form reasoning. Brand voice adherence. Social Pulse briefs. Powers Aria. Governance-friendly outputs leadership can trust.',
      tag: 'Strategy · Leadership',
      tagCls: 'tag-claude'
    },
    {
      cls: 'am-gemini',
      logo: '🔵',
      name: 'Google Gemini',
      role: 'Native Google Workspace integration. Real-time trend grounding. Multimodal — analyzes product images and campaign visuals.',
      tag: 'Cross-functional · Ops',
      tagCls: 'tag-gemini'
    }
  ],

  examples: {
    tiktok: `obsessed with the shea butter formula omg my skin is so soft 😭\nbae told me i smell like heaven because of eos 🌸\nok the vanilla scent is UNREAL, why did i sleep on this brand\nthe packaging is so cute but i wish there was a larger pump size\nscent lasts all day which is rare for body lotion at this price\nwish there were more shade-inclusive campaigns showing it on darker skin\nmy whole dorm uses eos now and nobody is complaining lol\nwould LOVE a collab with a candle brand, the scents are that good`,

    male: `my boyfriend keeps stealing my eos vanilla lotion and honestly i don't even mind\nmen need to stop sleeping on eos fr the shea formula works for everyone\ni got my dad to use eos and now he's obsessed, he needs his own version though\nthe scents are a little too feminine for me to gift my husband but formula is amazing\nvanilla latte scent on a man?? yes please eos please make this happen\nwould 100% buy a men's eos line if it existed\nmy gym bro asked what lotion i use and when i said eos he bought it immediately lol\neos for men needs to happen like yesterday. the market is right there`,

    mixed: `the shea lotion is amazing but too pricey for the size, have to use so much\npump stopped working after 3 weeks - frustrating for a premium product\nlove the brand but fragrance is too strong for sensitive skin, need unscented option\nthe lip balm is iconic but feels like they haven't innovated in years\nshipping was slow and packaging dented on arrival\ncustomer service took 5 days to respond about my return\nnew scents are too sweet, miss the original coconut shea formula\nwould pay more for a larger size honestly`
  }
};
