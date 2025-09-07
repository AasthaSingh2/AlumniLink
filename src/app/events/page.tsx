import { events } from '@/lib/placeholder-data';
import { EventCard } from '@/components/event-card';

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          Events &amp; Webinars
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Join us for reunions, workshops, and networking events.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
