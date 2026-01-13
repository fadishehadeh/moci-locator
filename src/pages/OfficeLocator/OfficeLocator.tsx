import React, { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Search, Building2, AlertCircle } from 'lucide-react';
import { findEmployeeByNumber, OfficeLocation } from '@/data/officeLocations';
import OfficeLocationDisplay from './OfficeLocationDisplay';
import { Alert, AlertDescription } from '@/components/ui/alert';

const OfficeLocator = () => {
  const [employeeNumber, setEmployeeNumber] = useState('');
  const [searchResult, setSearchResult] = useState<OfficeLocation | null>(null);
  const [error, setError] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSearchResult(null);
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
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="bg-qatari/10 dark:bg-qatari/20 p-6 rounded-full">
                <Building2 className="h-16 w-16 text-qatari" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Office Locator
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find your office location in the new MOCI building
            </p>
          </div>

          {/* Search Section */}
          {!searchResult && (
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

          {/* Results Section */}
          {searchResult && (
            <OfficeLocationDisplay 
              location={searchResult} 
              onReset={handleReset}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

export default OfficeLocator;

