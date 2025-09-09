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
    <div className="animate-fade-in group hover:scale-102 hover:-translate-y-1 transition-smooth">
      <Card className="flex flex-col bg-background-card border-border hover:border-accent/30 transition-colors group">
        <CardHeader className="p-0">
          <div className="overflow-hidden rounded-t-lg hover:scale-105 transition-smooth">
            <Image
              src={`${event.imageUrl}?random=${event.id}`}
              alt={event.title}
              width={600}
              height={400}
              data-ai-hint="event cover"
              className="aspect-video w-full rounded-t-lg object-cover"
            />
          </div>
        </CardHeader>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-2">
              <CardTitle className="text-xl font-bold font-headline leading-tight text-text">
                  {event.title}
              </CardTitle>
              <div className="hover:scale-110 hover:rotate-1 transition-smooth">
                <Badge variant={event.type === 'Webinar' ? 'secondary' : 'default'} className={event.type === 'Webinar' ? 'bg-accent/20 text-accent border-accent' : 'bg-accent text-background'}>
                  {event.type}
                </Badge>
              </div>
          </div>
          <div className="space-y-2 text-sm text-muted flex-grow">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{event.location}</span>
            </div>
            <CardDescription className="pt-2 text-muted">
              {event.description}
            </CardDescription>
          </div>
        </div>
        <CardFooter>
          <div className="w-full hover:scale-105 transition-smooth">
            <Button className="w-full btn-accent">RSVP Now</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
