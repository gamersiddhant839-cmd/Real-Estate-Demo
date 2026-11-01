import { SITE_IMAGES } from './images';

export interface Advisor {
  id: string;
  name: string;
  title: string;
  territory: string;
  experienceYears: number;
  rating: number;
  reviewsCount: number;
  phone: string;
  email: string;
  image: string;
  specialization: string;
}

export const ADVISORS_DATA: Advisor[] = [
  {
    id: 'adv-clara',
    name: 'Clara von Bernstorff',
    title: 'Senior Partner · Swiss & French Riviera',
    territory: 'Geneva · Zurich · Cap d’Antibes',
    experienceYears: 18,
    rating: 5.0,
    reviewsCount: 64,
    phone: '+41 22 819 4000',
    email: 'c.vonbernstorff@valmontestates.com',
    image: SITE_IMAGES.advisors.clara,
    specialization: 'Lakeside Estates & Sovereign Wealth Structuring',
  },
  {
    id: 'adv-marcus',
    name: 'Marcus Sterling',
    title: 'Managing Director · UK & North America',
    territory: 'London (Mayfair) · Aspen · New York',
    experienceYears: 22,
    rating: 4.9,
    reviewsCount: 92,
    phone: '+44 20 7946 0880',
    email: 'm.sterling@valmontestates.com',
    image: SITE_IMAGES.advisors.marcus,
    specialization: 'Prime Heritage Freeholds & Alpine Compunds',
  },
  {
    id: 'adv-helena',
    name: 'Helena Rodriguez Vega',
    title: 'Partner · Mediterranean & Iberian Peninsula',
    territory: 'Marbella · Mallorca · Lisbon',
    experienceYears: 15,
    rating: 4.9,
    reviewsCount: 78,
    phone: '+34 91 389 5520',
    email: 'h.rodriguez@valmontestates.com',
    image: SITE_IMAGES.advisors.helena,
    specialization: 'Modernist Coastal Architecture & Private Enclaves',
  },
  {
    id: 'adv-julian',
    name: 'Julian Takahashi',
    title: 'Director · Asia-Pacific Prime Acquisitions',
    territory: 'Tokyo · Niseko · Kyoto',
    experienceYears: 16,
    rating: 5.0,
    reviewsCount: 54,
    phone: '+81 3 5555 0192',
    email: 'j.takahashi@valmontestates.com',
    image: SITE_IMAGES.advisors.julian,
    specialization: 'Architectural Timber Sanctuaries & Ski-In Estates',
  },
];
