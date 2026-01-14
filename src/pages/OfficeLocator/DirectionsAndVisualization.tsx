import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Navigation } from 'lucide-react';
import { OfficeLocation } from '@/data/officeLocations';
import BuildingVisualization from './BuildingVisualization';

interface DirectionsAndVisualizationProps {
  location: OfficeLocation;
}

const DirectionsAndVisualization: React.FC<DirectionsAndVisualizationProps> = ({ location }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Left Column - Directions */}
      <div className="space-y-6">
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
        <Card className="shadow-lg border-2 border-gray-200 dark:border-gray-700">
          <CardHeader className="bg-gray-50 dark:bg-gray-800">
            <CardTitle className="text-xl">Building Overview</CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <BuildingVisualization 
              floor={location.floor}
              zone={location.zone}
              officeNumber={location.officeNumber}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DirectionsAndVisualization;

