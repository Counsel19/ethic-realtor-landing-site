import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const hotAreas = [
  {
    id: 1,
    name: "Sagamu GRA",
    listings: 201,
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070",
  },
  {
    id: 2,
    name: "Agodi GRA",
    listings: 201,
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070",
  },
  {
    id: 3,
    name: "Ibara GRA",
    listings: 201,
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070",
  },
  {
    id: 4,
    name: "Sagamu GRA",
    listings: 201,
    imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070",
  },
];

export function HotAreasSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold text-primary uppercase tracking-wide">
              Featured
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2">
                Hot Areas listed right now
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
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {hotAreas.map((area) => (
            <Link
              key={area.id}
              href={`/listings?area=${area.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group"
            >
              <div className="relative aspect-square rounded-full overflow-hidden mb-3 ring-2 ring-transparent group-hover:ring-primary transition-all">
                <Image
                  src={area.imageUrl}
                  alt={`Houses in ${area.name}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-foreground mb-1">
                  Houses in {area.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {area.listings} listings
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

