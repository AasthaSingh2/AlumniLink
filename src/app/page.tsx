import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Users, Shield, ArrowRight, Heart, Briefcase } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Hero Section with Tagline */}
      <section className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-12">
            <div className="text-center">
              <p className="text-2xl text-primary font-semibold mb-4">
                Stay Connected. Grow Together. Give Back.
              </p>
              <p className="text-lg text-gray-600">
                University Alumni Network
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Welcome to Your
            <br />
            <span className="text-primary">Alumni Network</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Join our vibrant alumni community. Connect with fellow graduates, 
            mentor students, discover opportunities, and contribute to your alma mater's legacy.
          </p>

          {/* Login Options */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Login as Student</h3>
                <p className="text-gray-600 mb-6">
                  Access mentorship opportunities, job postings, and connect with alumni.
                </p>
                <Link href="/student-login">
                  <Button className="w-full group-hover:bg-blue-700 transition-colors">
                    Student Login
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                </CardContent>
              </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Login as Alumni</h3>
                <p className="text-gray-600 mb-6">
                  Manage your profile, post opportunities, and mentor the next generation.
                </p>
                <Link href="/alumni-login">
                  <Button className="w-full bg-primary hover:bg-primary/90 transition-colors">
                    Alumni Login
                    <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Login as Admin</h3>
                <p className="text-gray-600 mb-6">
                  Manage the platform, approve registrations, and oversee community activities.
                </p>
                <Link href="/admin-login">
                  <Button className="w-full bg-green-600 hover:bg-green-700 transition-colors">
                    Admin Login
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Features Section */}
          <div id="features" className="mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Explore Our Platform</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Find Alumni</h3>
                  <p className="text-gray-600 mb-4">
                    Connect with successful graduates in your field and build meaningful professional relationships.
                  </p>
                  <Link href="/directory">
                    <Button variant="outline" className="w-full">
                      Browse Directory
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                    <Heart className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Mentorship</h3>
                  <p className="text-gray-600 mb-4">
                    Get guidance from experienced alumni or mentor the next generation of students.
                  </p>
                  <Link href="/mentorship">
                    <Button variant="outline" className="w-full">
                      Find Mentors
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                    <Briefcase className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Opportunities</h3>
                  <p className="text-gray-600 mb-4">
                    Discover job openings, internships, and career opportunities posted by alumni.
                  </p>
                  <Link href="/jobs">
                    <Button variant="outline" className="w-full">
                      View Jobs
                      <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">AlumniLink</span>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting alumni, empowering students, building community.
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