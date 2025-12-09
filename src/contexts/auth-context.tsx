'use client';

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { useRouter } from 'next/navigation';

export type UserRole = 'student' | 'alumni' | 'admin' | null;

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  token: string;
  studentId?: string;
  graduationYear?: number;
  company?: string;
  jobTitle?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: UserRole) => Promise<void>;
  register: (userData: {
    name: string;
    email: string;
    password: string;
    role: UserRole;
    graduationYear?: number;
    company?: string;
    jobTitle?: string;
    studentId?: string;
  }) => Promise<void>;
  logout: () => void;
  loading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Initialize auth state from localStorage
  useEffect(() => {
    const initializeAuth = () => {
      try {
        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('user');

        if (token && userData) {
          setUser(JSON.parse(userData));
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  useEffect(() => {
    // Check if user is logged in on initial load
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          // In a real app, you would verify the token with your backend
          const userData = JSON.parse(localStorage.getItem('user') || 'null');
          if (userData) {
            setUser(userData);
          }
        }
      } catch (err) {
        console.error('Auth check failed:', err);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string, role: UserRole) => {
    setLoading(true);
    setError(null);

    try {
      // In a real app, you would make an API call to your backend
      // This is a mock implementation
      if (!email || !password) {
        throw new Error('Email and password are required');
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock user data - in a real app, this would come from your backend
      const mockUser = {
        id: '123',
        email,
        name: email.split('@')[0],
        role: role || 'student',
        token: 'mock-jwt-token',
        studentId: undefined,
        graduationYear: undefined,
        company: undefined,
        jobTitle: undefined
      };

      localStorage.setItem('token', mockUser.token);
      localStorage.setItem('user', JSON.stringify(mockUser));
      setUser(mockUser);

      // Redirect based on role
      if (role === 'student') {
        router.push('/student-dashboard');
      } else if (role === 'alumni') {
        router.push('/alumni-dashboard');
      } else if (role === 'admin') {
        router.push('/admin-dashboard');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData: {
    name: string;
    email: string;
    password: string;
    role: UserRole;
    graduationYear?: number;
    company?: string;
    jobTitle?: string;
    studentId?: string;
  }) => {
    setLoading(true);
    setError(null);

    try {
      // Basic validation for all users
      if (!userData.email || !userData.password || !userData.name || !userData.role) {
        throw new Error('All required fields must be filled');
      }

      // Role-specific validation
      if (userData.role === 'student' && !userData.studentId) {
        throw new Error('Student ID is required for student registration');
      }

      if (userData.role === 'alumni' && (!userData.company || !userData.jobTitle)) {
        throw new Error('Company and job title are required for alumni registration');
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Mock user data - in a real app, this would come from your backend
      const mockUser = {
        id: 'new-user-' + Math.random().toString(36).substr(2, 9),
        email: userData.email,
        name: userData.name,
        role: userData.role,
        token: 'mock-jwt-token-new-user',
        studentId: userData.studentId,
        graduationYear: userData.graduationYear,
        company: userData.company,
        jobTitle: userData.jobTitle
      };

      localStorage.setItem('token', mockUser.token);
      localStorage.setItem('user', JSON.stringify(mockUser));
      setUser(mockUser);

      // Redirect based on role
      if (userData.role === 'student') {
        router.push('/student-dashboard');
      } else if (userData.role === 'alumni') {
        router.push('/alumni-dashboard');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
