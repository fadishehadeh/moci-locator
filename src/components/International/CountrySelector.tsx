
import React, { useState, useEffect } from 'react';
import { Globe, Info, FileText, MapPin, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useUserLocation } from '@/hooks/use-user-location';

const countries = [
  {
    code: 'CN',
    name: 'China',
    flag: '🇨🇳',
    detail: {
      trade: 'Comprehensive Strategic Partnership and Free Trade Agreement',
      embassy: 'Embassy in West Bay, Doha',
      support: 'China Business Hub at Qatar Financial Centre'
    }
  },
  {
    code: 'US',
    name: 'United States',
    flag: '🇺🇸',
    detail: {
      trade: 'Trade and Investment Framework Agreement',
      embassy: 'Embassy in Al Luqta, Doha',
      support: 'US-Qatar Business Council office in Doha'
    }
  },
  {
    code: 'DE',
    name: 'Germany',
    flag: '🇩🇪',
    detail: {
      trade: 'Bilateral Investment Treaty and Double Taxation Agreement',
      embassy: 'Embassy in Diplomatic Area, Doha',
      support: 'German Industry and Commerce Office Qatar'
    }
  },
  {
    code: 'IN',
    name: 'India',
    flag: '🇮🇳',
    detail: {
      trade: 'Comprehensive Economic Partnership Agreement',
      embassy: 'Embassy in West Bay, Doha',
      support: 'India Business Forum Qatar'
    }
  },
  {
    code: 'TR',
    name: 'Turkey',
    flag: '🇹🇷',
    detail: {
      trade: 'Strategic Cooperation Agreement and Multiple Sector MOUs',
      embassy: 'Embassy in West Bay, Doha',
      support: 'Turkish-Qatari Business Council'
    }
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    flag: '🇬🇧',
    detail: {
      trade: 'Strategic Investment Partnership',
      embassy: 'Embassy in West Bay, Doha',
      support: 'UK-Qatar Trade and Investment Office'
    }
  },
  {
    code: 'JP',
    name: 'Japan',
    flag: '🇯🇵',
    detail: {
      trade: 'Economic Cooperation Agreement',
      embassy: 'Embassy in West Bay, Doha',
      support: 'Japan External Trade Organization (JETRO) Office'
    }
  },
  {
    code: 'KR',
    name: 'South Korea',
    flag: '🇰🇷',
    detail: {
      trade: 'Comprehensive Economic Partnership Agreement',
      embassy: 'Embassy in West Bay, Doha',
      support: 'Korea Trade-Investment Promotion Agency (KOTRA) Office'
    }
  }
];

const CountrySelector = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const { countryCode } = useUserLocation();

  useEffect(() => {
    if (countryCode) {
      const userCountry = countries.find(country => country.code === countryCode);
      if (userCountry) {
        setSelectedCountry(userCountry);
      }
    }
  }, [countryCode]);

  return (
    <section className="py-20 bg-white">
      <div className="container-wide">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Country-Specific Resources</h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Find information tailored to your country's business relationship with Qatar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Country Selector */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Globe className="h-5 w-5 mr-2 text-qatari" />
                Select Your Country
              </h3>

              <div className="space-y-2">
                {countries.map((country) => (
                  <button
                    key={country.code}
                    className={`w-full flex items-center p-3 rounded-lg border border-qatari transition-colors duration-200 ${
                      selectedCountry.code === country.code
                        ? 'bg-qatari text-white'
                        : 'bg-white hover:bg-gray-100 text-gray-800'
                    }`}
                    onClick={() => setSelectedCountry(country)}
                  >
                    <span className="text-2xl mr-3">{country.flag}</span>
                    <span className="font-medium">{country.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Country Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md border border-qatari p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-4xl">
                  {selectedCountry.flag}
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-bold">{selectedCountry.name}</h3>
                  <p className="text-qatari">{selectedCountry.name}-Qatar Business Relations</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg border border-qatari">
                  <div className="flex items-center mb-3">
                    <FileText className="h-5 w-5 text-qatari mr-2" />
                    <h4 className="font-semibold">Trade Agreements</h4>
                  </div>
                  <p className="text-gray-700 text-xl">{selectedCountry.detail.trade}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-qatari">
                  <div className="flex items-center mb-3">
                    <MapPin className="h-5 w-5 text-qatari mr-2" />
                    <h4 className="font-semibold">Embassy</h4>
                  </div>
                  <p className="text-gray-700 text-xl">{selectedCountry.detail.embassy}</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-qatari">
                  <div className="flex items-center mb-3">
                    <Info className="h-5 w-5 text-qatari mr-2" />
                    <h4 className="font-semibold">Support Desk</h4>
                  </div>
                  <p className="text-gray-700 text-xl">{selectedCountry.detail.support}</p>
                </div>
              </div>

              <Button
                asChild
                className="bg-qatari hover:bg-qatari-light text-white text-xl"
              >
                <Link to={`/international/countries/${selectedCountry.code.toLowerCase()}`}>
                  View {selectedCountry.name} Investor Guide
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountrySelector;
