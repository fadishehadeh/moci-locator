import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Navigation, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { OfficeLocation } from '@/data/officeLocations';
import BuildingVisualization from './BuildingVisualization';

interface DirectionsAndVisualizationProps {
  location: OfficeLocation;
}

const DirectionsAndVisualization: React.FC<DirectionsAndVisualizationProps> = ({ location }) => {
  const [showRoute, setShowRoute] = useState(false);

  return (
    <div className="space-y-8">
      {/* 1. How to Get There - Full Width at Top */}
      {location.directions && (
        <Card className="shadow-lg border-2 border-gray-200 dark:border-gray-700">
          <CardHeader className="bg-gray-50 dark:bg-gray-800">
            <CardTitle className="text-xl flex items-center gap-2">
              <Navigation className="h-5 w-5 text-qatari" />
              How to Get There
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            {/* Show Route Button */}
            <div className="mb-6">
              <Button
                onClick={() => setShowRoute(true)}
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white h-14 text-lg"
              >
                <Play className="h-5 w-5 mr-2" />
                Show Route
              </Button>
            </div>

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

      {/* 2. Building Overview and 3. Animated Route */}
      <BuildingVisualization
        floor={location.floor}
        zone={location.zone}
        officeNumber={location.officeNumber}
        showAnimatedRoute={showRoute}
        onRouteStart={() => setShowRoute(true)}
      />
    </div>
  );
};

export default DirectionsAndVisualization;

