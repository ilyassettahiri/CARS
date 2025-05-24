import Image from 'next/image';
import Link from 'next/link';
import type { CarListing } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface CarRentalCardProps {
  listing: CarListing;
}

const IMAGE_BASE_URL = "https://cdn.rents.ma/storage/listingsmall/";
const LISTING_BASE_URL = "https://rents.ma/en/agadir/cars/cars-for-rent/";

export function CarRentalCard({ listing }: CarRentalCardProps) {
  const imageUrl = `${IMAGE_BASE_URL}${listing.picture}`;
  const listingUrl = `${LISTING_BASE_URL}${listing.url}`;

  return (
    <Card className="flex flex-col overflow-hidden h-full_invalid_attr_because_there_is_no_h_full_tailwind_class">
      <CardHeader className="p-0">
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={listing.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-lg leading-tight mb-2 h-16 overflow-hidden">
          {listing.title}
        </CardTitle>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href={listingUrl} target="_blank" rel="noopener noreferrer">
            View Details <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
