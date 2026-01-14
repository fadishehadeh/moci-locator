import React, { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import PageHero from '@/components/ui/PageHero';
import { MapPin, Phone, Mail, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Branch {
  id: number;
  name: string;
  address: string;
  phone?: string;
  email?: string;
  coordinates?: { lat: number; lng: number };
}

const branches: Branch[] = [
  {
    id: 1,
    name: 'Head Quarter',
    address: '1st floor Ministry of Commerce and Industry Lusail City, Qatar',
    phone: '16001',
    email: 'info@moci.gov.qa',
    coordinates: { lat: 25.3933072, lng: 51.521643 },
  },
  {
    id: 2,
    name: 'Government Services Complex (Shhaniya)',
    address: 'Government services complex (Shhaniya)',
    coordinates: { lat: 25.3933072, lng: 51.521643 },
  },
  {
    id: 3,
    name: 'Um-salal Municipality',
    address: 'Um-salal Municipality',
    coordinates: { lat: 25.3933072, lng: 51.521643 },
  },
  {
    id: 4,
    name: 'Government Services Complex (Al-Rayyan)',
    address: 'Government services complex (Al-Rayyan)',
    coordinates: { lat: 25.3933072, lng: 51.521643 },
  },
  {
    id: 5,
    name: 'Government Services Complex (Um-salal)',
    address: 'Government services complex (Um-salal)',
    coordinates: { lat: 25.3933072, lng: 51.521643 },
  },
  {
    id: 6,
    name: 'Industry City (Doha Municipality)',
    address: 'Industry City (Doha Municipality)',
    coordinates: { lat: 25.3933072, lng: 51.521643 },
  },
  {
    id: 7,
    name: 'C-Ring',
    address: 'C-Ring',
    coordinates: { lat: 25.3933072, lng: 51.521643 },
  },
  {
    id: 8,
    name: 'Alwakra Municipality',
    address: 'Alwakra Municipality',
    coordinates: { lat: 25.3933072, lng: 51.521643 },
  },
  {
    id: 9,
    name: 'Government Services Complex (Mesaimeer)',
    address: 'Government services complex (Mesaimeer)',
    coordinates: { lat: 25.3933072, lng: 51.521643 },
  },
  {
    id: 10,
    name: 'Government Services Complex (Al-Khor)',
    address: 'Government services complex (Al-Khor)',
    coordinates: { lat: 25.3933072, lng: 51.521643 },
  },
  {
    id: 11,
    name: 'Government Services Complex (Aniza)',
    address: 'Government services complex (Aniza)',
    coordinates: { lat: 25.3933072, lng: 51.521643 },
  },
  {
    id: 12,
    name: 'Government Services Complex (Alshamal)',
    address: 'Government services complex (Alshamal)',
    coordinates: { lat: 25.3933072, lng: 51.521643 },
  },
  {
    id: 13,
    name: 'Government Services Complex (The Pearl)',
    address: 'Government services complex (The Pearl)',
    coordinates: { lat: 25.3933072, lng: 51.521643 },
  },
];

export default function Branches() {
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(branches[0]);

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        backgroundImage="/images/image4.jpg"
        title="Our Branches"
        subtitle="Find the Ministry of Commerce and Industry branch nearest to you"
        overlayType="gradient-dark"
        textColor="white"
        height="medium"
        textAlign="center"
      />

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Branches List */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-qatari text-white p-4">
                  <h2 className="text-xl font-bold">Our Branches</h2>
                </div>
                <div className="max-h-[600px] overflow-y-auto">
                  {branches.map((branch) => (
                    <button
                      key={branch.id}
                      onClick={() => setSelectedBranch(branch)}
                      className={`w-full text-left px-4 py-3 border-b border-gray-200 transition-colors ${
                        selectedBranch?.id === branch.id
                          ? 'bg-qatari/10 border-l-4 border-l-qatari'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <p className="font-semibold text-gray-900 text-sm">{branch.name}</p>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-2">{branch.address}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Branch Details */}
            <div className="lg:col-span-2">
              {selectedBranch && (
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  {/* Map Placeholder */}
                  <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">Map view coming soon</p>
                    </div>
                  </div>

                  {/* Branch Information */}
                  <div className="p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">{selectedBranch.name}</h2>

                    <div className="space-y-4">
                      {/* Address */}
                      <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-qatari flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                          <p className="text-gray-700">{selectedBranch.address}</p>
                        </div>
                      </div>

                      {/* Phone */}
                      {selectedBranch.phone && (
                        <div className="flex items-start gap-4">
                          <Phone className="h-6 w-6 text-qatari flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                            <a
                              href={`tel:${selectedBranch.phone}`}
                              className="text-qatari hover:underline"
                            >
                              {selectedBranch.phone}
                            </a>
                          </div>
                        </div>
                      )}

                      {/* Email */}
                      {selectedBranch.email && (
                        <div className="flex items-start gap-4">
                          <Mail className="h-6 w-6 text-qatari flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                            <a
                              href={`mailto:${selectedBranch.email}`}
                              className="text-qatari hover:underline"
                            >
                              {selectedBranch.email}
                            </a>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Get Directions Button */}
                    <Button className="mt-8 bg-qatari hover:bg-qatari-light text-white font-semibold px-6 py-3 flex items-center gap-2">
                      <Navigation className="h-5 w-5" />
                      Get Directions
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

