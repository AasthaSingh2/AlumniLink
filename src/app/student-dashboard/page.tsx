import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { EventCard } from '@/components/event-card';
import { DonationProgress } from '@/components/donation-progress';
import { events, alumni } from '@/lib/placeholder-data';
import {
  Megaphone,
  ArrowRight,
  Users,
  HeartHandshake,
  Coins,
  Calendar,
  Building2,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function StudentDashboard() {
  const quickActions = [
    {
      title: 'Find Alumni',
      description: 'Connect with graduates in your field.',
      href: '/directory',
      icon: Users,
      buttonText: 'Browse Directory',
    },
    {
      title: 'Support Our Mission',
      description: 'Your donations help fund scholarships and programs.',
      href: '#',
      icon: Coins,
      buttonText: 'Donate Now',
    },
    {
      title: 'Discover Events',
      description: 'Join webinars, reunions, and workshops.',
      href: '/events',
      icon: Calendar,
      buttonText: 'View Events',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="bg-primary p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">AlumniLink</h1>
                <p className="text-sm text-gray-600">Student Portal</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/events" className="text-gray-600 hover:text-primary transition-colors">
                Events
              </Link>
              <Link href="/directory" className="text-gray-600 hover:text-primary transition-colors">
                Directory
              </Link>
              <Link href="/jobs" className="text-gray-600 hover:text-primary transition-colors">
                Jobs
              </Link>
              <Link href="/mentorship" className="text-gray-600 hover:text-primary transition-colors">
                Mentorship
              </Link>
              <Link href="#donations" className="text-gray-600 hover:text-primary transition-colors">
                Donations
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Welcome to Your
            <br />
            <span className="text-primary">Alumni Network</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with successful alumni, discover opportunities, and build your professional network.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {quickActions.map((action, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="bg-primary/10 p-3 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <action.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{action.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {action.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={action.href}>
                  <Button className="w-full group-hover:bg-primary/90 transition-colors">
                    {action.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Events */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
            <Link href="/events">
              <Button variant="outline">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {events.slice(0, 3).map((event, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <EventCard event={event} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* Alumni Spotlight */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Alumni Spotlight</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alumni.slice(0, 3).map((alumnus, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative">
                      <Image
                        src={alumnus.image}
                        alt={alumnus.name}
                        width={60}
                        height={60}
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{alumnus.name}</h3>
                      <p className="text-sm text-gray-600">{alumnus.position}</p>
                      <p className="text-xs text-gray-500">{alumnus.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">{alumnus.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {alumnus.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Donation Progress */}
        <section id="donations" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Support Our Mission</h2>
          <DonationProgress />
        </section>

        {/* Announcements */}
        <section>
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Megaphone className="h-5 w-5 text-primary" />
                <CardTitle className="text-primary">Important Announcement</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Join us for the annual alumni reunion on June 15th, 2024. This year's theme is 
                "Building Bridges: Connecting Past, Present, and Future." Register now to secure your spot!
              </p>
              <Button className="bg-primary hover:bg-primary/90">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">AlumniLink</span>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting students with alumni, building stronger communities.
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 AlumniLink. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
