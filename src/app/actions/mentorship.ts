'use server';

// import { matchMentors } from '@/ai/flows/mentorship-matching';
import { z } from 'zod';

const FormSchema = z.object({
  menteeProfile: z.string().min(10, { message: 'Profile must be at least 10 characters long.' }),
});

export async function getMentorSuggestions(prevState: any, formData: FormData) {
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
    const mockSuggestions = [
      {
        name: 'Dr. Sarah Johnson',
        title: 'Senior Software Engineer at Google',
        expertise: 'Machine Learning, Python, Leadership',
        matchScore: 95,
        bio: 'Experienced software engineer with 10+ years in ML and AI. Passionate about mentoring junior developers.',
      },
      {
        name: 'Michael Chen',
        title: 'Product Manager at Microsoft',
        expertise: 'Product Strategy, User Experience, Team Management',
        matchScore: 88,
        bio: 'Product leader with expertise in building user-centric products and leading cross-functional teams.',
      },
      {
        name: 'Dr. Emily Rodriguez',
        title: 'Data Scientist at Amazon',
        expertise: 'Data Analysis, Statistics, Career Development',
        matchScore: 82,
        bio: 'Data science expert helping professionals transition into tech careers and advance their skills.',
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
