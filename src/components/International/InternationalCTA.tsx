
import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const InternationalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-qatari to-qatari-dark text-white">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Need Help Getting Started?</h2>
          <p className="text-xl text-white/90 mb-10">
            Our dedicated team of investment specialists is ready to guide you through
            every step of establishing and growing your business in Qatar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-qatari hover:bg-gray-100 font-medium px-6 py-6 text-base"
            >
              <Link to="/contact/advisor">
                <MessageSquare className="mr-2 h-5 w-5" />
                Talk to an Advisor
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-qatari hover:bg-white hover:text-qatari font-medium px-6 py-6 text-base"
            >
              <Link to="/investors/start-business">
                Start Your Business Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalCTA;
