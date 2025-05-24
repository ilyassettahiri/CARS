import { HeroSection } from '@/components/hero-section';
import { CarRentalList } from '@/components/car-rental-list';
import { TopicSuggester } from '@/components/topic-suggester';
import { carListings } from '@/data/car-listings';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Explore transportation and car rentals in Morocco with Morocco Wheels.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CarRentalList listings={carListings} />
      <TopicSuggester />
    </>
  );
}
