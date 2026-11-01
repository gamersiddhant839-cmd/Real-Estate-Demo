import React, { useState } from 'react';
import { X, Bed, Bath, Maximize2, Calendar, MapPin, Check, Shield, Download, ArrowUpRight, Calculator } from 'lucide-react';
import { Property, calculateInvestmentYield } from '../utils/propertyFilters';
import { ArchitecturalImage } from './ArchitecturalImage';

interface PropertyDetailModalProps {
  property: Property | null;
  allProperties: Property[];
  onClose: () => void;
  onSelectProperty: (property: Property) => void;
  onRequestViewing: (propertyId: string, propertyName: string) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  allProperties,
  onClose,
  onSelectProperty,
  onRequestViewing,
}) => {
  if (!property) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Combine hero image and gallery for the viewer
  const fullGallery = [property.heroImage, ...(property.gallery || [])];
  const activeImage = fullGallery[activeImageIndex] || property.heroImage;

  // Related properties in same category or status
  const relatedProperties = allProperties
    .filter((p) => p.id !== property.id && (p.category === property.category || p.status === property.status))
    .slice(0, 2);

  // Investment yield calculation
  const monthlyRentEstimated = property.investmentMetrics?.monthlyProjectedRentalIncome || Math.round(property.price * 0.004);
  const yieldStats = calculateInvestmentYield(property.price, monthlyRentEstimated);

  const handleDownloadDossier = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 md:p-10 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="property-detail-title"
    >
      {/* Modal Container */}
      <div className="relative w-full max-w-6xl bg-[#FAF9F5] border border-[#E5E0D5] shadow-2xl text-[#14171A] my-auto overflow-hidden">
        {/* Sticky Modal Top Bar with Close Button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#E5E0D5]">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C6938] font-semibold border border-[#E5E0D5] px-2.5 py-1 bg-white">
              {property.status === 'buy' ? 'Acquisition' : property.status === 'rent' ? 'Seasonal Lease' : 'Investment Asset'}
            </span>
            <span className="text-xs text-[#7A828E] hidden sm:inline font-mono">
              Ref: {property.slug.toUpperCase().slice(0, 16)}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#7A828E] hover:text-[#14171A] hover:bg-[#F0EDE6] transition-colors focus:outline-none focus:ring-1 focus:ring-[#A37E4C]"
            aria-label="Close Property Dossier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 md:p-10 max-h-[85vh] overflow-y-auto space-y-12">
          {/* Section 1: Monumental Gallery Viewer */}
          <div className="space-y-4">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F2EFE9] border border-[#E5E0D5] shadow-xs">
              <ArchitecturalImage
                src={activeImage}
                alt={property.title}
                aspectRatioClass="aspect-[16/9]"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 text-xs text-[#14171A] border border-[#E5E0D5] font-medium">
                <span>View {activeImageIndex + 1} of {fullGallery.length}</span>
              </div>
            </div>

            {/* Gallery Thumbnail Strip */}
            {fullGallery.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
                {fullGallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-24 h-16 shrink-0 overflow-hidden border transition-all ${
                      activeImageIndex === idx
                        ? 'border-[#14171A] scale-95 opacity-100 shadow-sm'
                        : 'border-[#E5E0D5] opacity-60 hover:opacity-100'
                    }`}
                  >
                    <ArchitecturalImage
                      src={img}
                      alt={`${property.title} view ${idx + 1}`}
                      aspectRatioClass="aspect-[24/16]"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Section 2: Core Header & Specifications */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-b border-[#E5E0D5] pb-10">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-xs text-[#8C6938] font-medium">
                <MapPin className="w-3.5 h-3.5" />
                <span>{property.location.address}, {property.location.city}, {property.location.country}</span>
              </div>
              <h1 id="property-detail-title" className="font-serif text-3xl sm:text-5xl font-normal leading-tight text-[#14171A]">
                {property.title}
              </h1>
              <p className="text-sm text-[#5E6470] font-light italic">
                {property.tagline}
              </p>
              {property.specs.architect && (
                <p className="text-xs text-[#14171A] pt-1">
                  Design Architecture: <strong className="font-medium text-[#8C6938]">{property.specs.architect}</strong> (Completed {property.specs.yearBuilt})
                </p>
              )}
            </div>

            {/* Price & Primary CTA Card */}
            <div className="lg:col-span-4 bg-white border border-[#E5E0D5] p-6 space-y-4 shadow-xs">
              <div>
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#7A828E] block font-medium">
                  Guide Price / Valuation
                </span>
                <span className="font-serif text-3xl sm:text-4xl text-[#14171A] tabular-nums font-medium block">
                  {property.priceFormatted}
                  {property.pricePeriod === 'month' && (
                    <span className="text-xs font-sans text-[#7A828E] ml-1">/ mo</span>
                  )}
                </span>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={() => onRequestViewing(property.id, property.title)}
                  className="w-full py-3 bg-[#14171A] hover:bg-[#2A2E35] text-white text-xs uppercase tracking-[0.18em] font-semibold transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <Calendar className="w-4 h-4 text-[#D4B886]" />
                  <span>Request Private Viewing</span>
                </button>

                <button
                  onClick={handleDownloadDossier}
                  className="w-full py-2.5 border border-[#E5E0D5] hover:border-[#14171A] text-[#14171A] text-xs uppercase tracking-[0.16em] transition-colors flex items-center justify-center gap-2 bg-[#FAF9F5]"
                >
                  <Download className="w-3.5 h-3.5 text-[#8C6938]" />
                  <span>Download Private Dossier</span>
                </button>
              </div>

              {downloadSuccess && (
                <p className="text-[11px] text-emerald-700 text-center animate-fadeIn font-medium">
                  ✓ Architectural Dossier PDF generated and dispatched.
                </p>
              )}
            </div>
          </div>

          {/* Section 3: Architectural Dimensions */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.24em] text-[#8C6938] font-semibold mb-4">
              Spatial Specifications
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white border border-[#E5E0D5] p-4 shadow-2xs">
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#8C93A0] block font-medium">Bedrooms</span>
                <span className="font-serif text-2xl text-[#14171A] tabular-nums font-medium">{property.specs.bedrooms} Suites</span>
              </div>
              <div className="bg-white border border-[#E5E0D5] p-4 shadow-2xs">
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#8C93A0] block font-medium">Bathrooms</span>
                <span className="font-serif text-2xl text-[#14171A] tabular-nums font-medium">{property.specs.bathrooms} Baths</span>
              </div>
              <div className="bg-white border border-[#E5E0D5] p-4 shadow-2xs">
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#8C93A0] block font-medium">Living Volume</span>
                <span className="font-serif text-2xl text-[#14171A] tabular-nums font-medium">{property.specs.livingAreaSqM} m² ({property.specs.livingAreaSqFt} sq ft)</span>
              </div>
              <div className="bg-white border border-[#E5E0D5] p-4 shadow-2xs">
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#8C93A0] block font-medium">Floors / Levels</span>
                <span className="font-serif text-2xl text-[#14171A] tabular-nums font-medium">{property.specs.floors} Levels</span>
              </div>
            </div>
          </div>

          {/* Section 4: Architectural Narrative & Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xs uppercase tracking-[0.24em] text-[#8C6938] font-semibold">
                Architectural Statement
              </h3>
              <p className="text-sm text-[#4E5562] font-light leading-relaxed">
                {property.description}
              </p>
              <div className="pt-4">
                <h4 className="text-xs uppercase tracking-[0.18em] text-[#14171A] font-semibold mb-3">
                  Signature Structural Highlights
                </h4>
                <ul className="space-y-2">
                  {property.architecturalHighlights.map((highlight, i) => (
                    <li key={i} className="text-xs text-[#5E6470] flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-[#A37E4C] rounded-full mt-1.5 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Amenities & Security Checklist */}
            <div className="lg:col-span-5 bg-white border border-[#E5E0D5] p-6 space-y-4 shadow-xs">
              <h3 className="text-xs uppercase tracking-[0.24em] text-[#8C6938] font-semibold">
                Curated Amenities
              </h3>
              <ul className="space-y-2.5">
                {property.amenities.map((amenity, i) => (
                  <li key={i} className="text-xs text-[#2A2E35] flex items-center gap-2.5">
                    <Check className="w-3.5 h-3.5 text-[#8C6938] shrink-0" />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-[#ECE7DD] text-[11px] text-[#7A828E] flex items-center gap-2 font-medium">
                <Shield className="w-4 h-4 text-[#8C6938]" />
                <span>Verified Clean Title · Sovereign Title Guarantee</span>
              </div>
            </div>
          </div>

          {/* Section 5: Investment Metrics & Yield Modeling */}
          {property.investmentMetrics && (
            <div className="bg-white border border-[#E5E0D5] p-6 md:p-8 space-y-6 shadow-xs">
              <div className="flex items-center gap-2">
                <Calculator className="w-4 h-4 text-[#8C6938]" />
                <h3 className="text-xs uppercase tracking-[0.24em] text-[#8C6938] font-semibold">
                  Capital Performance & Tenancy Yield Projections
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#8C93A0] block font-medium">
                    Gross Annual Yield
                  </span>
                  <span className="font-serif text-3xl text-[#14171A] tabular-nums font-medium">
                    {yieldStats.grossYieldPercent}%
                  </span>
                  <span className="text-[11px] text-[#7A828E] block mt-1 font-light">
                    Based on ${monthlyRentEstimated.toLocaleString()} / mo lease
                  </span>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#8C93A0] block font-medium">
                    5-Year Projected Asset Value
                  </span>
                  <span className="font-serif text-3xl text-[#8C6938] tabular-nums font-medium">
                    ${yieldStats.projected5YrValue.toLocaleString()}
                  </span>
                  <span className="text-[11px] text-[#7A828E] block mt-1 font-light">
                    Compounded at 5% prime annual rate
                  </span>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[#8C93A0] block font-medium">
                    Target Portfolio IRR
                  </span>
                  <span className="font-serif text-3xl text-[#14171A] tabular-nums font-medium">
                    {property.investmentMetrics.irrPercent}%
                  </span>
                  <span className="text-[11px] text-[#7A828E] block mt-1 font-light">
                    Internal Rate of Return
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Section 6: Related Curated Residences */}
          {relatedProperties.length > 0 && (
            <div className="pt-6 border-t border-[#E5E0D5]">
              <h3 className="text-xs uppercase tracking-[0.24em] text-[#8C6938] font-semibold mb-6">
                Related Portfolios
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedProperties.map((related) => (
                  <div
                    key={related.id}
                    onClick={() => {
                      onSelectProperty(related);
                      setActiveImageIndex(0);
                    }}
                    className="group cursor-pointer bg-white border border-[#E5E0D5] hover:border-[#A37E4C] p-4 flex items-center gap-4 transition-all shadow-2xs"
                  >
                    <div className="w-20 h-16 shrink-0 overflow-hidden bg-[#F2EFE9]">
                      <ArchitecturalImage
                        src={related.heroImage}
                        alt={related.title}
                        aspectRatioClass="aspect-[4/3]"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#8C6938] uppercase tracking-wider block font-semibold">
                        {related.location.city}, {related.location.country}
                      </span>
                      <h4 className="font-serif text-base text-[#14171A] group-hover:text-[#8C6938] transition-colors line-clamp-1">
                        {related.title}
                      </h4>
                      <span className="text-xs text-[#5E6470] tabular-nums">
                        {related.priceFormatted}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
