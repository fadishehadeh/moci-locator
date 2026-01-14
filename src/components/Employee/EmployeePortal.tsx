import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Briefcase, X } from 'lucide-react';

interface EmployeeService {
  title: string;
  description: string;
  color: string;
}

const employeeServices: EmployeeService[] = [
  {
    title: "Work from Home Platform",
    description: "Access remote work tools and resources",
    color: "bg-red-50 hover:bg-red-100"
  },
  {
    title: "Webmail Service",
    description: "Access your email account",
    color: "bg-red-50 hover:bg-red-100"
  },
  {
    title: "Self Services (MAWARED)",
    description: "HR and payroll self-service portal",
    color: "bg-red-50 hover:bg-red-100"
  },
  {
    title: "Shared Affairs Service Portal",
    description: "Access shared services",
    color: "bg-red-50 hover:bg-red-100"
  },
  {
    title: "Daem Portal",
    description: "Government services portal",
    color: "bg-red-50 hover:bg-red-100"
  },
];

export const EmployeePortal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-1 px-2 py-1 rounded-md bg-transparent hover:bg-white/10 text-gray-600 hover:text-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-qatari"
        aria-label="Employee Portal"
        title="Employee Portal"
      >
        <Briefcase className="h-4 w-4" />
        <span className="hidden sm:inline text-xs font-medium">Employee</span>
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto [&>button]:hidden">
          {/* Header with burgundy background */}
          <div className="bg-gradient-to-r from-[#8B1538] to-[#A01E47] text-white p-6 -m-6 mb-6 flex items-center justify-between">
            <DialogTitle className="text-3xl font-bold text-white">Employee Portal</DialogTitle>
            <DialogClose className="text-white hover:bg-white/20 rounded-md p-1 transition-colors" aria-label="Close">
              <X className="h-6 w-6" />
            </DialogClose>
          </div>

          {/* Employee Services Section */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-gray-900">Employee Services</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {employeeServices.map((service, index) => (
                <button
                  key={index}
                  className={`${service.color} border border-gray-200 rounded-lg p-6 text-center transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#8B1538]`}
                >
                  <h5 className="font-bold text-[#8B1538] text-base mb-2">
                    {service.title}
                  </h5>
                  <p className="text-sm text-gray-600">
                    {service.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

