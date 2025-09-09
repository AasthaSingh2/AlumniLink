'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Shield, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AdminLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, authenticate with backend
    console.log('Admin login:', formData);
    // Redirect to admin dashboard
    window.location.href = '/admin-dashboard';
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
            <Shield className="h-10 w-10 text-text" />
          </div>
          <h1 className="text-2xl font-bold text-text">Admin Login</h1>
          <p className="text-muted">Manage the alumni platform</p>
        </div>

        <Card className="bg-background-light border-border">
          <CardHeader>
            <CardTitle className="text-text">Administrator Access</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-text">Admin Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="admin@university.edu"
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
                Need admin access? Contact system administrator.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}



