import React from 'react';
import {
  ArrowRight,
  Calendar,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs";
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Import news data from the News page
const newsArticles = [
  {
    id: 295,
    title: "Ministry of Commerce and Industry Launches New Digital Platform for Business Registration",
    excerpt: "The Ministry announces the launch of a comprehensive digital platform aimed at streamlining business registration processes and enhancing investor experience in Qatar.",
    date: "January 15, 2024",
    category: "Business",
    readTime: "3 min read",
    image: "/images/image1.jpg",
    featured: true
  },
  {
    id: 294,
    title: "Qatar's Economic Growth Reaches New Heights in Q4 2023",
    excerpt: "Latest economic indicators show robust growth across multiple sectors, reinforcing Qatar's position as a leading business destination in the region.",
    date: "January 12, 2024",
    category: "Economy",
    readTime: "5 min read",
    image: "/images/image2.jpg",
    featured: false
  },
  {
    id: 293,
    title: "New Trade Agreements Signed to Boost International Commerce",
    excerpt: "The Ministry signs strategic trade agreements with multiple countries to enhance bilateral trade relationships and expand market opportunities.",
    date: "January 10, 2024",
    category: "Trade",
    readTime: "4 min read",
    image: "/images/image3.jpg",
    featured: false
  }
];

const successStories = newsArticles.slice(0, 3).map(article => ({
  id: article.id,
  title: article.title,
  excerpt: article.excerpt,
  image: article.image,
  date: new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
}));

// Additional news articles for press releases
const additionalNews = [
  {
    id: 292,
    title: "Consumer Protection Initiatives Strengthen Market Confidence",
    excerpt: "Enhanced consumer protection measures implemented to ensure fair trading practices and maintain high standards in the marketplace.",
    date: "January 8, 2024",
    category: "Consumer",
    readTime: "3 min read",
    image: "/images/image4.jpg",
    featured: false
  },
  {
    id: 291,
    title: "Innovation Hub Launched to Support Startups and SMEs",
    excerpt: "New innovation hub provides comprehensive support services for startups and small-to-medium enterprises looking to establish operations in Qatar.",
    date: "January 5, 2024",
    category: "Innovation",
    readTime: "4 min read",
    image: "/images/image5.jpg",
    featured: false
  },
  {
    id: 290,
    title: "Sustainability Initiatives Drive Green Business Practices",
    excerpt: "The Ministry introduces new sustainability guidelines and incentives to promote environmentally responsible business practices across all sectors.",
    date: "January 3, 2024",
    category: "Sustainability",
    readTime: "5 min read",
    image: "/images/image6.png",
    featured: false
  }
];

const pressReleases = additionalNews.map(article => ({
  id: article.id,
  title: article.title,
  excerpt: article.excerpt,
  date: new Date(article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }),
}));

const events = [
  {
    id: 1,
    title: 'Qatar Economic Forum',
    date: 'May 20-22, 2025',
    location: 'Doha Exhibition and Convention Center',
    image: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?q=80&w=2070',
  },
  {
    id: 2,
    title: 'International Trade & Investment Expo',
    date: 'June 15-17, 2025',
    location: 'Qatar National Convention Centre',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=2070',
  },
  {
    id: 3,
    title: 'Entrepreneurship and Innovation Summit',
    date: 'July 10-12, 2025',
    location: 'Lusail Convention Center',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070',
  },
];

const SuccessStories = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-20 relative dark:bg-gray-950">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 dark:from-gray-900 to-white dark:to-gray-950"></div>
      <div className="container-wide relative z-10">
        <div className="mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2 dark:text-white">Success Stories & Updates</h2>
            <p className="text-gray-600 dark:text-gray-300">Latest news, events, and investor success stories</p>
          </div>
        </div>

        <Tabs defaultValue="success" className="w-full">
          <TabsList className="mb-8 border border-gray-800 dark:border-gray-600 p-1 bg-transparent">
            <TabsTrigger value="success" className="text-xl px-4 py-2 text-black dark:text-white data-[state=active]:bg-transparent data-[state=active]:text-qatari">Latest News</TabsTrigger>
            <TabsTrigger value="press" className="text-black dark:text-white data-[state=active]:bg-transparent data-[state=active]:text-qatari text-xl px-4 py-2">Latest Initiatives</TabsTrigger>
            <TabsTrigger value="events" className="text-black dark:text-white data-[state=active]:bg-transparent data-[state=active]:text-qatari text-xl px-4 py-2">Latest Recalls</TabsTrigger>
          </TabsList>

          <TabsContent value="success">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {successStories.map((story) => (
                <Card key={story.id} className="border border-qatari group overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardDescription className="text-black text-xl">{story.date}</CardDescription>
                    <CardTitle className="text-lg font-semibold line-clamp-2">{story.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 line-clamp-3 text-xl">{story.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Link to={`/media-centre/news/${story.id}`} className="text-qatari font-medium text-xl flex items-center">
                      Read Full Story
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
            {/* View All News Link - positioned below 3rd card on bottom right */}
            <div className="mt-6 flex justify-end">
              <Link to="/media-centre" className="text-qatari font-medium text-lg flex items-center hover:underline">
                View All News
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </TabsContent>

          <TabsContent value="press">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pressReleases.map((press) => (
                <Card key={press.id} className="border border-qatari group hover:shadow-md transition-shadow relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5">
                    <img
                      src="https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2070"
                      alt="Background pattern"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative z-10">
                    <CardHeader>
                      <CardDescription className="text-black text-xl">{press.date}</CardDescription>
                      <CardTitle className="text-lg font-semibold line-clamp-2">{press.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 line-clamp-3 text-xl">{press.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Link to={`/media-centre/news/${press.id}`} className="text-qatari font-medium text-xl flex items-center">
                        Read Press Release
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardFooter>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {events.map((event) => (
                <Card key={event.id} className="border border-qatari overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <div className="flex items-center text-xl mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {event.date}
                      </div>
                      <div className="text-xl">{event.location}</div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">{event.title}</CardTitle>
                  </CardHeader>
                  <CardFooter>
                    <Link to={`/media-centre/events/${event.id}`} className="text-qatari font-medium text-xl flex items-center">
                      Event Details
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SuccessStories;
