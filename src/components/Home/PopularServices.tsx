
import React, { useState } from 'react';
import { 
  Search, 
  FileText, 
  BookOpen, 
  Globe,
  ChevronRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 1,
    title: 'Trade Name Search',
    description: 'Search and reserve a business name for your new enterprise.',
    icon: Search,
    link: '/services/trade-name-search',
  },
  {
    id: 2,
    title: 'Commercial Registration',
    description: 'Register your business and obtain official commercial registration.',
    icon: FileText,
    link: '/services/commercial-registration',
  },
  {
    id: 3,
    title: 'Business Licensing',
    description: 'Apply for various business licenses and permits for your operations.',
    icon: BookOpen,
    link: '/services/licensing',
  },
  {
    id: 4,
    title: 'E-Services Portal',
    description: 'Access all online services in one convenient location.',
    icon: Globe,
    link: '/e-services',
  },
];

const PopularServices = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-fixed opacity-100"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070')"
        }}
      />
      <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-0"></div>
      
      <div className="container-wide relative z-10">
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
          {services.map((service) => (
            <Link 
              key={service.id} 
              to={service.link}
              className="group relative h-[280px] overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 opacity-90" />
              
              <div className="relative h-full p-8 flex flex-col">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-qatari to-qatari-light flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-3 transition-transform duration-500 group-hover:translate-x-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm transition-transform duration-500 group-hover:translate-x-2">
                    {service.description}
                  </p>
                </div>
                
                <div className="mt-6">
                  <span className="inline-flex items-center text-qatari font-medium text-sm group-hover:translate-x-2 transition-all duration-500">
                    Get Started
                    <ChevronRight className="ml-1 h-4 w-4 transform transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-qatari to-qatari-light transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
