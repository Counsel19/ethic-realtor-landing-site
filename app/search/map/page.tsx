import { MapHeader } from "@/components/map/map-header"
import { PropertyMap } from "@/components/map/property-map"

// Sample property data with coordinates - replace with actual data fetching
const propertiesWithLocation = [
  {
    id: "1",
    title: "2 Bedroom flat",
    type: "SALE" as const,
    price: "700,000 NGN",
    location: "Sango Elewure",
    lat: 7.3775,
    lng: 3.9470,
  },
  {
    id: "2",
    title: "3 Bedroom Duplex",
    type: "SALE" as const,
    price: "45,000,000 NGN",
    location: "Bodija",
    lat: 7.4056,
    lng: 3.9085,
  },
  {
    id: "3",
    title: "Self-contain Apartment",
    type: "RENTAL" as const,
    price: "3,500,000 NGN",
    location: "UI Area",
    lat: 7.4436,
    lng: 3.9073,
  },
  {
    id: "4",
    title: "2 Bedroom flat",
    type: "RENTAL" as const,
    price: "10,000,000 NGN",
    location: "Jericho",
    lat: 7.3900,
    lng: 3.9167,
  },
  {
    id: "5",
    title: "Mini-flat",
    type: "RENTAL" as const,
    price: "2,500,000 NGN",
    location: "Challenge",
    lat: 7.3864,
    lng: 3.8878,
  },
]

export default function MapPage() {
  return (
    <div className="h-screen flex flex-col">
      <MapHeader />
      <div className="flex-1 relative">
        <PropertyMap properties={propertiesWithLocation} />
      </div>
    </div>
  )
}
