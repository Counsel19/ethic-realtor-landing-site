import { ListingsHeader } from "@/components/listings/listings-header"
import { ComparePropertiesSection } from "@/components/listings/compare-properties-section"
import { ComparisonTable } from "@/components/listings/comparison-table"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

// Mock property data for comparison
const comparisonProperties: Array<{
  id: string
  title: string
  price: string
  location: string
  imageUrl: string
  averagePrice: string
  priceChange: string
  facilities: string
  legalCompliance: "Strong" | "Weak"
  neighbourhoodData: "Strong" | "Weak"
}> = [
  {
    id: "1",
    title: "2 Bedroom flat",
    price: "700,000 NGN",
    location: "Sango Elewure",
    imageUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
    averagePrice: "250,000 NGN",
    priceChange: "+400%",
    facilities: "Moderately modern",
    legalCompliance: "Strong",
    neighbourhoodData: "Strong",
  },
  {
    id: "2",
    title: "2 Bedroom flat",
    price: "700,000 NGN",
    location: "Sango Elewure",
    imageUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
    averagePrice: "250,000 NGN",
    priceChange: "+400%",
    facilities: "Moderately modern",
    legalCompliance: "Strong",
    neighbourhoodData: "Weak",
  },
  {
    id: "3",
    title: "2 Bedroom flat",
    price: "700,000 NGN",
    location: "Sango Elewure",
    imageUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070",
    averagePrice: "250,000 NGN",
    priceChange: "+400%",
    facilities: "Moderately modern",
    legalCompliance: "Weak",
    neighbourhoodData: "Strong",
  },
]

export default function ComparePropertiesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Filters */}
      <ListingsHeader />

      {/* Main Content */}
      <div className="container py-6">
        {/* Back Navigation */}
        <Link
          href="/listings"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="text-lg">Compare properties</span>
        </Link>

        {/* Property Showcase Section */}
        <ComparePropertiesSection properties={comparisonProperties} />

        {/* Comparison Table */}
        <div className="mt-8">
          <ComparisonTable properties={comparisonProperties} />
        </div>
      </div>
    </div>
  )
}
