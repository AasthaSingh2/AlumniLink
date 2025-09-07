'use server';

/**
 * @fileOverview Matches mentees with potential mentors based on their profile information and interests.
 *
 * - matchMentors - A function that suggests potential mentors to a mentee.
 * - MatchMentorsInput - The input type for the matchMentors function.
 * - MatchMentorsOutput - The return type for the matchMentors function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const MatchMentorsInputSchema = z.object({
  menteeProfile: z
    .string()
    .describe('The profile information of the mentee, including skills, industry, and interests.'),
  numberOfSuggestions: z
    .number()
    .default(3)
    .describe('The number of mentor suggestions to return.'),
});
export type MatchMentorsInput = z.infer<typeof MatchMentorsInputSchema>;

const MatchMentorsOutputSchema = z.object({
  mentorSuggestions: z
    .array(z.string())
    .describe('A list of potential mentors for the mentee.'),
});
export type MatchMentorsOutput = z.infer<typeof MatchMentorsOutputSchema>;

export async function matchMentors(input: MatchMentorsInput): Promise<MatchMentorsOutput> {
  return matchMentorsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'matchMentorsPrompt',
  input: {schema: MatchMentorsInputSchema},
  output: {schema: MatchMentorsOutputSchema},
  prompt: `You are an expert mentor matching system. Given the profile of a mentee, suggest potential mentors.

  Mentee Profile: {{{menteeProfile}}}

  Provide {{numberOfSuggestions}} mentor suggestions.  Return just names, one name per line.`,
});

const matchMentorsFlow = ai.defineFlow(
  {
    name: 'matchMentorsFlow',
    inputSchema: MatchMentorsInputSchema,
    outputSchema: MatchMentorsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
