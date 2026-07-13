export interface InputField {
  key: string
  label: string
  type: 'input' | 'textarea' | 'select'
  placeholder?: string
  options?: string[]
}

export const PRODUCT = {
  name: "LeadMagnet Gen",
  slug: "leadmagnet",
  tagline: "Lead magnet ideas your list will actually want",
  description: "Tell us your audience and goal and get 10 lead magnet ideas with one expanded into a ready-to-build outline - for newsletters, waitlists and free tools.",
  toolTitle: "Generate lead magnet ideas",
  resultLabel: "Your ideas",
  ctaLabel: "Generate ideas",
  features: [
  "10 tailored ideas",
  "1 expanded outline",
  "Format mix (pdf/tool/quiz)",
  "Hook & CTA suggestion"
],
  inputs: [
  {
    "key": "audience",
    "label": "Target audience",
    "type": "input",
    "placeholder": "e.g. indie SaaS founders"
  },
  {
    "key": "niche",
    "label": "Your niche / topic",
    "type": "input",
    "placeholder": "e.g. pricing strategy"
  },
  {
    "key": "goal",
    "label": "Primary goal",
    "type": "select",
    "options": [
      "Grow newsletter",
      "Build waitlist",
      "Demo a paid product",
      "Webinar signups"
    ]
  }
] as InputField[],
  systemPrompt: "You are a growth marketer. Given audience, niche and goal, output 10 specific lead magnet ideas (mix of pdf, tool, quiz, template, email course) and expand the best one into a build-ready outline with a hook and a CTA. Be concrete.",
  pricing: [
  {
    "tier": "Free",
    "price": "$0",
    "desc": "3 generations/month"
  },
  {
    "tier": "Pro",
    "price": "$9/mo",
    "desc": "Unlimited ideas"
  },
  {
    "tier": "Team",
    "price": "$29/mo",
    "desc": "Shared workspace"
  }
],
  mock: (inputs: Record<string, string>): string => {
  const audience = inputs['audience'] || 'your audience'
  const niche = inputs['niche'] || 'your niche'
  const goal = inputs['goal'] || 'grow your list'
  const ideas = [
    'The ${niche} Starter Kit (PDF checklist)',
    'Free ${niche} audit tool',
    '${niche} quiz: "Which type are you?"',
    '5-email crash course on ${niche}',
    'Swipe file of great ${niche} examples',
    '${niche} template pack (Notion/Sheets)',
    'Weekly ${niche} teardown (email)',
    'Calculator: ROI of better ${niche}',
    'Mistakes doc: top ${niche} fails',
    'Mini video course: ${niche} in 15 min'
  ]
  const outline = 'EXPAND: ' + ideas[0] + '\nHook: "' + niche + ' without the overwhelm - a 1-page starter kit for ' + audience + '."\nSections: (1) Setup, (2) First win, (3) Common mistake, (4) Next step.\nCTA: "Want the fill-in template? Join ' + goal + '."'
  return 'LEAD MAGNET IDEAS for ' + audience + ' (goal: ' + goal + ')\n\n' + ideas.map((x,i)=> (i+1)+'. '+x).join('\n') + '\n\n' + outline + '\n\n--- (Mock ideas. Add OPENAI_API_KEY for ideas tuned to your exact offer.)'
}
}
