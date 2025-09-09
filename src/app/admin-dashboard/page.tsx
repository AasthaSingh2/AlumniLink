'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  UserCheck, 
  DollarSign, 
  Calendar,
  Briefcase,
  Settings,
  LogOut,
  TrendingUp,
  BarChart3,
  PieChart,
  Activity,
  CheckCircle,
  XCircle,
  MoreHorizontal
} from 'lucide-react';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Mock data
  const stats = {
    totalAlumni: 2847,
    pendingApprovals: 23,
    totalDonations: 125430,
    upcomingEvents: 8
  };

  const pendingRegistrations = [
    { id: 1, name: 'John Smith', email: 'john@email.com', department: 'CS', batch: '2024', status: 'pending' },
    { id: 2, name: 'Sarah Wilson', email: 'sarah@email.com', department: 'EE', batch: '2023', status: 'pending' },
    { id: 3, name: 'Mike Johnson', email: 'mike@email.com', department: 'ME', batch: '2022', status: 'pending' }
  ];

  const pendingJobs = [
    { id: 1, title: 'Software Engineer', company: 'TechCorp', postedBy: 'Jane Doe', status: 'pending' },
    { id: 2, title: 'Data Analyst', company: 'DataInc', postedBy: 'Bob Smith', status: 'pending' }
  ];

  const upcomingEvents = [
    { id: 1, title: 'Alumni Reunion 2024', date: '2024-06-15', attendees: 150 },
    { id: 2, title: 'Tech Talk: AI Trends', date: '2024-06-20', attendees: 75 }
  ];

  const handleApprove = (type: string, id: number) => {
    console.log(`Approving ${type} ${id}`);
    // In real app, make API call
  };

  const handleReject = (type: string, id: number) => {
    console.log(`Rejecting ${type} ${id}`);
    // In real app, make API call
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background-light shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-text">Admin Dashboard</h1>
              <p className="text-muted">Manage your alumni community</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-text">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-text">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 bg-background-light border-border">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-accent data-[state=active]:text-text">Dashboard</TabsTrigger>
            <TabsTrigger value="alumni" className="data-[state=active]:bg-accent data-[state=active]:text-text">Alumni</TabsTrigger>
            <TabsTrigger value="jobs" className="data-[state=active]:bg-accent data-[state=active]:text-text">Jobs</TabsTrigger>
            <TabsTrigger value="events" className="data-[state=active]:bg-accent data-[state=active]:text-text">Events</TabsTrigger>
            <TabsTrigger value="donations" className="data-[state=active]:bg-accent data-[state=active]:text-text">Donations</TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-accent data-[state=active]:text-text">Analytics</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { 
                  title: "Total Alumni", 
                  value: stats.totalAlumni.toLocaleString(), 
                  subtitle: "+12% from last month", 
                  icon: Users 
                },
                { 
                  title: "Pending Approvals", 
                  value: stats.pendingApprovals, 
                  subtitle: "Requires attention", 
                  icon: UserCheck 
                },
                { 
                  title: "Total Donations", 
                  value: `$${stats.totalDonations.toLocaleString()}`, 
                  subtitle: "+8% from last month", 
                  icon: DollarSign 
                },
                { 
                  title: "Upcoming Events", 
                  value: stats.upcomingEvents, 
                  subtitle: "Next: Alumni Reunion", 
                  icon: Calendar 
                }
              ].map((stat, index) => (
                <div
                  key={stat.title}
                  className={`animate-stagger-${index + 1} group hover:scale-102 hover:-translate-y-1 transition-smooth`}
                >
                  <Card className="bg-background-card border-border hover:border-accent/30 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted">{stat.title}</p>
                          <p className="text-2xl font-bold text-text">{stat.value}</p>
                          <p className="text-xs text-accent">{stat.subtitle}</p>
                        </div>
                        <div className="bg-accent/20 p-3 rounded-full hover:scale-110 hover:rotate-1 transition-smooth">
                          <stat.icon className="h-6 w-6 text-accent" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-background-card border-border">
                <CardHeader>
                  <CardTitle className="text-text">Pending Alumni Registrations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pendingRegistrations.map((registration) => (
                      <div key={registration.id} className="flex items-center justify-between p-4 border border-border rounded-lg bg-background-lighter hover:bg-background-light transition-colors">
                        <div>
                          <h4 className="font-medium text-text">{registration.name}</h4>
                          <p className="text-sm text-muted">{registration.email}</p>
                          <p className="text-xs text-muted">{registration.department} • Batch {registration.batch}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" onClick={() => handleApprove('registration', registration.id)} className="btn-accent">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleReject('registration', registration.id)} className="border-accent text-accent hover:bg-accent hover:text-background transition-smooth">
                            <XCircle className="h-4 w-4 mr-1" />
                            Reject
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background-card border-border">
                <CardHeader>
                  <CardTitle className="text-text">Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="p-4 border border-border rounded-lg bg-background-lighter hover:bg-background-light transition-colors">
                        <h4 className="font-medium text-text">{event.title}</h4>
                        <p className="text-sm text-muted">{new Date(event.date).toLocaleDateString()}</p>
                        <p className="text-xs text-muted">{event.attendees} attendees registered</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Alumni Tab */}
          <TabsContent value="alumni" className="space-y-6">
            <Card className="bg-background-light border-border">
              <CardHeader>
                <CardTitle className="text-text">Alumni Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingRegistrations.map((registration) => (
                    <div key={registration.id} className="flex items-center justify-between p-4 border border-border rounded-lg bg-background-lighter">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-medium text-text">{registration.name}</h4>
                          <p className="text-sm text-muted">{registration.email}</p>
                          <p className="text-xs text-muted">{registration.department} • Batch {registration.batch}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="border-accent text-accent">Pending</Badge>
                        <Button size="sm" onClick={() => handleApprove('registration', registration.id)} className="bg-accent hover:bg-accent-light">
                          Approve
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleReject('registration', registration.id)} className="border-accent text-accent hover:bg-accent hover:text-text">
                          Reject
                        </Button>
                        <Button size="sm" variant="ghost" className="text-muted hover:text-accent">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Jobs Tab */}
          <TabsContent value="jobs" className="space-y-6">
            <Card className="bg-background-light border-border">
              <CardHeader>
                <CardTitle className="text-text">Job Posting Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingJobs.map((job) => (
                    <div key={job.id} className="flex items-center justify-between p-4 border border-border rounded-lg bg-background-lighter">
                      <div>
                        <h4 className="font-medium text-text">{job.title}</h4>
                        <p className="text-sm text-muted">{job.company}</p>
                        <p className="text-xs text-muted">Posted by {job.postedBy}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="border-accent text-accent">Pending</Badge>
                        <Button size="sm" onClick={() => handleApprove('job', job.id)} className="bg-accent hover:bg-accent-light">
                          Approve
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleReject('job', job.id)} className="border-accent text-accent hover:bg-accent hover:text-text">
                          Reject
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="space-y-6">
            <Card className="bg-background-light border-border">
              <CardHeader>
                <CardTitle className="text-text">Event Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="p-4 border border-border rounded-lg bg-background-lighter">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-text">{event.title}</h4>
                          <p className="text-sm text-muted">{new Date(event.date).toLocaleDateString()}</p>
                          <p className="text-xs text-muted">{event.attendees} attendees registered</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-text">Edit</Button>
                          <Button size="sm" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-text">Delete</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Donations Tab */}
          <TabsContent value="donations" className="space-y-6">
            <Card className="bg-background-light border-border">
              <CardHeader>
                <CardTitle className="text-text">Donation Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <DollarSign className="h-12 w-12 text-muted mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-text mb-2">Donation Analytics</h3>
                  <p className="text-muted">Charts and analytics will be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-background-light border-border">
                <CardHeader>
                  <CardTitle className="text-text">Alumni Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <PieChart className="h-12 w-12 text-muted mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-text mb-2">Department Distribution</h3>
                    <p className="text-muted">Pie chart will be displayed here</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-background-light border-border">
                <CardHeader>
                  <CardTitle className="text-text">Platform Engagement</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <BarChart3 className="h-12 w-12 text-muted mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-text mb-2">Engagement Metrics</h3>
                    <p className="text-muted">Bar chart will be displayed here</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}