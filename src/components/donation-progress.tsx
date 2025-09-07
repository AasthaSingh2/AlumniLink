import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { donationData } from '@/lib/placeholder-data';
import { Award, Target } from 'lucide-react';
import Link from 'next/link';

export function DonationProgress() {
  const progress = (donationData.raised / donationData.goal) * 100;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
            <Target className="w-6 h-6 text-primary" />
            <CardTitle className="font-headline">Annual Fund Drive</CardTitle>
        </div>
        <CardDescription>
          Your contributions support scholarships and programs.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Progress value={progress} aria-label={`${progress}% raised`} />
            <div className="flex justify-between text-sm font-medium">
              <span>
                ${new Intl.NumberFormat().format(donationData.raised)} Raised
              </span>
              <span className="text-muted-foreground">
                Goal: ${new Intl.NumberFormat().format(donationData.goal)}
              </span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              Top Donors
            </h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {donationData.donors.map((donor) => (
                <li key={donor.name} className="flex justify-between">
                  <span>{donor.name}</span>
                  <span>
                    ${new Intl.NumberFormat().format(donor.amount)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <Link href="#" className="w-full">
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Donate Now
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
