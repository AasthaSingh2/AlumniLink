'use server';

import { z } from 'zod';

interface MentorSuggestion {
  name: string;
  title: string;
  expertise: string;
  matchScore: number;
  bio: string;
  linkedInUrl: string;
}

interface FormState {
  suggestions: MentorSuggestion[] | null;
  error: string | null;
}

const FormSchema = z.object({
  menteeProfile: z.string().min(10, { message: 'Profile must be at least 10 characters long.' }),
});

export async function getMentorSuggestions(prevState: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = FormSchema.safeParse({
    menteeProfile: formData.get('menteeProfile'),
  });

  if (!validatedFields.success) {
    return {
      suggestions: null,
      error: validatedFields.error.errors.map((e) => e.message).join(', '),
    };
  }

  try {
    // Mock mentor suggestions for now
    const mockSuggestions: MentorSuggestion[] = [
      {
        name: 'Dr. Sarah Johnson',
        title: 'Senior Software Engineer at Google',
        expertise: 'Machine Learning, Python, Leadership',
        matchScore: 95,
        bio: 'Experienced software engineer with 10+ years in ML and AI. Passionate about mentoring junior developers.',
        linkedInUrl: 'https://linkedin.com/in/sarahjohnson',
      },
      {
        name: 'Michael Chen',
        title: 'Product Manager at Microsoft',
        expertise: 'Product Strategy, User Experience, Team Management',
        matchScore: 88,
        bio: 'Product leader with expertise in building user-centric products and leading cross-functional teams.',
        linkedInUrl: 'https://linkedin.com/in/michaelchen',
      },
      {
        name: 'Dr. Emily Rodriguez',
        title: 'Data Scientist at Amazon',
        expertise: 'Data Analysis, Statistics, Career Development',
        matchScore: 82,
        bio: 'Data science expert helping professionals transition into tech careers and advance their skills.',
        linkedInUrl: 'https://linkedin.com/in/emilyrodriguez',
      },
    ];

    return {
      suggestions: mockSuggestions,
      error: null,
    };
  } catch (error) {
    console.error(error);
    return {
      suggestions: null,
      error: 'An unexpected error occurred. Please try again.',
    };
  }
}
