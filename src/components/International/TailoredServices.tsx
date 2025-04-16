
import React from 'react';
import { Building2, FileText, HomeLine, FileCheck, PackageOpen, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

// Create a HomeLine icon since it doesn't exist in lucide-react
const HomeLine = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const services = [
  {
    title: "Company Registration",
    description: "Streamlined process for registering your business in Qatar",
    icon: Building2,
    link: "/services/company-registration"
  },
  {
    title: "Investment Licensing",
    description: "Expedited licensing for foreign direct investment",
    icon: FileText,
    link: "/services/investment-licensing"
  },
  {
    title: "Real Estate for Business",
    description: "Office space, industrial land, and commercial property solutions",
    icon: HomeLine,
    link: "/services/business-real-estate"
  },
  {
    title: "Trade Agreements",
    description: "Explore Qatar's bilateral and multilateral trade agreements",
    icon: FileCheck,
    link: "/services/trade-agreements"
  },
  {
    title: "Customs Exemptions",
    description: "Import and export duty exemptions for qualifying businesses",
    icon: PackageOpen,
    link: "/services/customs-exemptions"
  }
];

const TailoredServices = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Tailored Services for International Users</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access specialized services designed to help international businesses
            establish and grow their presence in Qatar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            
            return (
              <Card key={service.title} className="overflow-hidden group hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4 h-12 w-12 rounded-full bg-qatari/10 flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-qatari" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button
                    asChild
                    variant="ghost"
                    className="p-0 h-auto text-qatari hover:text-qatari-light hover:bg-transparent"
                  >
                    <Link to={service.link} className="flex items-center">
                      Learn more
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
                <div className="h-1 w-full bg-gradient-to-r from-qatari to-qatari-light transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TailoredServices;
