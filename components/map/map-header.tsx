"use client"

import { ArrowLeft, Search, Filter, User, Eye, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export function MapHeader() {
  const router = useRouter()
  const [saveChecked, setSaveChecked] = useState(false)
  const [buyChecked, setBuyChecked] = useState(true)

  return (
    <div className="bg-background border-b sticky top-[100px] z-40">
      <div className="container py-4">
        <div className="flex flex-col gap-4">
          {/* Top Row: Back Button and Actions */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <Button
              variant="ghost"
              onClick={() => router.back()}
              className="flex items-center gap-2 p-0 h-auto hover:bg-transparent"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="text-lg">View property</span>
            </Button>

            <div className="flex items-center gap-4 flex-wrap">
              {/* Filter Button */}
              <Link href="/listings">
                <Button variant="outline" size="sm" className="gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
              </Link>

              {/* Speak to an Agent Button */}
              <Button variant="outline" size="sm" className="gap-2">
                <User className="h-4 w-4" />
                Speak to an Agent
              </Button>

              {/* Save Checkbox */}
              <div className="flex items-center gap-2">
                <Checkbox
                  id="save"
                  checked={saveChecked}
                  onChange={(e) => setSaveChecked(e.target.checked)}
                />
                <label htmlFor="save" className="text-sm cursor-pointer">
                  Save
                </label>
              </div>

              {/* Buy Checkbox */}
              <div className="flex items-center gap-2">
                <Checkbox
                  id="buy"
                  checked={buyChecked}
                  onChange={(e) => setBuyChecked(e.target.checked)}
                />
                <label htmlFor="buy" className="text-sm cursor-pointer">
                  Buy
                </label>
              </div>

              {/* See other listed properties Button */}
              <Link href="/listings">
                <Button variant="default" size="sm" className="gap-2">
                  <Eye className="h-4 w-4" />
                  See other listed properties
                </Button>
              </Link>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search streets, addresses, LGAs"
              className="pl-10 w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
