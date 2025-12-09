'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, AlertCircle } from 'lucide-react';
import { useAuth } from '@/contexts/auth-context';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function LoginPage() {
    const router = useRouter();
    const { login, error: authError, loading: authLoading } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const [formError, setFormError] = useState('');
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        role: 'student' as 'student' | 'alumni'
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormError('');

        try {
            setIsLoading(true);
            await login(formData.email, formData.password, formData.role);
            // Redirect is handled in the auth context
        } catch (err) {
            setFormError(err instanceof Error ? err.message : 'Failed to sign in. Please try again.');
            console.error('Login error:', err);
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
                    <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
                    <p className="mt-2 text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link href="/register" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
                            Sign up
                        </Link>
                    </p>
                </div>

                <Card className="shadow-lg overflow-hidden">
                    <CardHeader className="bg-gray-50 border-b">
                        <CardTitle className="text-center text-2xl">Sign In</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        {errorToDisplay && (
                            <Alert variant="destructive" className="mb-6">
                                <AlertCircle className="h-4 w-4" />
                                <AlertTitle>Error</AlertTitle>
                                <AlertDescription>{errorToDisplay}</AlertDescription>
                            </Alert>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    disabled={isLoadingState}
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password">Password</Label>
                                    <Link
                                        href="/forgot-password"
                                        className="text-sm text-indigo-600 hover:text-indigo-500 transition-colors"
                                    >
                                        Forgot password?
                                    </Link>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    required
                                    disabled={isLoadingState}
                                />
                            </div>

                            <div className="space-y-2">
                                <Label>Sign in as</Label>
                                <div className="grid grid-cols-2 gap-2">
                                    <button
                                        type="button"
                                        className={`px-4 py-2 rounded-md border ${formData.role === 'student'
                                            ? 'bg-indigo-100 border-indigo-500 text-indigo-700'
                                            : 'border-gray-300 hover:bg-gray-50'
                                            } transition-colors`}
                                        onClick={() => setFormData({ ...formData, role: 'student' })}
                                        disabled={isLoadingState}
                                    >
                                        Student
                                    </button>
                                    <button
                                        type="button"
                                        className={`px-4 py-2 rounded-md border ${formData.role === 'alumni'
                                            ? 'bg-indigo-100 border-indigo-500 text-indigo-700'
                                            : 'border-gray-300 hover:bg-gray-50'
                                            } transition-colors`}
                                        onClick={() => setFormData({ ...formData, role: 'alumni' })}
                                        disabled={isLoadingState}
                                    >
                                        Alumni
                                    </button>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="w-full mt-4"
                                disabled={isLoadingState}
                            >
                                {isLoadingState ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Signing in...
                                    </>
                                ) : (
                                    'Sign In'
                                )}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
