import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, MapPin, Play, Pause, RotateCcw, Navigation2, ChevronDown, ChevronUp } from 'lucide-react';

interface BuildingVisualizationProps {
  floor: number;
  zone: string;
  officeNumber: string;
  showAnimatedRoute?: boolean;
  onRouteStart?: () => void;
}

interface PathStep {
  floor: number;
  zone?: string;
  description: string;
  isEntrance?: boolean;
  isDestination?: boolean;
}

const BuildingVisualization: React.FC<BuildingVisualizationProps> = ({
  floor,
  zone,
  officeNumber,
  showAnimatedRoute = false,
  onRouteStart
}) => {
  const [highlightedFloor, setHighlightedFloor] = useState<number | null>(null);
  const [currentPathStep, setCurrentPathStep] = useState<number>(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [expandedFloors, setExpandedFloors] = useState<Set<number>>(new Set([floor]));
  const floors = [5, 4, 3, 2, 1]; // Top to bottom
  const zones = ['A', 'B', 'C'];

  const toggleFloor = (floorNum: number) => {
    setExpandedFloors(prev => {
      const newSet = new Set(prev);
      if (newSet.has(floorNum)) {
        newSet.delete(floorNum);
      } else {
        newSet.add(floorNum);
      }
      return newSet;
    });
  };

  // Helper function to get floor label
  const getFloorLabel = (floorNum: number): string => {
    if (floorNum === 1) return 'Ground';
    return `Floor ${floorNum - 1}`;
  };

  // Generate path from entrance to office
  const generatePath = (): PathStep[] => {
    const path: PathStep[] = [];

    // Start at entrance (Ground floor)
    path.push({
      floor: 1,
      description: 'Start at Main Entrance (Ground Floor)',
      isEntrance: true
    });

    // If not on ground floor, add elevator step
    if (floor > 1) {
      path.push({
        floor: 1,
        zone: 'B',
        description: 'Take elevator in Zone B'
      });

      // Add intermediate floors if going up multiple floors
      for (let f = 2; f < floor; f++) {
        path.push({
          floor: f,
          description: `Passing ${getFloorLabel(f)}`
        });
      }

      path.push({
        floor: floor,
        description: `Exit elevator at ${getFloorLabel(floor)}`
      });
    }

    // Navigate to the zone
    if (zone !== 'B' || floor === 1) {
      path.push({
        floor: floor,
        zone: zone,
        description: `Navigate to Zone ${zone}`,
        isDestination: true
      });
    } else {
      path.push({
        floor: floor,
        zone: zone,
        description: `You have arrived at Zone ${zone}`,
        isDestination: true
      });
    }

    return path;
  };

  const pathSteps = generatePath();

  useEffect(() => {
    // Animate floor highlight
    const timer = setTimeout(() => {
      setHighlightedFloor(floor);
    }, 300);
    return () => clearTimeout(timer);
  }, [floor]);

  useEffect(() => {
    if (isAnimating && !isPaused && currentPathStep < pathSteps.length - 1) {
      const timer = setTimeout(() => {
        setCurrentPathStep(prev => prev + 1);
      }, 1500); // 1.5 seconds per step
      return () => clearTimeout(timer);
    } else if (currentPathStep >= pathSteps.length - 1) {
      setIsAnimating(false);
    }
  }, [currentPathStep, isAnimating, isPaused, pathSteps.length]);

  // Auto-start animation when showAnimatedRoute becomes true
  useEffect(() => {
    if (showAnimatedRoute && currentPathStep === -1) {
      startAnimation();
    }
  }, [showAnimatedRoute]);

  const startAnimation = () => {
    setCurrentPathStep(0);
    setIsAnimating(true);
    setIsPaused(false);
    if (onRouteStart) {
      onRouteStart();
    }
  };

  const pauseAnimation = () => {
    setIsPaused(!isPaused);
  };

  const resetAnimation = () => {
    setCurrentPathStep(-1);
    setIsAnimating(false);
    setIsPaused(false);
  };

  const getCurrentStepInfo = () => {
    if (currentPathStep >= 0 && currentPathStep < pathSteps.length) {
      return pathSteps[currentPathStep];
    }
    return null;
  };

  const isStepActive = (floorNum: number, zoneLabel?: string) => {
    const currentStep = getCurrentStepInfo();
    if (!currentStep) return false;

    if (zoneLabel) {
      return currentStep.floor === floorNum && currentStep.zone === zoneLabel;
    }
    return currentStep.floor === floorNum;
  };

  const isStepCompleted = (floorNum: number, zoneLabel?: string) => {
    if (currentPathStep < 0) return false;

    for (let i = 0; i <= currentPathStep; i++) {
      const step = pathSteps[i];
      if (zoneLabel) {
        if (step.floor === floorNum && step.zone === zoneLabel) return true;
      } else {
        if (step.floor === floorNum) return true;
      }
    }
    return false;
  };

  return (
    <>
      {/* Building Overview Card */}
      <Card className="shadow-xl border-2 border-gray-200 dark:border-gray-700">
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
            const isActiveInPath = isStepActive(floorNum);
            const isCompletedInPath = isStepCompleted(floorNum);
            const isExpanded = expandedFloors.has(floorNum);

            return (
              <div
                key={floorNum}
                className={`
                  relative transition-all duration-500 transform
                  ${isTargetFloor ? 'scale-105' : 'scale-100'}
                  ${highlightedFloor === floorNum ? 'animate-pulse' : ''}
                  ${isActiveInPath ? 'ring-4 ring-blue-400 ring-opacity-50' : ''}
                `}
              >
                {/* Floor Container */}
                <div
                  className={`
                    border-2 rounded-lg transition-all duration-500
                    ${isTargetFloor
                      ? 'bg-qatari/10 border-qatari shadow-lg'
                      : isActiveInPath
                      ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-400 shadow-md'
                      : isCompletedInPath
                      ? 'bg-green-50 dark:bg-green-900/20 border-green-400'
                      : 'bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600'
                    }
                  `}
                >
                  {/* Floor Header - Always Visible */}
                  <button
                    onClick={() => toggleFloor(floorNum)}
                    className="w-full p-4 flex items-center justify-between hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  >
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
                      {isTargetFloor && (
                        <div className="flex items-center gap-1 text-qatari ml-2">
                          <MapPin className="h-4 w-4 fill-current" />
                          <span className="text-xs font-bold">Your office is here</span>
                        </div>
                      )}
                    </div>

                    {isExpanded ? (
                      <ChevronUp className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                    )}
                  </button>

                  {/* Zones - Collapsible */}
                  {isExpanded && (
                    <div className="px-4 pb-4">
                      <div className="grid grid-cols-3 gap-2">
                        {zones.map((zoneLabel) => {
                          const isTargetZone = isTargetFloor && zoneLabel === zone;
                          const isActiveZone = isStepActive(floorNum, zoneLabel);
                          const isCompletedZone = isStepCompleted(floorNum, zoneLabel);

                          return (
                            <div
                              key={zoneLabel}
                              className={`
                                relative h-16 rounded border-2 transition-all duration-300
                                flex items-center justify-center font-bold text-xs
                                ${isTargetZone
                                  ? 'bg-qatari text-white border-qatari shadow-md scale-110'
                                  : isActiveZone
                                  ? 'bg-blue-500 text-white border-blue-600 shadow-md scale-105 animate-pulse'
                                  : isCompletedZone
                                  ? 'bg-green-100 dark:bg-green-800 border-green-400 text-green-900 dark:text-green-100'
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
                              {isActiveZone && !isTargetZone && (
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full animate-ping" />
                              )}
                              {isCompletedZone && !isTargetZone && !isActiveZone && (
                                <div className="absolute top-1 right-1">
                                  <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
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
              {showAnimatedRoute && (
                <>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-500 rounded animate-pulse" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      Current Step (Animated)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-100 dark:bg-green-800 border-2 border-green-400 rounded" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      Completed Steps
                    </span>
                  </div>
                </>
              )}
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

      {/* Animated Route Card - Separate */}
      {showAnimatedRoute && (
        <Card className="shadow-xl border-2 border-gray-200 dark:border-gray-700 mt-8">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
            <CardTitle className="text-xl flex items-center gap-2">
              <Navigation2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              Animated Route
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            {currentPathStep >= 0 && (
              <div className="mb-4 p-4 bg-white dark:bg-gray-800 rounded-lg border-2 border-blue-300 dark:border-blue-700">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Step {currentPathStep + 1} of {pathSteps.length}:
                </p>
                <p className="text-base text-blue-600 dark:text-blue-400 mt-2 font-semibold">
                  {getCurrentStepInfo()?.description}
                </p>
              </div>
            )}

            {/* Animation Controls */}
            {currentPathStep >= 0 && (
              <div className="flex gap-2 mb-4">
                <Button
                  onClick={pauseAnimation}
                  size="lg"
                  variant="outline"
                  className="flex-1 h-14 text-lg"
                >
                  <Pause className="h-5 w-5 mr-2" />
                  {isPaused ? 'Resume' : 'Pause'}
                </Button>
                <Button
                  onClick={resetAnimation}
                  size="lg"
                  variant="outline"
                  className="h-14"
                >
                  <RotateCcw className="h-5 w-5" />
                </Button>
              </div>
            )}

            {/* Path Steps List */}
            {currentPathStep >= 0 && (
              <div className="mt-6 space-y-2">
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
                  ROUTE STEPS
                </p>
                {pathSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`
                      p-3 rounded-lg border-2 transition-all duration-300
                      ${index === currentPathStep
                        ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-400 scale-105'
                        : index < currentPathStep
                        ? 'bg-green-50 dark:bg-green-900/20 border-green-400'
                        : 'bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600'
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`
                          w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
                          ${index === currentPathStep
                            ? 'bg-blue-600 text-white'
                            : index < currentPathStep
                            ? 'bg-green-600 text-white'
                            : 'bg-gray-400 text-white'
                          }
                        `}
                      >
                        {index + 1}
                      </div>
                      <p className={`
                        text-sm
                        ${index === currentPathStep
                          ? 'text-blue-900 dark:text-blue-100 font-semibold'
                          : index < currentPathStep
                          ? 'text-green-900 dark:text-green-100'
                          : 'text-gray-600 dark:text-gray-400'
                        }
                      `}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default BuildingVisualization;

