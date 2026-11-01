import React from 'react';
import { ShieldCheck, Compass, Landmark, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SITE_IMAGES } from '../data/images';
import { ArchitecturalImage } from './ArchitecturalImage';

interface AboutSectionProps {
  onOpenEnquiryModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenEnquiryModal }) => {
  return (
    <section id="philosophy" className="py-28 px-6 md:px-10 bg-[#F5F2EB] text-[#14171A] relative overflow-hidden border-t border-[#E8E3D8]">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-4"
        >
          <span className="w-6 h-[1.5px] bg-[#A37E4C]" />
          <span className="text-xs uppercase tracking-[0.24em] text-[#8C6938] font-semibold">
            Agency Philosophy
          </span>
        </motion.div>

        {/* Hero Headline & Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#14171A] font-normal leading-[1.08] tracking-[-0.02em]">
              Property decisions are rarely as simple as choosing between one address and another.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6 text-[#525966] text-sm sm:text-base font-light leading-relaxed"
          >
            <p>
              At Valmont Private Estates, we regard prime real estate not as mere square meterage, but as living spatial sculpture and the cornerstone of intergenerational heritage.
            </p>
            <p>
              Our advisory practice intentionally limits its representations to fewer than twenty-five active properties at any given moment. This deliberate scarcity guarantees absolute discretion, exhaustive architectural scrutiny, and bespoke fiscal navigation for every client.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenEnquiryModal}
                className="text-xs uppercase tracking-[0.2em] text-[#8C6938] hover:text-[#14171A] flex items-center gap-2 font-semibold transition-colors group"
              >
                <span>Read Private Advisory Charter</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Architectural Photo Duo / Geometric Arch Composition (Urbanova Inspired) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-24">
          {/* Semicircular Arch Masked Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 relative group"
          >
            <div className="overflow-hidden rounded-t-[14rem] rounded-b-none border border-[#E0D9CD] aspect-[3/4] bg-white shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
              <ArchitecturalImage
                src={SITE_IMAGES.about.archPortal}
                alt="Architectural Arch Portal"
                aspectRatioClass="aspect-[3/4]"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white border border-[#E5E0D5] p-4 text-xs max-w-xs shadow-lg hidden sm:block">
              <span className="text-[#8C6938] font-serif italic block text-sm font-medium">Purity of Line</span>
              <span className="text-[#5E6470] font-light">Natural light, raw basalt, and structural cantilever balance.</span>
            </div>
          </motion.div>

          {/* Secondary Editorial Composition & Institutional Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 flex flex-col justify-between space-y-10 pl-0 md:pl-8"
          >
            <div className="overflow-hidden border border-[#E0D9CD] aspect-[16/10] bg-white shadow-[0_16px_40px_rgba(0,0,0,0.06)] group">
              <ArchitecturalImage
                src={SITE_IMAGES.about.detailInterior}
                alt="Refined Interior Detail"
                aspectRatioClass="aspect-[16/10]"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Institutional KPI Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-[#E5E0D5]">
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#14171A] block tabular-nums">
                  340+
                </span>
                <span className="text-[11px] uppercase tracking-[0.16em] text-[#7A828E] mt-1 block font-medium">
                  Estates Screened / Yr
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#14171A] block tabular-nums">
                  98.4%
                </span>
                <span className="text-[11px] uppercase tracking-[0.16em] text-[#7A828E] mt-1 block font-medium">
                  Off-Market Discretion
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#14171A] block tabular-nums">
                  14
                </span>
                <span className="text-[11px] uppercase tracking-[0.16em] text-[#7A828E] mt-1 block font-medium">
                  Global Hubs
                </span>
              </div>
              <div>
                <span className="font-serif text-3xl sm:text-4xl text-[#14171A] block tabular-nums">
                  25
                </span>
                <span className="text-[11px] uppercase tracking-[0.16em] text-[#7A828E] mt-1 block font-medium">
                  Max Active Client Cap
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Brand Values Bento Cards (Crisp White with Delicate Hairline Borders) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.24em] text-[#8C6938] font-semibold block mb-2">
              Our Core Tenets
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl text-[#14171A]">
              Guided by Architectural Discipline
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: 'Curated, Not Crowded',
                desc: 'We believe a smaller, rigorously vetted collection holds immeasurably greater utility than an endless directory of ordinary houses.',
              },
              {
                icon: Compass,
                title: 'Strategic, Not Transactional',
                desc: 'Our work extends far beyond facilitating purchase agreements. We advise on spatial lifecycle, wealth succession, and structural longevity.',
              },
              {
                icon: Landmark,
                title: 'Architectural Pedigree',
                desc: 'Every property we represent stands as an uncompromising architectural thesis, uniting master material palettes with site-specific dialogue.',
              },
              {
                icon: Sparkles,
                title: 'Complete Anonymity',
                desc: 'Direct liaison with family offices, private banks, and trustees under rigorous Swiss banking-standard confidentiality conventions.',
              },
            ].map((bento, idx) => {
              const IconComp = bento.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className="p-8 bg-white border border-[#E5E0D5] flex flex-col justify-between space-y-6 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] transition-all"
                >
                  <div className="w-10 h-10 border border-[#E0D9CC] bg-[#FAF9F5] flex items-center justify-center text-[#8C6938]">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl text-[#14171A] mb-2">{bento.title}</h4>
                    <p className="text-xs text-[#5E6470] font-light leading-relaxed">
                      {bento.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
