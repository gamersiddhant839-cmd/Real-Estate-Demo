import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Quote, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_DATA } from '../data/faq';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  const testimonials = [
    {
      quote:
        'Valmont conducted our acquisition in Cologny with absolute discretion and military precision. Not a single public rumor surfaced, and their architectural vetting spared us extensive foundation remediation.',
      author: 'Count Henrik von Stauffen',
      role: 'Family Principal',
      location: 'Zurich & Geneva',
      rating: 5,
    },
    {
      quote:
        'In our search for an alpine retreat in Niseko, Julian Takahashi provided insights into zoning and timber preservation that regular brokers simply did not understand. An extraordinary standard of service.',
      author: 'Aiko & David Sutherland',
      role: 'Private Collector & Tech Founder',
      location: 'Singapore & London',
      rating: 5,
    },
  ];

  return (
    <section className="py-28 px-6 md:px-10 bg-[#FAF9F5] text-[#14171A] border-t border-[#E8E3D8]">
      <div className="max-w-7xl mx-auto">
        {/* Testimonials Header & Quote Cards */}
        <div className="mb-24">
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
                  Client Endorsements
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-[-0.015em] text-[#14171A]">
                Reputations Built on Discretion
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#7A828E]">
              <div className="flex text-[#8C6938]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-[#14171A] font-semibold">5.0 / 5.0</span>
              <span>· Institutional Family Offices</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.65, delay: idx * 0.1 }}
                className="bg-white border border-[#E5E0D5] p-8 md:p-10 flex flex-col justify-between relative group hover:border-[#A37E4C] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)]"
              >
                <Quote className="w-8 h-8 text-[#A37E4C]/35 mb-4" />
                <p className="font-serif text-lg sm:text-xl text-[#2A2E35] leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
                <div className="pt-6 border-t border-[#ECE7DD] flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-[#14171A] text-sm">{t.author}</h3>
                    <span className="text-xs text-[#7A828E] block">{t.role}</span>
                  </div>
                  <span className="text-xs text-[#8C6938] font-serif tracking-wider font-medium">
                    {t.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div>
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
                  Client Inquiries
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-[-0.015em] text-[#14171A]">
                Frequently Addressed Inquiries
              </h2>
            </div>
            <p className="text-sm text-[#5E6470] max-w-md font-light leading-relaxed">
              Our partners guide you through cross-border regulations, private escrow logistics, and off-market viewing protocols.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {FAQ_DATA.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-white border border-[#E5E0D5] transition-all duration-200 shadow-xs"
                >
                  <button
                    onClick={() => toggleFAQ(item.id)}
                    aria-expanded={isOpen}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 group focus:outline-none focus:ring-1 focus:ring-[#A37E4C]"
                  >
                    <span className="font-serif text-lg sm:text-xl text-[#14171A] group-hover:text-[#8C6938] transition-colors">
                      {item.question}
                    </span>
                    <span className="w-8 h-8 rounded-full border border-[#E5E0D5] flex items-center justify-center shrink-0 text-[#7A828E] group-hover:text-[#14171A] group-hover:border-[#14171A] bg-[#FAF9F5]">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-6 pb-6 pt-2 text-sm text-[#525966] font-light leading-relaxed border-t border-[#ECE7DD]"
                      >
                        {item.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
