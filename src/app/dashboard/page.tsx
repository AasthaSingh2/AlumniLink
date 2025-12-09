'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
    const router = useRouter();

    // In a real app, you would get this from your auth context
    const user = { name: 'John Doe', role: 'student' }; // Example user

    const handleLogout = () => {
        // Handle logout logic here
        console.log('User logged out');
        router.push('/login');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-semibold text-gray-900">AlumniLink Dashboard</h1>
                    <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-700">Welcome, {user.name}</span>
                        <Button variant="outline" onClick={handleLogout}>
                            Sign out
                        </Button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Your Profile</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">View and update your profile information.</p>
                            <Button className="mt-4" onClick={() => router.push('/profile')}>
                                View Profile
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Jobs & Internships</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">Explore job and internship opportunities.</p>
                            <Button className="mt-4" onClick={() => router.push('/jobs')}>
                                View Jobs
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Alumni Network</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">Connect with other alumni and students.</p>
                            <Button className="mt-4" onClick={() => router.push('/network')}>
                                View Network
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
