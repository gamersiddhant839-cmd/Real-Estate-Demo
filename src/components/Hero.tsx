import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Search, MapPin, Building, DollarSign, Play, Star, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { SITE_IMAGES } from '../data/images';
import { FilterCriteria } from '../utils/propertyFilters';
import { VideoTourModal } from './VideoTourModal';

interface HeroProps {
  filterCriteria: FilterCriteria;
  onFilterChange: (newCriteria: Partial<FilterCriteria>) => void;
  onSearchSubmit: () => void;
  onOpenEnquiryModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  filterCriteria,
  onFilterChange,
  onSearchSubmit,
  onOpenEnquiryModal,
}) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <section className="relative pt-32 pb-20 px-6 md:px-10 bg-[#FAF9F5] text-[#14171A] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Top Editorial Split Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10 md:mb-14">
            {/* Left Column: Monogram & Monumental Editorial Typography */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 mb-5"
              >
                <span className="w-7 h-[1.5px] bg-[#A37E4C]" />
                <span className="text-xs uppercase tracking-[0.24em] text-[#8C6938] font-semibold">
                  Valmont Private Estates
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-normal leading-[1.04] tracking-[-0.025em] text-[#14171A] text-balance"
              >
                Find a sanctuary you will <br className="hidden sm:inline" />
                <span className="italic font-normal text-[#8C6938]">call home</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#properties"
                  className="px-7 py-3.5 bg-[#14171A] hover:bg-[#2A2E35] text-white text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 flex items-center gap-2 group shadow-sm hover:shadow-md"
                >
                  <span>Explore Properties</span>
                  <ArrowDown className="w-3.5 h-3.5 text-[#D4B886] transition-transform group-hover:translate-y-0.5" />
                </a>

                <button
                  onClick={onOpenEnquiryModal}
                  className="px-7 py-3.5 border border-[#14171A] hover:bg-[#14171A] text-[#14171A] hover:text-white text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 bg-transparent flex items-center gap-2"
                >
                  <span>Book a Consultation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8C6938]" />
                </button>
              </motion.div>
            </div>

            {/* Right Column: Interactive Virtual Tour Teaser + Editorial Statement + Proof Strip */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 space-y-6 flex flex-col justify-between"
            >
              {/* Interactive 4K Film Walkthrough Card (Fills the Upper-Right Empty Gap) */}
              <div
                onClick={() => setIsVideoModalOpen(true)}
                className="group cursor-pointer bg-white border border-[#E5E0D5] hover:border-[#A37E4C] p-3.5 sm:p-4 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] flex items-center gap-4 relative overflow-hidden"
              >
                {/* Micro Thumbnail with Play Button */}
                <div className="relative w-24 sm:w-28 aspect-[4/3] shrink-0 overflow-hidden bg-[#F2EFE9] border border-[#E5E0D5]">
                  <img
                    src={SITE_IMAGES.hero.main}
                    alt="The Cologny Pavilion Walkthrough Preview"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-black/25 flex items-center justify-center transition-opacity group-hover:bg-black/40">
                    <div className="w-8 h-8 rounded-full bg-[#14171A]/90 text-[#D4B886] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] text-[#8C6938] font-semibold mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C6938] animate-pulse" />
                    <span>4K Private Tour Preview</span>
                  </div>

                  <h3 className="font-serif text-base sm:text-lg text-[#14171A] group-hover:text-[#8C6938] transition-colors truncate font-medium">
                    The Cologny Pavilion
                  </h3>

                  <p className="text-[11px] text-[#7A828E] truncate font-light mt-0.5">
                    Lake Geneva · 3 min architectural film
                  </p>

                  <div className="mt-2 flex items-center gap-2 text-[10px] text-[#14171A] font-medium">
                    <span className="text-[#8C6938]">Play Video Walkthrough</span>
                    <ArrowUpRight className="w-3 h-3 text-[#8C6938] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>

              {/* Editorial Statement */}
              <p className="text-sm sm:text-base text-[#525966] font-light leading-relaxed">
                Curating monumental private villas, high-altitude alpine retreats, and historic city freeholds across Geneva, Zurich, London, Aspen, and Tokyo. With Valmont, you discover living spaces crafted by visionary architects for enduring generational heritage.
              </p>

              {/* Metric Trust Strip */}
              <div className="pt-2 flex items-center gap-6 text-xs text-[#7A828E] border-t border-[#E5E0D5]">
                <div>
                  <span className="font-serif text-lg text-[#14171A] block font-medium tabular-nums">
                    $2.4B+
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-[#8C93A0]">
                    Transacted
                  </span>
                </div>
                <div className="w-[1px] h-8 bg-[#E5E0D5]" />
                <div>
                  <span className="font-serif text-lg text-[#14171A] block font-medium tabular-nums">
                    98.4%
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-[#8C93A0]">
                    Off-Market
                  </span>
                </div>
                <div className="w-[1px] h-8 bg-[#E5E0D5]" />
                <div>
                  <span className="font-serif text-lg text-[#14171A] block font-medium tabular-nums">
                    14
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-[#8C93A0]">
                    Global Hubs
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Monumental Hero Architectural Image Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[2.2/1] overflow-hidden bg-[#EDE8DE] border border-[#E0D9CC] shadow-[0_20px_50px_rgba(0,0,0,0.08)] group"
          >
            <img
              src={SITE_IMAGES.hero.main}
              alt={SITE_IMAGES.hero.alt}
              className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-103"
              loading="eager"
            />

            {/* Architectural Badge & Details Overlay */}
            <div className="absolute top-5 left-5">
              <span className="px-3.5 py-1.5 bg-[#14171A]/85 backdrop-blur-md text-white text-[11px] uppercase tracking-[0.18em] font-medium border border-white/10">
                The Cologny Pavilion · Lake Geneva
              </span>
            </div>

            <div className="absolute bottom-5 right-5 hidden sm:flex items-center gap-2 bg-white/90 backdrop-blur-md px-3.5 py-1.5 text-xs text-[#14171A] border border-[#E5E0D5]">
              <span className="w-2 h-2 rounded-full bg-[#8C6938]" />
              <span className="font-serif italic font-medium">Peter Zumthor & Vincent Van Duysen</span>
            </div>
          </motion.div>

          {/* Interactive Floating Search & Filter Dock */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-8 md:mt-10"
          >
            <div className="bg-white border border-[#E5E0D5] p-5 md:p-7 shadow-[0_12px_45px_rgba(0,0,0,0.05)]">
              {/* Top Segmented Status Selector */}
              <div className="flex items-center justify-between border-b border-[#ECE7DD] pb-4 mb-5 gap-4 flex-wrap">
                <div className="flex items-center gap-1.5 bg-[#F4F1EA] p-1 border border-[#E2DDD3] overflow-x-auto max-w-full scrollbar-none">
                  {(['all', 'buy', 'rent', 'investment'] as const).map((status) => (
                    <button
                      key={status}
                      onClick={() => onFilterChange({ status })}
                      className={`px-4 py-2 text-[11px] sm:text-xs uppercase tracking-[0.14em] transition-all duration-200 whitespace-nowrap shrink-0 ${
                        filterCriteria.status === status
                          ? 'bg-[#14171A] text-white font-semibold shadow-sm'
                          : 'text-[#5E6470] hover:text-[#14171A]'
                      }`}
                    >
                      {status === 'all'
                        ? 'All Portfolios'
                        : status === 'buy'
                        ? 'Acquisitions'
                        : status === 'rent'
                        ? 'Seasonal Leases'
                        : 'Investment Assets'}
                    </button>
                  ))}
                </div>

                <div className="hidden sm:flex items-center gap-3 text-xs text-[#7A828E]">
                  <span>Private Confidential Listings</span>
                  <span>·</span>
                  <span className="text-[#8C6938] font-medium">Verified Clean Titles</span>
                </div>
              </div>

              {/* Filter Controls Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
                {/* Location Selector */}
                <div className="flex flex-col space-y-1.5">
                  <label
                    htmlFor="filter-location"
                    className="text-[11px] uppercase tracking-[0.18em] text-[#5E6470] flex items-center gap-1.5 font-medium"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#A37E4C]" />
                    Destination / Region
                  </label>
                  <select
                    id="filter-location"
                    value={filterCriteria.location || 'all'}
                    onChange={(e) =>
                      onFilterChange({ location: e.target.value === 'all' ? '' : e.target.value })
                    }
                    className="bg-[#FAF9F5] border border-[#E5E0D5] text-[#14171A] text-xs px-3.5 py-2.5 focus:border-[#A37E4C] focus:outline-none transition-colors"
                  >
                    <option value="all">All Global Regions</option>
                    <option value="Geneva">Lake Geneva & Cologny (CH)</option>
                    <option value="Niseko">Niseko Alpine (JP)</option>
                    <option value="Antibes">Côte d’Azur & Antibes (FR)</option>
                    <option value="London">Mayfair & London (UK)</option>
                    <option value="Aspen">Aspen & Red Mountain (US)</option>
                    <option value="Marbella">La Zagaleta & Marbella (ES)</option>
                  </select>
                </div>

                {/* Property Type Selector */}
                <div className="flex flex-col space-y-1.5">
                  <label
                    htmlFor="filter-type"
                    className="text-[11px] uppercase tracking-[0.18em] text-[#5E6470] flex items-center gap-1.5 font-medium"
                  >
                    <Building className="w-3.5 h-3.5 text-[#A37E4C]" />
                    Architecture Typology
                  </label>
                  <select
                    id="filter-type"
                    value={filterCriteria.category || 'all'}
                    onChange={(e) => onFilterChange({ category: e.target.value as any })}
                    className="bg-[#FAF9F5] border border-[#E5E0D5] text-[#14171A] text-xs px-3.5 py-2.5 focus:border-[#A37E4C] focus:outline-none transition-colors"
                  >
                    <option value="all">All Typologies</option>
                    <option value="villa">Modernist Villa</option>
                    <option value="penthouse">Sky Penthouse</option>
                    <option value="chalet">Alpine Chalet</option>
                    <option value="estate">Country Estate</option>
                    <option value="coastal">Waterfront & Coastal</option>
                  </select>
                </div>

                {/* Price Range Filter */}
                <div className="flex flex-col space-y-1.5">
                  <label
                    htmlFor="filter-price"
                    className="text-[11px] uppercase tracking-[0.18em] text-[#5E6470] flex items-center gap-1.5 font-medium"
                  >
                    <DollarSign className="w-3.5 h-3.5 text-[#A37E4C]" />
                    Price Bracket
                  </label>
                  <select
                    id="filter-price"
                    value={filterCriteria.maxPrice || 'all'}
                    onChange={(e) =>
                      onFilterChange({
                        maxPrice: e.target.value === 'all' ? undefined : Number(e.target.value),
                      })
                    }
                    className="bg-[#FAF9F5] border border-[#E5E0D5] text-[#14171A] text-xs px-3.5 py-2.5 focus:border-[#A37E4C] focus:outline-none transition-colors"
                  >
                    <option value="all">Any Valuation</option>
                    <option value="10000000">Up to $10,000,000</option>
                    <option value="20000000">Up to $20,000,000</option>
                    <option value="35000000">Up to $35,000,000</option>
                    <option value="50000000">Up to $50,000,000+</option>
                  </select>
                </div>

                {/* Search Execution Button */}
                <div className="flex flex-col justify-end pt-5 sm:pt-0">
                  <button
                    onClick={onSearchSubmit}
                    className="w-full py-2.5 px-6 bg-[#14171A] hover:bg-[#2A2E35] text-white text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                  >
                    <Search className="w-3.5 h-3.5 text-[#D4B886]" />
                    <span>Filter Listings</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4K Cinematic Walkthrough Video Tour Modal */}
      <VideoTourModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onRequestViewing={onOpenEnquiryModal}
      />
    </>
  );
};
