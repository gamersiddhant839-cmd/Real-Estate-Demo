import React, { useState } from 'react';
import { ArrowUpRight, Bed, Bath, Maximize2, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';
import { Property, FilterCriteria } from '../utils/propertyFilters';
import { ArchitecturalImage } from './ArchitecturalImage';

interface PropertiesSectionProps {
  properties: Property[];
  filterCriteria: FilterCriteria;
  onFilterChange: (newCriteria: Partial<FilterCriteria>) => void;
  onResetFilters: () => void;
  onSelectProperty: (property: Property) => void;
  onOpenEnquiryModal: (propertyId?: string, propertyName?: string) => void;
}

export const PropertiesSection: React.FC<PropertiesSectionProps> = ({
  properties,
  filterCriteria,
  onFilterChange,
  onResetFilters,
  onSelectProperty,
  onOpenEnquiryModal,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'villa' | 'penthouse' | 'chalet' | 'estate' | 'coastal'>('all');

  const handleTabChange = (category: 'all' | 'villa' | 'penthouse' | 'chalet' | 'estate' | 'coastal') => {
    setActiveTab(category);
    onFilterChange({ category });
  };

  return (
    <section id="properties" className="py-28 px-6 md:px-10 bg-[#FAF9F5] border-t border-[#E8E3D8]">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header with Scroll Fade */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-[#E5E0D5]"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#A37E4C]" />
              <span className="text-xs uppercase tracking-[0.24em] text-[#8C6938] font-semibold">
                The Portfolio
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#14171A] font-normal tracking-[-0.015em]">
              Curated Architectural Residences
            </h2>
          </div>

          <p className="text-sm text-[#5E6470] max-w-md font-light leading-relaxed">
            Every estate is hand-selected for architectural pedigree, rare geographic positioning, and enduring generational wealth preservation.
          </p>
        </motion.div>

        {/* Filter Navigation Bar & Quick Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          {/* Typology Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none bg-[#F3EFE7] p-1 border border-[#E2DDD2]">
            {[
              { id: 'all', label: 'All Typologies' },
              { id: 'villa', label: 'Villas' },
              { id: 'penthouse', label: 'Penthouses' },
              { id: 'chalet', label: 'Alpine Chalets' },
              { id: 'estate', label: 'Country Estates' },
              { id: 'coastal', label: 'Coastal Waterfront' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id as any)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.14em] transition-all whitespace-nowrap shrink-0 ${
                  activeTab === tab.id
                    ? 'bg-[#14171A] text-white font-medium shadow-sm'
                    : 'text-[#5E6470] hover:text-[#14171A]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Quick Counter & Reset */}
          <div className="flex items-center gap-4 text-xs text-[#7A828E]">
            <span>
              Showing <strong className="text-[#14171A] font-medium">{properties.length}</strong> Prime Residences
            </span>
            {(filterCriteria.status !== 'all' ||
              filterCriteria.category !== 'all' ||
              Boolean(filterCriteria.location) ||
              Boolean(filterCriteria.maxPrice)) && (
              <button
                onClick={onResetFilters}
                className="flex items-center gap-1.5 text-[#8C6938] hover:text-[#A37E4C] transition-colors font-medium"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Empty State */}
        {properties.length === 0 ? (
          <div className="py-20 text-center bg-white border border-[#E5E0D5] p-8 max-w-xl mx-auto my-8 shadow-sm">
            <span className="font-serif text-2xl text-[#14171A] block mb-2">
              No matching residences found
            </span>
            <p className="text-sm text-[#5E6470] mb-6 font-light">
              We periodically hold ultra-private off-market acquisitions that are not displayed publicly. Contact our advisory desk for private allocations.
            </p>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={onResetFilters}
                className="px-6 py-2.5 bg-[#FAF9F5] border border-[#E5E0D5] hover:bg-[#F3EFE7] text-[#14171A] text-xs uppercase tracking-[0.16em]"
              >
                Clear Filters
              </button>
              <button
                onClick={() => onOpenEnquiryModal()}
                className="px-6 py-2.5 bg-[#14171A] hover:bg-[#2A2E35] text-white text-xs uppercase tracking-[0.16em] font-semibold"
              >
                Request Off-Market Dossier
              </button>
            </div>
          </div>
        ) : (
          /* Editorial Grid / Asymmetric Layout with Motion Scroll Reveals */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <motion.article
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => onSelectProperty(property)}
                className="group cursor-pointer bg-white border border-[#E5E0D5] hover:border-[#A37E4C] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
              >
                {/* Image Container with Refined Hover Micro-Interaction */}
                <div className="relative overflow-hidden aspect-[16/11] bg-[#F2EFE9]">
                  <ArchitecturalImage
                    src={property.heroImage}
                    alt={property.title}
                    monogram={property.title.charAt(0)}
                    aspectRatioClass="aspect-[16/11]"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Status Overlay Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-[#14171A] text-[10px] uppercase tracking-[0.18em] border border-[#E5E0D5] font-semibold shadow-xs">
                      {property.status === 'buy' ? 'For Acquisition' : property.status === 'rent' ? 'Seasonal Lease' : 'Investment Asset'}
                    </span>
                    {property.featured && (
                      <span className="px-2.5 py-1 bg-[#14171A] text-white text-[10px] uppercase tracking-[0.18em] font-semibold">
                        Signature
                      </span>
                    )}
                  </div>

                  {/* Corner Reveal Action Button */}
                  <div className="absolute bottom-4 right-4 w-9 h-9 bg-white/95 backdrop-blur-md border border-[#E5E0D5] text-[#14171A] flex items-center justify-center transition-all duration-300 group-hover:bg-[#14171A] group-hover:text-white group-hover:border-[#14171A] shadow-sm">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Details Container */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Location & Architect */}
                    <div className="flex items-center justify-between text-xs text-[#7A828E] mb-2 tracking-wide font-medium">
                      <span>{property.location.city}, {property.location.country}</span>
                      {property.specs.architect && (
                        <span className="text-[#8C6938] text-[11px] truncate max-w-[140px] font-serif italic">
                          {property.specs.architect.split('&')[0]}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl sm:text-2xl text-[#14171A] group-hover:text-[#8C6938] transition-colors leading-snug">
                      {property.title}
                    </h3>

                    {/* Tagline */}
                    <p className="mt-2 text-xs text-[#5E6470] font-light line-clamp-2 leading-relaxed">
                      {property.tagline}
                    </p>
                  </div>

                  {/* Specs & Pricing Footer */}
                  <div className="pt-4 border-t border-[#ECE7DD] mt-auto">
                    {/* Specifications List */}
                    <div className="grid grid-cols-3 gap-2 text-xs text-[#5E6470] pb-4">
                      <div className="flex items-center gap-1.5">
                        <Bed className="w-3.5 h-3.5 text-[#8C6938]" />
                        <span>{property.specs.bedrooms} Beds</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Bath className="w-3.5 h-3.5 text-[#8C6938]" />
                        <span>{property.specs.bathrooms} Baths</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5 text-[#8C6938]" />
                        <span>{property.specs.livingAreaSqM} m²</span>
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-2">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.16em] text-[#8C93A0] block font-medium">
                          Guide Price
                        </span>
                        <span className="font-serif text-lg sm:text-xl text-[#14171A] tabular-nums font-medium">
                          {property.priceFormatted}
                          {property.pricePeriod === 'month' && (
                            <span className="text-xs font-sans text-[#7A828E] ml-1">/ mo</span>
                          )}
                        </span>
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProperty(property);
                        }}
                        className="text-xs uppercase tracking-[0.16em] text-[#8C6938] hover:text-[#14171A] flex items-center gap-1 font-semibold transition-colors"
                      >
                        <span>View Dossier</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
