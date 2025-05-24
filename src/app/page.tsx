import { HeroSection } from '@/components/hero-section';
import { VehicleRentalList } from '@/components/vehicle-rental-list';
import { TopicSuggester } from '@/components/topic-suggester';
import { carListings } from '@/data/car-listings';
import { scooterListings } from '@/data/scooter-listings';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Explore transportation, car and scooter rentals in Morocco with Morocco Wheels.',
};

const CAR_IMAGE_BASE_URL = "https://cdn.rents.ma/storage/listingsmall/";
const CAR_LISTING_BASE_URL = "https://rents.ma/en/agadir/cars/cars-for-rent/";

const SCOOTER_IMAGE_BASE_URL = "https://cdn.rents.ma/storage/listingsmall/";
const SCOOTER_LISTING_BASE_URL = "https://rents.ma/en/agadir/scooters/scooters-for-rent/";


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VehicleRentalList 
        listings={carListings} 
        sectionTitle="Featured Car Rentals"
        imageBaseUrl={CAR_IMAGE_BASE_URL}
        listingBaseUrl={CAR_LISTING_BASE_URL}
      />
      <VehicleRentalList
        listings={scooterListings}
        sectionTitle="Featured Scooter Rentals"
        imageBaseUrl={SCOOTER_IMAGE_BASE_URL}
        listingBaseUrl={SCOOTER_LISTING_BASE_URL}
      />
      <TopicSuggester />
    </>
  );
}
