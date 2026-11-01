import React, { useState } from 'react';
import { Download, ArrowUpRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { ADVISORS_DATA } from '../data/advisors';
import { PROPERTIES_DATA } from '../data/properties';
import { ArchitecturalImage } from './ArchitecturalImage';

interface AdvisorySectionProps {
  onOpenEnquiryModal: (propertyId?: string, propertyName?: string) => void;
}

export const AdvisorySection: React.FC<AdvisorySectionProps> = ({ onOpenEnquiryModal }) => {
  const [downloadedBrochure, setDownloadedBrochure] = useState<string | null>(null);

  const investmentProperties = PROPERTIES_DATA.filter((p) => p.investmentMetrics);

  const handleDownloadBrochure = (propertyTitle: string) => {
    setDownloadedBrochure(propertyTitle);
    setTimeout(() => {
      setDownloadedBrochure(null);
    }, 4000);
  };

  return (
    <section id="advisory" className="py-28 px-6 md:px-10 bg-[#F5F2EB] text-[#14171A] border-t border-[#E8E3D8]">
      <div className="max-w-7xl mx-auto">
        {/* Section 1: Expert Advisors Roster */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 pb-8 border-b border-[#E5E0D5]"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-[1.5px] bg-[#A37E4C]" />
                <span className="text-xs uppercase tracking-[0.24em] text-[#8C6938] font-semibold">
                  Private Client Partners
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-[-0.015em] text-[#14171A]">
                Senior Real Estate Advisors
              </h2>
            </div>
            <p className="text-sm text-[#5E6470] max-w-md font-light leading-relaxed">
              Operating with institutional diligence, sovereign confidentiality, and deep jurisdictional acumen across Europe, Asia, and North America.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVISORS_DATA.map((advisor, idx) => (
              <motion.div
                key={advisor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="bg-white border border-[#E5E0D5] p-5 flex flex-col justify-between group hover:border-[#A37E4C] transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)]"
              >
                <div>
                  {/* Portrait with Neutral Warm Stone Background */}
                  <div className="aspect-[4/5] overflow-hidden bg-[#F2EFE9] mb-4">
                    <ArchitecturalImage
                      src={advisor.image}
                      alt={advisor.name}
                      monogram={advisor.name.charAt(0)}
                      aspectRatioClass="aspect-[4/5]"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-104"
                    />
                  </div>

                  {/* Advisor Details */}
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#8C6938] block font-semibold">
                      {advisor.territory}
                    </span>
                    <h3 className="font-serif text-xl text-[#14171A] font-medium">
                      {advisor.name}
                    </h3>
                    <p className="text-xs text-[#5E6470] font-light">
                      {advisor.title}
                    </p>
                  </div>

                  <p className="text-[11px] text-[#7A828E] mt-3 pt-3 border-t border-[#ECE7DD] font-light leading-snug">
                    {advisor.specialization}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#ECE7DD] space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#5E6470]">
                    <span className="tabular-nums font-serif text-[#14171A] font-medium">
                      {advisor.rating.toFixed(1)} ★
                    </span>
                    <span className="text-[11px]">({advisor.reviewsCount} Placements)</span>
                  </div>

                  <button
                    onClick={() => onOpenEnquiryModal(undefined, `Advisory with ${advisor.name}`)}
                    className="w-full py-2 bg-[#F6F4EE] hover:bg-[#14171A] hover:text-white text-[#14171A] text-xs uppercase tracking-[0.14em] font-medium transition-colors flex items-center justify-center gap-1.5 border border-[#E5E0D5]"
                  >
                    <span>Consult Advisor</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: Investment Portfolios & Stable Facilities */}
        <div id="investments" className="pt-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-[#E5E0D5]"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-[1.5px] bg-[#A37E4C]" />
                <span className="text-xs uppercase tracking-[0.24em] text-[#8C6938] font-semibold">
                  Capital Structuring
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-[-0.015em] text-[#14171A]">
                Reliable Prime Assets for Generational Capital
              </h2>
            </div>
            <p className="text-sm text-[#5E6470] max-w-md font-light leading-relaxed">
              Institutional models with projected capital appreciation, documented tenancy yields, and sovereign wealth stability.
            </p>
          </motion.div>

          {/* Investment Metric Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-[#E5E0D5] p-6 shadow-xs"
            >
              <span className="text-xs uppercase tracking-[0.18em] text-[#7A828E] block mb-2 font-medium">
                Average Gross Yield
              </span>
              <span className="font-serif text-4xl sm:text-5xl text-[#14171A] font-normal tabular-nums">
                6.4%
              </span>
              <span className="text-xs text-[#8C6938] mt-2 block font-light">
                Net audited return across prime European & Swiss portfolios
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border border-[#E5E0D5] p-6 shadow-xs"
            >
              <span className="text-xs uppercase tracking-[0.18em] text-[#7A828E] block mb-2 font-medium">
                Five-Year Projected Value
              </span>
              <span className="font-serif text-4xl sm:text-5xl text-[#14171A] font-normal tabular-nums">
                +34.8%
              </span>
              <span className="text-xs text-[#8C6938] mt-2 block font-light">
                Historical compound asset growth in Tier-1 enclaves
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border border-[#E5E0D5] p-6 shadow-xs"
            >
              <span className="text-xs uppercase tracking-[0.18em] text-[#7A828E] block mb-2 font-medium">
                Portfolio IRR
              </span>
              <span className="font-serif text-4xl sm:text-5xl text-[#14171A] font-normal tabular-nums">
                14.2%
              </span>
              <span className="text-xs text-[#8C6938] mt-2 block font-light">
                Weighted internal rate of return on leveraged tranches
              </span>
            </motion.div>
          </div>

          {/* Investment Offers Table / Horizontal Cards */}
          <div className="space-y-4">
            {investmentProperties.slice(0, 3).map((prop, idx) => (
              <motion.div
                key={prop.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="bg-white border border-[#E5E0D5] hover:border-[#A37E4C] p-5 md:p-6 transition-all flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
              >
                {/* Thumbnail & Title */}
                <div className="flex items-center gap-5 w-full md:w-auto">
                  <div className="w-24 h-20 sm:w-32 sm:h-24 overflow-hidden shrink-0 bg-[#F2EFE9]">
                    <ArchitecturalImage
                      src={prop.heroImage}
                      alt={prop.title}
                      aspectRatioClass="aspect-[4/3]"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.16em] text-[#8C6938] block font-semibold">
                      {prop.location.city}, {prop.location.country}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#14171A]">
                      {prop.title}
                    </h3>
                    <p className="text-xs text-[#5E6470] font-light mt-1 hidden sm:block">
                      {prop.specs.livingAreaSqM} m² · {prop.specs.bedrooms} Beds · {prop.specs.bathrooms} Baths
                    </p>
                  </div>
                </div>

                {/* Investment Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full md:w-auto text-left md:text-right border-y md:border-y-0 py-3 md:py-0 border-[#ECE7DD]">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.16em] text-[#8C93A0] block font-medium">
                      Monthly Yield
                    </span>
                    <span className="font-serif text-lg text-[#14171A] tabular-nums font-medium">
                      ${prop.investmentMetrics?.monthlyProjectedRentalIncome.toLocaleString()}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.16em] text-[#8C93A0] block font-medium">
                      Target IRR
                    </span>
                    <span className="font-serif text-lg text-[#8C6938] tabular-nums font-semibold">
                      {prop.investmentMetrics?.irrPercent}%
                    </span>
                  </div>
                  <div className="hidden sm:block">
                    <span className="text-[10px] uppercase tracking-[0.16em] text-[#8C93A0] block font-medium">
                      Valuation
                    </span>
                    <span className="font-serif text-lg text-[#14171A] tabular-nums font-medium">
                      {prop.priceFormatted}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 w-full md:w-auto justify-end">
                  <button
                    onClick={() => handleDownloadBrochure(prop.title)}
                    className="px-4 py-2 border border-[#E5E0D5] hover:border-[#14171A] text-xs uppercase tracking-[0.14em] text-[#14171A] transition-colors flex items-center gap-1.5 bg-[#FAF9F5]"
                  >
                    <Download className="w-3.5 h-3.5 text-[#8C6938]" />
                    <span>Dossier</span>
                  </button>

                  <button
                    onClick={() => onOpenEnquiryModal(prop.id, prop.title)}
                    className="px-5 py-2 bg-[#14171A] hover:bg-[#2A2E35] text-white text-xs uppercase tracking-[0.14em] font-semibold transition-colors flex items-center gap-1 shadow-sm"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#D4B886]" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Download Brochure Toast Feedback */}
          {downloadedBrochure && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs flex items-center gap-3 shadow-xs"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Confidential investment memorandum for <strong>{downloadedBrochure}</strong> prepared. Check your email or advisory portal.
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
