import { alumni, type Alumnus } from '@/lib/placeholder-data';
import { notFound } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, Building, Mail, MapPin, MessageCircle, UserCheck } from 'lucide-react';

export default function AlumnusProfilePage({
  params,
}: {
  params: { id: string };
}) {
  const alumnus = alumni.find((a) => a.id === params.id);

  if (!alumnus) {
    notFound();
  }
  
  const fallback = alumnus.name.split(' ').map((n) => n[0]).join('');

  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-1 space-y-8">
            <Card>
                <CardContent className="pt-6 flex flex-col items-center text-center">
                    <Avatar className="w-32 h-32 mb-4">
                        <AvatarImage src={alumnus.avatarUrl} alt={alumnus.name} />
                        <AvatarFallback className="text-4xl">{fallback}</AvatarFallback>
                    </Avatar>
                    <h1 className="text-3xl font-bold font-headline">{alumnus.name}</h1>
                    <p className="text-muted-foreground">Class of {alumnus.graduationYear}</p>
                    <div className="flex items-center gap-2 mt-2">
                        <Briefcase className="w-4 h-4 text-muted-foreground" />
                        <p>{alumnus.jobTitle} at {alumnus.company}</p>
                    </div>
                     <div className="flex items-center gap-2 mt-1">
                        <MapPin className="w-4 h-4 text-muted-foreground" />
                        <p className="text-muted-foreground">{alumnus.location}</p>
                    </div>
                    <div className="flex gap-2 mt-4">
                        <Button><MessageCircle className="w-4 h-4 mr-2" /> Message</Button>
                        <Button variant="outline"><UserCheck className="w-4 h-4 mr-2" /> Connect</Button>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline">Skills</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                    {alumnus.skills.map(skill => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                </CardContent>
            </Card>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-headline">About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{alumnus.bio}</p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle className="font-headline">Career Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-border after:left-0">
                {alumnus.careerJourney.map((job, index) => (
                  <div key={index} className="grid gap-1.5 relative pb-8">
                    <div className="absolute left-[-25px] top-[5px] w-2.5 h-2.5 rounded-full bg-primary" />
                    <p className="text-sm text-muted-foreground">{job.year}</p>
                    <h3 className="font-semibold">{job.role}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Building className="w-4 h-4" />
                        <span>{job.company}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
