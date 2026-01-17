"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface DownloadAppModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  actionType?: "buy" | "rent"
}

export function DownloadAppModal({
  open,
  onOpenChange,
  actionType = "buy",
}: DownloadAppModalProps) {
  const handlePlayStoreClick = () => {
    // Replace with actual Play Store URL
    window.open("https://play.google.com/store/apps", "_blank")
  }

  const handleAppStoreClick = () => {
    // Replace with actual App Store URL
    window.open("https://apps.apple.com", "_blank")
  }

  const headingText =
    actionType === "buy"
      ? "Download app to begin purchase"
      : "Download app to begin rental"

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg" showCloseButton={false}>
        <DialogHeader>
          {/* Illustration */}
          <div className="flex justify-center py-6">
            <Image
              src="/assets/building-permit.svg"
              alt="Building permit illustration"
              width={300}
              height={200}
              className="object-contain"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-4 text-center pb-6">
            <DialogTitle className="text-2xl font-semibold text-foreground">
              {headingText}
            </DialogTitle>
            <p className="text-muted-foreground">
              Purchases are only done in-app. Download app to begin
            </p>
          </div>

          {/* App Store Buttons */}
          <div className="space-y-3 pb-4">
            {/* Google Play Button */}
            <Button
              onClick={handlePlayStoreClick}
              className="w-full bg-[#1f2937] text-white hover:bg-[#374151] h-12 flex items-center justify-center gap-3"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.5 12.92 20.16 13.19L17.23 15.12L14.54 12.85L17.23 10.68L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"
                  fill="white"
                />
              </svg>
              <span>Get it on playstore</span>
            </Button>

            {/* App Store Button */}
            <Button
              onClick={handleAppStoreClick}
              className="w-full bg-[#1f2937] text-white hover:bg-[#374151] h-12 flex items-center justify-center gap-3"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.05 20.28C16.73 20.94 16.01 21.35 15.27 21.35C14.53 21.35 13.81 20.94 13.49 20.28L11.51 16.38L9.53 20.28C9.21 20.94 8.49 21.35 7.75 21.35C7.01 21.35 6.29 20.94 5.97 20.28L2.61 13.42C2.29 12.76 2.29 12 2.61 11.34C2.93 10.68 3.65 10.27 4.39 10.27C5.13 10.27 5.85 10.68 6.17 11.34L7.75 14.5L9.33 11.34C9.65 10.68 10.37 10.27 11.11 10.27C11.85 10.27 12.57 10.68 12.89 11.34L14.47 14.5L16.05 11.34C16.37 10.68 17.09 10.27 17.83 10.27C18.57 10.27 19.29 10.68 19.61 11.34C19.93 12 19.93 12.76 19.61 13.42L17.05 20.28Z"
                  fill="white"
                />
              </svg>
              <span>Get it on app store</span>
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
