import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp, Globe2 } from 'lucide-react';
import { motion } from 'motion/react';
import { PRIME_LOCATIONS } from '../data/locations';
import { ArchitecturalImage } from './ArchitecturalImage';

interface LocationsSectionProps {
  onSelectLocationFilter: (locationName: string) => void;
  onOpenEnquiryModal: () => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({
  onSelectLocationFilter,
  onOpenEnquiryModal,
}) => {
  const [selectedMapNode, setSelectedMapNode] = useState<string>('Geneva');

  const globalHubs = [
    { name: 'Geneva', country: 'Switzerland', yield: '+5.4%', index: 94, note: 'Lakeside private wealth stability' },
    { name: 'London', country: 'United Kingdom', yield: '+5.1%', index: 91, note: 'Mayfair heritage freeholds' },
    { name: 'Tokyo', country: 'Japan', yield: '+8.2%', index: 88, note: 'Alpine retreats & Minato penthouses' },
    { name: 'Zurich', country: 'Switzerland', yield: '+4.9%', index: 93, note: 'Gold Coast private compounds' },
    { name: 'Dubai', country: 'UAE', yield: '+11.2%', index: 96, note: 'Beachfront architectural villas' },
    { name: 'Aspen', country: 'United States', yield: '+6.5%', index: 89, note: 'Red Mountain ski-in estates' },
  ];

  return (
    <section id="locations" className="py-28 px-6 md:px-10 bg-[#FAF9F5] border-t border-[#E8E3D8] text-[#14171A]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#E5E0D5]"
        >
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-[1.5px] bg-[#A37E4C]" />
              <span className="text-xs uppercase tracking-[0.24em] text-[#8C6938] font-semibold">
                Geographic Presence
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-[-0.015em] text-[#14171A]">
              Prime Global Terrains
            </h2>
          </div>
          <p className="text-sm text-[#5E6470] max-w-md font-light leading-relaxed">
            Exclusive residences situated in the world’s most fiscally stable, architecturally revered, and culturally resonant sanctuaries.
          </p>
        </motion.div>

        {/* Visually Rich Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {PRIME_LOCATIONS.map((loc, idx) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: idx * 0.08 }}
              onClick={() => onSelectLocationFilter(loc.name.split(' ')[0])}
              className="group cursor-pointer bg-white border border-[#E5E0D5] hover:border-[#A37E4C] transition-all duration-300 flex flex-col overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
            >
              {/* Location Image with Subtle Zoom Hover */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#F2EFE9]">
                <ArchitecturalImage
                  src={loc.image}
                  alt={loc.name}
                  aspectRatioClass="aspect-[16/10]"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-md text-[#14171A] text-[11px] uppercase tracking-[0.16em] border border-[#E5E0D5] font-semibold">
                    {loc.country}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 w-8 h-8 bg-white/95 backdrop-blur-md text-[#14171A] flex items-center justify-center transition-colors group-hover:bg-[#14171A] group-hover:text-white shadow-sm">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Location Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-2xl text-[#14171A] group-hover:text-[#8C6938] transition-colors">
                    {loc.name}
                  </h3>
                  <p className="text-xs text-[#5E6470] mt-2 font-light leading-relaxed">
                    {loc.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#ECE7DD] flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.16em] text-[#8C93A0] block font-medium">
                      Avg. Prime Capital
                    </span>
                    <span className="font-serif text-sm text-[#14171A] tabular-nums font-medium">
                      {loc.avgPriceSqM}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] uppercase tracking-[0.16em] text-[#8C93A0] block font-medium">
                      YoY Growth
                    </span>
                    <span className="font-serif text-sm text-[#8C6938] tabular-nums font-semibold flex items-center justify-end gap-1">
                      <TrendingUp className="w-3 h-3" />
                      {loc.projectedAnnualGrowth}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Market Intelligence Strip (Warm Stone Travertine Aesthetic) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="bg-[#F5F2EB] border border-[#E2DDD2] p-8 md:p-12 relative overflow-hidden shadow-xs"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-[#8C6938]" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#8C6938] font-semibold">
                  Macro Intelligence
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-4xl text-[#14171A] font-normal leading-tight">
                Understand Where the Global Prime Market is Moving
              </h3>
              <p className="text-xs sm:text-sm text-[#5E6470] font-light leading-relaxed">
                Cross-border capital velocity favors sovereign jurisdictions with solid rule of law, bespoke architecture, and natural environmental buffers.
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenEnquiryModal}
                  className="px-5 py-2.5 bg-[#14171A] hover:bg-[#2A2E35] text-white text-xs uppercase tracking-[0.16em] transition-colors font-medium shadow-sm"
                >
                  Request Sovereign Market Report 2026
                </button>
              </div>
            </div>

            {/* Interactive Market Hubs */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {globalHubs.map((hub) => (
                <div
                  key={hub.name}
                  onClick={() => setSelectedMapNode(hub.name)}
                  className={`p-4 border transition-all cursor-pointer ${
                    selectedMapNode === hub.name
                      ? 'bg-white border-[#14171A] text-[#14171A] shadow-md'
                      : 'bg-[#FAF9F5] border-[#E5E0D5] text-[#5E6470] hover:border-[#C4BDB0]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-[#14171A]">{hub.name}</span>
                    <span className="text-[#8C6938] font-serif tabular-nums font-semibold">{hub.yield}</span>
                  </div>
                  <span className="text-[10px] text-[#8C93A0] block truncate mb-2">{hub.country}</span>
                  <p className="text-[11px] text-[#5E6470] font-light leading-snug line-clamp-2">
                    {hub.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
