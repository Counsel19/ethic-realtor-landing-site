import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AgentCTASection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Are you an agent or a property owner?
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-muted-foreground text-lg">
              List a property or register as an agent. Connect with potential
              homeowners and help them find a place.
            </p>
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/become-an-agent">Start here</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

