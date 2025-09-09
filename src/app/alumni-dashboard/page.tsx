import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Briefcase, 
  HeartHandshake, 
  Coins, 
  Calendar, 
  Bell,
  Settings,
  LogOut,
  TrendingUp,
  Users,
  DollarSign
} from 'lucide-react';

export default function AlumniDashboard() {
  // Mock data
  const alumniName = "Dr. Sarah Johnson";
  const notifications = [
    {
      id: 1,
      type: 'mentorship',
      title: 'New Mentorship Request',
      message: 'John Smith (CS 2024) is requesting mentorship in Machine Learning',
      time: '2 hours ago',
      unread: true
    },
    {
      id: 2,
      type: 'event',
      title: 'Event Invitation',
      message: 'Tech Talk: "AI in Healthcare" - RSVP by Friday',
      time: '1 day ago',
      unread: true
    }
  ];

  const quickActions = [
    {
      title: 'Update Profile',
      description: 'Keep your information current',
      icon: User,
      href: '/alumni-profile',
      color: 'bg-blue-500'
    },
    {
      title: 'Post Jobs/Internships',
      description: 'Share opportunities with students',
      icon: Briefcase,
      href: '/post-job',
      color: 'bg-green-500'
    },
    {
      title: 'Offer Mentorship',
      description: 'Guide the next generation',
      icon: HeartHandshake,
      href: '/mentorship',
      color: 'bg-purple-500'
    },
    {
      title: 'Donate/Sponsor',
      description: 'Support your alma mater',
      icon: Coins,
      href: '/donate',
      color: 'bg-yellow-500'
    },
    {
      title: 'View Upcoming Events',
      description: 'Stay connected with community',
      icon: Calendar,
      href: '/events',
      color: 'bg-red-500'
    }
  ];

  const stats = [
    { label: 'Profile Views', value: '1,247', icon: TrendingUp, change: '+12%' },
    { label: 'Mentees Helped', value: '23', icon: Users, change: '+3 this month' },
    { label: 'Total Donations', value: '$2,450', icon: DollarSign, change: '+$200 this year' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background-light shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-text">Alumni Dashboard</h1>
              <p className="text-muted">Welcome back, {alumniName}!</p>
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
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-background-card border-border hover:border-accent/30 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted">{stat.label}</p>
                        <p className="text-2xl font-bold text-text">{stat.value}</p>
                        <p className="text-xs text-accent">{stat.change}</p>
                      </div>
                      <div className="bg-accent/20 p-3 rounded-full">
                        <stat.icon className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <Card className="bg-background-light border-border">
              <CardHeader>
                <CardTitle className="text-text">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {quickActions.map((action, index) => (
                    <Card key={index} className="group hover:shadow-md transition-all duration-200 cursor-pointer bg-background-lighter border-border">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="bg-accent/20 p-3 rounded-lg group-hover:scale-110 transition-transform">
                            <action.icon className="h-6 w-6 text-accent" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-text mb-1">{action.title}</h3>
                            <p className="text-sm text-muted mb-3">{action.description}</p>
                            <Button size="sm" className="w-full bg-accent hover:bg-accent-light">
                              Go to {action.title.split(' ')[0]}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Notifications Sidebar */}
          <div className="space-y-6">
            <Card className="bg-background-light border-border">
              <CardHeader>
                <CardTitle className="flex items-center text-text">
                  <Bell className="h-5 w-5 mr-2" />
                  Notifications
                  <Badge variant="secondary" className="ml-2 bg-accent/20 text-accent">
                    {notifications.filter(n => n.unread).length}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {notifications.map((notification) => (
                  <div 
                    key={notification.id} 
                    className={`p-4 rounded-lg border ${
                      notification.unread ? 'bg-accent/10 border-accent/20' : 'bg-background-lighter border-border'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-text mb-1">{notification.title}</h4>
                        <p className="text-sm text-muted mb-2">{notification.message}</p>
                        <p className="text-xs text-muted">{notification.time}</p>
                      </div>
                      {notification.unread && (
                        <div className="w-2 h-2 bg-accent rounded-full mt-1"></div>
                      )}
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-text">
                  View All Notifications
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}