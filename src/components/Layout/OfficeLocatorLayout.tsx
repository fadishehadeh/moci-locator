import React from 'react';
import SimpleHeader from './SimpleHeader';
import Footer from './Footer';

interface OfficeLocatorLayoutProps {
  children: React.ReactNode;
}

const OfficeLocatorLayout: React.FC<OfficeLocatorLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Simple Header - No navigation menu */}
      <SimpleHeader />

      {/* Main Content */}
      <main className="flex-grow" role="main">
        {children}
      </main>

      {/* Wrapper to disable all links in Footer */}
      <div className="disabled-links-wrapper">
        <Footer />
      </div>

      {/* CSS to disable all links in footer */}
      <style>{`
        .disabled-links-wrapper a {
          pointer-events: none !important;
          cursor: not-allowed !important;
          opacity: 0.6;
        }

        .disabled-links-wrapper button {
          pointer-events: none !important;
          cursor: not-allowed !important;
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
};

export default OfficeLocatorLayout;

