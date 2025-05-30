
import React from 'react';
import { ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from '@/components/ui/drawer';
import { ServiceItem } from './types';

interface ServiceDrawerProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceDrawer = ({ service, isOpen, onClose }: ServiceDrawerProps) => {
  if (!service) return null;

  return (
    <Drawer open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DrawerContent className="h-[85vh] sm:h-auto">
        <div className="container max-w-2xl mx-auto p-6">
          <DrawerHeader className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
            <DrawerTitle className="flex items-center text-2xl font-semibold mb-2">
              <service.icon className="mr-3 h-6 w-6 text-qatari" />
              {service.title}
            </DrawerTitle>
            <DrawerDescription className="text-base">
              {service.description}
            </DrawerDescription>
          </DrawerHeader>

          <div className="mt-6 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(service.stats).map(([key, value], idx) => (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-black shadow-sm"
                >
                  <p className="text-xs text-gray-500 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </p>
                  <p className="font-medium text-sm mt-1 text-gray-800">{value}</p>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="w-full bg-gradient-to-r from-qatari to-qatari-light hover:from-qatari-light hover:to-qatari text-white shadow-md hover:shadow-lg transition-all duration-300 group h-12"
            >
              <Link to={service.link}>
                Access Service
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ServiceDrawer;
