
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { scrollToTop } from '@/hooks/use-scroll-to-top';

const menuItems = [
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

// Helper component to render nested menu items
const NestedMenuItem = ({ item, onNavClick }: any) => {
  const [isOpen, setIsOpen] = React.useState(false);

  if (item.submenu) {
    return (
      <div
        className="group relative"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button className="block w-full text-left select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-qatari/10 hover:text-qatari focus:bg-qatari/10 focus:text-qatari text-gray-700 border-l-4 border-transparent hover:border-qatari">
          <div className="text-sm font-medium leading-tight flex items-center justify-between">
            {item.title}
            <span className="text-xs ml-2">→</span>
          </div>
        </button>
        {/* Nested submenu - opens on hover */}
        {isOpen && (
          <div className="absolute left-full top-0 ml-1 bg-white rounded-md shadow-lg border border-gray-200 min-w-[250px] z-50">
            <ul className="py-1">
              {item.submenu.map((subItem: any) => (
                <li key={subItem.title}>
                  <NestedMenuItem item={subItem} onNavClick={onNavClick} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return (
    <NavigationMenuLink asChild>
      <Link
        to={item.href}
        onClick={onNavClick}
        className={cn(
          "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-qatari/10 hover:text-qatari focus:bg-qatari/10 focus:text-qatari text-gray-700 border-l-4 border-transparent hover:border-qatari"
        )}
      >
        <div className="text-sm font-medium leading-tight">
          {item.title}
        </div>
      </Link>
    </NavigationMenuLink>
  );
};

const NavigationMenuDemo = () => {
  const handleMainNavClick = () => {
    // Add a small delay to ensure navigation starts before scrolling
    setTimeout(() => {
      scrollToTop();
    }, 100);
  };

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-1">
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            {item.submenu ? (
              <>
                <NavigationMenuTrigger className="text-xl font-medium bg-transparent hover:bg-white/10 focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-white/10 text-white hover:text-white focus:text-white transition-colors duration-200 px-4 py-2 rounded-md">
                  <Link to={item.href} className="flex items-center" onClick={handleMainNavClick}>
                    {item.title}
                  </Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="mt-1">
                  <ul className="grid w-[400px] gap-1 p-2">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.title}>
                        <NestedMenuItem item={subItem} onNavClick={handleMainNavClick} />
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link
                  to={item.href}
                  onClick={handleMainNavClick}
                  className="text-xl font-medium bg-transparent hover:bg-transparent focus:bg-transparent text-white hover:text-white focus:text-white px-4 py-2 rounded-md transition-colors"
                >
                  {item.title}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationMenuDemo;
