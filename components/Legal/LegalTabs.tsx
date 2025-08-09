"use client";

import React, { useState, useEffect } from "react";
import { SIDE_BAR } from "./static";
import TermsOfService from "./TermsOfService";
import PrivacyPolicy from "./PrivacyPolicy";
import CookiePolicy from "./CookiePolicy";
import RegulatoryCompliance from "./RegulatoryCompliance";
import EnvironmentalPolicy from "./EnvironmentalPolicy";
import LegalDisclaimer from "./LegalDisclaimer";
import { cn } from "@/lib/utils";

type DocumentComponent = React.ComponentType;

// Mapping of document types to their components
const DOCUMENT_COMPONENTS: Record<string, DocumentComponent> = {
  terms: TermsOfService,
  privacy_policy: PrivacyPolicy,
  cookie_policy: CookiePolicy,
  compliance: RegulatoryCompliance,
  environmental_policy: EnvironmentalPolicy,
  legal_disclaimer: LegalDisclaimer,
};

const LegalTabs = () => {
  const [currentDoc, setCurrentDoc] = useState<string>("terms");
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check screen size and update mobile state
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check initial screen size
    checkMobile();

    // Add event listener for resize
    window.addEventListener("resize", checkMobile);

    // Cleanup event listener
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const renderPage = () => {
    const DocumentComponent = DOCUMENT_COMPONENTS[currentDoc];
    return DocumentComponent ? <DocumentComponent /> : null;
  };

  const handleClick = (doc: string) => {
    setCurrentDoc(doc);
    setIsMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const SidebarContent = () => (
    <nav aria-labelledby="legal-docs-heading" className="bg-white">
      <ul className="space-y-4">
        {SIDE_BAR.map(({ icon, label, href }) => (
          <li key={href}>
            <button
              onClick={() => handleClick(href)}
              className={cn(
                "w-full text-left text-xs p-2 flex font-semibold text-brandGray items-center gap-2 rounded transition-colors duration-200",
                "focus:outline-none focus:ring-2 focus:ring-brandFadeGreen/30",
                currentDoc === href
                  ? "bg-[#F0FDF4] text-brandGreen"
                  : "hover:bg-gray-100"
              )}
              aria-pressed={currentDoc === href}
              aria-label={`View ${label}`}
            >
              <span aria-hidden="true">{icon}</span>
              <span>{label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      {/* Mobile Menu Trigger */}
      {isMobile && (
        <div className="mb-4">
          <button
            onClick={toggleMobileMenu}
            className="flex items-center justify-center p-2 bg-gray-100 rounded-md w-full"
          >
            {isMenuOpen ? "Close Menu" : "Open Menu"}
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 items-start gap-6 bg-white">
        {/* Sidebar for Mobile and Desktop */}
        <aside
          className={cn(
            "col-span-1 border rounded-md border-gray-200 p-4",
            isMobile ? (isMenuOpen ? "block" : "hidden") : "block"
          )}
          aria-label="Legal Documents Navigation"
        >
          <h2
            className="text-lg font-bold mb-5 text-black"
            id="legal-docs-heading"
          >
            Legal Documents
          </h2>
          <SidebarContent />
        </aside>

        <main
          className="col-span-1 md:col-span-3 bg-white rounded-md shadow-sm"
          aria-live="polite"
          aria-atomic="true"
        >
          {renderPage()}
        </main>
      </div>
    </div>
  );
};

export default LegalTabs;
