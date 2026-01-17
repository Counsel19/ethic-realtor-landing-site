import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Play, Apple } from "lucide-react";

export function MobileAppSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold lg:leading-16 text-foreground">
              Access options from the comfort of your mobile device
            </h2>
            <p className="text-lg text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="default" className="w-full sm:w-auto">
                <Play className="mr-2 h-5 w-5" />
                Get it on playstore
              </Button>
              <Button size="lg" variant="default" className="w-full sm:w-auto">
                <Apple className="mr-2 h-5 w-5" />
                Get it on app store
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative  h-[342px]">
            <div className="relative aspect-3/4 w-full h-full">
              <Image
                src="/images/mobile-phone-with-apps.png"
                alt="Mobile app"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
