import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, MapPin } from 'lucide-react';

interface BuildingVisualizationProps {
  floor: number;
  zone: string;
  officeNumber: string;
}

const BuildingVisualization: React.FC<BuildingVisualizationProps> = ({ 
  floor, 
  zone, 
  officeNumber 
}) => {
  const [highlightedFloor, setHighlightedFloor] = useState<number | null>(null);
  const floors = [5, 4, 3, 2, 1]; // Top to bottom
  const zones = ['A', 'B', 'C'];

  useEffect(() => {
    // Animate floor highlight
    const timer = setTimeout(() => {
      setHighlightedFloor(floor);
    }, 300);
    return () => clearTimeout(timer);
  }, [floor]);

  const getFloorLabel = (floorNum: number): string => {
    if (floorNum === 1) return 'Ground';
    return `Floor ${floorNum - 1}`;
  };

  return (
    <Card className="shadow-xl border-2 border-gray-200 dark:border-gray-700 sticky top-24">
      <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <CardTitle className="text-xl flex items-center gap-2">
          <Building2 className="h-5 w-5 text-qatari" />
          Building Overview
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        {/* Building Visualization */}
        <div className="space-y-3">
          {floors.map((floorNum) => {
            const isTargetFloor = floorNum === floor;
            
            return (
              <div
                key={floorNum}
                className={`
                  relative transition-all duration-500 transform
                  ${isTargetFloor ? 'scale-105' : 'scale-100'}
                  ${highlightedFloor === floorNum ? 'animate-pulse' : ''}
                `}
              >
                {/* Floor Container */}
                <div
                  className={`
                    border-2 rounded-lg p-4 transition-all duration-500
                    ${isTargetFloor 
                      ? 'bg-qatari/10 border-qatari shadow-lg' 
                      : 'bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600'
                    }
                  `}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div
                        className={`
                          w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm
                          ${isTargetFloor 
                            ? 'bg-qatari text-white' 
                            : 'bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                          }
                        `}
                      >
                        {floorNum}
                      </div>
                      <span
                        className={`
                          font-semibold text-sm
                          ${isTargetFloor 
                            ? 'text-qatari' 
                            : 'text-gray-600 dark:text-gray-400'
                          }
                        `}
                      >
                        {getFloorLabel(floorNum)}
                      </span>
                    </div>
                    
                    {isTargetFloor && (
                      <div className="flex items-center gap-1 text-qatari animate-bounce">
                        <MapPin className="h-4 w-4 fill-current" />
                        <span className="text-xs font-bold">YOU ARE HERE</span>
                      </div>
                    )}
                  </div>

                  {/* Zones */}
                  <div className="grid grid-cols-3 gap-2">
                    {zones.map((zoneLabel) => {
                      const isTargetZone = isTargetFloor && zoneLabel === zone;
                      
                      return (
                        <div
                          key={zoneLabel}
                          className={`
                            relative h-16 rounded border-2 transition-all duration-300
                            flex items-center justify-center font-bold text-xs
                            ${isTargetZone
                              ? 'bg-qatari text-white border-qatari shadow-md scale-110'
                              : isTargetFloor
                              ? 'bg-white dark:bg-gray-700 border-qatari/30 text-gray-600 dark:text-gray-300'
                              : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-400 dark:text-gray-500'
                            }
                          `}
                        >
                          <span>Zone {zoneLabel}</span>
                          {isTargetZone && (
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Connection Line to Next Floor */}
                {floorNum !== 1 && (
                  <div className="flex justify-center">
                    <div
                      className={`
                        w-0.5 h-3 transition-colors duration-500
                        ${isTargetFloor || floors[floors.indexOf(floorNum) + 1] === floor
                          ? 'bg-qatari'
                          : 'bg-gray-300 dark:bg-gray-600'
                        }
                      `}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-3">
            LEGEND
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-qatari rounded" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                Your Office Location
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded" />
              <span className="text-xs text-gray-600 dark:text-gray-400">
                Other Zones
              </span>
            </div>
          </div>
        </div>

        {/* Office Number Display */}
        <div className="mt-6 p-4 bg-gradient-to-r from-qatari/5 to-qatari/10 rounded-lg border border-qatari/20">
          <p className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
            Your Office
          </p>
          <p className="text-2xl font-bold text-qatari">
            {officeNumber}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BuildingVisualization;

