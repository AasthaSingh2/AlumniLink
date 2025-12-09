'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Camera, Save, ArrowLeft, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { LinkedInImport } from '@/components/linkedin-import';

interface FormData {
  name: string;
  batch: string;
  department: string;
  skills: string;
  currentCompany: string;
  position: string;
  location: string;
  linkedinUrl: string;
  githubUrl: string;
  bio: string;
  profilePhoto: File | null;
  headline: string;
  profileImage: string;
}

// Client component for LinkedIn import
function LinkedInImportSection({ onDataFetched }: { onDataFetched: (data: any) => void }) {
  const [show, setShow] = useState(false);

  return (
    <div className="pt-4 border-t border-gray-200">
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
      >
        <Linkedin className="h-4 w-4 mr-2" />
        {show ? 'Hide' : 'Show'} LinkedIn Import
      </button>

      {show && (
        <div className="mt-4">
          <LinkedInImport onDataFetched={onDataFetched} />
        </div>
      )}
    </div>
  );
}

export default function AlumniProfile() {
  const [formData, setFormData] = useState<FormData>({
    name: 'Dr. Sarah Johnson',
    batch: '2015',
    department: 'Computer Science',
    skills: 'Machine Learning, Python, Leadership, Data Analysis',
    currentCompany: 'Google',
    position: 'Senior Software Engineer',
    location: 'San Francisco, CA',
    linkedinUrl: 'https://linkedin.com/in/sarahjohnson',
    githubUrl: 'https://github.com/sarahjohnson',
    bio: 'Experienced software engineer with 10+ years in ML and AI. Passionate about mentoring junior developers and contributing to open source projects.',
    profilePhoto: null,
    headline: 'Senior Software Engineer at Google',
    profileImage: ''
  });

  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const departments = [
    'Computer Science',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Business Administration',
    'Economics',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'Other'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.batch.trim()) newErrors.batch = 'Batch/Year is required';
    if (!formData.department.trim()) newErrors.department = 'Department is required';
    if (!formData.skills.trim()) newErrors.skills = 'Skills are required';
    if (!formData.currentCompany.trim()) newErrors.currentCompany = 'Current company is required';
    if (!formData.position.trim()) newErrors.position = 'Position is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.bio.trim()) newErrors.bio = 'Bio is required';

    // Validate URLs
    if (formData.linkedinUrl && !isValidUrl(formData.linkedinUrl)) {
      newErrors.linkedinUrl = 'Please enter a valid LinkedIn URL';
    }
    if (formData.githubUrl && !isValidUrl(formData.githubUrl)) {
      newErrors.githubUrl = 'Please enter a valid GitHub URL';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // In real app, save to backend
      console.log('Profile saved:', formData);

      // Show success message
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('Error saving profile. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In real app, upload to cloud storage
      const imageUrl = URL.createObjectURL(file);
      setFormData(prev => ({
        ...prev,
        profilePhoto: file,
        profileImage: imageUrl
      }));
    }
  };

  const handleLinkedInData = (data: any) => {
    setFormData(prev => ({
      ...prev,
      name: data.name || prev.name,
      position: data.currentPosition || prev.position,
      currentCompany: data.company || prev.currentCompany,
      linkedinUrl: data.linkedinUrl || prev.linkedinUrl,
      headline: data.headline || prev.headline,
      profileImage: data.profileImage || prev.profileImage,
      bio: data.headline ? `${data.headline}. ${prev.bio || ''}`.trim() : prev.bio
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <Link href="/alumni-dashboard">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 ml-4">Profile Settings</h1>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Profile Photo Section */}
          <Card>
            <CardHeader>
              <CardTitle>Profile Photo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="flex-shrink-0">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={formData.profileImage || "/placeholder-avatar.jpg"} alt="Profile" />
                    <AvatarFallback className="text-lg">
                      {formData.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>

                <div className="space-y-4 w-full max-w-md">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1">
                      <Label htmlFor="profile-photo" className="cursor-pointer block">
                        <div className="inline-flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                          <Camera className="h-4 w-4 mr-2" />
                          Upload Photo
                        </div>
                        <input
                          id="profile-photo"
                          type="file"
                          accept="image/*"
                          className="sr-only"
                          onChange={handlePhotoUpload}
                        />
                      </Label>
                    </div>

                    <div className="border-l border-gray-300 h-10 self-center hidden sm:block" />

                    <div className="flex-1">
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full"
                        onClick={() => setFormData(prev => ({ ...prev, profilePhoto: null, profileImage: '' }))}
                        disabled={!formData.profileImage}
                      >
                        Remove Photo
                      </Button>
                    </div>
                  </div>

                </div>

                {/* LinkedIn Import Section */}
                <div className="w-full mt-4">
                  <LinkedInImportSection onDataFetched={handleLinkedInData} />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={errors.name ? 'border-red-500' : ''}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="batch">Batch/Year *</Label>
                  <Input
                    id="batch"
                    value={formData.batch}
                    onChange={(e) => handleInputChange('batch', e.target.value)}
                    placeholder="e.g., 2015"
                    className={errors.batch ? 'border-red-500' : ''}
                  />
                  {errors.batch && <p className="text-red-500 text-sm mt-1">{errors.batch}</p>}
                </div>

                <div>
                  <Label htmlFor="department">Department *</Label>
                  <Select value={formData.department} onValueChange={(value) => handleInputChange('department', value)}>
                    <SelectTrigger className={errors.department ? 'border-red-500' : ''}>
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((dept) => (
                        <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.department && <p className="text-red-500 text-sm mt-1">{errors.department}</p>}
                </div>

                <div>
                  <Label htmlFor="location">Location *</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="e.g., San Francisco, CA"
                    className={errors.location ? 'border-red-500' : ''}
                  />
                  {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location}</p>}
                </div>
              </div>

              <div>
                <Label htmlFor="skills">Skills *</Label>
                <Input
                  id="skills"
                  value={formData.skills}
                  onChange={(e) => handleInputChange('skills', e.target.value)}
                  placeholder="e.g., Machine Learning, Python, Leadership"
                  className={errors.skills ? 'border-red-500' : ''}
                />
                {errors.skills && <p className="text-red-500 text-sm mt-1">{errors.skills}</p>}
                <p className="text-sm text-gray-500 mt-1">Separate skills with commas</p>
              </div>

              <div>
                <Label htmlFor="bio">Bio *</Label>
                <Textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                  placeholder="Tell us about yourself, your career journey, and what you're passionate about..."
                  rows={4}
                  className={errors.bio ? 'border-red-500' : ''}
                />
                {errors.bio && <p className="text-red-500 text-sm mt-1">{errors.bio}</p>}
              </div>
            </CardContent>
          </Card>

          {/* Professional Information */}
          <Card>
            <CardHeader>
              <CardTitle>Professional Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="currentCompany">Current Company *</Label>
                  <Input
                    id="currentCompany"
                    value={formData.currentCompany}
                    onChange={(e) => handleInputChange('currentCompany', e.target.value)}
                    className={errors.currentCompany ? 'border-red-500' : ''}
                  />
                  {errors.currentCompany && <p className="text-red-500 text-sm mt-1">{errors.currentCompany}</p>}
                </div>

                <div>
                  <Label htmlFor="position">Position/Title *</Label>
                  <Input
                    id="position"
                    value={formData.position}
                    onChange={(e) => handleInputChange('position', e.target.value)}
                    className={errors.position ? 'border-red-500' : ''}
                  />
                  {errors.position && <p className="text-red-500 text-sm mt-1">{errors.position}</p>}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card>
            <CardHeader>
              <CardTitle>Social Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="linkedinUrl">LinkedIn URL</Label>
                <div className="flex items-center space-x-2">
                  <div className="flex-1">
                    <Input
                      id="linkedin"
                      value={formData.linkedinUrl}
                      onChange={(e) => handleInputChange('linkedinUrl', e.target.value)}
                      placeholder="https://linkedin.com/in/username"
                    />
                  </div>
                  {formData.linkedinUrl && (
                    <a
                      href={formData.linkedinUrl.startsWith('http') ? formData.linkedinUrl : `https://${formData.linkedinUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-blue-600 hover:text-blue-800"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                </div>
                {errors.linkedinUrl && <p className="text-red-500 text-sm mt-1">{errors.linkedinUrl}</p>}
              </div>

              <div>
                <Label htmlFor="githubUrl">GitHub URL</Label>
                <Input
                  id="githubUrl"
                  value={formData.githubUrl}
                  onChange={(e) => handleInputChange('githubUrl', e.target.value)}
                  placeholder="https://github.com/yourusername"
                  className={errors.githubUrl ? 'border-red-500' : ''}
                />
                {errors.githubUrl && <p className="text-red-500 text-sm mt-1">{errors.githubUrl}</p>}
              </div>
            </CardContent>
          </Card>

          {/* Save Button */}
          <div className="flex justify-end space-x-4">
            <Link href="/alumni-dashboard">
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </Link>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}




