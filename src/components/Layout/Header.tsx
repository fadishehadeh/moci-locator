
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  ChevronRight,
  Globe,
  Menu,
  Search,
  X
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import NavigationMenuDemo from './NavigationMenu';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { AuthButtons } from '../Auth/AuthButtons';
import { scrollToTop } from '@/hooks/use-scroll-to-top';
import SearchModal from '../Search/SearchModal';
import FontSizeSwitcher from '../Accessibility/FontSizeSwitcher';
import { EmployeePortal } from '../Employee/EmployeePortal';
import ThemeSwitcher from '../Theme/ThemeSwitcher';

// Mobile menu items structure
const mobileMenuItems = [
  {
    title: "Home",
    href: "/"
  },
  {
    title: "About the Ministry",
    href: "/about",
    submenu: [
      { title: "Vision, Mission, and Message", href: "/about/vision" },
      {
        title: "National Committees",
        href: "/about/committees",
        submenu: [
          { title: "The National Committee of Trade", href: "/about/committees/trade" },
          { title: "Protect Competition and Prevent Monopolistic Practices Committee", href: "/about/committees/competition" },
        ]
      },
      { title: "Anti-Money Laundering and Terrorism Financing Section", href: "/about/aml-cft" },
      {
        title: "Departments",
        href: "/about/departments",
        submenu: [
          { title: "Departments under the Minister", href: "/about/departments/minister" },
          { title: "Departments under the Deputy", href: "/about/departments/deputy" },
          { title: "Departments under the Assistant Deputy of Customer Affairs", href: "/about/departments/assistant-deputy-customer" },
          { title: "Departments under the Assistant Deputy of Commerce Affairs", href: "/about/departments/assistant-deputy-commerce" },
          { title: "Administrative Units of Assistant Undersecretary for Industrial Affairs", href: "/about/departments/industrial-affairs" },
        ]
      },
      { title: "Branches", href: "/about/branches" },
    ]
  },
  {
    title: "Services and Transaction Forms",
    href: "/services",
    submenu: [
      {
        title: "Investor",
        href: "/services/business",
        submenu: [
          { title: "Procedures", href: "/services/business/procedures" },
          { title: "Obligations", href: "/services/business/obligations" },
          { title: "Laws and Regulations", href: "/services/business/laws-regulations" },
          { title: "Companies Type", href: "/services/business/company-types" },
          { title: "Forms", href: "/services/business/forms" },
          { title: "Recalls", href: "/services/business/recalls" },
          { title: "Shop with Confidence", href: "/services/business/shop-confidence" },
          { title: "Vendor Registration", href: "/services/business/vendor-registration" },
          { title: "Intellectual Property Rights", href: "/services/business/intellectual-property" },
        ]
      },
      {
        title: "Consumer",
        href: "/services/consumer",
        submenu: [
          { title: "Supplies", href: "/services/consumer/supplies" },
          { title: "Consumer Rights Guide", href: "/services/consumer/rights-guide" },
          { title: "Commodities Daily Prices", href: "/services/consumer/daily-prices" },
          { title: "Important Address", href: "/services/consumer/important-address" },
          { title: "Forms", href: "/services/consumer/forms" },
          { title: "Request for License Discounts and Promotions", href: "/services/consumer/license-discounts" },
          { title: "Recalls", href: "/services/consumer/recalls" },
          { title: "Advice and Guidelines", href: "/services/consumer/advice-guidelines" },
        ]
      },
      {
        title: "Industry",
        href: "/services/industry",
        submenu: [
          { title: "Industrial Services Portals", href: "/services/industry/portals" },
        ]
      },
    ]
  },
  {
    title: "E-Services",
    href: "/e-services"
  },
  {
    title: "Media Center",
    href: "/media-centre",
    submenu: [
      { title: "News", href: "/media-centre/news" },
      { title: "Awareness", href: "/media-centre/awareness" },
      { title: "Statistics and Reports", href: "/media-centre/reports" },
      { title: "Initiatives", href: "/media-centre/initiatives" },
    ]
  },
];

