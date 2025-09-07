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
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
            <div>
                <CardTitle className="text-xl font-bold font-headline">
                    {job.title}
                </CardTitle>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
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
            <Badge variant={job.type === 'Internship' ? 'outline' : 'default'}>{job.type}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{job.description}</CardDescription>
        <div className="flex justify-between items-center mt-4">
            <p className="text-xs text-muted-foreground flex items-center gap-2">
                <User className="h-4 w-4" />
                Posted by {job.postedBy}
            </p>
            <Button>Apply Now</Button>
        </div>
      </CardContent>
    </Card>
  );
}
