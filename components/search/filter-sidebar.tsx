"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, MapPin } from "lucide-react"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import { RangeSlider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

interface FilterSectionProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

function FilterSection({ title, children, defaultOpen = true }: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-border pb-4 last:border-b-0 last:pb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-3 text-left"
      >
        <span className="font-medium">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-4 w-4 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        )}
      </button>
      {isOpen && <div className="space-y-3">{children}</div>}
    </div>
  )
}

export function FilterSidebar() {
  const [priceRange, setPriceRange] = useState<[number, number]>([200000, 10000000])
  const [housingTypes, setHousingTypes] = useState<string[]>([])
  const [listingTypes, setListingTypes] = useState<string[]>([])

  const housingTypeOptions = [
    "Self-contain",
    "Room and parlour",
    "Mini-flat",
    "Two bedroom",
    "Three bedroom",
    "Duplex",
  ]

  const listingTypeOptions = ["Land-lord listed", "Agent listed"]

  const handleHousingTypeChange = (option: string, checked: boolean) => {
    if (checked) {
      setHousingTypes([...housingTypes, option])
    } else {
      setHousingTypes(housingTypes.filter((type) => type !== option))
    }
  }

  const handleListingTypeChange = (option: string, checked: boolean) => {
    if (checked) {
      setListingTypes([...listingTypes, option])
    } else {
      setListingTypes(listingTypes.filter((type) => type !== option))
    }
  }

  const formatPrice = (value: number) => {
    return value.toLocaleString()
  }

  return (
    <aside className="w-full md:w-72 space-y-6 pr-6">
      <h2 className="text-2xl font-semibold mb-6">Filter</h2>

      <div className="space-y-6">
        {/* Location Filter */}
        <FilterSection title="Location">
          <Link
            href="/listings/map"
            className="text-sm text-accent hover:underline flex items-center gap-1"
          >
            <MapPin className="h-4 w-4" />
            View in map
          </Link>
        </FilterSection>

        {/* Price Filter */}
        <FilterSection title="Price">
          <RangeSlider
            min={200000}
            max={10000000}
            value={priceRange}
            onValueChange={setPriceRange}
            formatValue={formatPrice}
          />
        </FilterSection>

        {/* Housing Type Filter - First Section */}
        <FilterSection title="Housing type">
          <div className="space-y-2">
            {housingTypeOptions.map((option) => (
              <Checkbox
                key={option}
                label={option}
                checked={housingTypes.includes(option)}
                onChange={(e) =>
                  handleHousingTypeChange(option, e.target.checked)
                }
              />
            ))}
          </div>
        </FilterSection>

        {/* Housing Type Filter - Second Section (Listing Type) */}
        <FilterSection title="Housing type">
          <div className="space-y-2">
            {listingTypeOptions.map((option) => (
              <Checkbox
                key={option}
                label={option}
                checked={listingTypes.includes(option)}
                onChange={(e) =>
                  handleListingTypeChange(option, e.target.checked)
                }
              />
            ))}
          </div>
        </FilterSection>
      </div>
    </aside>
  )
}
