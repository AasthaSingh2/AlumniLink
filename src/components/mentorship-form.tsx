"use client";

import { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { getMentorSuggestions } from '@/app/actions/mentorship';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2, Wand2, ArrowLeft } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { MentorCard } from './mentor-card';

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

const initialState: FormState = {
  suggestions: null,
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Finding Matches...
        </>
      ) : (
        <>
          <Wand2 className="mr-2 h-4 w-4" />
          Find Mentors
        </>
      )}
    </Button>
  );
}

export function MentorshipForm() {
  const [state, formAction] = useFormState<FormState, FormData>(
    async (prevState: FormState, formData: FormData) => {
      return await getMentorSuggestions(prevState, formData);
    },
    initialState
  );
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formAction(formData);
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
  };

  if (submitted && state.suggestions) {
    return (
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Recommended Mentors</h2>
          <Button
            variant="ghost"
            onClick={resetForm}
            className="text-primary"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to form
          </Button>
        </div>

        <div className="space-y-6">
          {state.suggestions.map((mentor) => (
            <div key={mentor.name} className="relative">
              <MentorCard
                name={mentor.name}
                title={mentor.title}
                expertise={mentor.expertise}
                matchScore={mentor.matchScore}
                bio={mentor.bio}
                linkedInUrl={mentor.linkedInUrl}
              />
              <div className="mt-2">
                <Button variant="outline" size="sm">View Profile</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Find Your Perfect Mentor</CardTitle>
          <CardDescription>
            Tell us about your goals, skills, and what you're looking for in a mentor.
            We'll match you with alumni who can help you grow.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="menteeProfile">Your Profile & Goals</Label>
            <Textarea
              id="menteeProfile"
              name="menteeProfile"
              placeholder="Example: I'm a third-year CS student interested in machine learning. I'm looking for guidance on breaking into AI research and building a strong portfolio."
              className="min-h-[150px]"
              required
            />
            <p className="text-sm text-muted-foreground">
              Be specific about your goals, skills, and what you hope to gain from mentorship.
            </p>
          </div>

          {state?.error && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{state.error}</AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter>
          <SubmitButton />
        </CardFooter>
      </Card>
    </form>
  );
}
