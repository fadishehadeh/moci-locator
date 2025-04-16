
import React, { useState } from 'react';
import {
  Search,
  FileText,
  Globe,
  BookOpen,
  Briefcase,
} from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';
import ServiceTile from './ServiceExplorer/ServiceTile';
import ServiceDrawer from './ServiceExplorer/ServiceDrawer';
import { ServiceItem } from './ServiceExplorer/types';

const services: ServiceItem[] = [
  {
    id: 1,
    title: 'Trade Name Search',
    description: 'Search and reserve a business name for your new enterprise.',
    icon: Search,
    backgroundImage: '/images/image1.jpg',
    link: '/services/trade-name-search',
    benefits: [
      '24/7 online availability',
      'Instant name reservation'
    ],
    stats: {
      processingTime: 'Immediate',
      success: '98% approval rate'
    }
  },
  {
    id: 2,
    title: 'Commercial Registration',
    description: 'Register your business and obtain official commercial registration.',
    icon: FileText,
    backgroundImage: '/images/image2.jpg',
    link: '/services/commercial-registration',
    benefits: [
      'Streamlined application process',
      'Digital certificate delivery'
    ],
    stats: {
      processingTime: '2-3 business days',
      success: 'Over 10,000 registered monthly'
    }
  },
  {
    id: 3,
    title: 'E-Services',
    description: 'Access all online services in one convenient location.',
    icon: Globe,
    backgroundImage: '/images/image3.jpg',
    link: '/e-services',
    benefits: [
      'Single sign-on for all services',
      'Mobile-friendly interface'
    ],
    stats: {
      services: '50+ digital services',
      uptime: '99.9% availability'
    }
  },
  {
    id: 4,
    title: 'Business Licensing',
    description: 'Apply for various business licenses and permits for your operations.',
    icon: BookOpen,
    backgroundImage: '/images/image4.jpg',
    link: '/services/licensing',
    benefits: [
      'All-in-one licensing portal',
      'Step-by-step guidance'
    ],
    stats: {
      processingTime: '3-5 business days',
      success: '95% first-time approval'
    }
  },
  {
    id: 5,
    title: 'Investment Opportunities',
    description: 'Discover high-growth sectors and investment options in Qatar.',
    icon: Briefcase,
    backgroundImage: '/images/hero.jpg',
    link: '/investors/opportunities',
    benefits: [
      'Curated investment prospects',
      'Sector-specific data insights'
    ],
    stats: {
      sectors: '12 priority sectors',
      growth: 'Average 15% ROI'
    }
  }
];

const PopularServices = () => {
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const handleServiceClick = (service: ServiceItem) => {
    setActiveService(service);
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
    setActiveService(null);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with blur and Qatar skyline */}
      <div 
        className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center bg-fixed opacity-5"
        aria-hidden="true"
      />
      <div 
        className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-sm"
        aria-hidden="true"
      />
      
      <div className="container-wide relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-3 text-qatari bg-clip-text text-transparent bg-gradient-to-r from-qatari to-qatari-light">
            How Can We Help You Today?
          </h2>
          <p className="text-gray-600 text-lg">
            Access our most popular services with just a click
          </p>
        </div>

        <div className="relative px-4 sm:px-8 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {services.map((service) => (
                <CarouselItem 
                  key={service.id} 
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <ServiceTile
                    service={service}
                    isActive={activeService?.id === service.id}
                    onClick={() => handleServiceClick(service)}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </div>

      <ServiceDrawer
        service={activeService}
        isOpen={isDrawerOpen}
        onClose={handleDrawerClose}
      />
    </section>
  );
};

export default PopularServices;
