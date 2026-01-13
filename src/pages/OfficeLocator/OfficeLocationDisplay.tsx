import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Building2, 
  Users, 
  Phone, 
  Navigation, 
  ArrowLeft,
  CheckCircle2,
  Layers,
  MapPinned
} from 'lucide-react';
import { OfficeLocation } from '@/data/officeLocations';
import BuildingVisualization from './BuildingVisualization';

interface OfficeLocationDisplayProps {
  location: OfficeLocation;
  onReset: () => void;
}

const OfficeLocationDisplay: React.FC<OfficeLocationDisplayProps> = ({ location, onReset }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const getFloorName = (floor: number): string => {
    if (floor === 1) return 'Ground Floor';
    if (floor === 2) return '1st Floor';
    if (floor === 3) return '2nd Floor';
    if (floor === 4) return '3rd Floor';
    return `${floor - 1}th Floor`;
  };

  return (
    <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Success Header */}
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full animate-pulse">
            <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Office Located!
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Welcome, {location.employeeName}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Left Column - Office Details */}
        <div className="space-y-6">
          {/* Main Office Info Card */}
          <Card className="shadow-xl border-2 border-qatari/20">
            <CardHeader className="bg-gradient-to-r from-qatari to-qatari-dark text-white">
              <CardTitle className="text-2xl flex items-center gap-2">
                <MapPinned className="h-6 w-6" />
                Your Office Location
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              {/* Office Number - Prominent Display */}
              <div className="text-center p-6 bg-gradient-to-br from-qatari/10 to-qatari/5 rounded-lg border-2 border-qatari/30">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Office Number
                </p>
                <p className="text-5xl font-bold text-qatari">
                  {location.officeNumber}
                </p>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Layers className="h-5 w-5 text-qatari" />
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Floor
                    </p>
                  </div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    {getFloorName(location.floor)}
                  </p>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-qatari" />
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Zone
                    </p>
                  </div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">
                    Zone {location.zone}
                  </p>
                </div>
              </div>

              {/* Department */}
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                    Department
                  </p>
                </div>
                <p className="text-lg font-semibold text-blue-900 dark:text-blue-100">
                  {location.department}
                </p>
              </div>

              {/* Extension */}
              {location.extension && (
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <p className="text-sm font-medium text-green-900 dark:text-green-100">
                      Extension
                    </p>
                  </div>
                  <p className="text-lg font-semibold text-green-900 dark:text-green-100">
                    {location.extension}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Directions Card */}
          {location.directions && (
            <Card className="shadow-lg border-2 border-gray-200 dark:border-gray-700">
              <CardHeader className="bg-gray-50 dark:bg-gray-800">
                <CardTitle className="text-xl flex items-center gap-2">
                  <Navigation className="h-5 w-5 text-qatari" />
                  How to Get There
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  {location.directions}
                </p>
                {location.nearestLandmark && (
                  <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <p className="text-sm font-medium text-yellow-900 dark:text-yellow-100">
                      <strong>Nearest Landmark:</strong> {location.nearestLandmark}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        {/* Right Column - Building Visualization */}
        <div>
          <BuildingVisualization 
            floor={location.floor}
            zone={location.zone}
            officeNumber={location.officeNumber}
          />
        </div>
      </div>

      {/* Action Button */}
      <div className="text-center mt-8">
        <Button
          onClick={onReset}
          variant="outline"
          size="lg"
          className="text-lg px-8 h-14 border-2 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Search Another Employee
        </Button>
      </div>
    </div>
  );
};

export default OfficeLocationDisplay;

