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
    <Card className="bg-background-card border-border">
      <CardHeader>
        <div className="flex items-center gap-2">
            <Target className="w-6 h-6 text-accent" />
            <CardTitle className="font-headline text-text">Annual Fund Drive</CardTitle>
        </div>
        <CardDescription className="text-muted">
          Your contributions support scholarships and programs.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Progress value={progress} aria-label={`${progress}% raised`} className="h-2" />
            <div className="flex justify-between text-sm font-medium">
              <span className="text-text">
                ${new Intl.NumberFormat().format(donationData.raised)} Raised
              </span>
              <span className="text-muted">
                Goal: ${new Intl.NumberFormat().format(donationData.goal)}
              </span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2 text-text">
              <Award className="w-5 h-5 text-accent" />
              Top Donors
            </h3>
            <ul className="space-y-1 text-sm text-muted">
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
            <Button className="w-full btn-accent">
                Donate Now
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
