"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"
import Link from "next/link"
import { RequestViewingModal } from "./request-viewing-modal"
import { DownloadAppModal } from "./download-app-modal"

interface Property {
  id: string
  title: string
  price: string
  location: string
  description: string
  type: "RENTAL" | "SALE"
  mainImage?: string
}

interface PropertyDetailsSectionProps {
  property: Property
}

export function PropertyDetailsSection({
  property,
}: PropertyDetailsSectionProps) {
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false)
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)

  return (
    <div className="bg-card border rounded-2xl overflow-hidden shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {/* Left: Main Image */}
        <div className="relative  object-cover md:h-full min-h-[300px]">
          <Image
            src={property.mainImage || "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070"}
            alt={property.title}
            fill
            className="object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Right: Property Information */}
        <div className="p-6 md:p-8 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-semibold">
              {property.title}
            </h1>

            {/* Price */}
            <p className="text-3xl md:text-4xl font-bold text-primary">
              {property.price}
            </p>

            {/* Location */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-1 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{property.location}</span>
              </div>
              <Link
                href="#"
                className="text-sm text-accent hover:underline"
              >
                View on map
              </Link>
            </div>

            {/* Property Description */}
            <div className="pt-4 space-y-2">
              <h2 className="text-xl font-semibold">Property Description</h2>
              <p className="text-muted-foreground leading-relaxed">
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
              {property.type === "SALE" ? "Buy this apartment" : "Rent this apartment"}
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

      <RequestViewingModal
        open={isRequestModalOpen}
        onOpenChange={setIsRequestModalOpen}
      />

      <DownloadAppModal
        open={isDownloadModalOpen}
        onOpenChange={setIsDownloadModalOpen}
        actionType={property.type === "SALE" ? "buy" : "rent"}
      />
    </div>
  )
}
