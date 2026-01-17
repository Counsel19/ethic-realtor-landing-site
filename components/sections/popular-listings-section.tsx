import Link from "next/link";
import { PropertyCard } from "@/components/property/property-card";
import { ArrowRight } from "lucide-react";

// Mock data - replace with actual data fetching
const mockProperties = [
  {
    id: 1,
    title: "2 Bedroom flat",
    type: "RENTAL" as const,
    price: "10,000,000 NGN",
    location: "AGODI GRA",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
    bedrooms: 2,
    bathrooms: 2,
  },
  {
    id: 2,
    title: "3 Bedroom apartment",
    type: "SALE" as const,
    price: "25,000,000 NGN",
    location: "SAGAMU GRA",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: 3,
    title: "4 Bedroom duplex",
    type: "SALE" as const,
    price: "45,000,000 NGN",
    location: "IBARA GRA",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
    bedrooms: 4,
    bathrooms: 3,
  },
  {
    id: 4,
    title: "2 Bedroom flat",
    type: "RENTAL" as const,
    price: "8,500,000 NGN",
    location: "AGODI GRA",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
    bedrooms: 2,
    bathrooms: 1,
  },
  {
    id: 5,
    title: "3 Bedroom bungalow",
    type: "SALE" as const,
    price: "30,000,000 NGN",
    location: "SAGAMU GRA",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: 6,
    title: "2 Bedroom flat",
    type: "RENTAL" as const,
    price: "12,000,000 NGN",
    location: "IBARA GRA",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
    bedrooms: 2,
    bathrooms: 2,
  },
  {
    id: 7,
    title: "5 Bedroom mansion",
    type: "SALE" as const,
    price: "80,000,000 NGN",
    location: "AGODI GRA",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
    bedrooms: 5,
    bathrooms: 4,
  },
  {
    id: 8,
    title: "2 Bedroom flat",
    type: "RENTAL" as const,
    price: "9,500,000 NGN",
    location: "SAGAMU GRA",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
    bedrooms: 2,
    bathrooms: 1,
  },
  {
    id: 9,
    title: "3 Bedroom apartment",
    type: "SALE" as const,
    price: "28,000,000 NGN",
    location: "IBARA GRA",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
    bedrooms: 3,
    bathrooms: 2,
  },
];

export function PopularListingsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2">
              Popular listings
            </h2>
            <p className="text-muted-foreground">
              Explore latest and featured properties to rent or buy.
            </p>
          </div>
          <Link
            href="/listings"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mt-4 sm:mt-0"
          >
            See all listings
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProperties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
}

