"use client";

import { Search, MapPin, Home, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";

export function HeroSection() {
  const router = useRouter();

  const handleGetQuote = () => {
    router.push("/listings");
  };
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-primary/40 to-primary/30 z-10" />
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/realtor_banner.jpg')",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container w__frame py-16">
        <div className=" text-center space-y-8">
          <div className="flex items-center justify-between">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-left">
              List, rent or own a place ethically.
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl text-left">
              Buy a house, rent an apartment, list your property, sell your
              home, trusted real estate in Nigeria.
            </p>
          </div>

          {/* Search Form */}
          <div className="mt-12 bg-white rounded-lg shadow-xl p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row gap-4 items-end">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 flex-1 w-full">
                {/* Location */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Location
                  </label>
                  <Select defaultValue="sango-elewere">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sango-elewere">
                        Sango Elewere
                      </SelectItem>
                      <SelectItem value="lagos">Lagos</SelectItem>
                      <SelectItem value="abuja">Abuja</SelectItem>
                      <SelectItem value="port-harcourt">
                        Port Harcourt
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Type */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    Type
                  </label>
                  <Select defaultValue="semidetached-duplex">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="semidetached-duplex">
                        Semidetached duplex
                      </SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="bungalow">Bungalow</SelectItem>
                      <SelectItem value="mansion">Mansion</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    Price
                  </label>
                  <Select defaultValue="1.5-2m">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select price range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1.5-2m">
                        1,500,000 - 2,000,000
                      </SelectItem>
                      <SelectItem value="2-3m">
                        2,000,000 - 3,000,000
                      </SelectItem>
                      <SelectItem value="3-5m">
                        3,000,000 - 5,000,000
                      </SelectItem>
                      <SelectItem value="5m+">5,000,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button
                onClick={handleGetQuote}
                className="w-full sm:w-auto sm:px-8"
                size="lg"
              >
                Get quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
