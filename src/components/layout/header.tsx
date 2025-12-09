"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Briefcase,
  Calendar,
  GraduationCap,
  HeartHandshake,
  Menu,
  Users,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/directory", label: "Directory", icon: Users },
  { href: "/events", label: "Events", icon: Calendar },
  { href: "/mentorship", label: "Mentorship", icon: HeartHandshake },
  { href: "/jobs", label: "Jobs", icon: Briefcase },
];

interface HeaderProps {
  showNavigation?: boolean;
}

export function Header({ showNavigation = true }: HeaderProps) {
  const pathname = usePathname();

  const NavLink = ({
    href,
    label,
    icon: Icon,
    className,
  }: {
    href: string;
    label: string;
    icon: React.ElementType;
    className?: string;
  }) => (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-2 text-muted transition-colors hover:text-accent",
        pathname === href && "text-accent font-semibold",
        className
      )}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b border-gray-200 bg-white shadow-sm px-4 md:px-6">
      <div className="hover:scale-105 transition-transform">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold font-headline text-gray-900"
        >
          <GraduationCap className="h-6 w-6 text-blue-600" />
          <span className="text-lg">AlumniLink</span>
        </Link>
      </div>

      {/* Only show navigation if showNavigation prop is true */}
      {showNavigation && (
        <>
          <nav className="hidden flex-col gap-6 text-base font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 ml-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative transition-all group px-3 py-2 rounded-md",
                  pathname === link.href
                    ? "bg-blue-50 text-blue-700 font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                <div className="flex items-center gap-2">
                  <link.icon className="h-5 w-5" />
                  <span>{link.label}</span>
                </div>
                <div className={cn(
                  "absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-600 group-hover:w-4/5 transition-all duration-300",
                  pathname === link.href ? "w-4/5" : ""
                )} style={{ transform: 'translateX(-50%)' }} />
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-background border-border">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="#"
                    className="flex items-center gap-2 text-lg font-semibold text-text"
                  >
                    <GraduationCap className="h-6 w-6 text-accent" />
                    <span>AlumniLink</span>
                  </Link>
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.href}
                      href={link.href}
                      label={link.label}
                      icon={link.icon}
                    />
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full bg-background-light hover:bg-background-lighter">
                  <Avatar>
                    <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                    <AvatarFallback>AU</AvatarFallback>
                  </Avatar>
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background-light border-border">
                <DropdownMenuLabel className="text-text">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-text hover:bg-accent/20">Profile</DropdownMenuItem>
                <DropdownMenuItem className="text-text hover:bg-accent/20">Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-text hover:bg-accent/20">Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </>
      )}
    </header>
  );
}