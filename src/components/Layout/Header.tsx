
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white fixed top-0 left-0 right-0 z-40" role="banner">
      {/* Second Tier Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-wide">
          <div className="flex items-center justify-between gap-4 -my-2">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center" aria-label="Qatar Ministry of Commerce and Industry - Home">
                <img
                  src="/images/logo-main.svg"
                  alt="Qatar Ministry of Commerce and Industry Logo"
                  className="h-[156px] md:h-[181px] max-w-[450px] object-contain -my-2"
                />
              </Link>
            </div>

            {/* Right Side - Existing Items */}
            <div className="flex items-center gap-4">
              {/* Search Button */}
              <Button variant="ghost" size="icon" aria-label="Search the website" className="text-gray-600 hover:text-qatari">
                <Search className="h-4 w-4" aria-hidden="true" />
              </Button>

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
                    className="flex items-center gap-1 text-gray-600 hover:text-qatari"
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
                  <DropdownMenuItem role="menuitem" lang="zh">中文</DropdownMenuItem>
                  <DropdownMenuItem role="menuitem" lang="ru">Русский</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-qatari border-b border-gray-100">
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
        <div className="lg:hidden fixed inset-0 top-[115px] bg-white z-30 animate-fade-in overflow-auto">
          <div className="container py-8">
            <nav
              id="mobile-navigation"
              className="flex flex-col space-y-4"
              role="navigation"
              aria-label="Mobile navigation"
            >
              <Link to="/about" className="py-2 text-lg border-b border-gray-100 focus:outline-none focus:ring-2 focus:ring-qatari focus:rounded">
                About the Ministry
              </Link>
              <Link to="/consumers" className="py-2 text-lg border-b border-gray-100 focus:outline-none focus:ring-2 focus:ring-qatari focus:rounded">
                Consumers
              </Link>
              <Link to="/investors" className="py-2 text-lg border-b border-gray-100 focus:outline-none focus:ring-2 focus:ring-qatari focus:rounded">
                Investors
              </Link>
              <Link to="/organizations" className="py-2 text-lg border-b border-gray-100 focus:outline-none focus:ring-2 focus:ring-qatari focus:rounded">
                Organizations
              </Link>
              <Link to="/industry" className="py-2 text-lg border-b border-gray-100 focus:outline-none focus:ring-2 focus:ring-qatari focus:rounded">
                Industry
              </Link>
              <Link to="/media-center" className="py-2 text-lg border-b border-gray-100 focus:outline-none focus:ring-2 focus:ring-qatari focus:rounded">
                Media Centre
              </Link>
              <Link to="/resources" className="py-2 text-lg border-b border-gray-100 focus:outline-none focus:ring-2 focus:ring-qatari focus:rounded">
                Resources
              </Link>
              {/* Place AuthButtons at the end of mobile menu */}
              <div className="pt-4">
                <AuthButtons />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
