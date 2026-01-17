import { FilterSidebar } from "@/components/search/filter-sidebar"
import { PropertyCard } from "@/components/property/property-card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChevronDown } from "lucide-react"

// Sample property data
const sampleProperties = [
  {
    id: 1,
    title: "2 Bedroom flat",
    type: "RENTAL" as const,
    price: "10,000,000 NGN",
    location: "AGODI GRA",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
    bedrooms: 2,
    bathrooms: 1,
  },
  {
    id: 2,
    title: "3 Bedroom Duplex",
    type: "SALE" as const,
    price: "45,000,000 NGN",
    location: "BODIJA",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: 3,
    title: "Self-contain Apartment",
    type: "RENTAL" as const,
    price: "3,500,000 NGN",
    location: "UI AREA",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
    bedrooms: 1,
    bathrooms: 1,
  },
  {
    id: 4,
    title: "2 Bedroom flat",
    type: "RENTAL" as const,
    price: "10,000,000 NGN",
    location: "AGODI GRA",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
    bedrooms: 2,
    bathrooms: 1,
  },
  {
    id: 5,
    title: "Mini-flat",
    type: "RENTAL" as const,
    price: "2,500,000 NGN",
    location: "SANGOTEDO",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
    bedrooms: 1,
    bathrooms: 1,
  },
  {
    id: 6,
    title: "2 Bedroom flat",
    type: "RENTAL" as const,
    price: "10,000,000 NGN",
    location: "AGODI GRA",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
    bedrooms: 2,
    bathrooms: 1,
  },
  {
    id: 7,
    title: "3 Bedroom Apartment",
    type: "SALE" as const,
    price: "35,000,000 NGN",
    location: "LEKKI",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: 8,
    title: "2 Bedroom flat",
    type: "RENTAL" as const,
    price: "10,000,000 NGN",
    location: "AGODI GRA",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
    bedrooms: 2,
    bathrooms: 1,
  },
  {
    id: 9,
    title: "Room and Parlour",
    type: "RENTAL" as const,
    price: "1,800,000 NGN",
    location: "MAGODO",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
    bedrooms: 1,
    bathrooms: 1,
  },
]

export default function ListingsPage() {
  return (
    <main className="container py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filter Sidebar */}
        <div className="lg:sticky lg:top-[100px] lg:h-[calc(100vh-100px)] lg:overflow-y-auto lg:pr-6">
          <FilterSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Header Section */}
          <div className="mb-6">
            <h1 className="text-3xl font-semibold mb-2">
              Showing results (88)
            </h1>
            <p className="text-muted-foreground mb-4">
              Explore latest and featured properties to rent or buy
            </p>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Sort</span>
              <Select defaultValue="recent">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {sampleProperties.map((property) => (
              <PropertyCard
                key={property.id}
                title={property.title}
                type={property.type}
                price={property.price}
                location={property.location}
                imageUrl={property.imageUrl}
                bedrooms={property.bedrooms}
                bathrooms={property.bathrooms}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
