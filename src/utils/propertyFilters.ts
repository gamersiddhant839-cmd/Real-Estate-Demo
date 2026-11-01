export interface Property {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  category: 'villa' | 'penthouse' | 'estate' | 'chalet' | 'coastal';
  status: 'buy' | 'rent' | 'investment';
  featured: boolean;
  price: number;
  currency: string;
  priceFormatted: string;
  pricePeriod?: 'month' | 'total';
  location: {
    city: string;
    region: string;
    country: string;
    address: string;
    coordinates?: { lat: number; lng: number };
  };
  specs: {
    bedrooms: number;
    bathrooms: number;
    livingAreaSqM: number;
    livingAreaSqFt: number;
    lotSizeSqM?: number;
    floors: number;
    yearBuilt: number;
    architect?: string;
  };
  investmentMetrics?: {
    grossYieldPercent: number;
    irrPercent: number;
    projectedAppreciationPercent: number;
    monthlyProjectedRentalIncome: number;
  };
  heroImage: string;
  gallery: string[];
  description: string;
  architecturalHighlights: string[];
  amenities: string[];
  assignedAdvisorId: string;
}

export interface FilterCriteria {
  status?: 'all' | 'buy' | 'rent' | 'investment';
  category?: 'all' | 'villa' | 'penthouse' | 'estate' | 'chalet' | 'coastal';
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  minBeds?: number;
  searchQuery?: string;
}

export interface EnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  interestType: 'purchase' | 'rental' | 'private-viewing' | 'investment-dossier';
  preferredDate?: string;
  propertyId?: string;
  propertyName?: string;
  message: string;
}

export interface FormValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

/**
 * Filter properties based on luxury search criteria
 */
export function filterProperties(
  properties: Property[],
  criteria: FilterCriteria
): Property[] {
  return properties.filter((property) => {
    // Status filter
    if (criteria.status && criteria.status !== 'all') {
      if (property.status !== criteria.status) return false;
    }

    // Category filter
    if (criteria.category && criteria.category !== 'all') {
      if (property.category !== criteria.category) return false;
    }

    // Location filter (matches city or country, case insensitive)
    if (criteria.location && criteria.location !== 'all' && criteria.location.trim() !== '') {
      const targetLoc = criteria.location.toLowerCase();
      const matchCity = property.location.city.toLowerCase().includes(targetLoc);
      const matchCountry = property.location.country.toLowerCase().includes(targetLoc);
      const matchRegion = property.location.region.toLowerCase().includes(targetLoc);
      if (!matchCity && !matchCountry && !matchRegion) return false;
    }

    // Min price
    if (criteria.minPrice !== undefined && criteria.minPrice > 0) {
      if (property.price < criteria.minPrice) return false;
    }

    // Max price
    if (criteria.maxPrice !== undefined && criteria.maxPrice > 0) {
      if (property.price > criteria.maxPrice) return false;
    }

    // Min bedrooms
    if (criteria.minBeds !== undefined && criteria.minBeds > 0) {
      if (property.specs.bedrooms < criteria.minBeds) return false;
    }

    // Keyword search
    if (criteria.searchQuery && criteria.searchQuery.trim() !== '') {
      const q = criteria.searchQuery.toLowerCase().trim();
      const matchTitle = property.title.toLowerCase().includes(q);
      const matchTagline = property.tagline.toLowerCase().includes(q);
      const matchCity = property.location.city.toLowerCase().includes(q);
      const matchCountry = property.location.country.toLowerCase().includes(q);
      const matchArch = (property.specs.architect || '').toLowerCase().includes(q);
      const matchCategory = property.category.toLowerCase().includes(q);
      if (!matchTitle && !matchTagline && !matchCity && !matchCountry && !matchArch && !matchCategory) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Formats monetary amounts with international luxury conventions
 */
export function formatCurrency(amount: number, currency = 'USD', period?: 'month' | 'total'): string {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 0,
  }).format(amount);

  if (period === 'month') {
    return `${formatted} / mo`;
  }
  return formatted;
}

/**
 * Calculates key investment yield ratios
 */
export function calculateInvestmentYield(
  price: number,
  monthlyRent: number,
  annualAppreciationRate = 0.05
) {
  if (price <= 0) {
    return { grossYieldPercent: 0, projected5YrValue: 0, annualRentalIncome: 0 };
  }
  const annualRentalIncome = monthlyRent * 12;
  const grossYieldPercent = Number(((annualRentalIncome / price) * 100).toFixed(2));
  const projected5YrValue = Math.round(price * Math.pow(1 + annualAppreciationRate, 5));

  return {
    grossYieldPercent,
    projected5YrValue,
    annualRentalIncome,
  };
}

/**
 * Strict validator for real estate viewing and enquiry form
 */
export function validateEnquiryForm(data: EnquiryFormData): FormValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (minimum 2 characters)';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please provide a valid email address';
  }

  const phoneClean = (data.phone || '').replace(/[^0-9+]/g, '');
  if (!phoneClean || phoneClean.length < 7) {
    errors.phone = 'Please provide a valid international telephone number';
  }

  if (!data.message || data.message.trim().length < 6) {
    errors.message = 'Please specify your requirements or preferred viewing times';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
