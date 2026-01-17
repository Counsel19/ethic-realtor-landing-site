"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

interface SubmissionSuccessModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SubmissionSuccessModal({
  open,
  onOpenChange,
}: SubmissionSuccessModalProps) {
  const handlePlayStoreClick = () => {
    // Replace with actual Play Store URL
    window.open("https://play.google.com/store/apps", "_blank")
  }

  const handleAppStoreClick = () => {
    // Replace with actual App Store URL
    window.open("https://apps.apple.com", "_blank")
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg" showCloseButton={false}>
        <DialogHeader>
          {/* Illustration */}
          <div className="flex flex-col items-center justify-center py-6">
            <div className="relative w-full max-w-sm">
              {/* House */}
              <div className="absolute left-8 top-8">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Roof */}
                  <path
                    d="M40 10 L70 30 L70 60 L10 60 L10 30 Z"
                    fill="#2563EB"
                  />
                  {/* Wall */}
                  <rect x="10" y="30" width="60" height="30" fill="#60A5FA" />
                  {/* Door */}
                  <rect x="32" y="45" width="16" height="15" fill="#1E40AF" />
                  {/* Window */}
                  <rect x="18" y="38" width="12" height="12" fill="#1E40AF" />
                  <rect x="50" y="38" width="12" height="12" fill="#1E40AF" />
                </svg>
              </div>

              {/* Clipboard with Document */}
              <div className="absolute right-8 top-12">
                <svg
                  width="60"
                  height="70"
                  viewBox="0 0 60 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Clipboard */}
                  <rect
                    x="10"
                    y="5"
                    width="40"
                    height="55"
                    rx="2"
                    fill="#9CA3AF"
                  />
                  {/* Clip */}
                  <path
                    d="M25 5 Q30 5 30 10 L30 20 Q30 25 25 25 Q20 25 20 20 L20 10 Q20 5 25 5"
                    fill="#2563EB"
                  />
                  {/* Document Lines */}
                  <line
                    x1="20"
                    y1="35"
                    x2="40"
                    y2="35"
                    stroke="#4B5563"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="20"
                    y1="42"
                    x2="40"
                    y2="42"
                    stroke="#4B5563"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="20"
                    y1="49"
                    x2="45"
                    y2="49"
                    stroke="#4B5563"
                    strokeWidth="1.5"
                  />
                  {/* Approved Stamp */}
                  <rect
                    x="32"
                    y="52"
                    width="16"
                    height="8"
                    rx="1"
                    fill="#2563EB"
                  />
                  <text
                    x="40"
                    y="58"
                    textAnchor="middle"
                    fill="white"
                    fontSize="6"
                    fontWeight="bold"
                  >
                    APPROVED
                  </text>
                </svg>
              </div>

              {/* Checkmarks */}
              {[0, 1, 2, 3].map((i) => (
                <CheckCircle2
                  key={i}
                  className="absolute text-muted-foreground/30"
                  style={{
                    left: `${15 + i * 15}%`,
                    top: `${10 + (i % 2) * 15}%`,
                    width: "24px",
                    height: "24px",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4 text-center pb-6">
            <DialogTitle className="text-2xl font-semibold text-foreground">
              Request submitted successfully
            </DialogTitle>
            <p className="text-muted-foreground">
              An agent will be in touch with you shortly
            </p>
            <p className="text-sm font-semibold text-foreground pt-2">
              HASSLE FREE PAYMENTS AND PROPERTY TRACKING FEATURES ARE
              AVAILABLE IN APP
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
