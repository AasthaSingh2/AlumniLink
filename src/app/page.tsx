import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Users, Shield, ArrowRight, Heart, Briefcase } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Tagline */}
      <section className="bg-background-light shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-12">
            <div className="text-center animate-fade-in">
              <p className="text-2xl text-accent font-semibold mb-4 animate-slide-up">
                Stay Connected. Grow Together. Give Back.
              </p>
              <p className="text-lg text-muted animate-slide-up-delayed">
                University Alumni Network
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-6 animate-slide-up">
            Welcome to Your
            <br />
            <span className="text-accent animate-slide-up-delayed">
              Alumni Network
            </span>
          </h1>
          <p className="text-xl text-muted mb-12 max-w-3xl mx-auto animate-slide-up">
            Join our vibrant alumni community. Connect with fellow graduates, 
            mentor students, discover opportunities, and contribute to your alma mater's legacy.
          </p>

          {/* Login Options */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16 animate-fade-in">
            <div className="animate-stagger-1 group hover:scale-102 hover:-translate-y-1 transition-all duration-300">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-background-card border-border hover:border-accent/50">
                <CardContent className="p-8 text-center">
                  <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                    <Users className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-2">Login as Student</h3>
                  <p className="text-muted mb-6">
                    Access mentorship opportunities, job postings, and connect with alumni.
                  </p>
                  <Link href="/student-login">
                    <div className="hover:scale-105 transition-transform">
                      <Button className="w-full btn-accent">
                        Student Login
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </Link>
                  </CardContent>
                </Card>
            </div>

            <div className="animate-stagger-2 group hover:scale-102 hover:-translate-y-1 transition-all duration-300">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-accent/50 bg-background-card hover:border-accent">
                <CardContent className="p-8 text-center">
                  <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                    <GraduationCap className="h-8 w-8 text-accent" />
                    </div>
                  <h3 className="text-xl font-semibold text-text mb-2">Login as Alumni</h3>
                  <p className="text-muted mb-6">
                    Manage your profile, post opportunities, and mentor the next generation.
                  </p>
                  <Link href="/alumni-login">
                    <div className="hover:scale-105 transition-transform">
                      <Button className="w-full btn-accent">
                        Alumni Login
                        <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                  </Link>
                  </CardContent>
                </Card>
            </div>

            <div className="animate-stagger-3 group hover:scale-102 hover:-translate-y-1 transition-all duration-300">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-background-card border-border hover:border-accent/50">
                <CardContent className="p-8 text-center">
                  <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                    <Shield className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-2">Login as Admin</h3>
                  <p className="text-muted mb-6">
                    Manage the platform, approve registrations, and oversee community activities.
                  </p>
                  <Link href="/admin-login">
                    <div className="hover:scale-105 transition-transform">
                      <Button className="w-full btn-accent">
                        Admin Login
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Features Section */}
          <div 
            id="features" 
            className="mt-24 animate-fade-in"
          >
            <h2 className="text-3xl font-bold text-text mb-12 animate-slide-up">
              Explore Our Platform
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="animate-stagger-1 group hover:scale-102 hover:-translate-y-1 transition-all duration-300">
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-background-card border-border hover:border-accent/50">
                  <CardContent className="p-8 text-center">
                    <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                      <Users className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-text mb-2">Find Alumni</h3>
                    <p className="text-muted mb-4">
                      Connect with successful graduates in your field and build meaningful professional relationships.
                    </p>
                    <Link href="/directory">
                      <div className="hover:scale-105 transition-transform">
                        <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-background transition-smooth">
                          Browse Directory
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              </div>

              <div className="animate-stagger-2 group hover:scale-102 hover:-translate-y-1 transition-all duration-300">
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-background-card border-border hover:border-accent/50">
                  <CardContent className="p-8 text-center">
                    <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                      <Heart className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-text mb-2">Mentorship</h3>
                    <p className="text-muted mb-4">
                      Get guidance from experienced alumni or mentor the next generation of students.
                    </p>
                    <Link href="/mentorship">
                      <div className="hover:scale-105 transition-transform">
                        <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-background transition-smooth">
                          Find Mentors
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              </div>

              <div className="animate-stagger-3 group hover:scale-102 hover:-translate-y-1 transition-all duration-300">
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-background-card border-border hover:border-accent/50">
                  <CardContent className="p-8 text-center">
                    <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                      <Briefcase className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-text mb-2">Opportunities</h3>
                    <p className="text-muted mb-4">
                      Discover job openings, internships, and career opportunities posted by alumni.
                    </p>
                    <Link href="/jobs">
                      <div className="hover:scale-105 transition-transform">
                        <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-background transition-smooth">
                          View Jobs
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-background-light text-text py-12 mt-24 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <div className="flex items-center justify-center space-x-3 mb-4 animate-slide-up-delayed">
              <div className="bg-accent p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-text" />
              </div>
              <span className="text-xl font-bold">AlumniLink</span>
            </div>
            <p className="text-muted mb-4 animate-slide-up">
              Connecting alumni, empowering students, building community.
            </p>
            <p className="text-muted text-sm animate-slide-up">
              © 2024 AlumniLink. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}