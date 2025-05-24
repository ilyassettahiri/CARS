import Link from 'next/link';
import { Car } from 'lucide-react';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Car className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">
            Morocco Wheels
          </span>
        </Link>
        {/* Add navigation items here if needed */}
      </div>
    </header>
  );
}
