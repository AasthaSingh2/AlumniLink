"use client";

import { usePathname } from "next/navigation";
import { Header } from "./header";

export function ConditionalHeader() {
  const pathname = usePathname();
  
  // Only show header with navigation on these pages
  const pagesWithNavigation = [
    '/student-dashboard',
    '/directory',
    '/events',
    '/jobs',
    '/mentorship',
    '/alumni-profile'
  ];
  
  const shouldShowNavigation = pagesWithNavigation.some(page => 
    pathname.startsWith(page)
  );
  
  // Always show header, but conditionally show navigation
  return <Header showNavigation={shouldShowNavigation} />;
}
