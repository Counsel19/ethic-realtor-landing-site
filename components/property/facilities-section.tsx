"use client"

import { Bath, ChefHat, Toilet, Trees, Utensils } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Facilities {
  bathrooms: number | null
  kitchen: string | null
  toilet: string | null
  yard: boolean
  diningArea: boolean
}

interface FacilitiesSectionProps {
  facilities: Facilities
}

const facilityConfig = {
  bathrooms: {
    icon: Bath,
    label: "Bathrooms",
    format: (value: number | null) => (value !== null ? `${value}` : "None"),
  },
  kitchen: {
    icon: ChefHat,
    label: "Kitchen",
    format: (value: string | null) => value || "None",
  },
  toilet: {
    icon: Toilet,
    label: "Toilet",
    format: (value: string | null) => value || "None",
  },
  yard: {
    icon: Trees,
    label: "Yard",
    format: (value: boolean) => (value ? "" : null),
    showOnlyIfTrue: true,
  },
  diningArea: {
    icon: Utensils,
    label: "Dining area",
    format: (value: boolean) => (value ? "" : null),
    showOnlyIfTrue: true,
  },
} as const

export function FacilitiesSection({ facilities }: FacilitiesSectionProps) {
  return (
    <div className="bg-card border rounded-2xl p-6 shadow-sm">
      <h2 className="text-2xl font-semibold mb-4">Facilities</h2>
      <div className="space-y-3">
        {/* Bathrooms */}
        {facilities.bathrooms !== undefined && (
          <Badge
            variant="outline"
            className="w-full justify-start gap-2 py-2 px-3 h-auto rounded-lg"
          >
            <Bath className="h-4 w-4" />
            <span>
              {facilityConfig.bathrooms.label}:{" "}
              {facilityConfig.bathrooms.format(facilities.bathrooms)}
            </span>
          </Badge>
        )}

        {/* Kitchen */}
        {facilities.kitchen !== undefined && (
          <Badge
            variant="outline"
            className="w-full justify-start gap-2 py-2 px-3 h-auto rounded-lg"
          >
            <ChefHat className="h-4 w-4" />
            <span>
              {facilityConfig.kitchen.label}:{" "}
              {facilityConfig.kitchen.format(facilities.kitchen)}
            </span>
          </Badge>
        )}

        {/* Toilet */}
        {facilities.toilet !== undefined && (
          <Badge
            variant="outline"
            className="w-full justify-start gap-2 py-2 px-3 h-auto rounded-lg"
          >
            <Toilet className="h-4 w-4" />
            <span>
              {facilityConfig.toilet.label}:{" "}
              {facilityConfig.toilet.format(facilities.toilet)}
            </span>
          </Badge>
        )}

        {/* Yard */}
        {facilities.yard && (
          <Badge
            variant="outline"
            className="w-full justify-start gap-2 py-2 px-3 h-auto rounded-lg"
          >
            <Trees className="h-4 w-4" />
            <span>Yard</span>
          </Badge>
        )}

        {/* Dining Area */}
        {facilities.diningArea && (
          <Badge
            variant="outline"
            className="w-full justify-start gap-2 py-2 px-3 h-auto rounded-lg"
          >
            <Utensils className="h-4 w-4" />
            <span>Dining area</span>
          </Badge>
        )}
      </div>
    </div>
  )
}
