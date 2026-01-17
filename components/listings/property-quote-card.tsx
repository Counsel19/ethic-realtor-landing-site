"use client"

import Image from "next/image"
import { MapPin, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { RequestViewingModal } from "@/components/property/request-viewing-modal"
import { DownloadAppModal } from "@/components/property/download-app-modal"
import { useState } from "react"

interface Property {
  id: string
  title: string
  type: "RENTAL" | "SALE"
  price: string
  location: string
  description: string
  imageUrl: string
}

interface PropertyQuoteCardProps {
  property: Property
}

export function PropertyQuoteCard({ property }: PropertyQuoteCardProps) {
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false)
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)

  return (
    <>
      <div className="bg-card border rounded-xl overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {/* Left: Property Image */}
          <div className="relative aspect-square md:aspect-auto md:h-full min-h-[250px]">
            <Image
              src={property.imageUrl}
              alt={property.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>

          {/* Right: Property Details */}
          <div className="md:col-span-2 p-6 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Title and Price */}
              <div>
                <h2 className="text-2xl font-semibold mb-1">{property.title}</h2>
                <p className="text-3xl font-bold text-primary">{property.price}</p>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{property.location}</span>
                </div>
                <Link
                  href={`/listings/map?property=${property.id}`}
                  className="text-sm text-accent hover:underline"
                >
                  View on map
                </Link>
              </div>

              {/* Property Description */}
              <div className="space-y-2">
                <h3 className="font-semibold">Property Description</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {property.description}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 space-y-3">
              <Button
                size="lg"
                className="w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => setIsDownloadModalOpen(true)}
              >
                Buy this apartment
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="w-full flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground hover:bg-accent"
                onClick={() => setIsRequestModalOpen(true)}
              >
                <User className="h-4 w-4" />
                Request viewing
              </Button>
            </div>
          </div>
        </div>
      </div>

      <RequestViewingModal
        open={isRequestModalOpen}
        onOpenChange={setIsRequestModalOpen}
      />

      <DownloadAppModal
        open={isDownloadModalOpen}
        onOpenChange={setIsDownloadModalOpen}
        actionType={property.type === "SALE" ? "buy" : "rent"}
      />
    </>
  )
}
