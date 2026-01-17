"use client"

import { ArrowUpRight } from "lucide-react"

interface Property {
  id: string
  averagePrice: string
  priceChange: string
  facilities: string
  legalCompliance: "Strong" | "Weak"
  neighbourhoodData: "Strong" | "Weak"
}

interface ComparisonTableProps {
  properties: Property[]
}

export function ComparisonTable({ properties }: ComparisonTableProps) {
  return (
    <div className="bg-card border rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="text-left p-4 font-semibold">Data</th>
              {properties.map((_, index) => (
                <th key={index} className="text-left p-4 font-semibold">
                  Property {index + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Average Price Row */}
            <tr className="border-b">
              <td className="p-4 font-medium">Average price</td>
              {properties.map((property, index) => (
                <td key={index} className="p-4">
                  <div className="flex items-center gap-2">
                    <span>{property.averagePrice}</span>
                    <div className="flex items-center gap-1 text-green-600">
                      <ArrowUpRight className="h-4 w-4" />
                      <span className="text-sm font-semibold">
                        {property.priceChange}
                      </span>
                    </div>
                  </div>
                </td>
              ))}
            </tr>

            {/* Facilities Row */}
            <tr className="border-b">
              <td className="p-4 font-medium">Facilities</td>
              {properties.map((property, index) => (
                <td key={index} className="p-4">
                  {property.facilities}
                </td>
              ))}
            </tr>

            {/* Legal Compliance Row */}
            <tr className="border-b">
              <td className="p-4 font-medium">Legal compliance</td>
              {properties.map((property, index) => (
                <td key={index} className="p-4">
                  <span
                    className={`font-semibold ${
                      property.legalCompliance === "Strong"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {property.legalCompliance}
                  </span>
                </td>
              ))}
            </tr>

            {/* Neighbourhood Data Row */}
            <tr>
              <td className="p-4 font-medium">Neighbourhood data</td>
              {properties.map((property, index) => (
                <td key={index} className="p-4">
                  <span
                    className={`font-semibold ${
                      property.neighbourhoodData === "Strong"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {property.neighbourhoodData}
                  </span>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
