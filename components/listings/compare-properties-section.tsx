"use client"

import Image from "next/image"
import { MapPin } from "lucide-react"
import Link from "next/link"

interface Property {
  id: string
  title: string
  price: string
  location: string
  imageUrl: string
}

interface ComparePropertiesSectionProps {
  properties: Property[]
}

export function ComparePropertiesSection({
  properties,
}: ComparePropertiesSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {properties.map((property, index) => (
        <div
          key={property.id}
          className="bg-card border rounded-xl p-4 space-y-4"
        >
          {/* Property Image */}
          <div className="relative aspect-video w-full rounded-lg overflow-hidden">
            <Image
              src={property.imageUrl}
              alt={property.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* Property Details */}
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">{property.title}</h3>
            <p className="text-xl font-bold text-primary">{property.price}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4" />
                <span>{property.location}</span>
              </div>
              <Link
                href={`/listings/map?property=${property.id}`}
                className="text-sm text-foreground hover:text-accent hover:underline"
              >
                View on map
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
