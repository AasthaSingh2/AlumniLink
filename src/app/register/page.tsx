'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, AlertCircle, Briefcase, UserPlus } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import { useAuth, UserRole } from '@/contexts/auth-context';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function RegisterPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { register, error: authError, loading: authLoading } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [formError, setFormError] = useState('');
    const [activeTab, setActiveTab] = useState<'student' | 'alumni'>('student');

    useEffect(() => {
        const tab = searchParams.get('tab');
        if (tab === 'alumni') {
            setActiveTab('alumni');
        }
    }, [searchParams]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, type: 'student' | 'alumni') => {
        e.preventDefault();
        setFormError('');
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        const formValues = Object.fromEntries(formData.entries());

        try {
            if (type === 'student') {
                await register({
                    name: formValues['student-name'] as string,
                    email: formValues['student-email'] as string,
                    password: formValues['student-password'] as string,
                    role: 'student',
                    graduationYear: parseInt(formValues['graduation-year'] as string),
                    studentId: formValues['studentId'] as string
                });
            } else {
                await register({
                    name: formValues['alumni-name'] as string,
                    email: formValues['alumni-email'] as string,
                    password: formValues['alumni-password'] as string,
                    role: 'alumni',
                    graduationYear: parseInt(formValues['grad-year'] as string),
                    company: formValues['company'] as string,
                    jobTitle: formValues['current-position'] as string
                });
            }
        } catch (err) {
            setFormError(err instanceof Error ? err.message : 'Registration failed');
        } finally {
            setIsLoading(false);
        }
    };

    const errorToDisplay = formError || authError;
    const isLoadingState = isLoading || authLoading;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-6">
                <div className="text-center">
                    <div className="flex justify-center mb-4">
                        <div className="bg-blue-600 p-3 rounded-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-white">Join Our Community</h1>
                    <p className="mt-2 text-sm text-gray-300">
                        Already have an account?{' '}
                        <Link href="/login" className="font-medium text-blue-400 hover:text-blue-300 transition-colors">
                            Sign in here
                        </Link>
                    </p>
                </div>

                {errorToDisplay && (
                    <Alert variant="destructive" className="mb-6">
                        <AlertCircle className="h-4 w-4" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{errorToDisplay}</AlertDescription>
                    </Alert>
                )}

                <Tabs
                    defaultValue="student"
                    className="w-full"
                    onValueChange={(value) => setActiveTab(value as 'student' | 'alumni')}
                >
                    <TabsList className="grid w-full grid-cols-2 bg-gray-800 p-1 rounded-xl border border-gray-700">
                        <TabsTrigger
                            value="student"
                            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-sm rounded-lg py-2 px-4 text-sm font-medium transition-all duration-200"
                            disabled={isLoadingState}
                        >
                            <GraduationCap className="h-4 w-4 mr-2" />
                            Student
                        </TabsTrigger>
                        <TabsTrigger
                            value="alumni"
                            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-sm rounded-lg py-2 px-4 text-sm font-medium transition-all duration-200"
                            disabled={isLoadingState}
                        >
                            <Briefcase className="h-4 w-4 mr-2" />
                            Alumni
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="student">
                        <Card className="border border-gray-700 bg-gray-800 shadow-xl">
                            <CardHeader className="border-b border-gray-700">
                                <CardTitle className="text-white">Student Registration</CardTitle>
                                <p className="text-sm text-gray-400 mt-1">Join as a student to connect with alumni and access resources</p>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={(e) => handleSubmit(e, 'student')} className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="student-name" className="text-gray-300">Full Name</Label>
                                        <Input
                                            id="student-name"
                                            name="student-name"
                                            type="text"
                                            required
                                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="student-email" className="text-gray-300">Email</Label>
                                        <Input
                                            id="student-email"
                                            name="student-email"
                                            type="email"
                                            required
                                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="student-password" className="text-gray-300">Password</Label>
                                        <Input
                                            id="student-password"
                                            name="student-password"
                                            type="password"
                                            required
                                            minLength={8}
                                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="student-id" className="text-gray-300">Student ID</Label>
                                        <Input
                                            id="student-id"
                                            name="studentId"
                                            type="text"
                                            required
                                            disabled={isLoadingState}
                                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="graduation-year" className="text-gray-300">Expected Graduation Year</Label>
                                        <Input
                                            id="graduation-year"
                                            name="graduation-year"
                                            type="number"
                                            min={2023}
                                            max={2030}
                                            required
                                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-blue-500/20"
                                        disabled={isLoadingState}
                                    >
                                        {isLoadingState ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Creating account...
                                            </>
                                        ) : (
                                            <>
                                                <UserPlus className="mr-2 h-4 w-4" />
                                                Register as Student
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="alumni">
                        <Card className="border border-gray-700 bg-gray-800 shadow-xl">
                            <CardHeader className="border-b border-gray-700">
                                <CardTitle className="text-white">Alumni Registration</CardTitle>
                                <p className="text-sm text-gray-400 mt-1">Join as an alumni to mentor students and expand your network</p>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={(e) => handleSubmit(e, 'alumni')} className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="alumni-name" className="text-gray-300">Full Name</Label>
                                        <Input
                                            id="alumni-name"
                                            name="alumni-name"
                                            type="text"
                                            required
                                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="alumni-email" className="text-gray-300">Email</Label>
                                        <Input
                                            id="alumni-email"
                                            name="alumni-email"
                                            type="email"
                                            required
                                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="alumni-password" className="text-gray-300">Password</Label>
                                        <Input
                                            id="alumni-password"
                                            name="alumni-password"
                                            type="password"
                                            required
                                            minLength={8}
                                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="grad-year" className="text-gray-300">Graduation Year</Label>
                                        <Input
                                            id="grad-year"
                                            name="grad-year"
                                            type="number"
                                            min={1900}
                                            max={new Date().getFullYear()}
                                            required
                                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="current-position" className="text-gray-300">Current Position</Label>
                                        <Input
                                            id="current-position"
                                            name="current-position"
                                            type="text"
                                            required
                                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="company" className="text-gray-300">Company</Label>
                                        <Input
                                            id="company"
                                            name="company"
                                            type="text"
                                            required
                                            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-blue-500/20"
                                        disabled={isLoadingState}
                                    >
                                        {isLoadingState ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Creating account...
                                            </>
                                        ) : (
                                            <>
                                                <UserPlus className="mr-2 h-4 w-4" />
                                                Register as Alumni
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>

                <div className="text-center pt-4 border-t border-gray-700">
                    <p className="text-sm text-gray-400">
                        By registering, you agree to our{' '}
                        <Link href="/terms" className="text-blue-400 hover:text-blue-300 transition-colors">
                            Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link href="/privacy" className="text-blue-400 hover:text-blue-300 transition-colors">
                            Privacy Policy
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
