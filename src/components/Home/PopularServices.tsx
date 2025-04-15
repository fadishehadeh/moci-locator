
import React, { useState } from 'react';
import { Search, FileText, BookOpen, Globe, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

const services = [
  {
    id: 1,
    title: 'Trade Name Search',
    description: 'Search and reserve a business name for your new enterprise.',
    icon: Search,
    link: '/services/trade-name-search',
    gradient: 'from-violet-500 to-fuchsia-500',
  },
  {
    id: 2,
    title: 'Commercial Registration',
    description: 'Register your business and obtain official commercial registration.',
    icon: FileText,
    link: '/services/commercial-registration',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    id: 3,
    title: 'Business Licensing',
    description: 'Apply for various business licenses and permits for your operations.',
    icon: BookOpen,
    link: '/services/licensing',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    id: 4,
    title: 'E-Services Portal',
    description: 'Access all online services in one convenient location.',
    icon: Globe,
    link: '/e-services',
    gradient: 'from-orange-500 to-amber-500',
  },
];

const PopularServices = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  
  return (
    <section className="py-20">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-qatari">Popular Services</h2>
            <p className="text-gray-600">Quick access to our most frequently used business services</p>
          </div>
          <Button 
            asChild
            variant="outline" 
            className="mt-4 md:mt-0 border-qatari text-qatari hover:bg-qatari/10"
          >
            <Link to="/services">
              View All Services
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            const isHovered = hoveredService === service.id;
            
            return (
              <HoverCard key={service.id} openDelay={0} closeDelay={0}>
                <HoverCardTrigger asChild>
                  <Link 
                    to={service.link}
                    className="block"
                    onMouseEnter={() => setHoveredService(service.id)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <motion.div 
                      className={`relative h-[280px] rounded-2xl overflow-hidden bg-gradient-to-br ${service.gradient}`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
                      
                      <div className="relative h-full p-8 flex flex-col">
                        <motion.div 
                          className="mb-6"
                          animate={{ 
                            y: isHovered ? 10 : 0,
                            rotate: isHovered ? 360 : 0 
                          }}
                          transition={{ duration: 0.4 }}
                        >
                          <div className="w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center">
                            <IconComponent className={`h-8 w-8 text-qatari transition-all duration-300`} />
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="flex-grow"
                          animate={{ y: isHovered ? -10 : 0 }}
                          transition={{ duration: 0.4 }}
                        >
                          <h3 className="text-xl font-semibold text-white mb-3">
                            {service.title}
                          </h3>
                          <p className="text-white/90 text-sm">
                            {service.description}
                          </p>
                        </motion.div>
                        
                        <motion.div 
                          className="mt-6"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ 
                            opacity: isHovered ? 1 : 0,
                            y: isHovered ? 0 : 20
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="inline-flex items-center text-white font-medium text-sm group">
                            Get Started
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </span>
                        </motion.div>
                      </div>
                    </motion.div>
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent 
                  className="w-80 p-4"
                  align="start"
                >
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">{service.title}</h4>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                    <div className="flex items-center pt-2">
                      <IconComponent className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">Click to access service</span>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
