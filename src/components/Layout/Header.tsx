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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="w-full bg-white border-b border-gray-100 fixed top-0 left-0 right-0 z-40">
      <div className="container-wide flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/56ed811a-e598-4910-909e-5b80311437bc.png" 
              alt="MOCI Logo" 
              className="h-16 md:h-20 max-w-[200px] object-contain" 
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <div className="hidden lg:flex">
            <NavigationMenuDemo />
          </div>
        )}
        
        {/* Right side actions */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search className="h-5 w-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
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
      
      {/* Mobile Navigation Menu */}
      {isMobile && isMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] bg-white z-30 animate-fade-in overflow-auto">
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
              <div className="pt-4">
                <Button className="w-full bg-qatari hover:bg-qatari-light">
                  Start a Business
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
