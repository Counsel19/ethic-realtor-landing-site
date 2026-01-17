import { ListingsHeader } from "@/components/listings/listings-header"
import { PropertyQuoteCard } from "@/components/listings/property-quote-card"
import { MarketInsightsSidebar } from "@/components/listings/market-insights-sidebar"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

// Mock property data - replace with actual data fetching
const sampleProperties = [
  {
    id: "1",
    title: "2 Bedroom flat",
    type: "SALE" as const,
    price: "700,000 NGN",
    location: "Sango Elewure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
  },
  {
    id: "2",
    title: "3 Bedroom Duplex",
    type: "SALE" as const,
    price: "45,000,000 NGN",
    location: "Sango Elewure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
  },
  {
    id: "3",
    title: "2 Bedroom flat",
    type: "SALE" as const,
    price: "700,000 NGN",
    location: "Sango Elewure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
  },
]

export default function ListingsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Filters */}
      <ListingsHeader />

      {/* Main Content */}
      <div className="container py-6">
        {/* Back Navigation */}
        <Link
          href="#"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="text-lg">View Quote</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Property Listings */}
          <div className="lg:col-span-2 space-y-6">
            {sampleProperties.map((property) => (
              <PropertyQuoteCard key={property.id} property={property} />
            ))}
          </div>

          {/* Right Sidebar - Market Insights */}
          <div className="lg:col-span-1">
            <MarketInsightsSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}
