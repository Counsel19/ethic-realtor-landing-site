"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface PropertyImagesGalleryProps {
  images: string[]
  secondaryImage?: string
}

export function PropertyImagesGallery({
  images,
  secondaryImage,
}: PropertyImagesGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <h2 className="text-2xl font-semibold">Property Images</h2>

      {/* Thumbnails */}
      <div className="flex gap-4 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={cn(
              "relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all",
              selectedIndex === index
                ? "border-primary shadow-md"
                : "border-transparent hover:border-border"
            )}
          >
            <Image
              src={image}
              alt={`Property image ${index + 1}`}
              fill
              className="object-cover"
              sizes="128px"
            />
          </button>
        ))}
      </div>

      {/* Large Secondary Image */}
      {secondaryImage && (
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
          <Image
            src={secondaryImage}
            alt="Property view"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      )}
    </div>
  )
}
