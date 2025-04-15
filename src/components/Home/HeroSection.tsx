import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1551038247-3d9af20df552?q=80&w=2070')",
          backgroundPosition: "center 30%"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/60 z-0"></div>
      </div>
      
      {/* Content */}
      <div className="container-wide relative z-10 min-h-[600px] md:min-h-[650px] lg:min-h-[700px] flex flex-col justify-center py-20">
        
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            Qatar: Your Gateway to Global Business
          </h1>
          <p className="text-xl text-gray-200 mb-8 md:pr-12 animate-fade-in">
            Discover world-class investment opportunities with 100% foreign ownership
            in one of the fastest growing economies in the Middle East.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button
              asChild
              className="bg-qatari hover:bg-qatari-light text-white px-6 py-6 text-base"
            >
              <Link to="/investors/start-business">
                Start a Business
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 px-6 py-6 text-base"
            >
              <Link to="/investors/opportunities">
                Explore Opportunities
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
