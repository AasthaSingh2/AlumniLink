import { MentorshipForm } from '@/components/mentorship-form';
import { HeartHandshake } from 'lucide-react';

export default function MentorshipPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <HeartHandshake className="w-16 h-16 text-primary" />
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          Find Your Mentor
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Our AI-powered matching tool helps you connect with experienced alumni
          who can guide you on your professional journey. Describe your goals,
          and we'll suggest the perfect mentors for you.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <MentorshipForm />
      </div>
    </div>
  );
}
