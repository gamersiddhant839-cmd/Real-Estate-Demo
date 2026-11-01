import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F4F1EA] text-[#4E5562] border-t border-[#E5E0D5] pt-20 pb-12 px-6 md:px-10">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Brand Banner & Monogram Emblem (Urbanova Inspired) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#E5E0D5] items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 bg-[#A37E4C] inline-block rotate-45" />
              <span className="font-serif text-2xl tracking-[0.14em] uppercase text-[#14171A] font-semibold">
                Valmont
              </span>
              <span className="font-serif italic text-lg text-[#8C6938]">
                Private Estates
              </span>
            </div>
            <p className="text-xs text-[#5E6470] font-light max-w-sm leading-relaxed">
              International prime real estate consultancy representing museum-quality architectural residences, private alpine compounds, and sovereign investment portfolios.
            </p>
            <div className="pt-2 text-xs text-[#7A828E] font-medium">
              <span>Geneva · London · Zurich · Tokyo · Aspen · Côte d’Azur</span>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs">
            <div className="space-y-3">
              <span className="uppercase tracking-[0.2em] text-[#8C6938] font-semibold block">
                The Portfolios
              </span>
              <ul className="space-y-2 font-light text-[#5E6470]">
                <li><a href="#properties" className="hover:text-[#14171A] transition-colors">Modernist Residences</a></li>
                <li><a href="#properties" className="hover:text-[#14171A] transition-colors">Sky Penthouses</a></li>
                <li><a href="#properties" className="hover:text-[#14171A] transition-colors">Alpine Chalets</a></li>
                <li><a href="#properties" className="hover:text-[#14171A] transition-colors">Waterfront Estates</a></li>
                <li><a href="#investments" className="hover:text-[#14171A] transition-colors">Investment Portfolios</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="uppercase tracking-[0.2em] text-[#8C6938] font-semibold block">
                Sanctuaries
              </span>
              <ul className="space-y-2 font-light text-[#5E6470]">
                <li><a href="#locations" className="hover:text-[#14171A] transition-colors">Lake Geneva & Cologny</a></li>
                <li><a href="#locations" className="hover:text-[#14171A] transition-colors">Mayfair & Belgravia</a></li>
                <li><a href="#locations" className="hover:text-[#14171A] transition-colors">Niseko & Hokkaido</a></li>
                <li><a href="#locations" className="hover:text-[#14171A] transition-colors">Cap d’Antibes</a></li>
                <li><a href="#locations" className="hover:text-[#14171A] transition-colors">Aspen Red Mountain</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="uppercase tracking-[0.2em] text-[#8C6938] font-semibold block">
                Governance & Trust
              </span>
              <ul className="space-y-2 font-light text-[#5E6470]">
                <li><a href="#philosophy" className="hover:text-[#14171A] transition-colors">Advisory Charter</a></li>
                <li><a href="#advisory" className="hover:text-[#14171A] transition-colors">Senior Client Advisors</a></li>
                <li><a href="#contact" className="hover:text-[#14171A] transition-colors">Bilateral Non-Disclosure</a></li>
                <li><a href="#contact" className="hover:text-[#14171A] transition-colors">Private Viewing Protocol</a></li>
                <li><span className="text-[#8C93A0]">FINMA / SRO Compliance</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Portfolio Concept Legal Banner */}
        <div className="p-4 bg-white border border-[#E5E0D5] text-center text-xs text-[#5E6470] flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#8C6938]" />
            <span className="font-serif italic text-[#14171A] font-medium">Digital Portfolio & Architectural Concept</span>
          </div>
          <p className="text-[11px] text-[#7A828E] font-light">
            This website is a bespoke creative portfolio concept inspired by high-end architectural editorial design. It is not an active commercial brokerage.
          </p>
        </div>

        {/* Bottom Bar: Copyright and Discreet Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A828E] font-light">
          <p>© {new Date().getFullYear()} Valmont Private Estates. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#14171A] cursor-pointer transition-colors">Confidentiality Protocol</span>
            <span>·</span>
            <span className="hover:text-[#14171A] cursor-pointer transition-colors">Terms of Representation</span>
            <span>·</span>
            <span className="hover:text-[#14171A] cursor-pointer transition-colors">Sovereign Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
