"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import Link from "next/link"

export function MarketInsightsSidebar() {
  // Mock chart data - in a real app, use a charting library like recharts
  const priceTrends = [
    { month: "Jan", value: 800000 },
    { month: "Feb", value: 650000 },
    { month: "Mar", value: 500000 },
    { month: "Apr", value: 450000 },
    { month: "May", value: 400000 },
    { month: "Jun", value: 350000 },
    { month: "Jul", value: 320000 },
    { month: "Aug", value: 280000 },
    { month: "Sep", value: 250000 },
  ]

  const maxValue = Math.max(...priceTrends.map((d) => d.value))
  const minValue = Math.min(...priceTrends.map((d) => d.value))

  return (
    <div className="space-y-6">
      {/* Compare Properties Button */}
      <Link href="/listings/compare" className="block">
        <Button
          size="lg"
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Compare properties
        </Button>
      </Link>

      {/* Price Trends Section */}
      <div className="bg-card border rounded-xl p-6 space-y-4">
        <div>
          <h3 className="font-semibold text-lg mb-1">
            Price trends from this area
          </h3>
          <p className="text-sm text-muted-foreground">
            In the last three months
          </p>
        </div>

        {/* Simple Chart */}
        <div className="relative h-48 w-full">
          <svg width="100%" height="100%" className="overflow-visible">
            <defs>
              <linearGradient id="priceGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#9333EA" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#9333EA" stopOpacity="0.05" />
              </linearGradient>
            </defs>

            {/* Area Path */}
            <path
              d={`M ${(0 / (priceTrends.length - 1)) * 100}% ${100 - ((priceTrends[0].value - minValue) / (maxValue - minValue)) * 80}% ${priceTrends
                .map(
                  (point, i) =>
                    `L ${(i / (priceTrends.length - 1)) * 100}% ${100 - ((point.value - minValue) / (maxValue - minValue)) * 80}%`
                )
                .join(" ")} L ${((priceTrends.length - 1) / (priceTrends.length - 1)) * 100}% 100% L 0% 100% Z`}
              fill="url(#priceGradient)"
            />

            {/* Line Path */}
            <path
              d={`M ${(0 / (priceTrends.length - 1)) * 100}% ${100 - ((priceTrends[0].value - minValue) / (maxValue - minValue)) * 80}% ${priceTrends
                .map(
                  (point, i) =>
                    `L ${(i / (priceTrends.length - 1)) * 100}% ${100 - ((point.value - minValue) / (maxValue - minValue)) * 80}%`
                )
                .join(" ")}`}
              fill="none"
              stroke="#9333EA"
              strokeWidth="2"
            />

            {/* Y-axis Labels */}
            <text
              x="5"
              y="10%"
              className="text-xs fill-muted-foreground"
              fontSize="10"
            >
              {maxValue.toLocaleString()}
            </text>
            <text
              x="5"
              y="90%"
              className="text-xs fill-muted-foreground"
              fontSize="10"
            >
              {minValue.toLocaleString()}
            </text>
          </svg>
        </div>
      </div>

      {/* Last Rented Section */}
      <div className="bg-card border rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold mb-1">Last rented</h3>
            <p className="text-2xl font-bold">250,000 NGN</p>
          </div>
          <div className="flex items-center gap-1 text-green-600">
            <ArrowUpRight className="h-5 w-5" />
            <span className="font-semibold">400%</span>
          </div>
        </div>
      </div>

      {/* Neighbourhood Data Section */}
      <div className="bg-card border rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold mb-1">Neighbourhood data</h3>
            <p className="text-lg font-semibold text-green-600">Strong</p>
          </div>
          <button className="text-accent hover:underline text-sm flex items-center gap-1">
            View
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Legal Compliance Section */}
      <div className="bg-card border rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-semibold mb-1">Legal Compliance</h3>
            <p className="text-lg font-semibold text-green-600">Strong</p>
          </div>
          <button className="text-accent hover:underline text-sm flex items-center gap-1">
            View
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
