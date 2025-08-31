
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const InternationalHero = () => {
  return (
    <section className="relative h-screen bg-gray-100 text-white opacity-100" aria-labelledby="hero-heading">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-100"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundPosition: "center 30%"
        }}
        role="img"
        aria-label="Qatar business district skyline"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/10 z-0"></div>
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 h-screen flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in drop-shadow-md-dark">
            <span className="text-white">Your Gateway to</span><br />
            <span className="text-white">Qatar's Economy</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 md:pr-12 animate-fade-in drop-shadow-md-dark">
            Discover opportunities, incentives, and streamlined services designed for international investors.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button
              asChild
              className="bg-qatari hover:bg-qatari-light text-white px-6 py-6 text-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-qatari"
            >
              <Link to="/investors/opportunities" aria-label="Explore investment opportunities in Qatar">
                Explore Opportunities
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 px-6 py-6 text-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              <Link to="/investors/start-business" aria-label="Learn how to start a business in Qatar">
                Start a Business in Qatar
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalHero;
