
import React, { useState } from 'react';
import { Globe, ShieldCheck, Building2, TrendingUp, Percent, MapPin } from 'lucide-react';

const reasons = [
  {
    title: "100% Foreign Ownership",
    description: "Full ownership permitted across most economic sectors",
    icon: Globe,
    details: "Qatar's Foreign Investment Law allows foreign investors to own up to 100% of businesses in nearly all sectors of the economy."
  },
  {
    title: "Zero Income Tax",
    description: "No personal income tax and many corporate exemptions",
    icon: Percent,
    details: "Qatar doesn't impose personal income taxes and offers generous corporate tax exemptions for businesses in key sectors."
  },
  {
    title: "World-Class Infrastructure",
    description: "Modern logistics, transportation and digital networks",
    icon: Building2,
    details: "Qatar boasts state-of-the-art ports, airports, transportation networks, and one of the world's most advanced digital infrastructures."
  },
  {
    title: "Strategic Location",
    description: "Gateway to MENA, Africa and Asian markets",
    icon: MapPin,
    details: "Located at the crossroads of major global trade routes, Qatar provides ideal access to Middle Eastern, North African, and Asian markets."
  },
  {
    title: "Economic Stability",
    description: "One of the world's fastest growing economies",
    icon: TrendingUp,
    details: "With one of the highest GDP per capita globally, Qatar offers a stable economic environment backed by vast natural resources."
  },
  {
    title: "Legal Protections",
    description: "Strong investor rights and legal frameworks",
    icon: ShieldCheck,
    details: "Qatar's legal system provides robust protection for foreign investments, including international arbitration recognition."
  }
];

const InvestmentReasons = () => {
  const [activeReason, setActiveReason] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container-wide">
        <div className="text-left mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Invest in Qatar</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Qatar offers one of the most attractive investment environments in the Middle East,
            with investor-friendly policies and strategic advantages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;

            return (
              <div
                key={reason.title}
                className="glass-card p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden group"
                onMouseEnter={() => setActiveReason(index)}
                onMouseLeave={() => setActiveReason(null)}
              >
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-qatari to-qatari-light transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100" />

                <div className="flex items-start">
                  <div className="bg-qatari/10 p-3 rounded-lg mr-4">
                    <IconComponent className="h-6 w-6 text-qatari" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-2">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>

                    {activeReason === index && (
                      <div className="mt-4 text-sm text-gray-700 bg-gray-50 p-3 rounded-md animate-fade-in">
                        {reason.details}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InvestmentReasons;
