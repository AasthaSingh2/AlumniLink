import Link from "next/link";
import { GraduationCap, Twitter, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-light">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <GraduationCap className="h-8 w-8 text-accent" />
          <p className="text-center text-sm leading-loose text-muted md:text-left">
            © {new Date().getFullYear()} AlumniLink. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" aria-label="Twitter" className="text-muted hover:text-accent transition-colors">
            <Twitter className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="LinkedIn" className="text-muted hover:text-accent transition-colors">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="#" aria-label="Facebook" className="text-muted hover:text-accent transition-colors">
            <Facebook className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
