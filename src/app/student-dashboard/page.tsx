"use client";

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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background-light shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="bg-accent p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-text" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-text">AlumniLink</h1>
                <p className="text-sm text-muted">Student Portal</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/events" className="link-accent">
                Events
              </Link>
              <Link href="/directory" className="link-accent">
                Directory
              </Link>
              <Link href="/jobs" className="link-accent">
                Jobs
              </Link>
              <Link href="/mentorship" className="link-accent">
                Mentorship
              </Link>
              <Link href="#donations" className="link-accent">
                Donations
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-6 animate-slide-up">
            Welcome to Your
            <br />
            <span className="text-accent animate-slide-up-delayed">
              Alumni Network
            </span>
          </h1>
          <p className="text-xl text-muted mb-8 max-w-3xl mx-auto animate-slide-up">
            Connect with successful alumni, discover opportunities, and build your professional network.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-in">
          {quickActions.map((action, index) => (
            <div
              key={index}
              className={`animate-stagger-${index + 1} group hover:scale-102 hover:-translate-y-1 transition-smooth`}
            >
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-background-card border-border hover:border-accent/50">
                <CardHeader>
                  <div className="bg-accent/20 p-3 rounded-lg w-fit group-hover:bg-accent/30 transition-smooth hover:scale-110 hover:rotate-1">
                    <action.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-text">{action.title}</CardTitle>
                  <CardDescription className="text-muted">
                    {action.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={action.href}>
                    <div className="hover:scale-105 transition-smooth">
                      <Button className="w-full btn-accent">
                        {action.buttonText}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Featured Events */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-text">Upcoming Events</h2>
            <Link href="/events">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-text">
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
          <h2 className="text-3xl font-bold text-text mb-8">Alumni Spotlight</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {alumni.slice(0, 3).map((alumnus, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-background-card border-border hover:border-accent/50">
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
                      <h3 className="font-semibold text-text">{alumnus.name}</h3>
                      <p className="text-sm text-muted">{alumnus.position}</p>
                      <p className="text-xs text-muted">{alumnus.company}</p>
                    </div>
                  </div>
                  <p className="text-muted text-sm mb-4">{alumnus.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {alumnus.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full"
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
          <h2 className="text-3xl font-bold text-text mb-8">Support Our Mission</h2>
          <DonationProgress />
        </section>

        {/* Announcements */}
        <section>
          <Card className="bg-accent/10 border-accent/20">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Megaphone className="h-5 w-5 text-accent" />
                <CardTitle className="text-accent">Important Announcement</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted mb-4">
                Join us for the annual alumni reunion on June 15th, 2024. This year's theme is 
                "Building Bridges: Connecting Past, Present, and Future." Register now to secure your spot!
              </p>
              <Button className="bg-accent hover:bg-accent-light">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background-light text-text py-12 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="bg-accent p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-text" />
              </div>
              <span className="text-xl font-bold">AlumniLink</span>
            </div>
            <p className="text-muted mb-4">
              Connecting students with alumni, building stronger communities.
            </p>
            <p className="text-muted text-sm">
              © 2024 AlumniLink. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}



