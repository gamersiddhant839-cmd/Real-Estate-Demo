export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'acquisition' | 'confidentiality' | 'investment' | 'viewing';
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'confidentiality',
    question: 'How do you preserve total discretion and buyer anonymity?',
    answer:
      'Over 60% of our portfolio consists of confidential off-market assets. We operate under bilateral non-disclosure agreements (NDAs) and can coordinate directly with your family office, legal trustees, or designated advisors. Property viewings are strictly private with no commercial signage or public disclosures.',
  },
  {
    id: 'faq-2',
    category: 'acquisition',
    question: 'What is the acquisition procedure for non-resident international buyers?',
    answer:
      'Cross-border acquisitions vary by jurisdiction (e.g. Lex Koller regulations in Switzerland, Golden Visa programs in Spain, or freehold titles in the UK and UAE). Our legal advisory partners manage notary coordination, cross-border fiscal clearance, and escrow guarantees from initial letter of intent through key handover.',
  },
  {
    id: 'faq-3',
    category: 'viewing',
    question: 'How are private international viewings and inspections coordinated?',
    answer:
      'We curate bespoke physical itineraries including private chauffeur transfers, discreet security details, and helicopter charters where needed. For clients unable to travel immediately, we deliver encrypted 4K biometric video walkthroughs and full structural engineering dossiers.',
  },
  {
    id: 'faq-4',
    category: 'investment',
    question: 'Can you provide portfolio modeling and sovereign tax structuring?',
    answer:
      'Yes. Each prime property is accompanied by an institutional investment memorandum detailing historical capital appreciation, tenancy yield projections, local property tax liabilities, and wealth preservation advantages.',
  },
  {
    id: 'faq-5',
    category: 'acquisition',
    question: 'Do you manage property handover and private concierge post-acquisition?',
    answer:
      'Our Private Estates division provides comprehensive post-acquisition onboarding: domestic staffing recruitment, security system recalibration, wine cellar cataloging, and ongoing preventative architectural maintenance.',
  },
];
