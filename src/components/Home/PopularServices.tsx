
import React, { useState, useEffect } from 'react';
import { 
  Search, 
  FileText, 
  BookOpen, 
  Globe,
  Briefcase,
  ChevronRight,
  X,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { useIsMobile } from '@/hooks/use-mobile';

const services = [
  {
    id: 1,
    title: 'Trade Name Search',
    description: 'Search and reserve a business name for your new enterprise.',
    icon: Search,
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
    link: '/services/commercial-registration',
    benefits: [
      'Streamlined application process',
      'Digital certificate delivery'
    ],
    stats: {
      processingTime: '2-3 business days',
      success: 'Over 10,000 businesses registered monthly'
    }
  },
  {
    id: 3,
    title: 'Business Licensing',
    description: 'Apply for various business licenses and permits for your operations.',
    icon: BookOpen,
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
    id: 4,
    title: 'Investment Opportunities',
    description: 'Discover high-growth sectors and investment options in Qatar.',
    icon: Briefcase,
    link: '/investors/opportunities',
    benefits: [
      'Curated investment prospects',
      'Sector-specific data insights'
    ],
    stats: {
      sectors: '12 priority sectors',
      growth: 'Average 15% ROI'
    }
  },
  {
    id: 5,
    title: 'E-Services Portal',
    description: 'Access all online services in one convenient location.',
    icon: Globe,
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
];

const PopularServices = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [openSheetId, setOpenSheetId] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const isMobile = useIsMobile();
  
  const handleServiceClick = (id: number) => {
    setIsAnimating(true);
    setActiveService(id);
    if (isMobile) {
      setOpenSheetId(id);
    }
    setTimeout(() => setIsAnimating(false), 300);
  };

  const getServiceById = (id: number | null) => {
    if (id === null) return null;
    return services.find(service => service.id === id) || null;
  };

  const activeServiceData = getServiceById(activeService);
  const cardAngle = 360 / services.length;
  
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background with blur and gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-10 z-0"
        style={{
          backgroundImage: "url('/images/image4.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-sm z-0" />
      
      <div className="container-wide relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-3 text-qatari bg-clip-text text-transparent bg-gradient-to-r from-qatari to-qatari-light">
            How Can We Help You Today?
          </h2>
          <p className="text-gray-600 text-lg">
            Access our most popular services with just a click
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Mobile View: Enhanced Cards */}
          <div className="lg:hidden w-full">
            <div className="flex flex-col space-y-4">
              {services.map(service => (
                <Sheet key={service.id} open={openSheetId === service.id} onOpenChange={(open) => {
                  if (open) setOpenSheetId(service.id);
                  else setOpenSheetId(null);
                }}>
                  <SheetTrigger asChild>
                    <div 
                      className="group bg-white/50 backdrop-blur-sm rounded-2xl p-6 flex items-center cursor-pointer hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-qatari/20"
                      onClick={() => handleServiceClick(service.id)}
                    >
                      <div className="bg-gradient-to-br from-qatari to-qatari-light w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-qatari/20 transition-all duration-300 group-hover:scale-110">
                        <service.icon className="text-white h-6 w-6" />
                      </div>
                      <div className="ml-4 flex-grow">
                        <h3 className="font-medium text-lg group-hover:text-qatari transition-colors">{service.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-1">{service.description}</p>
                      </div>
                      <ChevronRight className="ml-2 text-qatari h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </SheetTrigger>
                  <SheetContent className="w-full sm:max-w-md bg-white/95 backdrop-blur-md">
                    <SheetHeader>
                      <SheetTitle className="flex items-center text-qatari">
                        <service.icon className="mr-2 h-6 w-6" />
                        {service.title}
                      </SheetTitle>
                      <SheetDescription>{service.description}</SheetDescription>
                    </SheetHeader>
                    <div className="py-6">
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-sm font-medium mb-3 text-gray-700">Key Benefits</h4>
                          <ul className="space-y-3">
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start">
                                <div className="mr-2 mt-1.5 h-2 w-2 rounded-full bg-gradient-to-br from-qatari to-qatari-light flex-shrink-0" />
                                <span className="text-sm text-gray-600">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(service.stats).map(([key, value], idx) => (
                            <div key={idx} className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-100">
                              <p className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                              <p className="font-medium text-sm mt-1 text-gray-800">{value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Button
                        asChild
                        className="w-full mt-8 bg-gradient-to-r from-qatari to-qatari-light hover:from-qatari-light hover:to-qatari text-white shadow-md hover:shadow-lg transition-all duration-300 group"
                      >
                        <Link to={service.link}>
                          Access Service
                          <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </SheetContent>
                </Sheet>
              ))}
            </div>
          </div>
          
          {/* Desktop View: Enhanced Radial Menu */}
          <div className="hidden lg:flex w-full">
            <div className="w-full flex items-center justify-between">
              {/* Radial Menu */}
              <div className="relative w-[500px] h-[500px]">
                {/* Center Logo with Pulse Animation */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full bg-gradient-to-br from-qatari to-qatari-light flex items-center justify-center z-10 shadow-lg animate-slow-pulse">
                  <div className="bg-white/95 rounded-full p-4 w-[100px] h-[100px] flex items-center justify-center">
                    <img 
                      src="/images/logo-main-white.svg" 
                      alt="Qatar Logo" 
                      className="w-16 h-16 object-contain opacity-80"
                    />
                  </div>
                </div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full z-0">
                  {services.map((service, index) => {
                    const angle = (cardAngle * index - 90) * (Math.PI / 180);
                    const x2 = Math.cos(angle) * 200 + 250;
                    const y2 = Math.sin(angle) * 200 + 250;
                    
                    return (
                      <line
                        key={service.id}
                        x1="250"
                        y1="250"
                        x2={x2}
                        y2={y2}
                        stroke={activeService === service.id ? '#8b0d32' : '#e5e7eb'}
                        strokeWidth="1"
                        className="transition-all duration-300"
                      />
                    );
                  })}
                </svg>
                
                {/* Service Items */}
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-gray-200/50"></div>
                  
                  {services.map((service, index) => {
                    const angle = cardAngle * index;
                    const radians = (angle - 90) * (Math.PI / 180);
                    const x = Math.cos(radians) * 200 + 250;
                    const y = Math.sin(radians) * 200 + 250;
                    
                    const isActive = activeService === service.id;
                    
                    return (
                      <HoverCard key={service.id} openDelay={100} closeDelay={100}>
                        <HoverCardTrigger asChild>
                          <div 
                            className={cn(
                              "absolute transform -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] rounded-full cursor-pointer transition-all duration-500 hover:scale-110",
                              isActive 
                                ? "bg-gradient-to-br from-qatari to-qatari-light shadow-lg shadow-qatari/20" 
                                : "bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-md border border-gray-100"
                            )}
                            style={{ 
                              left: `${x}px`, 
                              top: `${y}px`,
                              zIndex: isActive ? 5 : 1
                            }}
                            onClick={() => handleServiceClick(service.id)}
                          >
                            <div className="w-full h-full flex flex-col items-center justify-center p-2 group">
                              <service.icon className={cn(
                                "h-6 w-6 mb-1 transition-all duration-300 transform group-hover:scale-110",
                                isActive ? "text-white" : "text-qatari"
                              )} />
                              <span className={cn(
                                "text-xs font-medium text-center line-clamp-1 transition-colors duration-300",
                                isActive ? "text-white" : "text-gray-700"
                              )}>
                                {service.title}
                              </span>
                            </div>
                          </div>
                        </HoverCardTrigger>
                        <HoverCardContent 
                          className="w-64 p-4 bg-white/95 backdrop-blur-sm border border-gray-100 shadow-lg"
                          align="center"
                        >
                          <div className="space-y-2">
                            <h4 className="font-medium text-sm text-qatari">{service.title}</h4>
                            <p className="text-xs text-gray-600">{service.description}</p>
                            <Button 
                              variant="link" 
                              className="p-0 h-auto text-xs text-qatari group"
                              onClick={() => handleServiceClick(service.id)}
                            >
                              View details
                              <ChevronRight className="ml-1 h-3 w-3 transform group-hover:translate-x-0.5 transition-transform" />
                            </Button>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                    );
                  })}
                </div>
              </div>
              
              {/* Detail Panel with Enhanced Design */}
              <div 
                className={cn(
                  "w-[400px] h-[500px] rounded-2xl p-8 relative overflow-hidden transition-all duration-300",
                  "bg-white/80 backdrop-blur-md border border-gray-100 shadow-lg",
                  isAnimating ? "translate-x-4 opacity-0" : "translate-x-0 opacity-100"
                )}
              >
                {activeServiceData ? (
                  <>
                    <button 
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                      onClick={() => setActiveService(null)}
                    >
                      <X className="h-5 w-5" />
                    </button>
                    
                    <div className="flex items-start mb-6">
                      <div className="bg-gradient-to-br from-qatari to-qatari-light w-14 h-14 rounded-xl flex items-center justify-center shadow-lg shadow-qatari/20">
                        <activeServiceData.icon className="text-white h-7 w-7" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold text-gray-800">{activeServiceData.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{activeServiceData.description}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-medium text-gray-700 mb-3">Key Benefits</h4>
                      <ul className="space-y-3">
                        {activeServiceData.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="mr-3 mt-1.5 h-2 w-2 rounded-full bg-gradient-to-br from-qatari to-qatari-light flex-shrink-0" />
                            <span className="text-sm text-gray-600">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {Object.entries(activeServiceData.stats).map(([key, value], idx) => (
                        <div key={idx} className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-gray-100">
                          <p className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                          <p className="font-medium text-sm mt-1 text-gray-800">{value}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="absolute bottom-8 left-8 right-8">
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-qatari to-qatari-light hover:from-qatari-light hover:to-qatari text-white shadow-md hover:shadow-lg transition-all duration-300 group"
                      >
                        <Link to={activeServiceData.link}>
                          Access Service
                          <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <ChevronRight className="h-6 w-6 text-qatari" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-700 mb-2">Explore Our Services</h3>
                    <p className="text-gray-500 max-w-xs">Select a service from the wheel to view detailed information and access options.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