// Mobile menu item component
const MobileMenuItem = ({ item, onNavClick, level = 0 }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubmenu = item.submenu && item.submenu.length > 0;
  const paddingLeft = level * 16;

  return (
    <div>
      <div className="flex items-center justify-between">
        <Link
          to={item.href}
          onClick={onNavClick}
          style={{ paddingLeft: `${paddingLeft}px` }}
          className="flex-1 py-2 text-base border-b border-gray-100 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-qatari focus:rounded hover:text-qatari transition-colors"
        >
          {item.title}
        </Link>
        {hasSubmenu && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-3 py-2 border-b border-gray-100 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-qatari"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Collapse submenu" : "Expand submenu"}
          >
            <ChevronRight className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
          </button>
        )}
      </div>
      {hasSubmenu && isOpen && (
        <div className="bg-gray-50 dark:bg-gray-800">
          {item.submenu.map((subItem: any) => (
            <MobileMenuItem
              key={subItem.title}
              item={subItem}
              onNavClick={onNavClick}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleMobileNavClick = () => {
    setIsMenuOpen(false);
    // Add a small delay to ensure navigation starts before scrolling
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };

  return (
    <header className="w-full bg-white fixed top-0 left-0 right-0 z-40" role="banner">
      {/* Second Tier Navigation */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="container-wide">
          <div className="flex items-center justify-between gap-4 -my-2">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center" aria-label="Qatar Ministry of Commerce and Industry - Home">
                <img
                  src="/images/logo-main.svg"
                  alt="Qatar Ministry of Commerce and Industry Logo"
                  className="h-[156px] md:h-[181px] max-w-[450px] object-contain -my-2 dark:hidden"
                />
                <img
                  src="/images/logo-main-white.svg"
                  alt="Qatar Ministry of Commerce and Industry Logo"
                  className="h-[156px] md:h-[181px] max-w-[450px] object-contain -my-2 hidden dark:block"
                />
              </Link>
            </div>

            {/* Right Side - Existing Items */}
            <div className="flex flex-col items-end gap-2">
              {/* Top Row */}
              <div className="flex items-center gap-2 md:gap-4">
                {/* Search Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleSearch}
                  aria-label="Search the website"
                  className="text-gray-600 hover:text-qatari dark:text-gray-300 dark:hover:text-white"
                >
                  <Search className="h-4 w-4" aria-hidden="true" />
                </Button>

                {/* Theme Switcher */}
                <ThemeSwitcher />

                {/* Auth Buttons */}
                <div className="hidden md:flex">
                  <AuthButtons />
                </div>

                {/* Language Selector */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex items-center gap-1 text-gray-600 hover:text-qatari dark:text-gray-300 dark:hover:text-white"
                      aria-label="Select language - Current: English"
                    >
                      <Globe className="h-4 w-4 mr-1" aria-hidden="true" />
                      <span>EN</span>
                      <ChevronDown className="h-3 w-3" aria-hidden="true" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" role="menu" aria-label="Language options">
                    <DropdownMenuItem role="menuitem">English</DropdownMenuItem>
                    <DropdownMenuItem role="menuitem" lang="ar">العربية</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Bottom Row - Accessibility Tools */}
              <div className="flex items-center gap-2">
                {/* Employee Portal */}
                <EmployeePortal />

                {/* Font Size Switcher */}
                <FontSizeSwitcher />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-qatari dark:bg-gray-950 border-b border-gray-100 dark:border-gray-700">
        <div className="container-wide">
          <div className="flex items-center justify-center py-4">
            {/* Desktop Navigation - Centered */}
            {!isMobile && (
              <nav id="main-navigation" className="hidden lg:flex" role="navigation" aria-label="Main navigation">
                <NavigationMenuDemo />
              </nav>
            )}

            {/* Mobile menu toggle - Positioned absolutely to the right */}
            {isMobile && (
              <div className="absolute right-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMenu}
                  aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                  aria-expanded={isMenuOpen}
                  aria-controls="mobile-navigation"
                >
                  {isMenuOpen ? (
                    <X className="h-5 w-5" aria-hidden="true" />
                  ) : (
                    <Menu className="h-5 w-5" aria-hidden="true" />
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobile && isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[115px] bg-white dark:bg-gray-900 z-30 animate-fade-in overflow-auto">
          <div className="container py-8">
            <nav
              id="mobile-navigation"
              className="flex flex-col"
              role="navigation"
              aria-label="Mobile navigation"
            >
              {mobileMenuItems.map((item) => (
                <MobileMenuItem
                  key={item.title}
                  item={item}
                  onNavClick={handleMobileNavClick}
                  level={0}
                />
              ))}
              {/* Place AuthButtons at the end of mobile menu */}
              <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                <AuthButtons />
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
};

export default Header;
