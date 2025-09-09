import type { Job } from '@/lib/placeholder-data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from './ui/badge';
import { MapPin, Building, User } from 'lucide-react';

interface JobPostingCardProps {
  job: Job;
}

export function JobPostingCard({ job }: JobPostingCardProps) {
  return (
    <div className="animate-fade-in group hover:scale-102 hover:-translate-y-1 transition-smooth">
      <Card className="bg-background-card border-border hover:border-accent/30 transition-colors group">
        <CardHeader>
          <div className="flex justify-between items-start">
              <div>
                  <CardTitle className="text-xl font-bold font-headline text-text">
                      {job.title}
                  </CardTitle>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted mt-1">
                      <div className="flex items-center gap-2">
                          <Building className="h-4 w-4" />
                          <span>{job.company}</span>
                      </div>
                       <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                      </div>
                  </div>
              </div>
              <div className="hover:scale-110 hover:rotate-1 transition-smooth">
                <Badge variant={job.type === 'Internship' ? 'outline' : 'default'} className={job.type === 'Internship' ? 'border-accent text-accent' : 'bg-accent text-background'}>
                  {job.type}
                </Badge>
              </div>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-muted">{job.description}</CardDescription>
          <div className="flex justify-between items-center mt-4">
              <p className="text-xs text-muted flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Posted by {job.postedBy}
              </p>
              <div className="hover:scale-105 transition-smooth">
                <Button className="btn-accent">Apply Now</Button>
              </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
