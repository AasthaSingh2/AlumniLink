'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  Filter, 
  MapPin, 
  Building, 
  Clock, 
  ExternalLink,
  Plus,
  Briefcase,
  GraduationCap
} from 'lucide-react';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Internship';
  description: string;
  applyLink: string;
  postedDate: string;
  postedBy: string;
}

export default function JobsPage() {
  const [showPostForm, setShowPostForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [companyFilter, setCompanyFilter] = useState('');

  // Mock job data
  const [jobs] = useState<Job[]>([
    {
      id: '1',
      title: 'Senior Software Engineer',
      company: 'Google',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'We are looking for a Senior Software Engineer to join our team. You will work on cutting-edge projects and collaborate with world-class engineers.',
      applyLink: 'https://careers.google.com/jobs/123',
      postedDate: '2024-01-15',
      postedBy: 'Dr. Sara'
    },
    {
      id: '2',
      title: 'Machine Learning Intern',
      company: 'Microsoft',
      location: 'Seattle, WA',
      type: 'Internship',
      description: 'Join our ML team for a 12-week internship. Work on real projects and learn from industry experts.',
      applyLink: 'https://careers.microsoft.com/internships/456',
      postedDate: '2024-01-14',
      postedBy: 'Dr.Arth'
    },
    {
      id: '3',
      title: 'Product Manager',
      company: 'Amazon',
      location: 'Austin, TX',
      type: 'Full-time',
      description: 'Lead product development for our e-commerce platform. Work with cross-functional teams to deliver amazing user experiences.',
      applyLink: 'https://amazon.jobs/en/jobs/789',
      postedDate: '2024-01-13',
      postedBy: 'Dr. Emily'
    },
    {
      id: '4',
      title: 'Data Science Intern',
      company: 'Netflix',
      location: 'Los Gatos, CA',
      type: 'Internship',
      description: 'Analyze user behavior data to improve our recommendation algorithms. Work with large datasets and cutting-edge tools.',
      applyLink: 'https://jobs.netflix.com/internships/101',
      postedDate: '2024-01-12',
      postedBy: 'Mr Reyansh'
    }
  ]);

  const [newJob, setNewJob] = useState({
    title: '',
    company: '',
    location: '',
    type: 'Full-time' as 'Full-time' | 'Internship',
    description: '',
    applyLink: ''
  });

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = !locationFilter || job.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesType = !typeFilter || job.type === typeFilter;
    const matchesCompany = !companyFilter || job.company.toLowerCase().includes(companyFilter.toLowerCase());
    
    return matchesSearch && matchesLocation && matchesType && matchesCompany;
  });

  const uniqueLocations = Array.from(new Set(jobs.map(job => job.location)));
  const uniqueCompanies = Array.from(new Set(jobs.map(job => job.company)));

  const handlePostJob = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, save to backend
    console.log('Posting job:', newJob);
    alert('Job posted successfully!');
    setNewJob({
      title: '',
      company: '',
      location: '',
      type: 'Full-time',
      description: '',
      applyLink: ''
    });
    setShowPostForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Jobs & Internships</h1>
              <p className="text-gray-600">Discover opportunities from our alumni network</p>
            </div>
            <Button onClick={() => setShowPostForm(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Post a Job
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div>
                <Label htmlFor="search">Search Jobs</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="search"
                    placeholder="Job title, company, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="location">Location</Label>
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All locations</SelectItem>
                    {uniqueLocations.map(location => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="type">Job Type</Label>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All types</SelectItem>
                    <SelectItem value="Full-time">Full-time</SelectItem>
                    <SelectItem value="Internship">Internship</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="company">Company</Label>
                <Select value={companyFilter} onValueChange={setCompanyFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="All companies" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All companies</SelectItem>
                    {uniqueCompanies.map(company => (
                      <SelectItem key={company} value={company}>{company}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Job Listings */}
        <div className="grid gap-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                      <Badge variant={job.type === 'Full-time' ? 'default' : 'secondary'}>
                        {job.type === 'Full-time' ? (
                          <Briefcase className="h-3 w-3 mr-1" />
                        ) : (
                          <GraduationCap className="h-3 w-3 mr-1" />
                        )}
                        {job.type}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-gray-600 mb-3">
                      <div className="flex items-center">
                        <Building className="h-4 w-4 mr-1" />
                        {job.company}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        Posted {new Date(job.postedDate).toLocaleDateString()}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 overflow-hidden" style={{display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}}>{job.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500">
                        Posted by {job.postedBy}
                      </p>
                      <Button asChild>
                        <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
                          Apply Now
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </a>
        </Button>
      </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or check back later for new opportunities.</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Post Job Modal */}
      {showPostForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle>Post a New Job</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePostJob} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="job-title">Job Title *</Label>
                    <Input
                      id="job-title"
                      value={newJob.title}
                      onChange={(e) => setNewJob(prev => ({ ...prev, title: e.target.value }))}
                      placeholder="e.g., Senior Software Engineer"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      value={newJob.company}
                      onChange={(e) => setNewJob(prev => ({ ...prev, company: e.target.value }))}
                      placeholder="e.g., Google"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      value={newJob.location}
                      onChange={(e) => setNewJob(prev => ({ ...prev, location: e.target.value }))}
                      placeholder="e.g., San Francisco, CA"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="job-type">Job Type *</Label>
                    <Select value={newJob.type} onValueChange={(value: 'Full-time' | 'Internship') => setNewJob(prev => ({ ...prev, type: value }))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Full-time">Full-time</SelectItem>
                        <SelectItem value="Internship">Internship</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Job Description *</Label>
                  <Textarea
                    id="description"
                    value={newJob.description}
                    onChange={(e) => setNewJob(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Describe the role, requirements, and what makes this opportunity special..."
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="apply-link">Application Link *</Label>
                  <Input
                    id="apply-link"
                    type="url"
                    value={newJob.applyLink}
                    onChange={(e) => setNewJob(prev => ({ ...prev, applyLink: e.target.value }))}
                    placeholder="https://company.com/careers/job-id"
                    required
                  />
                </div>

                <div className="flex justify-end space-x-4">
                  <Button type="button" variant="outline" onClick={() => setShowPostForm(false)}>
                    Cancel
                  </Button>
                  <Button type="submit">
                    Post Job
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}