"use client";

import { Heart, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface PropertyCardProps {
  title: string;
  type: "RENTAL" | "SALE";
  price: string;
  location: string;
  imageUrl: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: string;
}

export function PropertyCard({
  title,
  type,
  price,
  location,
  imageUrl,
  bedrooms,
  bathrooms,
  area,
}: PropertyCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <Link href={'/property/1'}>
      <Card className="group overflow-hidden hover:shadow-lg transition-shadow duration-300 pt-0">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <button
            onClick={() => setIsFavorited(!isFavorited)}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-colors"
            aria-label={
              isFavorited ? "Remove from favorites" : "Add to favorites"
            }
          >
            <Heart
              className={`h-5 w-5 ${
                isFavorited
                  ? "fill-destructive text-destructive"
                  : "text-muted-foreground"
              }`}
            />
          </button>
          <div className="absolute top-3 left-3">
            <Badge
              variant={type === "SALE" ? "destructive" : "default"}
              className="bg-white/90 backdrop-blur-sm text-foreground border-0"
            >
              {type}
            </Badge>
          </div>
        </div>
        <CardContent className="p-4 space-y-2">
          <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
          <p className="text-2xl font-bold text-primary">{price}</p>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          {(bedrooms || bathrooms || area) && (
            <div className="flex items-center gap-4 pt-2 text-sm text-muted-foreground">
              {bedrooms && <span>{bedrooms} Bed</span>}
              {bathrooms && <span>{bathrooms} Bath</span>}
              {area && <span>{area}</span>}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
