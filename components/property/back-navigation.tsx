"use client"

import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export function BackNavigation() {
  const router = useRouter()

  return (
    <Button
      variant="ghost"
      onClick={() => router.back()}
      className="flex items-center gap-2 p-0 h-auto hover:bg-transparent"
    >
      <ArrowLeft className="h-5 w-5" />
      <span className="text-lg">View property</span>
    </Button>
  )
}
