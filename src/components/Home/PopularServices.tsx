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
import { cn } from '@/lib/utils';

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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      document.querySelector('.carousel-next')?.dispatchEvent(
        new MouseEvent('click', { bubbles: true })
      );
    } else if (e.key === 'ArrowLeft') {
      document.querySelector('.carousel-prev')?.dispatchEvent(
        new MouseEvent('click', { bubbles: true })
      );
    }
  };

  return (
    <section
      className="py-24 relative overflow-hidden bg-white dark:bg-gray-950"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div
        className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center bg-fixed opacity-5"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/95 dark:from-gray-950/95 dark:via-gray-900/90 dark:to-gray-950/95 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div className="container-wide relative z-10">
        <div className="text-left mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-3 text-qatari dark:text-qatari-light bg-clip-text text-transparent bg-gradient-to-r from-qatari dark:from-qatari-light to-qatari-light dark:to-white">
            How Can We Help You Today?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-xl">
            Access our most popular services with just a click
          </p>
        </div>

        <div className="relative px-4 sm:px-6 md:px-8">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {services.map((service) => (
                <CarouselItem
                  key={service.id}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <ServiceTile
                    service={service}
                    isActive={activeService?.id === service.id}
                    onClick={() => handleServiceClick(service)}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12 carousel-prev" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-12 carousel-next" />
          </Carousel>

          <div className="flex justify-center space-x-2 mt-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300 cursor-pointer",
                  activeService?.id === service.id
                    ? "bg-qatari w-4"
                    : "bg-black dark:bg-white hover:bg-gray-700 dark:hover:bg-gray-300"
                )}
                role="button"
                tabIndex={0}
                onClick={() => handleServiceClick(service)}
                onKeyDown={(e) => e.key === 'Enter' && handleServiceClick(service)}
                aria-label={`View ${service.title}`}
              />
            ))}
          </div>
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
