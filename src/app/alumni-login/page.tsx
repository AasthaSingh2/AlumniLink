'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Users, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AlumniLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, authenticate with backend
    console.log('Alumni login:', formData);
    // Redirect to alumni dashboard
    window.location.href = '/alumni-dashboard';
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-4 text-muted hover:text-accent">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div className="bg-accent p-3 rounded-full w-16 h-16 mx-auto mb-4">
            <Users className="h-10 w-10 text-text" />
          </div>
          <h1 className="text-2xl font-bold text-text">Alumni Login</h1>
          <p className="text-muted">Connect and give back to your community</p>
        </div>

        <Card className="bg-background-light border-border">
          <CardHeader>
            <CardTitle className="text-text">Sign in to your account</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-text">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="your.email@example.com"
                  required
                  className="bg-background-lighter border-border text-text placeholder:text-muted"
                />
              </div>
              <div>
                <Label htmlFor="password" className="text-text">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  required
                  className="bg-background-lighter border-border text-text placeholder:text-muted"
                />
              </div>
              <Button type="submit" className="w-full bg-accent hover:bg-accent-light">
                Sign In
              </Button>
            </form>
            <div className="mt-4 text-center">
              <p className="text-sm text-muted">
                Don't have an account?{' '}
                <Link href="/alumni-register" className="text-accent hover:underline">
                  Register here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}



