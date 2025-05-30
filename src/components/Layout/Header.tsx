
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
    <header className="w-full bg-white fixed top-0 left-0 right-0 z-40">
      {/* Second Tier Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-wide">
          <div className="flex items-center justify-between py-3 gap-4">
            {/* Left Side - Contact Information */}
            <div className="flex items-center gap-4 text-sm">
              <Link to="/contact" className="text-gray-600 hover:text-qatari flex items-center gap-1">
                Contact us
              </Link>
              <a href="tel:+97444069999" className="text-gray-600 hover:text-qatari flex items-center gap-1">
                +974 4406 9999
              </a>
            </div>

            {/* Right Side - Existing Items */}
            <div className="flex items-center gap-4">
              {/* Search Button */}
              <Button variant="ghost" size="icon" aria-label="Search" className="text-gray-600 hover:text-qatari">
                <Search className="h-4 w-4" />
              </Button>

              {/* Auth Buttons */}
              <div className="hidden md:flex">
                <AuthButtons />
              </div>

              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-600 hover:text-qatari">
                    <Globe className="h-4 w-4 mr-1" />
                    <span>EN</span>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>English</DropdownMenuItem>
                  <DropdownMenuItem>العربية</DropdownMenuItem>
                  <DropdownMenuItem>中文</DropdownMenuItem>
                  <DropdownMenuItem>Русский</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="container-wide">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img
                  src="/images/logo-main.svg"
                  alt="MOCI Logo"
                  className="h-20 md:h-24 max-w-[240px] object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation - Right aligned to match top tier */}
            <div className="flex items-center gap-4">
              {!isMobile && (
                <div className="hidden lg:flex">
                  <NavigationMenuDemo />
                </div>
              )}

              {/* Mobile menu toggle */}
              {isMobile && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleMenu}
                  aria-label="Toggle Menu"
                >
                  {isMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobile && isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[115px] bg-white z-30 animate-fade-in overflow-auto">
          <div className="container py-8">
            <nav className="flex flex-col space-y-4">
              <Link to="/about" className="py-2 text-lg border-b border-gray-100">
                About the Ministry
              </Link>
              <Link to="/consumers" className="py-2 text-lg border-b border-gray-100">
                Consumers
              </Link>
              <Link to="/investors" className="py-2 text-lg border-b border-gray-100">
                Investors
              </Link>
              <Link to="/organizations" className="py-2 text-lg border-b border-gray-100">
                Organizations
              </Link>
              <Link to="/industry" className="py-2 text-lg border-b border-gray-100">
                Industry
              </Link>
              <Link to="/media-center" className="py-2 text-lg border-b border-gray-100">
                Media Centre
              </Link>
              <Link to="/resources" className="py-2 text-lg border-b border-gray-100">
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
