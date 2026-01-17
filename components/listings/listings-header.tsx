"use client";

import { MapPin, Home, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ListingsHeader() {
  return (
    <div className=" container bg-primary text-primary-foreground p-6 mt-6 rounded-md">
      <div className="container">
        <div className="flex items-center gap-4 flex-wrap">
          {/* Location Filter */}
          <div className="space-y-2">
            <label
              htmlFor="location"
              className="text-sm font-medium "
            >
              Location
            </label>
            <Select defaultValue="sango-elewure">
              <SelectTrigger
                id="location"
                className="w-[200px] bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <SelectValue placeholder="Location" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sango-elewure">Sango Elewure</SelectItem>
                <SelectItem value="bodija">Bodija</SelectItem>
                <SelectItem value="ui-area">UI Area</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Type Filter */}
          <div className="space-y-2">
            <label
              htmlFor="location"
              className="text-sm font-medium "
            >
              Type
            </label>
            <Select defaultValue="semidetached-duplex">
              <SelectTrigger className="w-[220px] bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20">
                <div className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  <SelectValue placeholder="Type" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="semidetached-duplex">
                  Semidetached duplex
                </SelectItem>
                <SelectItem value="detached-house">Detached house</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Price Filter */}
          <div className="space-y-2">
            <label
              htmlFor="location"
              className="text-sm font-medium "
            >
              Price
            </label>
            <Select defaultValue="price-range">
              <SelectTrigger className="w-[240px] bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  <SelectValue placeholder="Price" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-range">
                  ₦ 1,500,000 - 2,000,000
                </SelectItem>
                <SelectItem value="price-range-2">
                  ₦ 2,000,000 - 3,000,000
                </SelectItem>
                <SelectItem value="price-range-3">₦ 3,000,000+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Get Quote Button */}
          <Button
            variant="secondary"
            className="bg-white"
          >
            Get Quote
          </Button>
        </div>
      </div>
    </div>
  );
}
