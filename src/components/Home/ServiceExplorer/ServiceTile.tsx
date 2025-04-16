
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
        "group relative w-full h-[400px] rounded-2xl overflow-hidden transition-all duration-500",
        "hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-qatari focus:ring-offset-2",
        isActive && "ring-2 ring-qatari ring-offset-2"
      )}
    >
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
        <img
          src={service.backgroundImage}
          alt={service.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient Overlay with Fade-in Effect */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent",
        "opacity-70 group-hover:opacity-95 transition-opacity duration-500"
      )} />

      {/* Content Container with Fade-up Animation */}
      <div className={cn(
        "absolute inset-x-0 bottom-0 p-8",
        "transform transition-all duration-500",
        "translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
      )}>
        {/* Icon Container */}
        <div className={cn(
          "w-16 h-16 mx-auto mb-4",
          "rounded-full bg-white/10 backdrop-blur-md",
          "flex items-center justify-center",
          "border border-white/20 shadow-lg",
          "transform transition-all duration-500 group-hover:scale-110"
        )}>
          <service.icon className="h-8 w-8 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-semibold text-white mb-3">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-white/80 text-sm mb-6 line-clamp-2">
          {service.description}
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {Object.entries(service.stats).map(([key, value], idx) => (
            <div key={idx} className="backdrop-blur-md bg-white/10 p-3 rounded-lg">
              <p className="text-xs text-white/60 capitalize">
                {key.replace(/([A-Z])/g, ' $1').trim()}
              </p>
              <p className="text-sm text-white font-medium">{value}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button 
          className={cn(
            "w-full bg-white/20 backdrop-blur-md hover:bg-white/30",
            "text-white border border-white/20",
            "transition-all duration-300 group/button"
          )}
        >
          Explore Service
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/button:translate-x-1" />
        </Button>
      </div>
    </button>
  );
};

export default ServiceTile;
