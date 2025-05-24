import Image from 'next/image';

export function HeroSection() {
  const heroImageUrl = "https://cdn.rents.ma/front/categoriescover/cars.jpg";
  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
      <Image
        src={heroImageUrl}
        alt="Hero image of cars in Morocco"
        layout="fill"
        objectFit="cover"
        quality={85}
        priority
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
          Explore Morocco Your Way
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 drop-shadow-md max-w-2xl">
          Discover the best car rentals and transportation tips for your Moroccan adventure.
        </p>
      </div>
    </section>
  );
}
