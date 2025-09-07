import type { Event } from '@/lib/placeholder-data';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from './ui/badge';
import { Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="p-0">
        <Image
          src={`${event.imageUrl}?random=${event.id}`}
          alt={event.title}
          width={600}
          height={400}
          data-ai-hint="event cover"
          className="aspect-video w-full rounded-t-lg object-cover"
        />
      </CardHeader>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
            <CardTitle className="text-xl font-bold font-headline leading-tight">
                {event.title}
            </CardTitle>
            <Badge variant={event.type === 'Webinar' ? 'secondary' : 'default'}>{event.type}</Badge>
        </div>
        <div className="space-y-2 text-sm text-muted-foreground flex-grow">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{event.location}</span>
          </div>
          <CardDescription className="pt-2">
            {event.description}
          </CardDescription>
        </div>
      </div>
      <CardFooter>
        <Button className="w-full">RSVP Now</Button>
      </CardFooter>
    </Card>
  );
}
