import Image from 'next/image';
import Link from 'next/link';
import type { VehicleListing } from '@/types';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface VehicleRentalCardProps {
  listing: VehicleListing;
  imageBaseUrl: string;
  listingBaseUrl: string;
}

export function VehicleRentalCard({ listing, imageBaseUrl, listingBaseUrl }: VehicleRentalCardProps) {
  const imageUrl = `${imageBaseUrl}${listing.picture}`;
  const listingUrl = `${listingBaseUrl}${listing.url}`;

  return (
    <Card className="flex flex-col overflow-hidden h-full">
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
