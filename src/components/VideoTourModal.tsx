import React from 'react';
import { X, Calendar, Download, Compass, Shield, Maximize2 } from 'lucide-react';
import { SITE_IMAGES } from '../data/images';

interface VideoTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestViewing: () => void;
}

export const VideoTourModal: React.FC<VideoTourModalProps> = ({
  isOpen,
  onClose,
  onRequestViewing,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-tour-title"
    >
      <div className="relative w-full max-w-5xl bg-[#FAF9F5] border border-[#E5E0D5] shadow-2xl overflow-hidden my-auto text-[#14171A]">
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E0D5] bg-[#FAF9F5]/95">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#A37E4C] rotate-45" />
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8C6938] font-semibold block">
                Private Architectural Walkthrough · 4K Master
              </span>
              <h2 id="video-tour-title" className="font-serif text-lg text-[#14171A] font-medium">
                The Cologny Pavilion, Lake Geneva
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#7A828E] hover:text-[#14171A] hover:bg-[#F0EDE6] transition-colors focus:outline-none focus:ring-1 focus:ring-[#A37E4C]"
            aria-label="Close Tour"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cinematic Video Walkthrough Showcase */}
        <div className="p-6 md:p-8 space-y-6">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#14171A] border border-[#E0D9CD] shadow-lg group">
            <img
              src={SITE_IMAGES.hero.main}
              alt="The Cologny Pavilion Video Preview"
              className="w-full h-full object-cover brightness-[0.95]"
            />

            {/* Ambient Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-6">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[11px] uppercase tracking-[0.18em] border border-white/20">
                  4K UHD · 60 FPS
                </span>
                <span className="text-xs text-white/80 font-mono">
                  Runtime: 03:24
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] text-[#D4B886] font-medium block">
                  Peter Zumthor & Vincent Van Duysen Atelier
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white">
                  Spatial Volumetrics & Cantilevered Bluffs
                </h3>
                <p className="text-xs text-white/80 font-light max-w-xl">
                  Board-formed concrete, triple-height basalt waterwall, and seamless zero-threshold glass panels framing Mont Blanc and Lake Geneva.
                </p>
              </div>
            </div>
          </div>

          {/* Key Specs Bar & Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="bg-white border border-[#E5E0D5] p-4">
              <span className="text-[10px] uppercase tracking-wider text-[#8C93A0] block">Address</span>
              <span className="text-xs font-serif text-[#14171A] font-medium">Route de la Capite 74, Cologny, CH</span>
            </div>
            <div className="bg-white border border-[#E5E0D5] p-4">
              <span className="text-[10px] uppercase tracking-wider text-[#8C93A0] block">Living Volume</span>
              <span className="text-xs font-serif text-[#14171A] font-medium">840 m² (9,041 sq ft) · 6 Suites</span>
            </div>
            <div className="bg-white border border-[#E5E0D5] p-4">
              <span className="text-[10px] uppercase tracking-wider text-[#8C93A0] block">Guide Valuation</span>
              <span className="text-xs font-serif text-[#8C6938] font-medium">$18,500,000 USD</span>
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E5E0D5]">
            <div className="flex items-center gap-2 text-xs text-[#7A828E]">
              <Shield className="w-4 h-4 text-[#8C6938]" />
              <span>Full structural engineering & acoustic dossier available under NDA</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onRequestViewing();
                }}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#14171A] hover:bg-[#2A2E35] text-white text-xs uppercase tracking-[0.16em] font-semibold transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Calendar className="w-4 h-4 text-[#D4B886]" />
                <span>Request Private Viewing</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
