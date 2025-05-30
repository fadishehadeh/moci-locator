
import React from 'react';
import { Shield, Factory, Clock, MapPin } from 'lucide-react';

const incentives = [
  {
    title: "Tax Exemptions",
    description: "Up to 20 years of tax holidays for qualifying projects",
    icon: Shield,
    details: [
      "Zero corporate tax for up to 20 years",
      "VAT exemptions on imports for industrial projects",
      "No withholding tax on service payments abroad"
    ]
  },
  {
    title: "Free Zones",
    description: "Special economic zones with enhanced benefits",
    icon: Factory,
    details: [
      "100% foreign ownership",
      "Zero corporate tax and import duties",
      "Full capital repatriation rights",
      "Single-window services"
    ]
  },
  {
    title: "Fast-Track Services",
    description: "Expedited approval processes for foreign investors",
    icon: Clock,
    details: [
      "Dedicated investment liaison officers",
      "Priority processing of applications",
      "Streamlined documentation requirements",
      "24/7 online service portals"
    ]
  },
  {
    title: "Land & Lease Options",
    description: "Attractive property solutions for international businesses",
    icon: MapPin,
    details: [
      "Subsidized land for industrial projects",
      "Long-term renewable leases at competitive rates",
      "Special zones for specific industries",
      "Land ownership rights in designated areas"
    ]
  }
];

const InvestmentIncentives = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-wide">
        <div className="text-left mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Investment Incentives</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Qatar offers an attractive package of incentives designed to maximize return on investment
            and ensure long-term business success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {incentives.map((incentive) => {
            const IconComponent = incentive.icon;

            return (
              <div key={incentive.title} className="glass-card p-8 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-qatari h-12 w-12 rounded-xl flex items-center justify-center mr-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{incentive.title}</h3>
                    <p className="text-gray-600">{incentive.description}</p>
                  </div>
                </div>

                <ul className="space-y-3 pl-4 border-l-2 border-qatari/20">
                  {incentive.details.map((detail, index) => (
                    <li key={index} className="text-gray-700">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InvestmentIncentives;
