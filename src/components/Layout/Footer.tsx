
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube
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
          <ul className="space-y-2 list-disc list-inside marker:text-white">
            <li><Link to="/about/vision" className="text-gray-400 hover:text-white">Vision, Mission & Values</Link></li>
            <li><Link to="/about/minister" className="text-gray-400 hover:text-white">The Minister</Link></li>
            <li><Link to="/about/committees" className="text-gray-400 hover:text-white">National Committees</Link></li>
            <li><Link to="/about/departments" className="text-gray-400 hover:text-white">Departments</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Business Services</h4>
          <ul className="space-y-2 list-disc list-inside marker:text-white">
            <li><Link to="/investors/start-business" className="text-gray-400 hover:text-white">Start a Business</Link></li>
            <li><Link to="/investors/trade-name-search" className="text-gray-400 hover:text-white">Trade Name Search</Link></li>
            <li><Link to="/investors/commercial-register" className="text-gray-400 hover:text-white">Commercial Register</Link></li>
            <li><Link to="/investors/licensing" className="text-gray-400 hover:text-white">Licensing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Investor Resources</h4>
          <ul className="space-y-2 list-disc list-inside marker:text-white">
            <li><Link to="/investors/portal" className="text-gray-400 hover:text-white">Qatar Investment Portal</Link></li>
            <li><Link to="/investors/opportunities" className="text-gray-400 hover:text-white">Investment Opportunities</Link></li>
            <li><Link to="/investors/incentives" className="text-gray-400 hover:text-white">Investor Incentives</Link></li>
            <li><Link to="/investors/regulations" className="text-gray-400 hover:text-white">Regulations</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Media & Resources</h4>
          <ul className="space-y-2 list-disc list-inside marker:text-white">
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
        {/* Chat With Us Button */}
        <div className="mb-8">
          <Button className="bg-qatari hover:bg-qatari-light text-white font-bold px-6 py-3">
            Chat With Us
          </Button>
        </div>

        {/* Newsletter */}
        <div className="mb-12 pb-12 border-b border-gray-800">
          <div className="max-w-md">
            <h3 className="text-xl font-semibold mb-2">Subscribe to our Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with the latest news, investment opportunities, and events.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 min-w-[280px]"
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
              src="public/images/logo-main-white.svg"
              alt="MOCI Logo"
              className="h-14 mr-4 max-w-[240px] object-contain"
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

          {/* App Download and Social Media */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
            {/* App Download Buttons */}
            <div className="flex flex-col gap-3">
              <p className="text-sm text-gray-400 font-medium">Download Our App</p>
              <div className="flex gap-3">
                <a
                  href="https://apps.apple.com/app/moci-qatar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src="/images/apple.png"
                    alt="Download on the App Store"
                    className="h-10 w-auto"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.moci.qatar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105"
                >
                  <img
                    src="/images/google.png"
                    alt="Get it on Google Play"
                    className="h-10 w-auto"
                  />
                </a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex flex-col gap-3">
              <p className="text-sm text-gray-400 font-medium">Follow Us</p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/mociQatar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://www.twitter.com/mociQatar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="https://www.instagram.com/mociQatar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/company/mociQatar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://www.youtube.com/mociQatar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
