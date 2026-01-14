
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, ArrowRight, Building2, Briefcase, Globe2, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from '@/hooks/use-mobile';
import { useUserLocation } from '@/hooks/use-user-location';

const countries = [
  {
    code: 'CN',
    name: 'China',
    flag: '🇨🇳',
    description: 'Investment services for Chinese investors in key sectors including infrastructure, technology, and manufacturing.',
  },
  {
    code: 'US',
    name: 'United States',
    flag: '🇺🇸',
    description: 'Resources for US investors focused on energy, finance, technology, and defense sectors.',
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    flag: '🇬🇧',
    description: 'Information for UK businesses on Qatar-UK partnerships, education, and service sectors.',
  },
  {
    code: 'IN',
    name: 'India',
    flag: '🇮🇳',
    description: 'Guides for Indian investors in construction, IT, healthcare, and retail sectors.',
  },
  {
    code: 'DE',
    name: 'Germany',
    flag: '🇩🇪',
    description: 'Resources for German companies in engineering, automotive, and sustainable technology.',
  },
  {
    code: 'JP',
    name: 'Japan',
    flag: '🇯🇵',
    description: 'Information for Japanese investors in technology, infrastructure, and energy.',
  },
  {
    code: 'RU',
    name: 'Russia',
    flag: '🇷🇺',
    description: 'Resources for Russian investors in energy, transportation, and defense industries.',
  },
  {
    code: 'FR',
    name: 'France',
    flag: '🇫🇷',
    description: 'Guides for French companies in luxury retail, aviation, and infrastructure.',
  },
];

const RegionalSection = () => {
  const isMobile = useIsMobile();
  const { countryCode, countryName, isLoading } = useUserLocation();
  
  const userCountry = countries.find(country => country.code === countryCode);
  
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 dark:from-gray-900 to-white dark:to-gray-950">
      <div className="container-wide">
        <div className="mb-12">
          <div className="flex items-center gap-3 text-qatari dark:text-qatari-light mb-4">
            <Globe2 className="h-6 w-6" />
            <h2 className="text-3xl font-bold dark:text-white">International Investor Resources</h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            Access tailored information and resources specific to your region. Our international
            investment guides provide localized insights for investors from around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="glass-card border border-qatari overflow-hidden group">
            <div className="h-48 overflow-hidden">
              <img
                src="/public/images/image5.png"
                alt="Foreign Ownership"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <Building2 className="h-8 w-8 text-qatari mb-4" />
              <h3 className="text-xl font-semibold mb-2">100% Foreign Ownership</h3>
              <p className="text-gray-600">Full ownership rights across most sectors, with streamlined company registration process.</p>
            </div>
          </div>

          <div className="glass-card border border-qatari overflow-hidden group">
            <div className="h-48 overflow-hidden">
              <img
                src="/public/images/image6.png"
                alt="Investment Incentives"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <Briefcase className="h-8 w-8 text-qatari mb-4" />
              <h3 className="text-xl font-semibold mb-2">Investment Incentives</h3>
              <p className="text-gray-600">Tax benefits, custom duty exemptions, and property ownership rights for foreign investors.</p>
            </div>
          </div>

          <div className="glass-card border border-qatari overflow-hidden group">
            <div className="h-48 overflow-hidden">
              <img
                src="/public/images/image7.png"
                alt="Strategic Location"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <Target className="h-8 w-8 text-qatari mb-4" />
              <h3 className="text-xl font-semibold mb-2">Strategic Location</h3>
              <p className="text-gray-600">Gateway to MENA markets with world-class infrastructure and logistics capabilities.</p>
            </div>
          </div>
        </div>
        
        {userCountry && !isLoading && (
          <div className="mb-12 glass-card p-8 border border-qatari relative overflow-hidden group">
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
              <img
                src="https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?q=80&w=2070"
                alt="Country Background"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-qatari to-qatari-light text-white rounded-lg flex items-center justify-center text-4xl md:text-5xl shadow-lg">
                {userCountry.flag}
              </div>
              <div className="flex-grow">
                <div className="mb-1 text-qatari dark:text-qatari-light font-medium">Regional Resources

                </div>

                <h3 className="text-2xl font-bold mb-3 dark:text-white">Opportunities for {userCountry.name} Investors</h3>
                <p className="text-black dark:text-white mb-4">
                  {userCountry.description}
                </p>
                <Button
                  asChild
                  className="bg-qatari hover:bg-qatari-light text-white text-xl"
                >
                  <Link to={`/investors/regions/${userCountry.code.toLowerCase()}`}>
                    View {userCountry.name} Investor Guide
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
        
        <h3 className="text-xl font-semibold mb-6 dark:text-white">Explore Other Regional Resources</h3>
        
        <Carousel
          opts={{
            align: "start",
            slidesToScroll: isMobile ? 1 : 3,
          }}
          className="w-full"
        >
          <CarouselContent>
            {countries
              .filter(country => country.code !== countryCode)
              .map((country) => (
                <CarouselItem key={country.code} className="md:basis-1/3 lg:basis-1/4">
                  <Link
                    to={`/investors/regions/${country.code.toLowerCase()}`}
                    className="glass-card border border-qatari dark:border-gray-700 p-5 flex flex-col h-full shadow-sm card-hover"
                  >
                    <div className="flex mb-4 items-center">
                      <div className="text-white flex-shrink-0 w-10 h-10 bg-gradient-to-br from-qatari to-qatari-light rounded-lg flex items-center justify-center text-2xl mr-3 shadow-md">
                        {country.flag}
                      </div>
                      <h4 className="font-semibold dark:text-white">{country.name}</h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-xl mb-4 flex-grow">
                      {country.description}
                    </p>
                    <div className="text-qatari dark:text-qatari-light font-medium text-xl flex items-center mt-auto">
                      Explore Opportunities
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </div>
                  </Link>
                </CarouselItem>
              ))}
          </CarouselContent>
          <div className="flex justify-end gap-2 mt-6">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default RegionalSection;
