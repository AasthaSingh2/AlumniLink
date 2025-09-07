import { alumni } from '@/lib/placeholder-data';
import { AlumniCard } from '@/components/alumni-card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export default function DirectoryPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline">
          Alumni Directory
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Find and reconnect with graduates from all over the world.
        </p>
        <div className="w-full max-w-md relative">
          <Input placeholder="Search by name, major, or company..." className="pl-10 h-12" />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {alumni.map((person) => (
          <AlumniCard key={person.id} alumnus={person} />
        ))}
      </div>
    </div>
  );
}
