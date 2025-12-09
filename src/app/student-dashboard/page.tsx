"use client";

import {
  Card,
  CardContent,
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
  MessageSquare,
  User,
  Bell,
  Settings,
  LogOut,
  TrendingUp,
  DollarSign,
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
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      iconColor: 'text-blue-600',
      hoverBg: 'hover:bg-blue-100',
    },
    {
      title: 'Support Our Mission',
      description: 'Your donations help fund scholarships and programs.',
      href: '#',
      icon: Coins,
      buttonText: 'Donate Now',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
      iconColor: 'text-green-600',
      hoverBg: 'hover:bg-green-100',
    },
    {
      title: 'Discover Events',
      description: 'Join upcoming alumni and student events.',
      href: '/events',
      icon: Calendar,
      buttonText: 'View Events',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
      iconColor: 'text-purple-600',
      hoverBg: 'hover:bg-purple-100',
    },
    {
      title: 'Find a Mentor',
      description: 'Get guidance from experienced alumni in your field.',
      href: '/mentorship',
      icon: HeartHandshake,
      buttonText: 'Find a Mentor',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700',
      iconColor: 'text-orange-600',
      hoverBg: 'hover:bg-orange-100',
    },
    {
      title: 'Upcoming Events',
      description: 'Join webinars, reunions, and workshops.',
      href: '/events',
      icon: Calendar,
      buttonText: 'View Events',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
      iconColor: 'text-purple-600',
      hoverBg: 'hover:bg-purple-100',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-500 p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">AlumniLink</h1>
                <p className="text-sm text-gray-300">Student Portal</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/events" className="text-gray-300 hover:text-white font-medium transition-colors duration-200">
                Events
              </Link>
              <Link href="/directory" className="text-gray-300 hover:text-white font-medium transition-colors duration-200">
                Directory
              </Link>
              <Link href="/jobs" className="text-gray-300 hover:text-white font-medium transition-colors duration-200">
                Jobs
              </Link>
              <Link href="/mentorship" className="text-gray-300 hover:text-white font-medium transition-colors duration-200">
                Mentorship
              </Link>
              <Link href="#donations" className="text-gray-300 hover:text-white font-medium transition-colors duration-200">
                Donations
              </Link>
              <div className="flex items-center space-x-2 ml-6">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200"
                >
                  <Bell className="h-5 w-5" />
                  <span className="sr-only">Notifications</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200"
                >
                  <Settings className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200"
                >
                  <LogOut className="h-5 w-5" />
                  <span className="sr-only">Logout</span>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gray-800 text-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Welcome back, Student!</h1>
              <p className="text-gray-300">Here's what's happening with your alumni network today.</p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-3">
              <Button variant="outline" className="border-gray-300 text-gray-700">
                <MessageSquare className="h-4 w-4 mr-2" />
                Messages
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <User className="h-4 w-4 mr-2" />
                My Profile
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>
            <Link href="/directory" className="text-sm font-medium text-blue-600 hover:text-blue-800">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <div
                  key={index}
                  className={`${action.bgColor} ${action.hoverBg} rounded-xl p-6 transition-all duration-200 border border-transparent hover:shadow-md`}
                >
                  <div className={`w-10 h-10 ${action.bgColor.replace('50', '100')} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={`h-5 w-5 ${action.iconColor}`} />
                  </div>
                  <h3 className={`text-lg font-semibold ${action.textColor} mb-2`}>
                    {action.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {action.description}
                  </p>
                  <Button
                    asChild
                    variant="ghost"
                    className={`p-0 h-auto font-medium ${action.textColor} hover:bg-transparent`}
                  >
                    <Link href={action.href} className="flex items-center">
                      {action.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Upcoming Events */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Upcoming Events</h2>
            <Link href="/events" className="text-sm font-medium text-blue-600 hover:text-blue-800">
              View all events
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
            <CarouselPrevious className="left-2 md:left-4" />
            <CarouselNext className="right-2 md:right-4" />
          </Carousel>
        </section>

        {/* Alumni Spotlight */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Alumni Spotlight</h2>
            <Link href="/directory" className="text-sm font-medium text-blue-600 hover:text-blue-800">
              View all alumni
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumni.slice(0, 3).map((alumnus, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative">
                      <Image
                        src={alumnus.image}
                        alt={alumnus.name}
                        width={60}
                        height={60}
                        className="rounded-full object-cover border-2 border-white shadow-sm"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                        <div className="bg-white rounded-full p-0.5">
                          <User className="h-3 w-3 text-green-600" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{alumnus.name}</h3>
                      <p className="text-sm text-gray-600">{alumnus.position}</p>
                      <p className="text-xs text-gray-500">{alumnus.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{alumnus.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {alumnus.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full border-blue-200 text-blue-700 hover:bg-blue-50">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Donation Progress */}
        <section id="donations" className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 text-white">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Support Our Mission</h2>
                <TrendingUp className="h-6 w-6" />
              </div>
              <p className="text-blue-100 mb-6">
                Your contributions help us provide scholarships, organize events, and maintain our alumni network.
                Every donation makes a difference in the lives of current and future students.
              </p>
              <DonationProgress />
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button className="bg-white text-blue-700 hover:bg-blue-50 font-medium">
                  <DollarSign className="h-4 w-4 mr-2" />
                  Make a Donation
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-blue-700 hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Announcements */}
        <section>
          <Card className="border border-blue-100 bg-blue-50 overflow-hidden">
            <div className="md:flex">
              <div className="p-6 md:p-8 md:flex-1">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg mr-3">
                    <Megaphone className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Important Announcement</h3>
                </div>
                <p className="text-gray-700 mb-6">
                  Join us for the annual alumni reunion on June 15th, 2024. This year's theme is
                  "Building Bridges: Connecting Past, Present, and Future." Network with fellow alumni,
                  attend workshops, and celebrate our shared experiences. Register now to secure your spot!
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="hidden md:block md:w-1/3 bg-blue-100 bg-[url('/images/alumni-reunion.jpg')] bg-cover bg-center">
                {/* Add a background image here */}
              </div>
            </div>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">AlumniLink</span>
              </div>
              <p className="text-gray-400 text-sm">
                Connecting students with alumni, building stronger communities, and fostering lifelong relationships.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link href="/events" className="text-gray-400 hover:text-white">Events</Link></li>
                <li><Link href="/directory" className="text-gray-400 hover:text-white">Alumni Directory</Link></li>
                <li><Link href="/mentorship" className="text-gray-400 hover:text-white">Mentorship</Link></li>
                <li><Link href="/jobs" className="text-gray-400 hover:text-white">Career Opportunities</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
                <li><Link href="/faq" className="text-gray-400 hover:text-white">FAQs</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">Connect With Us</h4>
              <div className="flex space-x-4 mb-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.563V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              <p className="text-sm text-gray-400">
                Subscribe to our newsletter for the latest updates and news.
              </p>
              <div className="mt-4 flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-center text-sm text-gray-400">
              &copy; 2024 AlumniLink. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
