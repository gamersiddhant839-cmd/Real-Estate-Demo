import React from 'react';
import { X } from 'lucide-react';
import { ContactSection } from './ContactSection';

interface EnquiryModalProps {
  isOpen: boolean;
  propertyName?: string;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  propertyName = '',
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      <div className="relative w-full max-w-4xl bg-[#FAF9F5] border border-[#E5E0D5] shadow-2xl my-auto">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E0D5] bg-[#FAF9F5]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#A37E4C]" />
            <span id="enquiry-modal-title" className="font-serif text-lg text-[#14171A] font-medium">
              Valmont Private Advisory Desk
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#7A828E] hover:text-[#14171A] hover:bg-[#F0EDE6] transition-colors focus:outline-none focus:ring-1 focus:ring-[#A37E4C]"
            aria-label="Close Enquiry Dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-8 max-h-[85vh] overflow-y-auto">
          <ContactSection initialPropertyTitle={propertyName} />
        </div>
      </div>
    </div>
  );
};
