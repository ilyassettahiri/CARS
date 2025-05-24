import type { CarListing } from '@/types';
import { CarRentalCard } from './car-rental-card';

interface CarRentalListProps {
  listings: CarListing[];
}

export function CarRentalList({ listings }: CarRentalListProps) {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary">
          Featured Car Rentals
        </h2>
        {listings.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {listings.map((listing, index) => (
              <CarRentalCard key={index} listing={listing} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No car listings available at the moment.</p>
        )}
      </div>
    </section>
  );
}
