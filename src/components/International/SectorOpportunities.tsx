
import React, { useState } from 'react';
import { Truck, Cpu, Factory, Building, Palette, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const sectors = [
  {
    id: "logistics",
    title: "Logistics & Transport",
    description: "World-class port facilities, airport, and regional connectivity",
    icon: Truck,
    color: "from-blue-500 to-sky-600",
    highlightColor: "bg-blue-100",
    textColor: "text-blue-700",
    details: "Qatar's strategic location and advanced logistics infrastructure make it an ideal hub for regional and global transport operations. With Hamad Port, Hamad International Airport, and extensive road networks, Qatar offers seamless multimodal connectivity.",
    opportunities: ["Warehousing & Distribution", "Freight Forwarding", "Supply Chain Management", "E-commerce Logistics"]
  },
  {
    id: "tech",
    title: "Tech & Innovation",
    description: "Digital infrastructure and innovation ecosystem",
    icon: Cpu,
    color: "from-purple-500 to-indigo-600",
    highlightColor: "bg-purple-100",
    textColor: "text-purple-700",
    details: "Qatar has made significant investments in building a knowledge-based economy. With initiatives like Qatar Science & Technology Park and the Innovation Zone, the country offers an ideal environment for tech startups and established companies alike.",
    opportunities: ["Fintech", "Smart City Solutions", "Cybersecurity", "AI & Machine Learning"]
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description: "Industrial zones with excellent connectivity and incentives",
    icon: Factory,
    color: "from-green-500 to-emerald-600",
    highlightColor: "bg-green-100",
    textColor: "text-green-700",
    details: "Qatar's manufacturing sector offers competitive advantages including low-cost energy, strategic location for exports, and state-of-the-art industrial zones with integrated logistics solutions. The country is particularly focused on high-value manufacturing.",
    opportunities: ["Food Processing", "Pharmaceuticals", "Building Materials", "Petrochemicals"]
  },
  {
    id: "financial",
    title: "Financial Services",
    description: "World-class financial center with regulatory advantages",
    icon: Building,
    color: "from-amber-500 to-yellow-600",
    highlightColor: "bg-amber-100",
    textColor: "text-amber-700",
    details: "The Qatar Financial Centre (QFC) offers a world-class platform for financial services companies, with its own legal, regulatory, tax, and business environment. It provides 100% foreign ownership and repatriation of profits.",
    opportunities: ["Banking", "Asset Management", "Insurance", "Islamic Finance"]
  },
  {
    id: "tourism",
    title: "Tourism & Culture",
    description: "Growing tourism infrastructure and cultural initiatives",
    icon: Palette,
    color: "from-rose-500 to-pink-600",
    highlightColor: "bg-rose-100",
    textColor: "text-rose-700",
    details: "Qatar's tourism sector is rapidly expanding, supported by world-class hotels, cultural attractions, and sporting venues. The country's National Tourism Strategy aims to attract 6 million visitors annually by 2030.",
    opportunities: ["Hospitality", "Entertainment", "Cultural Tourism", "MICE Industry"]
  }
];

const SectorOpportunities = () => {
  const [activeSector, setActiveSector] = useState(sectors[0]);
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Opportunities by Sector</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Qatar offers diverse investment opportunities across key growth sectors.
            Explore the sectors below to find the right fit for your business.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {sectors.map((sector) => {
            const IconComponent = sector.icon;
            const isActive = activeSector.id === sector.id;
            
            return (
              <button
                key={sector.id}
                className={`flex items-center px-4 py-3 rounded-full transition-all duration-300 ${
                  isActive 
                    ? `bg-gradient-to-r ${sector.color} text-white shadow-md`
                    : 'bg-white hover:bg-gray-100 text-gray-700'
                }`}
                onClick={() => setActiveSector(sector)}
              >
                <IconComponent className={`h-5 w-5 ${isActive ? 'text-white' : 'text-gray-500'} mr-2`} />
                {sector.title}
              </button>
            );
          })}
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className={`md:w-1/3 p-8 bg-gradient-to-br ${activeSector.color} text-white`}>
              <activeSector.icon className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-3">{activeSector.title}</h3>
              <p className="mb-4">{activeSector.description}</p>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white/20 mt-4"
              >
                <Link to={`/investors/sectors/${activeSector.id}`}>
                  Explore Sector
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="md:w-2/3 p-8">
              <p className="text-gray-700 mb-6">
                {activeSector.details}
              </p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-3">Key Opportunities:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeSector.opportunities.map((opportunity, index) => (
                    <div 
                      key={index} 
                      className={`${activeSector.highlightColor} ${activeSector.textColor} px-4 py-3 rounded-lg font-medium`}
                    >
                      {opportunity}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorOpportunities;
