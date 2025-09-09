import type { Alumnus } from '@/lib/placeholder-data';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface AlumniCardProps {
  alumnus: Alumnus;
}

export function AlumniCard({ alumnus }: AlumniCardProps) {
  const fallback = alumnus.name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <div className="animate-fade-in group hover:scale-102 hover:-translate-y-1 transition-smooth">
      <Card className="text-center flex flex-col bg-background-card border-border hover:border-accent/30 transition-colors group">
        <CardHeader>
          <div className="hover:scale-110 hover:rotate-1 transition-smooth">
            <Avatar className="w-24 h-24 mx-auto mb-2">
              <AvatarImage src={alumnus.avatarUrl} alt={alumnus.name} />
              <AvatarFallback>{fallback}</AvatarFallback>
            </Avatar>
          </div>
          <CardTitle className="text-text">{alumnus.name}</CardTitle>
          <CardDescription className="text-muted">
            Class of {alumnus.graduationYear} &middot; {alumnus.major}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="font-semibold text-text">{alumnus.jobTitle}</p>
          <p className="text-sm text-muted">{alumnus.company}</p>
        </CardContent>
        <CardFooter>
          <Link href={`/directory/${alumnus.id}`} className="w-full">
            <div className="hover:scale-105 transition-smooth">
              <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-background transition-smooth">
                View Profile
              </Button>
            </div>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
