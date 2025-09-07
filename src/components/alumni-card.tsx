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
    <Card className="text-center flex flex-col">
      <CardHeader>
        <Avatar className="w-24 h-24 mx-auto mb-2">
          <AvatarImage src={alumnus.avatarUrl} alt={alumnus.name} />
          <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
        <CardTitle>{alumnus.name}</CardTitle>
        <CardDescription>
          Class of {alumnus.graduationYear} &middot; {alumnus.major}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="font-semibold">{alumnus.jobTitle}</p>
        <p className="text-sm text-muted-foreground">{alumnus.company}</p>
      </CardContent>
      <CardFooter>
        <Link href={`/directory/${alumnus.id}`} className="w-full">
          <Button variant="outline" className="w-full">
            View Profile
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
