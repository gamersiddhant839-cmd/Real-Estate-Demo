import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { EnquiryFormData, validateEnquiryForm } from '../utils/propertyFilters';

interface ContactSectionProps {
  initialPropertyTitle?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialPropertyTitle = '' }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    interestType: 'purchase',
    preferredDate: '',
    propertyName: initialPropertyTitle,
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateEnquiryForm(formData);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    const randomRef = `VAL-${Math.floor(10000 + Math.random() * 90000)}-${formData.fullName.slice(0, 2).toUpperCase()}`;
    setReferenceCode(randomRef);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      interestType: 'purchase',
      preferredDate: '',
      propertyName: '',
      message: '',
    });
    setIsSubmitted(false);
    setReferenceCode('');
  };

  return (
    <section id="contact" className="py-28 px-6 md:px-10 bg-[#FAF9F5] text-[#14171A] border-t border-[#E8E3D8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Editorial Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-[1.5px] bg-[#A37E4C]" />
                <span className="text-xs uppercase tracking-[0.24em] text-[#8C6938] font-semibold">
                  Private Liaison
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl font-normal tracking-[-0.015em] leading-tight text-[#14171A]">
                Initiate a Private Advisory Dialogue
              </h2>
            </div>

            <p className="text-sm text-[#5E6470] font-light leading-relaxed">
              Our partners arrange private air charters, encrypted dossier deliveries, and confidential property inspections under strict non-disclosure conventions.
            </p>

            <div className="space-y-6 pt-4 border-t border-[#E5E0D5]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#E5E0D5] bg-white flex items-center justify-center text-[#8C6938] shrink-0 shadow-2xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#8C93A0] block font-medium">
                    Headquarters
                  </span>
                  <span className="text-sm text-[#14171A] font-serif font-medium">
                    Rue du Rhône 42, 1204 Geneva, Switzerland
                  </span>
                  <span className="text-xs text-[#7A828E] block mt-0.5 font-light">
                    Also in London (Mayfair), Zurich, Tokyo & Aspen
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#E5E0D5] bg-white flex items-center justify-center text-[#8C6938] shrink-0 shadow-2xs">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#8C93A0] block font-medium">
                    Telephone Advisory
                  </span>
                  <span className="text-sm text-[#14171A] font-serif tabular-nums font-medium">
                    +41 22 819 4000
                  </span>
                  <span className="text-xs text-[#7A828E] block mt-0.5 font-light">
                    Private line active 24/7 for registered clients
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 border border-[#E5E0D5] bg-white flex items-center justify-center text-[#8C6938] shrink-0 shadow-2xs">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#8C93A0] block font-medium">
                    Direct Inquiries
                  </span>
                  <span className="text-sm text-[#14171A] font-serif font-medium">
                    advisory@valmontestates.com
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white border border-[#E5E0D5] flex items-center gap-3 text-xs text-[#5E6470] shadow-xs">
              <Shield className="w-5 h-5 text-[#8C6938] shrink-0" />
              <span>
                All inquiries are treated with institutional Swiss bank-grade confidentiality under bilateral NDA.
              </span>
            </div>
          </motion.div>

          {/* Right Column: Working Interactive Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="lg:col-span-7 bg-white border border-[#E5E0D5] p-8 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
          >
            {isSubmitted ? (
              <div className="text-center py-10 space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full border border-emerald-500/40 bg-emerald-50 flex items-center justify-center text-emerald-600 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#8C6938] font-semibold block">
                    Advisory Request Confirmed
                  </span>
                  <h3 className="font-serif text-3xl text-[#14171A]">
                    Thank You, {formData.fullName}
                  </h3>
                  <p className="text-sm text-[#5E6470] max-w-md mx-auto font-light leading-relaxed">
                    Your request has been routed to our Managing Partner desk. A confidential dossier and proposed viewing itinerary will be transmitted securely within four business hours.
                  </p>
                </div>

                <div className="p-5 bg-[#FAF9F5] border border-[#E5E0D5] max-w-sm mx-auto text-xs text-left space-y-2">
                  <div className="flex justify-between">
                    <span className="text-[#7A828E]">File Reference:</span>
                    <strong className="text-[#14171A] font-mono font-semibold">{referenceCode}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7A828E]">Assigned Partner:</span>
                    <span className="text-[#8C6938] font-medium">Senior Advisory Desk</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#7A828E]">Status:</span>
                    <span className="text-emerald-700 font-medium">Bilateral NDA Dispatched</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-[#FAF9F5] border border-[#E5E0D5] hover:bg-[#F3EFE7] text-xs uppercase tracking-[0.16em] text-[#14171A] transition-colors font-medium"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="border-b border-[#ECE7DD] pb-4 mb-2">
                  <h3 className="font-serif text-2xl text-[#14171A]">
                    Confidential Viewing & Advisory Request
                  </h3>
                  <p className="text-xs text-[#7A828E] mt-1 font-light">
                    Complete the dossier below to coordinate a confidential inspection or portfolio consultation.
                  </p>
                </div>

                {/* Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="text-xs uppercase tracking-[0.16em] text-[#5E6470] block mb-2 font-medium">
                      Full Legal Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Eleanor Vance"
                      className={`w-full bg-[#FAF9F5] border text-[#14171A] text-xs px-4 py-3 focus:outline-none transition-colors ${
                        errors.fullName ? 'border-rose-500' : 'border-[#E5E0D5] focus:border-[#A37E4C]'
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-rose-600 mt-1 block">{errors.fullName}</span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="text-xs uppercase tracking-[0.16em] text-[#5E6470] block mb-2 font-medium">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. eleanor@vance-holdings.ch"
                      className={`w-full bg-[#FAF9F5] border text-[#14171A] text-xs px-4 py-3 focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-500' : 'border-[#E5E0D5] focus:border-[#A37E4C]'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-rose-600 mt-1 block">{errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Telephone & Interest Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-phone" className="text-xs uppercase tracking-[0.16em] text-[#5E6470] block mb-2 font-medium">
                      Telephone / WhatsApp *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+41 22 000 0000"
                      className={`w-full bg-[#FAF9F5] border text-[#14171A] text-xs px-4 py-3 focus:outline-none transition-colors ${
                        errors.phone ? 'border-rose-500' : 'border-[#E5E0D5] focus:border-[#A37E4C]'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-rose-600 mt-1 block">{errors.phone}</span>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-interest" className="text-xs uppercase tracking-[0.16em] text-[#5E6470] block mb-2 font-medium">
                      Nature of Inquiry
                    </label>
                    <select
                      id="contact-interest"
                      value={formData.interestType}
                      onChange={(e) => setFormData({ ...formData, interestType: e.target.value as any })}
                      className="w-full bg-[#FAF9F5] border border-[#E5E0D5] text-[#14171A] text-xs px-4 py-3 focus:border-[#A37E4C] focus:outline-none transition-colors"
                    >
                      <option value="purchase">Acquisition & Freehold Purchase</option>
                      <option value="private-viewing">Private Physical Viewing Itinerary</option>
                      <option value="rental">Seasonal Ultra-Prime Lease</option>
                      <option value="investment-dossier">Institutional Investment Memorandum</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Date & Property Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-date" className="text-xs uppercase tracking-[0.16em] text-[#5E6470] block mb-2 font-medium">
                      Preferred Viewing Date (Optional)
                    </label>
                    <input
                      id="contact-date"
                      type="date"
                      value={formData.preferredDate || ''}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-[#FAF9F5] border border-[#E5E0D5] text-[#14171A] text-xs px-4 py-3 focus:border-[#A37E4C] focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-property" className="text-xs uppercase tracking-[0.16em] text-[#5E6470] block mb-2 font-medium">
                      Specific Property (Optional)
                    </label>
                    <input
                      id="contact-property"
                      type="text"
                      value={formData.propertyName || ''}
                      onChange={(e) => setFormData({ ...formData, propertyName: e.target.value })}
                      placeholder="e.g. The Aurel Pavilion, Geneva"
                      className="w-full bg-[#FAF9F5] border border-[#E5E0D5] text-[#14171A] text-xs px-4 py-3 focus:border-[#A37E4C] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Message / Requirements */}
                <div>
                  <label htmlFor="contact-message" className="text-xs uppercase tracking-[0.16em] text-[#5E6470] block mb-2 font-medium">
                    Requirements & Discretion Specifications *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details regarding preferred regions, timeframe, or family office contact protocols..."
                    className={`w-full bg-[#FAF9F5] border text-[#14171A] text-xs px-4 py-3 focus:outline-none transition-colors resize-none ${
                      errors.message ? 'border-rose-500' : 'border-[#E5E0D5] focus:border-[#A37E4C]'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-rose-600 mt-1 block">{errors.message}</span>
                  )}
                </div>

                {/* Submit Action */}
                <div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#14171A] hover:bg-[#2A2E35] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Transmit Advisory Request</span>
                    <Send className="w-3.5 h-3.5 text-[#D4B886]" />
                  </button>
                  <p className="text-[11px] text-[#8C93A0] text-center mt-3 font-light">
                    By submitting, you agree to our confidential handling and non-disclosure standards.
                  </p>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
