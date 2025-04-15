
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link 
              key={service.id} 
              to={service.link}
              className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col h-full shadow-sm transition-all duration-300 hover:shadow-lg hover:border-qatari/50 hover:-translate-y-1 group"
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-qatari/10 mb-4 group-hover:bg-qatari/20 transition-colors">
                <service.icon className={`h-6 w-6 text-qatari ${activeService === service.id ? 'scale-110 transition-transform' : ''}`} />
              </div>
              
              <h3 className="text-lg font-semibold mb-2 group-hover:text-qatari transition-colors">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              
              <div className="mt-auto flex items-center text-qatari font-medium text-sm group-hover:translate-x-1 transition-transform">
                Get Started
                <ChevronRight className="ml-1 h-4 w-4 group-hover:ml-2 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
