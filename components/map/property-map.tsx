"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface Property {
  id: string
  title: string
  type: "RENTAL" | "SALE"
  price: string
  location: string
  lat: number
  lng: number
}

interface PropertyMapProps {
  properties: Property[]
}

// Ibadan center coordinates
const DEFAULT_CENTER = { lat: 7.3775, lng: 3.947 }
const DEFAULT_ZOOM = 12

export function PropertyMap({ properties }: PropertyMapProps) {
  const [selectedProperty, setSelectedProperty] = useState<string | null>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={mapContainerRef} className="relative w-full h-full bg-muted">
      {/* Placeholder Map - Replace with actual map library (Google Maps, Mapbox, etc.) */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-green-50">
        {/* Mock roads/lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          {Array.from({ length: 15 }).map((_, i) => (
            <line
              key={`road-${i}`}
              x1={Math.random() * 100 + "%"}
              y1={Math.random() * 100 + "%"}
              x2={Math.random() * 100 + "%"}
              y2={Math.random() * 100 + "%"}
              stroke="#666"
              strokeWidth="2"
            />
          ))}
        </svg>

        {/* Property Markers */}
        {properties.map((property, index) => {
          // Distribute markers across the map area
          const x = 20 + (index % 5) * 18 + Math.random() * 5
          const y = 20 + Math.floor(index / 5) * 20 + Math.random() * 5

          return (
            <Link
              key={property.id}
              href={`/property/${property.id}`}
              onMouseEnter={() => setSelectedProperty(property.id)}
              onMouseLeave={() => setSelectedProperty(null)}
              className={cn(
                "absolute transform -translate-x-1/2 -translate-y-1/2 transition-all group",
                selectedProperty === property.id ? "z-20 scale-110" : "z-10"
              )}
              style={{
                left: `${x}%`,
                top: `${y}%`,
              }}
            >
              {/* Property Marker */}
              <div className="relative">
                <div
                  className={cn(
                    "bg-pink-500 text-white rounded-full p-2 shadow-lg transition-all cursor-pointer",
                    "hover:scale-110 hover:shadow-xl",
                    selectedProperty === property.id && "ring-4 ring-pink-300"
                  )}
                >
                  <Home className="h-5 w-5" />
                </div>

                {/* Tooltip on hover */}
                {selectedProperty === property.id && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-card border rounded-lg p-2 shadow-lg min-w-[200px] whitespace-nowrap">
                    <div className="font-semibold text-sm">{property.title}</div>
                    <div className="text-xs text-muted-foreground">
                      {property.price}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {property.location}
                    </div>
                  </div>
                )}
              </div>
            </Link>
          )
        })}

        {/* Mock POIs - Markets */}
        {[
          { name: "Molete Market", x: 25, y: 40 },
          { name: "Olomi Market", x: 60, y: 55 },
          { name: "Akala express", x: 45, y: 65 },
        ].map((poi, i) => (
          <div
            key={`market-${i}`}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${poi.x}%`, top: `${poi.y}%` }}
          >
            <div className="bg-blue-500 text-white rounded-full p-1.5 shadow-md">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
          </div>
        ))}

        {/* Mock POIs - Restaurants */}
        {[
          { name: "Kapital Kitchen", x: 35, y: 30 },
        ].map((poi, i) => (
          <div
            key={`restaurant-${i}`}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${poi.x}%`, top: `${poi.y}%` }}
          >
            <div className="bg-orange-500 text-white rounded-full p-1.5 shadow-md">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
          </div>
        ))}

        {/* Mock POIs - Schools */}
        {[
          { name: "Lead City University", x: 55, y: 35 },
        ].map((poi, i) => (
          <div
            key={`school-${i}`}
            className="absolute transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${poi.x}%`, top: `${poi.y}%` }}
          >
            <div className="bg-purple-500 text-white rounded-full p-1.5 shadow-md">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
              </svg>
            </div>
          </div>
        ))}

        {/* Location Marker - User's location */}
        <div
          className="absolute transform -translate-x-1/2 -translate-y-1/2 z-30"
          style={{ left: "50%", top: "50%" }}
        >
          <div className="relative">
            <div className="w-6 h-6 bg-blue-600 rounded-full border-2 border-white shadow-lg animate-pulse" />
            <div className="absolute inset-0 w-6 h-6 bg-blue-600 rounded-full border-2 border-white opacity-50 animate-ping" />
          </div>
        </div>
      </div>

      {/* Zoom Controls */}
      <div className="absolute right-4 top-4 flex flex-col gap-2 z-30">
        <button
          className="bg-white border rounded-md p-2 shadow-md hover:bg-muted transition-colors"
          aria-label="Zoom in"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
        <button
          className="bg-white border rounded-md p-2 shadow-md hover:bg-muted transition-colors"
          aria-label="Zoom out"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 12H4"
            />
          </svg>
        </button>
      </div>

      {/* Map Legend/Tips (optional) */}
      <div className="absolute bottom-4 left-4 bg-card border rounded-lg p-3 shadow-lg z-30 max-w-xs text-xs">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-pink-500 rounded-full" />
            <span>Properties</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full" />
            <span>Markets</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-orange-500 rounded-full" />
            <span>Restaurants</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-purple-500 rounded-full" />
            <span>Schools</span>
          </div>
        </div>
      </div>
    </div>
  )
}
