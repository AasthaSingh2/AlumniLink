'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, AlertCircle } from 'lucide-react';
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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-900">Create your account</h1>
                    <p className="mt-2 text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
                            Sign in
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
                    <TabsList className="grid w-full grid-cols-2 bg-gray-100 p-1 rounded-lg">
                        <TabsTrigger
                            value="student"
                            className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
                            disabled={isLoadingState}
                        >
                            Student
                        </TabsTrigger>
                        <TabsTrigger
                            value="alumni"
                            className="data-[state=active]:bg-white data-[state=active]:shadow-sm"
                            disabled={isLoadingState}
                        >
                            Alumni
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="student">
                        <Card>
                            <CardHeader>
                                <CardTitle>Student Registration</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={(e) => handleSubmit(e, 'student')} className="space-y-4">
                                    <div>
                                        <Label htmlFor="student-name">Full Name</Label>
                                        <Input id="student-name" name="student-name" type="text" required />
                                    </div>
                                    <div>
                                        <Label htmlFor="student-email">Email</Label>
                                        <Input id="student-email" name="student-email" type="email" required />
                                    </div>
                                    <div>
                                        <Label htmlFor="student-password">Password</Label>
                                        <Input id="student-password" name="student-password" type="password" required minLength={8} />
                                    </div>
                                    <div>
                                        <Label htmlFor="student-id">Student ID</Label>
                                        <Input
                                            id="student-id"
                                            name="studentId"
                                            type="text"
                                            required
                                            disabled={isLoadingState}
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="graduation-year">Expected Graduation Year</Label>
                                        <Input id="graduation-year" name="graduation-year" type="number" min={2023} max={2030} required />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full mt-4"
                                        disabled={isLoadingState}
                                    >
                                        {isLoadingState ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Creating account...
                                            </>
                                        ) : (
                                            'Register as Student'
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="alumni">
                        <Card>
                            <CardHeader>
                                <CardTitle>Alumni Registration</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={(e) => handleSubmit(e, 'alumni')} className="space-y-4">
                                    <div>
                                        <Label htmlFor="alumni-name">Full Name</Label>
                                        <Input id="alumni-name" name="alumni-name" type="text" required />
                                    </div>
                                    <div>
                                        <Label htmlFor="alumni-email">Email</Label>
                                        <Input id="alumni-email" name="alumni-email" type="email" required />
                                    </div>
                                    <div>
                                        <Label htmlFor="alumni-password">Password</Label>
                                        <Input id="alumni-password" name="alumni-password" type="password" required minLength={8} />
                                    </div>
                                    <div>
                                        <Label htmlFor="grad-year">Graduation Year</Label>
                                        <Input id="grad-year" name="grad-year" type="number" min={1900} max={new Date().getFullYear()} required />
                                    </div>
                                    <div>
                                        <Label htmlFor="current-position">Current Position</Label>
                                        <Input id="current-position" name="current-position" type="text" required />
                                    </div>
                                    <div>
                                        <Label htmlFor="company">Company</Label>
                                        <Input id="company" name="company" type="text" required />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full mt-4"
                                        disabled={isLoadingState}
                                    >
                                        {isLoadingState ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Creating account...
                                            </>
                                        ) : (
                                            'Register as Alumni'
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>

                <div className="text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account?{' '}
                        <Link
                            href="/login"
                            className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
