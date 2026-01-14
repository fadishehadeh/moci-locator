
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
    <section className="py-20 relative overflow-hidden dark:bg-gray-950">
      <div
        className="absolute inset-0 bg-cover bg-fixed opacity-50"
        style={{
          backgroundImage: "url('public/images/image3.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 dark:from-gray-950/95 to-gray-900/60 dark:to-gray-950/80 z-0"></div>

      <div className="container-wide relative z-10">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Why Qatar?</h2>
          <p className="text-xl text-gray-200 dark:text-gray-300 max-w-2xl">
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
                className={`relative group overflow-hidden rounded-2xl bg-gradient-to-br from-white/95 dark:from-gray-800/95 to-white/90 dark:to-gray-800/80 backdrop-blur-sm shadow-lg dark:shadow-gray-900/50 transition-all duration-500 ${isHovered ? 'transform -translate-y-2' : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-qatari/5 dark:from-qatari/10 to-qatari/10 dark:to-qatari/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="p-8 relative z-10">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-qatari to-qatari-light transform transition-transform duration-500 ${isHovered ? 'scale-110' : ''}`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>

                  <div className="mt-6">
                    <div className={`text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-qatari to-qatari-light transition-all duration-500 ${isHovered ? 'skew-x-6' : ''}`}>
                      {stat.value}
                    </div>
                    <h3 className="text-xl font-semibold mt-2 text-gray-900 dark:text-white">{stat.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">{stat.description}</p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-qatari to-qatari-light transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100" />
              </div>
            );
          })}
        </div>

        <div className="flex justify-start mt-10">
          <Button
            asChild
            className="bg-qatari hover:bg-qatari-light text-white text-xl"
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
