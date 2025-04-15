
import React, { useState } from 'react';
import { TrendingUp, BarChart, FileCheck, Globe, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const stats = [
  {
    title: "Foreign Ownership",
    value: "100%",
    description: "Full ownership permitted for foreign investors across most economic sectors",
    icon: Globe,
  },
  {
    title: "Global Ranking",
    value: "Top 20",
    description: "Ranked among the top 20 countries for ease of doing business",
    icon: TrendingUp,
  },
  {
    title: "Economic Growth",
    value: "+3.8%",
    description: "Projected annual GDP growth rate for 2025",
    icon: BarChart,
  },
  {
    title: "Tax Benefits",
    value: "0-10%",
    description: "Competitive corporate tax rates with extensive exemptions available",
    icon: FileCheck,
  }
];

const EconomicSnapshot = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-fixed opacity-100"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=2070')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60 z-0"></div>
      
      <div className="container-wide relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Qatar Economic Snapshot</h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Qatar offers one of the most attractive business environments in the Middle East,
            with robust growth and investor-friendly policies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div 
                key={stat.title}
                className={`bg-white/90 backdrop-blur-sm rounded-xl border border-gray-200 p-6 shadow-sm transition-all duration-300 ${isHovered ? 'shadow-lg transform -translate-y-1' : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="rounded-full w-12 h-12 flex items-center justify-center bg-qatari/10 mb-4">
                  <IconComponent className={`h-6 w-6 text-qatari ${isHovered ? 'animate-pulse' : ''}`} />
                </div>
                
                <h3 className="text-lg font-semibold mb-2">{stat.title}</h3>
                <div className="text-3xl font-bold text-qatari mb-3">{stat.value}</div>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-10">
          <Button
            asChild
            className="bg-qatari hover:bg-qatari-light text-white"
          >
            <Link to="/investors/economic-data">
              View Complete Economic Data
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EconomicSnapshot;
