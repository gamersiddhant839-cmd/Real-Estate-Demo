import { SITE_IMAGES } from './images';

export interface PrimeLocation {
  id: string;
  name: string;
  region: string;
  country: string;
  tagline: string;
  description: string;
  activePropertiesCount: number;
  avgPriceSqM: string;
  projectedAnnualGrowth: string;
  image: string;
  coordinates: { lat: number; lng: number };
}

export const PRIME_LOCATIONS: PrimeLocation[] = [
  {
    id: 'loc-geneva',
    name: 'Lake Geneva & Cologny',
    region: 'Canton of Geneva',
    country: 'Switzerland',
    tagline: 'Sovereign wealth stability and lakeside architectural pedigree',
    description: 'Renowned for world-class privacy, sovereign fiscal stability, and exceptional private waterfront estates overlooking the Alps.',
    activePropertiesCount: 8,
    avgPriceSqM: 'CHF 26,500 / m²',
    projectedAnnualGrowth: '+5.4%',
    image: SITE_IMAGES.locations.geneva,
    coordinates: { lat: 46.2044, lng: 6.1432 },
  },
  {
    id: 'loc-niseko',
    name: 'Niseko Alpine Sanctuary',
    region: 'Hokkaido',
    country: 'Japan',
    tagline: 'Asia’s premier powder snow haven with refined Japanese craft',
    description: 'Unmatched volcanic hot springs, champagne powder slopes, and iconic Japanese architectural retreats designed by visionary Pritzker laureates.',
    activePropertiesCount: 6,
    avgPriceSqM: '¥ 1,850,000 / m²',
    projectedAnnualGrowth: '+8.2%',
    image: SITE_IMAGES.locations.niseko,
    coordinates: { lat: 42.863, lng: 140.702 },
  },
  {
    id: 'loc-cotedazur',
    name: 'Cap d’Antibes & Saint-Jean-Cap-Ferrat',
    region: 'Côte d’Azur',
    country: 'France',
    tagline: 'Timeless Mediterranean glamour and deep-water anchorage',
    description: 'The golden standard of European coastal aristocracy, featuring private rocky coves, century-old maritime pines, and private yacht moorings.',
    activePropertiesCount: 11,
    avgPriceSqM: '€ 34,000 / m²',
    projectedAnnualGrowth: '+4.8%',
    image: SITE_IMAGES.locations.cotedazur,
    coordinates: { lat: 43.553, lng: 7.132 },
  },
  {
    id: 'loc-aspen',
    name: 'Aspen & Red Mountain',
    region: 'Colorado',
    country: 'United States',
    tagline: 'The pinnacle of North American alpine culture and exclusivity',
    description: 'Billionaire Mountain compounds blending raw timber and glass, offering ski-in/ski-out convenience and world-renowned cultural institutions.',
    activePropertiesCount: 5,
    avgPriceSqM: '$ 38,000 / m²',
    projectedAnnualGrowth: '+6.5%',
    image: SITE_IMAGES.locations.aspen,
    coordinates: { lat: 39.1911, lng: -106.8175 },
  },
  {
    id: 'loc-mayfair',
    name: 'Mayfair & Belgravia',
    region: 'London',
    country: 'United Kingdom',
    tagline: 'Historic royal squares and high-ceilinged neoclassical grandeur',
    description: 'Ultra-prime central London addresses surrounded by heritage gardens, Michelin gastronomy, and bespoke Savile Row tailoring.',
    activePropertiesCount: 9,
    avgPriceSqM: '£ 28,000 / m²',
    projectedAnnualGrowth: '+5.1%',
    image: SITE_IMAGES.locations.mayfair,
    coordinates: { lat: 51.511, lng: -0.151 },
  },
  {
    id: 'loc-dubai',
    name: 'Palm Jumeirah & Emirates Hills',
    region: 'Dubai',
    country: 'United Arab Emirates',
    tagline: 'Future-forward architectural statements with private beachfronts',
    description: 'Tax-neutral ultra-luxury villas with private private berths, cutting-edge smart home automation, and 365 days of Arabian Gulf sunshine.',
    activePropertiesCount: 14,
    avgPriceSqM: 'AED 42,000 / m²',
    projectedAnnualGrowth: '+11.2%',
    image: SITE_IMAGES.locations.dubai,
    coordinates: { lat: 25.1124, lng: 55.139 },
  },
];
