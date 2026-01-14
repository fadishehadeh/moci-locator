import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Layout from '@/components/Layout/Layout';

interface SitemapLink {
  title: string;
  href: string;
  submenu?: SitemapLink[];
}

const sitemapLinks: SitemapLink[] = [
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
  {
    title: "Single Window",
    href: "/single-window"
  },
  {
    title: "Qatar Industrial Portal",
    href: "/qatar-industrial-portal"
  },
  {
    title: "Qatar Business Map",
    href: "/qatar-business-map"
  },
  {
    title: "Useful Websites",
    href: "/useful-websites"
  },
  {
    title: "Public-Private Partnership Program",
    href: "/ppp-program"
  },
];

const legalPages: SitemapLink[] = [
  {
    title: "Privacy Policy",
    href: "/privacy-policy"
  },
  {
    title: "Terms of Use",
    href: "/terms-of-use"
  },
  {
    title: "Cookie Policy",
    href: "/cookie-policy"
  },
  {
    title: "Accessibility Statement",
    href: "/accessibility-statement"
  },
  {
    title: "Data Protection",
    href: "/data-protection"
  },
];

const supportPages: SitemapLink[] = [
  {
    title: "Contact Us",
    href: "/contact-us"
  },
  {
    title: "FAQs",
    href: "/faqs"
  },
  {
    title: "Help & Support",
    href: "/help-support"
  },
  {
    title: "Feedback",
    href: "/feedback"
  },
  {
    title: "Report an Issue",
    href: "/report-issue"
  },
];

const additionalLinks: SitemapLink[] = [
  {
    title: "Resources",
    href: "/resources"
  },
  {
    title: "Employee Portal",
    href: "#"
  },
  {
    title: "International",
    href: "/international"
  },
];

const SitemapLink: React.FC<{ link: SitemapLink; level?: number }> = ({ link, level = 0 }) => {
  const paddingLeft = level * 24;

  return (
    <div>
      <Link
        to={link.href}
        style={{ paddingLeft: `${paddingLeft}px` }}
        className="flex items-center gap-2 py-2 text-qatari hover:text-qatari/80 hover:underline transition-colors focus:outline-none focus:ring-2 focus:ring-qatari focus:rounded"
      >
        {link.submenu && link.submenu.length > 0 && (
          <ChevronRight className="h-4 w-4 flex-shrink-0" />
        )}
        <span>{link.title}</span>
      </Link>
      {link.submenu && link.submenu.length > 0 && (
        <div>
          {link.submenu.map((subLink) => (
            <SitemapLink key={subLink.title} link={subLink} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function Sitemap() {
  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
              <p className="text-lg text-gray-600">
                Browse all pages and sections of the Qatar Ministry of Commerce and Industry website.
              </p>
            </div>

            {/* Main Sitemap */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Main Navigation</h2>
              <nav className="space-y-1">
                {sitemapLinks.map((link) => (
                  <SitemapLink key={link.title} link={link} />
                ))}
              </nav>
            </div>

            {/* Legal Pages */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Legal & Compliance</h2>
              <nav className="space-y-1">
                {legalPages.map((link) => (
                  <SitemapLink key={link.title} link={link} />
                ))}
              </nav>
            </div>

            {/* Support Pages */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Support & Help</h2>
              <nav className="space-y-1">
                {supportPages.map((link) => (
                  <SitemapLink key={link.title} link={link} />
                ))}
              </nav>
            </div>

            {/* Additional Links */}
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Resources</h2>
              <nav className="space-y-1">
                {additionalLinks.map((link) => (
                  <SitemapLink key={link.title} link={link} />
                ))}
              </nav>
            </div>

            {/* Footer Info */}
            <div className="mt-12 text-center text-gray-600">
              <p>
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

