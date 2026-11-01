import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenEnquiryModal: (propertyId?: string, propertyName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiryModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Properties', href: '#properties' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Locations', href: '#locations' },
    { label: 'Advisory', href: '#advisory' },
    { label: 'Investments', href: '#investments' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF9F5]/92 backdrop-blur-md border-b border-[#E7E2D8] py-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
            : 'bg-[#FAF9F5]/75 backdrop-blur-sm border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
          {/* Zone 1: Single Element Brand Wordmark */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-xl md:text-2xl font-serif tracking-wider text-[#14171A] whitespace-nowrap shrink-0 transition-opacity hover:opacity-90"
          >
            <span className="w-2.5 h-2.5 bg-[#A37E4C] inline-block transition-transform duration-300 group-hover:rotate-45" />
            <span className="font-semibold tracking-[0.14em] uppercase text-sm md:text-base text-[#14171A]">
              Valmont
            </span>
            <span className="font-serif italic font-normal text-xs md:text-sm text-[#8C6938]">
              Private Estates
            </span>
          </a>

          {/* Zone 2: 4-5 Clean Single-Line Text Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.18em] font-medium text-[#4E5562]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative py-1 hover:text-[#14171A] transition-colors duration-200 whitespace-nowrap shrink-0 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#A37E4C] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <button
              onClick={() => onOpenEnquiryModal()}
              className="px-5 py-2.5 text-xs uppercase tracking-[0.18em] font-medium text-white bg-[#14171A] hover:bg-[#2A2E35] transition-all duration-300 rounded-none shadow-sm flex items-center gap-2 whitespace-nowrap shrink-0 hover:shadow-md"
            >
              <span>Private Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#D4B886]" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#14171A] hover:text-[#A37E4C] transition-colors focus:outline-none focus:ring-1 focus:ring-[#A37E4C]"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#FAF9F5] lg:hidden flex flex-col pt-24 px-8 pb-10 justify-between"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#8C6938] block border-b border-[#E5E0D5] pb-3 font-medium">
                Navigation Menu
              </span>
              <nav className="flex flex-col space-y-5">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif text-2xl text-[#14171A] hover:text-[#A37E4C] transition-colors flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-sm font-sans text-[#8C93A0]">→</span>
                  </a>
                ))}
              </nav>
            </div>

            <div className="pt-8 border-t border-[#E5E0D5] space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiryModal();
                }}
                className="w-full py-3.5 text-xs uppercase tracking-[0.2em] font-semibold text-white bg-[#14171A] hover:bg-[#2A2E35] transition-colors flex items-center justify-center gap-2"
              >
                <span>Schedule Private Viewing</span>
                <ArrowUpRight className="w-4 h-4 text-[#D4B886]" />
              </button>
              <p className="text-xs text-[#7A828E] text-center tracking-wider font-light">
                Geneva · London · Zurich · Tokyo · Aspen
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
