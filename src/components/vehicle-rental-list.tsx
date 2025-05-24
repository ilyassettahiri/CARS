import type { VehicleListing } from '@/types';
import { VehicleRentalCard } from './vehicle-rental-card';

interface VehicleRentalListProps {
  listings: VehicleListing[];
  sectionTitle: string;
  imageBaseUrl: string;
  listingBaseUrl: string;
}

export function VehicleRentalList({ listings, sectionTitle, imageBaseUrl, listingBaseUrl }: VehicleRentalListProps) {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          {sectionTitle}
        </h2>
        {listings.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {listings.map((listing, index) => (
              <VehicleRentalCard 
                key={index} 
                listing={listing} 
                imageBaseUrl={imageBaseUrl}
                listingBaseUrl={listingBaseUrl}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No listings available at the moment.</p>
        )}
      </div>
    </section>
  );
}
