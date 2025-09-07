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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Manage your alumni community</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="alumni">Alumni</TabsTrigger>
            <TabsTrigger value="jobs">Jobs</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="donations">Donations</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Alumni</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.totalAlumni.toLocaleString()}</p>
                      <p className="text-xs text-green-600">+12% from last month</p>
                    </div>
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Pending Approvals</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.pendingApprovals}</p>
                      <p className="text-xs text-orange-600">Requires attention</p>
                    </div>
                    <div className="bg-orange-100 p-3 rounded-full">
                      <UserCheck className="h-6 w-6 text-orange-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Donations</p>
                      <p className="text-2xl font-bold text-gray-900">${stats.totalDonations.toLocaleString()}</p>
                      <p className="text-xs text-green-600">+8% from last month</p>
                    </div>
                    <div className="bg-green-100 p-3 rounded-full">
                      <DollarSign className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Upcoming Events</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.upcomingEvents}</p>
                      <p className="text-xs text-blue-600">Next: Alumni Reunion</p>
                    </div>
                    <div className="bg-purple-100 p-3 rounded-full">
                      <Calendar className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Pending Alumni Registrations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pendingRegistrations.map((registration) => (
                      <div key={registration.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium">{registration.name}</h4>
                          <p className="text-sm text-gray-600">{registration.email}</p>
                          <p className="text-xs text-gray-500">{registration.department} • Batch {registration.batch}</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" onClick={() => handleApprove('registration', registration.id)}>
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleReject('registration', registration.id)}>
                            <XCircle className="h-4 w-4 mr-1" />
                            Reject
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="p-4 border rounded-lg">
                        <h4 className="font-medium">{event.title}</h4>
                        <p className="text-sm text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
                        <p className="text-xs text-gray-500">{event.attendees} attendees registered</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Alumni Tab */}
          <TabsContent value="alumni" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Alumni Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingRegistrations.map((registration) => (
                    <div key={registration.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                          <Users className="h-5 w-5 text-gray-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">{registration.name}</h4>
                          <p className="text-sm text-gray-600">{registration.email}</p>
                          <p className="text-xs text-gray-500">{registration.department} • Batch {registration.batch}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">Pending</Badge>
                        <Button size="sm" onClick={() => handleApprove('registration', registration.id)}>
                          Approve
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleReject('registration', registration.id)}>
                          Reject
                        </Button>
                        <Button size="sm" variant="ghost">
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
            <Card>
              <CardHeader>
                <CardTitle>Job Posting Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingJobs.map((job) => (
                    <div key={job.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{job.title}</h4>
                        <p className="text-sm text-gray-600">{job.company}</p>
                        <p className="text-xs text-gray-500">Posted by {job.postedBy}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">Pending</Badge>
                        <Button size="sm" onClick={() => handleApprove('job', job.id)}>
                          Approve
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleReject('job', job.id)}>
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
            <Card>
              <CardHeader>
                <CardTitle>Event Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">{event.title}</h4>
                          <p className="text-sm text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
                          <p className="text-xs text-gray-500">{event.attendees} attendees registered</p>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">Edit</Button>
                          <Button size="sm" variant="outline">Delete</Button>
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
            <Card>
              <CardHeader>
                <CardTitle>Donation Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <DollarSign className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Donation Analytics</h3>
                  <p className="text-gray-600">Charts and analytics will be displayed here</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Alumni Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <PieChart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Department Distribution</h3>
                    <p className="text-gray-600">Pie chart will be displayed here</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Platform Engagement</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Engagement Metrics</h3>
                    <p className="text-gray-600">Bar chart will be displayed here</p>
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