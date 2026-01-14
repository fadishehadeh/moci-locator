import React, { useState } from 'react';
import OfficeLocatorLayout from '@/components/Layout/OfficeLocatorLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Search, AlertCircle, ArrowRight, CheckCircle2, Layers, Users, Phone, MapPinned } from 'lucide-react';
import { findEmployeeByNumber, OfficeLocation } from '@/data/officeLocations';
import { Alert, AlertDescription } from '@/components/ui/alert';
import DirectionsAndVisualization from './DirectionsAndVisualization';

type Step = 1 | 2 | 3;

const OfficeLocator = () => {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [employeeNumber, setEmployeeNumber] = useState('');
  const [searchResult, setSearchResult] = useState<OfficeLocation | null>(null);
  const [error, setError] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSearching(true);

    // Simulate a brief loading state for better UX
    setTimeout(() => {
      if (!employeeNumber.trim()) {
        setError('Please enter your employee number');
        setIsSearching(false);
        return;
      }

      const result = findEmployeeByNumber(employeeNumber);

      if (result) {
        setSearchResult(result);
        setCurrentStep(2);
      } else {
        setError('Employee number not found. Please check your employee number and try again.');
      }

      setIsSearching(false);
    }, 500);
  };

  const handleReset = () => {
    setEmployeeNumber('');
    setSearchResult(null);
    setError('');
    setCurrentStep(1);
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep((currentStep + 1) as Step);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as Step);
    }
  };

  const getFloorName = (floor: number): string => {
    if (floor === 1) return 'Ground Floor';
    if (floor === 2) return '1st Floor';
    if (floor === 3) return '2nd Floor';
    if (floor === 4) return '3rd Floor';
    return `${floor - 1}th Floor`;
  };

  return (
    <OfficeLocatorLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Step 1: Employee Number Input */}
          {currentStep === 1 && (
            <Card className="max-w-2xl mx-auto shadow-xl border-2 border-gray-200 dark:border-gray-700">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl flex items-center justify-center gap-2">
                  <MapPin className="h-6 w-6 text-qatari" />
                  Locate Your Office
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  Enter your employee number to find your office location
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSearch} className="space-y-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="employeeNumber"
                      className="text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Employee Number
                    </label>
                    <div className="relative">
                      <Input
                        id="employeeNumber"
                        type="text"
                        placeholder="e.g., 10001"
                        value={employeeNumber}
                        onChange={(e) => setEmployeeNumber(e.target.value)}
                        className="text-lg h-14 pl-4 pr-12 border-2 focus:border-qatari"
                        disabled={isSearching}
                        autoFocus
                      />
                      <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>

                  {error && (
                    <Alert variant="destructive" className="border-2">
                      <AlertCircle className="h-5 w-5" />
                      <AlertDescription className="text-base ml-2">
                        {error}
                      </AlertDescription>
                    </Alert>
                  )}

                  <Button
                    type="submit"
                    className="w-full h-14 text-lg bg-qatari hover:bg-qatari-dark text-white font-semibold"
                    disabled={isSearching}
                  >
                    {isSearching ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                        Searching...
                      </>
                    ) : (
                      <>
                        <Search className="mr-2 h-5 w-5" />
                        Find My Office
                      </>
                    )}
                  </Button>
                </form>

                {/* Sample Employee Numbers */}
                <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-2">
                    Sample Employee Numbers for Testing:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['10001', '10002', '10003', '10004', '10005'].map((num) => (
                      <button
                        key={num}
                        onClick={() => setEmployeeNumber(num)}
                        className="px-3 py-1 bg-white dark:bg-gray-800 border border-blue-300 dark:border-blue-700 rounded text-sm hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Office Location Results */}
          {currentStep === 2 && searchResult && (
            <div className="max-w-4xl mx-auto">
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
                  Welcome, {searchResult.employeeName}
                </p>
              </div>

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
                      {searchResult.officeNumber}
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
                        {getFloorName(searchResult.floor)}
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
                        Zone {searchResult.zone}
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
                      {searchResult.department}
                    </p>
                  </div>

                  {/* Extension */}
                  {searchResult.extension && (
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                      <div className="flex items-center gap-2 mb-2">
                        <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
                        <p className="text-sm font-medium text-green-900 dark:text-green-100">
                          Extension
                        </p>
                      </div>
                      <p className="text-lg font-semibold text-green-900 dark:text-green-100">
                        {searchResult.extension}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <Button
                  onClick={handleReset}
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 h-14 border-2"
                >
                  Start Over
                </Button>
                <Button
                  onClick={handleNextStep}
                  size="lg"
                  className="text-lg px-8 h-14 bg-qatari hover:bg-qatari-dark text-white"
                >
                  View Directions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Directions and Building Visualization */}
          {currentStep === 3 && searchResult && (
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Directions & Building Overview
              </h2>

              <DirectionsAndVisualization location={searchResult} />

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                <Button
                  onClick={handlePreviousStep}
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 h-14 border-2"
                >
                  Back to Location
                </Button>
                <Button
                  onClick={handleReset}
                  size="lg"
                  className="text-lg px-8 h-14 bg-qatari hover:bg-qatari-dark text-white"
                >
                  Search Another Employee
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </OfficeLocatorLayout>
  );
};

export default OfficeLocator;

