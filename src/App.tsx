import React, { useState, useMemo } from 'react';
import { PROPERTIES_DATA } from './data/properties';
import { Property, FilterCriteria, filterProperties } from './utils/propertyFilters';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PropertiesSection } from './components/PropertiesSection';
import { AboutSection } from './components/AboutSection';
import { LocationsSection } from './components/LocationsSection';
import { AdvisorySection } from './components/AdvisorySection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { EnquiryModal } from './components/EnquiryModal';

export default function App() {
  const [filterCriteria, setFilterCriteria] = useState<FilterCriteria>({
    status: 'all',
    category: 'all',
    location: '',
    minPrice: undefined,
    maxPrice: undefined,
    searchQuery: '',
  });

  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryTargetName, setEnquiryTargetName] = useState<string>('');

  // Real-time filtered properties
  const filteredProperties = useMemo(() => {
    return filterProperties(PROPERTIES_DATA, filterCriteria);
  }, [filterCriteria]);

  const handleFilterChange = (newCriteria: Partial<FilterCriteria>) => {
    setFilterCriteria((prev) => ({ ...prev, ...newCriteria }));
  };

  const handleResetFilters = () => {
    setFilterCriteria({
      status: 'all',
      category: 'all',
      location: '',
      minPrice: undefined,
      maxPrice: undefined,
      searchQuery: '',
    });
  };

  const handleSearchSubmit = () => {
    const el = document.getElementById('properties');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectLocationFilter = (locName: string) => {
    setFilterCriteria((prev) => ({ ...prev, location: locName }));
    const el = document.getElementById('properties');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenEnquiryModal = (propertyId?: string, propertyName?: string) => {
    setEnquiryTargetName(propertyName || '');
    setEnquiryModalOpen(true);
  };

  const handleCloseEnquiryModal = () => {
    setEnquiryModalOpen(false);
    setEnquiryTargetName('');
  };

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#14171A] flex flex-col font-sans selection:bg-[#E8DCC8] selection:text-black">
      {/* Fixed Luxury Navigation */}
      <Navbar onOpenEnquiryModal={handleOpenEnquiryModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero with floating filter dock */}
        <Hero
          filterCriteria={filterCriteria}
          onFilterChange={handleFilterChange}
          onSearchSubmit={handleSearchSubmit}
          onOpenEnquiryModal={() => handleOpenEnquiryModal(undefined, 'General Advisory')}
        />

        {/* Featured Properties Grid */}
        <PropertiesSection
          properties={filteredProperties}
          filterCriteria={filterCriteria}
          onFilterChange={handleFilterChange}
          onResetFilters={handleResetFilters}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
          onOpenEnquiryModal={handleOpenEnquiryModal}
        />

        {/* Brand Philosophy / Story (with geometric arch cutout & bento values) */}
        <AboutSection
          onOpenEnquiryModal={() => handleOpenEnquiryModal(undefined, 'Private Advisory Charter')}
        />

        {/* Prime Global Locations & Market Intelligence */}
        <LocationsSection
          onSelectLocationFilter={handleSelectLocationFilter}
          onOpenEnquiryModal={() => handleOpenEnquiryModal(undefined, 'Market Intelligence Dossier')}
        />

        {/* Senior Real Estate Advisors & Investment Portfolios */}
        <AdvisorySection onOpenEnquiryModal={handleOpenEnquiryModal} />

        {/* FAQ & Institutional Endorsements */}
        <FAQSection />

        {/* On-Page Working Enquiry & Viewing Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Property Detail Dossier Modal */}
      <PropertyDetailModal
        property={selectedProperty}
        allProperties={PROPERTIES_DATA}
        onClose={() => setSelectedProperty(null)}
        onSelectProperty={(prop) => setSelectedProperty(prop)}
        onRequestViewing={(propId, propName) => {
          setSelectedProperty(null);
          handleOpenEnquiryModal(propId, propName);
        }}
      />

      {/* Private Consultation Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        propertyName={enquiryTargetName}
        onClose={handleCloseEnquiryModal}
      />
    </div>
  );
}
