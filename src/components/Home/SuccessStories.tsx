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

const successStories = [
  {
    id: 1,
    title: 'Tech Innovator Opens Regional Headquarters in Doha',
    excerpt: "A leading global technology company establishes its MENA headquarters in Qatar's Digital District, creating 200 new jobs.",
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070',
    date: 'March 15, 2025',
  },
  {
    id: 2,
    title: 'Foreign Investment Drives Manufacturing Expansion',
    excerpt: "Major European manufacturing firm invests $50 million in new production facility in Qatar's Industrial Area.",
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070',
    date: 'February 28, 2025',
  },
  {
    id: 3,
    title: 'Agricultural Technology Partnership Flourishes',
    excerpt: 'Joint venture between Qatari and Asian investors creates innovative hydroponic farming solution.',
    image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=2070',
    date: 'January 20, 2025',
  },
];

const pressReleases = [
  {
    id: 1,
    title: 'MOCI Announces New Digital Business Registry Platform',
    excerpt: 'The Ministry launches an enhanced digital business registry to streamline company formation and compliance.',
    date: 'April 10, 2025',
  },
  {
    id: 2,
    title: 'Qatar Investment Forum Scheduled for September 2025',
    excerpt: 'Annual investment forum to showcase opportunities across energy, technology, tourism and finance sectors.',
    date: 'March 30, 2025',
  },
  {
    id: 3,
    title: 'New Regulations Expand Foreign Investment Incentives',
    excerpt: 'Updated regulations offer enhanced tax incentives and operational benefits for international investors.',
    date: 'March 5, 2025',
  },
];

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
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="container-wide relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Success Stories & Updates</h2>
            <p className="text-gray-600">Latest news, events, and investor success stories</p>
          </div>
          <Button
            asChild
            variant="outline"
            className="mt-4 md:mt-0"
          >
            <Link to="/media-centre">
              View All News
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <Tabs defaultValue="success" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="success">Success Stories</TabsTrigger>
            <TabsTrigger value="press" className="text-black data-[state=active]:text-black">Press Releases</TabsTrigger>
            <TabsTrigger value="events" className="text-black data-[state=active]:text-black">Upcoming Events</TabsTrigger>
          </TabsList>

          <TabsContent value="success">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {successStories.map((story) => (
                <Card key={story.id} className="group overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardDescription className="text-black text-sm">{story.date}</CardDescription>
                    <CardTitle className="text-lg font-semibold line-clamp-2">{story.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 line-clamp-3">{story.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Link to={`/media-centre/stories/${story.id}`} className="text-qatari font-medium text-sm flex items-center">
                      Read Full Story
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="press">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pressReleases.map((press) => (
                <Card key={press.id} className="group hover:shadow-md transition-shadow relative overflow-hidden">
                  <div className="absolute inset-0 opacity-5">
                    <img
                      src="https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2070"
                      alt="Background pattern"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative z-10">
                    <CardHeader>
                      <CardDescription className="text-black text-sm">{press.date}</CardDescription>
                      <CardTitle className="text-lg font-semibold line-clamp-2">{press.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 line-clamp-3">{press.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Link to={`/media-centre/press/${press.id}`} className="text-qatari font-medium text-sm flex items-center">
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
                <Card key={event.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 text-white">
                      <div className="flex items-center text-sm mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {event.date}
                      </div>
                      <div className="text-sm">{event.location}</div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">{event.title}</CardTitle>
                  </CardHeader>
                  <CardFooter>
                    <Link to={`/media-centre/events/${event.id}`} className="text-qatari font-medium text-sm flex items-center">
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
