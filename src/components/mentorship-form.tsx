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
import { Loader2, Wand2, User } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const initialState = {
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
    const [state, formAction] = useFormState(getMentorSuggestions, initialState);
    
    // This local state is used to control the visibility of the form vs the results
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitted(true);
        const formData = new FormData(event.currentTarget);
        formAction(formData);
    }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle className="font-headline">Describe Your Needs</CardTitle>
          <CardDescription>
            Tell us about your industry, skills you want to develop, and your
            career goals. The more detail, the better the match.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="menteeProfile">Your Profile &amp; Goals</Label>
            <Textarea
              id="menteeProfile"
              name="menteeProfile"
              placeholder="e.g., 'I am a junior software developer with 2 years of experience in React. I want to grow into a senior role and improve my system design skills. I'm interested in the fintech industry.'"
              rows={6}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton />
        </CardFooter>
      </form>
        {submitted && (
            <CardContent>
                {state.error && (
                    <Alert variant="destructive">
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{state.error}</AlertDescription>
                    </Alert>
                )}
                {state.suggestions && (
                    <div className="mt-6">
                        <h3 className="text-2xl font-bold text-center mb-4 font-headline">Mentor Suggestions</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {state.suggestions.map((name, index) => (
                                <Card key={index} className="text-center p-4">
                                    <User className="mx-auto h-12 w-12 text-muted-foreground mb-2" />
                                    <p className="font-semibold">{name}</p>
                                    <Button variant="outline" size="sm" className="mt-2">View Profile</Button>
                                </Card>
                            ))}
                        </div>
                    </div>
                )}
            </CardContent>
        )}
    </Card>
  );
}
