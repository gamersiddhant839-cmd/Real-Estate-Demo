import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterProperties,
  formatCurrency,
  calculateInvestmentYield,
  validateEnquiryForm,
  Property,
} from './propertyFilters';

const sampleProperties: Property[] = [
  {
    id: 'prop-1',
    title: 'The Aurel Pavilion',
    slug: 'the-aurel-pavilion',
    tagline: 'Monumental cantilevered residence perched above Lake Geneva',
    category: 'villa',
    status: 'buy',
    featured: true,
    price: 8500000,
    currency: 'USD',
    priceFormatted: '$8,500,000',
    location: {
      city: 'Geneva',
      region: 'Lake Geneva',
      country: 'Switzerland',
      address: 'Chemin des Collines 14, Cologny',
    },
    specs: {
      bedrooms: 5,
      bathrooms: 6,
      livingAreaSqM: 620,
      livingAreaSqFt: 6670,
      floors: 3,
      yearBuilt: 2023,
      architect: 'Vincent Van Duysen Architecture',
    },
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    gallery: [],
    description: 'An architectural tour-de-force...',
    architecturalHighlights: ['Board-formed concrete', 'Triple-height glass atrium'],
    amenities: ['Infinity pool', 'Wine cellar'],
    assignedAdvisorId: 'adv-1',
  },
  {
    id: 'prop-2',
    title: 'Komorebi Glass Villa',
    slug: 'komorebi-glass-villa',
    tagline: 'Minimalist cedar and concrete sanctuary overlooking Mount Yotei',
    category: 'chalet',
    status: 'rent',
    featured: true,
    price: 32000,
    currency: 'USD',
    priceFormatted: '$32,000',
    pricePeriod: 'month',
    location: {
      city: 'Niseko',
      region: 'Hokkaido',
      country: 'Japan',
      address: 'Hirafu Alpine Ridge 88',
    },
    specs: {
      bedrooms: 4,
      bathrooms: 4,
      livingAreaSqM: 390,
      livingAreaSqFt: 4197,
      floors: 2,
      yearBuilt: 2024,
      architect: 'Kengo Kuma & Associates',
    },
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
    gallery: [],
    description: 'A serene Japanese alpine residence...',
    architecturalHighlights: ['Charred Shou Sugi Ban cedar'],
    amenities: ['Private onsen', 'Heated ski room'],
    assignedAdvisorId: 'adv-2',
  },
  {
    id: 'prop-3',
    title: 'The Solstice Penthouse',
    slug: 'the-solstice-penthouse',
    tagline: 'Duplex sky residence with 360-degree skyline views',
    category: 'penthouse',
    status: 'investment',
    featured: false,
    price: 5200000,
    currency: 'USD',
    priceFormatted: '$5,200,000',
    location: {
      city: 'London',
      region: 'Mayfair',
      country: 'United Kingdom',
      address: '12 Grosvenor Square',
    },
    specs: {
      bedrooms: 3,
      bathrooms: 3,
      livingAreaSqM: 310,
      livingAreaSqFt: 3336,
      floors: 2,
      yearBuilt: 2022,
    },
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
    gallery: [],
    description: 'Ultra-prime Mayfair duplex...',
    architecturalHighlights: ['Private elevator lobby'],
    amenities: ['24/7 Concierge', 'Valet parking'],
    assignedAdvisorId: 'adv-1',
  },
];

test('filterProperties: filters by status correctly', () => {
  const buyResults = filterProperties(sampleProperties, { status: 'buy' });
  assert.equal(buyResults.length, 1);
  assert.equal(buyResults[0].id, 'prop-1');

  const rentResults = filterProperties(sampleProperties, { status: 'rent' });
  assert.equal(rentResults.length, 1);
  assert.equal(rentResults[0].id, 'prop-2');

  const allResults = filterProperties(sampleProperties, { status: 'all' });
  assert.equal(allResults.length, 3);
});

test('filterProperties: filters by location query', () => {
  const japanResults = filterProperties(sampleProperties, { location: 'Japan' });
  assert.equal(japanResults.length, 1);
  assert.equal(japanResults[0].location.city, 'Niseko');

  const londonResults = filterProperties(sampleProperties, { location: 'London' });
  assert.equal(londonResults.length, 1);
  assert.equal(londonResults[0].id, 'prop-3');
});

test('filterProperties: filters by minimum bedrooms', () => {
  const fourBeds = filterProperties(sampleProperties, { minBeds: 4 });
  assert.equal(fourBeds.length, 2);

  const fiveBeds = filterProperties(sampleProperties, { minBeds: 5 });
  assert.equal(fiveBeds.length, 1);
  assert.equal(fiveBeds[0].specs.bedrooms, 5);
});

test('filterProperties: keyword search searches title, architect, and location', () => {
  const archMatch = filterProperties(sampleProperties, { searchQuery: 'Kengo Kuma' });
  assert.equal(archMatch.length, 1);
  assert.equal(archMatch[0].id, 'prop-2');

  const pavMatch = filterProperties(sampleProperties, { searchQuery: 'Pavilion' });
  assert.equal(pavMatch.length, 1);
});

test('formatCurrency: correctly formats amounts and periods', () => {
  assert.equal(formatCurrency(8500000, 'USD'), '$8,500,000');
  assert.equal(formatCurrency(32000, 'USD', 'month'), '$32,000 / mo');
});

test('calculateInvestmentYield: computes gross yields and 5yr projection', () => {
  const yieldResult = calculateInvestmentYield(2000000, 10000);
  assert.equal(yieldResult.annualRentalIncome, 120000);
  assert.equal(yieldResult.grossYieldPercent, 6.0);
  assert.ok(yieldResult.projected5YrValue > 2000000);
});

test('validateEnquiryForm: validates mandatory inputs correctly', () => {
  const invalid = validateEnquiryForm({
    fullName: '',
    email: 'bad-email',
    phone: '123',
    interestType: 'purchase',
    message: '',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.phone);
  assert.ok(invalid.errors.message);

  const valid = validateEnquiryForm({
    fullName: 'Lady Eleanor Vance',
    email: 'eleanor.vance@mayfairholdings.co.uk',
    phone: '+44 20 7946 0912',
    interestType: 'private-viewing',
    message: 'Seeking a private confidential viewing on Thursday afternoon.',
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});
