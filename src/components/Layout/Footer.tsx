import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRight 
} from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const isMobile = useIsMobile();
  
  const renderLinks = () => {
    if (isMobile) {
      return (
        <div className="w-full">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="about">
              <AccordionTrigger>About the Ministry</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  <li><Link to="/about/vision" className="text-gray-400 hover:text-white">Vision, Mission & Values</Link></li>
                  <li><Link to="/about/minister" className="text-gray-400 hover:text-white">The Minister</Link></li>
                  <li><Link to="/about/committees" className="text-gray-400 hover:text-white">National Committees</Link></li>
                  <li><Link to="/about/departments" className="text-gray-400 hover:text-white">Departments</Link></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="services">
              <AccordionTrigger>Business Services</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  <li><Link to="/investors/start-business" className="text-gray-400 hover:text-white">Start a Business</Link></li>
                  <li><Link to="/investors/trade-name-search" className="text-gray-400 hover:text-white">Trade Name Search</Link></li>
                  <li><Link to="/investors/commercial-register" className="text-gray-400 hover:text-white">Commercial Register</Link></li>
                  <li><Link to="/investors/licensing" className="text-gray-400 hover:text-white">Licensing</Link></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="investor">
              <AccordionTrigger>Investor Resources</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  <li><Link to="/investors/portal" className="text-gray-400 hover:text-white">Qatar Investment Portal</Link></li>
                  <li><Link to="/investors/opportunities" className="text-gray-400 hover:text-white">Investment Opportunities</Link></li>
                  <li><Link to="/investors/incentives" className="text-gray-400 hover:text-white">Investor Incentives</Link></li>
                  <li><Link to="/investors/regulations" className="text-gray-400 hover:text-white">Regulations</Link></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="media">
              <AccordionTrigger>Media & Resources</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  <li><Link to="/media-centre/news" className="text-gray-400 hover:text-white">News</Link></li>
                  <li><Link to="/resources/statistics" className="text-gray-400 hover:text-white">Statistics & Reports</Link></li>
                  <li><Link to="/resources/initiatives" className="text-gray-400 hover:text-white">Initiatives</Link></li>
                  <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      );
    }
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">About the Ministry</h4>
          <ul className="space-y-2">
            <li><Link to="/about/vision" className="text-gray-400 hover:text-white">Vision, Mission & Values</Link></li>
            <li><Link to="/about/minister" className="text-gray-400 hover:text-white">The Minister</Link></li>
            <li><Link to="/about/committees" className="text-gray-400 hover:text-white">National Committees</Link></li>
            <li><Link to="/about/departments" className="text-gray-400 hover:text-white">Departments</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Business Services</h4>
          <ul className="space-y-2">
            <li><Link to="/investors/start-business" className="text-gray-400 hover:text-white">Start a Business</Link></li>
            <li><Link to="/investors/trade-name-search" className="text-gray-400 hover:text-white">Trade Name Search</Link></li>
            <li><Link to="/investors/commercial-register" className="text-gray-400 hover:text-white">Commercial Register</Link></li>
            <li><Link to="/investors/licensing" className="text-gray-400 hover:text-white">Licensing</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Investor Resources</h4>
          <ul className="space-y-2">
            <li><Link to="/investors/portal" className="text-gray-400 hover:text-white">Qatar Investment Portal</Link></li>
            <li><Link to="/investors/opportunities" className="text-gray-400 hover:text-white">Investment Opportunities</Link></li>
            <li><Link to="/investors/incentives" className="text-gray-400 hover:text-white">Investor Incentives</Link></li>
            <li><Link to="/investors/regulations" className="text-gray-400 hover:text-white">Regulations</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Media & Resources</h4>
          <ul className="space-y-2">
            <li><Link to="/media-centre/news" className="text-gray-400 hover:text-white">News</Link></li>
            <li><Link to="/resources/statistics" className="text-gray-400 hover:text-white">Statistics & Reports</Link></li>
            <li><Link to="/resources/initiatives" className="text-gray-400 hover:text-white">Initiatives</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    );
  };
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-wide py-12 md:py-16">
        {/* Newsletter */}
        <div className="mb-12 pb-12 border-b border-gray-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="md:max-w-md">
              <h3 className="text-xl font-semibold mb-2">Subscribe to our Newsletter</h3>
              <p className="text-gray-400">Stay updated with the latest news, investment opportunities, and events.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 border-gray-700 text-white" 
              />
              <Button className="bg-qatari hover:bg-qatari-light">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Links */}
        <div className="mb-12">
          {renderLinks()}
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/56ed811a-e598-4910-909e-5b80311437bc.png" 
              alt="MOCI Logo" 
              className="h-12 mr-4 max-w-[200px] object-contain" 
            />
            <div>
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Ministry of Commerce and Industry. All rights reserved.
              </p>
              <div className="flex gap-4 mt-2 text-sm text-gray-400">
                <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
                <Link to="/terms-of-use" className="hover:text-white">Terms of Use</Link>
                <Link to="/sitemap" className="hover:text-white">Sitemap</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
