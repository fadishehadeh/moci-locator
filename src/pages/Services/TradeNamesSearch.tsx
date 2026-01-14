import React, { useState } from 'react';
import Layout from '@/components/Layout/Layout';
import PageHero from '@/components/ui/PageHero';
import { Search, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface TradeNameResult {
  id: number;
  name: string;
}

const tradeNamesData: TradeNameResult[] = [
  { id: 1, name: 'Saffron Restaurant' },
  { id: 2, name: 'GO DRIVE LIMOUSINE' },
  { id: 3, name: 'EASEbook Trading via the Internet' },
  { id: 4, name: 'BLOCKHOUSE ACADEMY TRAINING AND CONSULTING' },
  { id: 5, name: 'Guide to Tourism Services' },
  { id: 6, name: 'Crown Honey Production' },
  { id: 7, name: 'Luft Facility Management' },
  { id: 8, name: 'MAGNOVA TRADING AND CONTRACTING' },
  { id: 9, name: 'Foodino Kitchen' },
  { id: 10, name: 'REEF DAMASCUS RESTAURANT' },
  { id: 11, name: 'Momento Restaurant' },
  { id: 12, name: 'RSS Electronics Services' },
  { id: 13, name: 'ARISE FOR CONTRACTING' },
  { id: 14, name: 'ART LIFE TRADING AND CONTRACTING' },
  { id: 15, name: 'ARK Cooling Contracting and Trading' },
  { id: 16, name: 'ARCO TRADING AND MARKETING' },
  { id: 17, name: 'Asian Beauty Salon' },
];

export default function TradeNamesSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<TradeNameResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);

    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }

    const results = tradeNamesData.filter((trade) =>
      trade.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <PageHero
        backgroundImage="/images/image1.jpg"
        title="Trade Names Search"
        subtitle="Search for registered trade names in Qatar"
        overlayType="gradient-dark"
        textColor="white"
        height="medium"
        textAlign="center"
      />

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            {/* Search Box */}
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Search for a Trade Name</h2>
              <p className="text-gray-600 mb-6">
                Using this service you will be able to search for Trade Names registered with the Ministry of Commerce and Industry.
              </p>

              <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <Input
                    type="text"
                    placeholder="Enter trade name to search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-qatari"
                  />
                </div>
                <Button
                  type="submit"
                  className="bg-qatari hover:bg-qatari-light text-white font-semibold px-8 py-3 rounded-lg flex items-center gap-2"
                >
                  <Search className="h-5 w-5" />
                  Search
                </Button>
              </form>
            </div>

            {/* Results Section */}
            {hasSearched && (
              <div className="bg-white rounded-lg shadow-md p-8">
                {searchResults.length > 0 ? (
                  <>
                    <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <p className="text-blue-800">
                        <strong>Results based on your search:</strong> All the trade names below are reserved
                      </p>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b-2 border-qatari">
                            <th className="text-left py-3 px-4 font-semibold text-gray-900">#</th>
                            <th className="text-left py-3 px-4 font-semibold text-gray-900">Trade Name</th>
                          </tr>
                        </thead>
                        <tbody>
                          {searchResults.map((result, index) => (
                            <tr key={result.id} className="border-b border-gray-200 hover:bg-gray-50">
                              <td className="py-3 px-4 text-gray-700">{index + 1}</td>
                              <td className="py-3 px-4 text-gray-700">{result.name}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="mt-6 text-sm text-gray-600">
                      <p>Found <strong>{searchResults.length}</strong> result(s) matching your search.</p>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No Results Found</h3>
                    <p className="text-gray-600">
                      No trade names found matching "<strong>{searchTerm}</strong>". Please try a different search term.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Information Box */}
            <div className="mt-8 bg-qatari/10 border border-qatari/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Information</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-qatari font-bold">•</span>
                  <span>All trade names displayed in the search results are reserved and protected by law.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-qatari font-bold">•</span>
                  <span>You cannot register a trade name that is already reserved.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-qatari font-bold">•</span>
                  <span>For more information about trade name registration, please contact our office or visit the Services section.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

