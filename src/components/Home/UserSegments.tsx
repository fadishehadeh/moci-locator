
import React from 'react';
import {
  Briefcase,
  Building2,
  Users,
  BookOpen,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const segments = [
  {
    title: 'International Investors',
    description: 'Explore investment opportunities, business setup guides, and incentives for foreign investors.',
    icon: Briefcase,
    link: '/investors',
    color: 'bg-qatari text-white',
  },
  {
    title: 'Local Businesses',
    description: 'Access resources for Qatari businesses, licensing, trade registrations, and local regulations.',
    icon: Building2,
    link: '/consumers',
    color: 'bg-white shadow-sm',
  },
  {
    title: 'Consumers',
    description: 'Learn about consumer protection, prices, and file complaints about commercial establishments.',
    icon: Users,
    link: '/consumers',
    color: 'bg-white shadow-sm',
  },
  {
    title: 'Partner Organizations',
    description: 'Information for government entities, chambers of commerce, and partner organizations.',
    icon: BookOpen,
    link: '/organisations',
    color: 'bg-white shadow-sm',
  },
];

const UserSegments = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-wide">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold mb-4">Find the Resources That Matter to You</h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Our services are tailored to meet the needs of different audiences.
            Select your profile to access relevant information and services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((segment, index) => {
            const IconComponent = segment.icon;

            return (
              <div
                key={segment.title}
                className={`rounded-xl p-6 border border-qatari ${segment.color} flex flex-col h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <div className={`rounded-full w-12 h-12 flex items-center justify-center mb-4 ${segment.color === 'bg-qatari text-white' ? 'bg-white/20' : 'bg-qatari/10'}`}>
                  <IconComponent className={`h-6 w-6 ${segment.color === 'bg-qatari text-white' ? 'text-white' : 'text-qatari'}`} />
                </div>

                <h3 className={`text-xl font-semibold mb-3 ${segment.color === 'bg-qatari text-white' ? 'text-white' : 'text-gray-900'}`}>
                  {segment.title}
                </h3>

                <p className={`mb-6 flex-grow text-xl ${segment.color === 'bg-qatari text-white' ? 'text-white/90' : 'text-gray-600'}`}>
                  {segment.description}
                </p>

                <Button
                  asChild
                  variant={segment.color === 'bg-qatari text-white' ? 'secondary' : 'default'}
                  className={`mt-auto text-xl ${segment.color === 'bg-qatari text-white' ? 'bg-white/20 text-white hover:bg-white/30' : 'bg-qatari text-white hover:bg-qatari-light'}`}
                >
                  <Link to={segment.link}>
                    Learn More
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UserSegments;
