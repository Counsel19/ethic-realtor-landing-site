import { PropertyDetailsSection } from "@/components/property/property-details-section";
import { FacilitiesSection } from "@/components/property/facilities-section";
import { PropertyImagesGallery } from "@/components/property/property-images-gallery";
import { BackNavigation } from "@/components/property/back-navigation";
import { notFound } from "next/navigation";

// Mock property data - replace with actual data fetching
const mockProperty = {
  id: "1",
  title: "2 Bedroom flat",
  price: "700,000 NGN",
  location: "Sango Elewure",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  type: "SALE" as const,
  facilities: {
    bathrooms: 1,
    kitchen: null,
    toilet: null,
    yard: true,
    diningArea: true,
  },
  images: [
    "/images/2-bedroom-flat.jpg",
    "/images/2-bedroom-flat.jpg",
    "/images/2-bedroom-flat.jpg",
  ],
  mainImage:
    "/images/2-bedroom-flat.jpg",
  secondaryImage:
    "/images/2-bedroom-flat.jpg",
};

interface PropertyPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { id } = await params;

  // In a real app, fetch property data by ID
  if (id !== "1") {
    notFound();
  }

  return (
    <div className="container py-6 md:py-8">
      <BackNavigation />

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Main Property Details */}
        <div className="lg:col-span-2">
          <PropertyDetailsSection property={mockProperty} />
        </div>

        {/* Facilities Sidebar */}
        <div className="lg:col-span-1">
          <FacilitiesSection facilities={mockProperty.facilities} />
        </div>
      </div>

      {/* Property Images Section */}
      <div className="mt-8">
        <PropertyImagesGallery
          images={mockProperty.images}
          secondaryImage={mockProperty.secondaryImage}
        />
      </div>
    </div>
  );
}
