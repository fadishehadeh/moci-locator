
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { ServiceItem } from './types';

interface ServiceTileProps {
  service: ServiceItem;
  isActive: boolean;
  onClick: () => void;
}

const ServiceTile = ({ service, isActive, onClick }: ServiceTileProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative w-full h-[350px] rounded-2xl overflow-hidden transition-all duration-500",
        "hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-qatari focus:ring-offset-2",
        isActive && "ring-2 ring-qatari ring-offset-2"
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={service.backgroundImage}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className={cn(
        "absolute inset-0",
        "bg-gradient-to-t from-black/90 via-black/70 to-black/20",
        "transition-opacity duration-500"
      )} />

      {/* Main Content - Always Visible */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 p-6 text-center">
        {/* Icon Container with Neumorphic Effect */}
        <div className={cn(
          "flex items-center justify-center",
          "w-20 h-20 rounded-full mb-4",
          "bg-white/10 backdrop-blur-md",
          "border border-white/20 shadow-lg",
          "transform transition-all duration-500 group-hover:scale-110",
          "animate-slow-pulse"
        )}>
          <service.icon className="h-10 w-10 text-white" />
        </div>

        {/* Title */}
        <h3 className={cn(
          "text-xl font-semibold text-white mb-2 mt-2",
          "transition-transform duration-500"
        )}>
          {service.title}
        </h3>

        {/* Short Description - Always Visible */}
        <p className="text-white/80 text-sm max-w-[80%] opacity-80 transition-opacity duration-500 group-hover:opacity-0">
          {service.description}
        </p>
      </div>

      {/* Hover State Content */}
      <div className={cn(
        "absolute inset-0 flex flex-col items-center justify-end pb-16 p-6",
        "bg-black/40 backdrop-blur-sm",
        "opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100",
        "transition-all duration-500 ease-in-out"
      )}>
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-xl w-[80%] text-center">
          {/* Description */}
          <p className="text-white text-sm mb-4">
            {service.description}
          </p>

          {/* Stats or Micro Data */}
          <div className="flex justify-center gap-4 mb-4">
            {Object.entries(service.stats).slice(0, 1).map(([key, value], idx) => (
              <div key={idx} className="text-center">
                <p className="text-white/70 text-xs capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </p>
                <p className="text-white text-sm font-medium">{value}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <Button
            className={cn(
              "bg-white/20 backdrop-blur-md hover:bg-white/30",
              "text-white border border-white/20 mt-2",
              "transition-all duration-300 group/button"
            )}
          >
            Access Service
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/button:translate-x-1 animate-pulse" />
          </Button>
        </div>
      </div>
    </button>
  );
};

export default ServiceTile;
