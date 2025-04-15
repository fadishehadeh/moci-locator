
import React, { useState } from 'react';
import { BarChart2, PieChart, TrendingUp, DollarSign, Globe, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const InvestmentInfographic = () => {
  const [activeTab, setActiveTab] = useState('sectors');
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Investment Opportunities</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover high-growth sectors and strategic investment opportunities in Qatar
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-8">
          <Button 
            variant={activeTab === 'sectors' ? 'default' : 'outline'} 
            className={`m-1 ${activeTab === 'sectors' ? 'bg-qatari hover:bg-qatari-light' : 'border-qatari text-qatari hover:bg-qatari/10'}`}
            onClick={() => setActiveTab('sectors')}
          >
            Key Sectors
          </Button>
          <Button 
            variant={activeTab === 'growth' ? 'default' : 'outline'} 
            className={`m-1 ${activeTab === 'growth' ? 'bg-qatari hover:bg-qatari-light' : 'border-qatari text-qatari hover:bg-qatari/10'}`}
            onClick={() => setActiveTab('growth')}
          >
            Growth Indicators
          </Button>
          <Button 
            variant={activeTab === 'projects' ? 'default' : 'outline'} 
            className={`m-1 ${activeTab === 'projects' ? 'bg-qatari hover:bg-qatari-light' : 'border-qatari text-qatari hover:bg-qatari/10'}`}
            onClick={() => setActiveTab('projects')}
          >
            Strategic Projects
          </Button>
        </div>
        
        {activeTab === 'sectors' && (
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-qatari/10 flex items-center justify-center mb-4">
                  <BarChart2 className="h-12 w-12 text-qatari" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Financial Services</h3>
                <p className="text-gray-600">Qatar Financial Centre offers a world-class platform for financial services firms</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-qatari/10 flex items-center justify-center mb-4">
                  <Globe className="h-12 w-12 text-qatari" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Tourism & Hospitality</h3>
                <p className="text-gray-600">A rapidly growing sector with significant investment in infrastructure and attractions</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-qatari/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-12 w-12 text-qatari" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Technology</h3>
                <p className="text-gray-600">Digital innovation hub with focus on AI, fintech, and smart city technologies</p>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'growth' && (
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-4">GDP Growth Projections</h3>
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  <PieChart className="h-16 w-16 text-qatari" />
                  <span className="ml-4 text-lg font-medium">Interactive Chart Placeholder</span>
                </div>
                <p className="mt-4 text-gray-600">Qatar's economy is projected to grow at a steady pace over the next five years, driven by diversification efforts and strategic investments.</p>
              </div>
              
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-4">FDI Inflows</h3>
                <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="h-16 w-16 text-qatari" />
                  <span className="ml-4 text-lg font-medium">Interactive Chart Placeholder</span>
                </div>
                <p className="mt-4 text-gray-600">Foreign direct investment continues to show strong growth across multiple sectors, particularly in energy, finance, and technology.</p>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'projects' && (
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="space-y-6">
              <div className="border-l-4 border-qatari pl-4 py-2">
                <h3 className="text-xl font-semibold">Qatar Free Zones Authority</h3>
                <p className="text-gray-600">Tax-free environment and 100% foreign ownership in specialized industrial and logistics hubs</p>
              </div>
              
              <div className="border-l-4 border-qatari pl-4 py-2">
                <h3 className="text-xl font-semibold">Lusail City Development</h3>
                <p className="text-gray-600">Futuristic smart city with commercial, residential, and entertainment districts</p>
              </div>
              
              <div className="border-l-4 border-qatari pl-4 py-2">
                <h3 className="text-xl font-semibold">Hamad Port Expansion</h3>
                <p className="text-gray-600">Major trade hub connecting Qatar to global shipping routes and facilitating import/export</p>
              </div>
            </div>
          </div>
        )}
        
        <div className="flex justify-center mt-10">
          <Button
            asChild
            className="bg-qatari hover:bg-qatari-light text-white"
          >
            <Link to="/investors/opportunities">
              Explore All Investment Opportunities
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InvestmentInfographic;
