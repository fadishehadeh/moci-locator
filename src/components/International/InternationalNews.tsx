
import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const newsItems = [
  {
    id: 1,
    title: "Qatar-China Business Forum Strengthens Economic Ties",
    date: "May 15, 2025",
    excerpt: "The forum explored new investment opportunities in technology, infrastructure, and energy sectors.",
    image: "/images/image1.jpg",
    link: "/news/qatar-china-business-forum"
  },
  {
    id: 2,
    title: "New Tax Incentives for Foreign Tech Companies Announced",
    date: "April 28, 2025",
    excerpt: "The incentives include a 10-year tax holiday for qualifying technology firms establishing regional headquarters in Qatar.",
    image: "/images/image2.jpg",
    link: "/news/tech-tax-incentives"
  },
  {
    id: 3,
    title: "Qatar Free Zones Authority Expands Industrial Area",
    date: "April 10, 2025",
    excerpt: "The expansion adds 1.5 million square meters of developable land for manufacturing and logistics operations.",
    image: "/images/image3.jpg",
    link: "/news/free-zone-expansion"
  }
];

const InternationalNews = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">News & Announcements</h2>
            <p className="text-gray-600">
              Stay updated with the latest business news and announcements for international investors
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="mt-4 md:mt-0 border-qatari text-qatari hover:bg-qatari/5"
          >
            <Link to="/news">
              View All News
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex items-center text-white text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {item.date}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <Button
                  asChild
                  variant="ghost"
                  className="p-0 h-auto text-qatari hover:text-qatari-light hover:bg-transparent"
                >
                  <Link to={item.link} className="flex items-center">
                    Read more
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternationalNews;
