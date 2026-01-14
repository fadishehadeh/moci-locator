import React from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitcher from '../Theme/ThemeSwitcher';
import FontSizeSwitcher from '../Accessibility/FontSizeSwitcher';

const SimpleHeader = () => {
  return (
    <header className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40" role="banner">
      <div className="container-wide">
        <div className="flex items-center justify-between gap-4 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/locator" className="flex items-center" aria-label="MOCI Office Locator - Home">
              <img
                src="/images/logo-main.svg"
                alt="Qatar Ministry of Commerce and Industry Logo"
                className="h-16 md:h-20 max-w-[300px] object-contain dark:hidden"
              />
              <img
                src="/images/logo-main-white.svg"
                alt="Qatar Ministry of Commerce and Industry Logo"
                className="h-16 md:h-20 max-w-[300px] object-contain hidden dark:block"
              />
            </Link>
          </div>

          {/* Right Side - Accessibility Tools Only */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Theme Switcher */}
            <ThemeSwitcher />

            {/* Font Size Switcher */}
            <FontSizeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default SimpleHeader;

