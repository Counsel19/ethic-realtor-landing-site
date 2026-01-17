"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Logo from "../atoms/Logo";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-primary text-primary-foreground">
      <div className="container mx-auto">
        <div className="flex h-[100px] items-center justify-between">
          <Logo />

          <div className="bg-[#FFFFFF33] p-2 rounded-lg flex gap-4 items-center">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6  justify-center">
              <Link
                href="/"
                className={cn(
                  "px-4 py-2 rounded-full font-medium text-sm transition-colors",
                  isActive("/")
                    ? "bg-white text-primary"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                )}
              >
                Home
              </Link>
              <Link
                href="/listings"
                className={cn(
                  "px-4 py-2 rounded-full font-medium text-sm transition-colors",
                  isActive("/listings")
                    ? "bg-white text-primary"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                )}
              >
                Listings
              </Link>
              <Link
                href="/become-an-agent"
                className={cn(
                  "px-4 py-2 rounded-full font-medium text-sm transition-colors",
                  isActive("/become-an-agent")
                    ? "bg-white text-primary"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                )}
              >
                Become an agent
              </Link>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex items-center min-w-[300px] gap-4 ml-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-foreground/60" />
                <input
                  type="text"
                  placeholder="Search streets, addresses, LGAs"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border bg-[#FFFFFF33] text-white text-sm focus:ring-ring-none focus:ring-offset-2"
                />
              </div>
            </div>
          </div>

          {/* Auth Links - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/faq"
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-primary-foreground/20 py-4 space-y-4">
            <Link
              href="/"
              className={cn(
                "block px-4 py-2 rounded-lg font-medium transition-colors",
                isActive("/")
                  ? "bg-white text-primary"
                  : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/listings"
              className={cn(
                "block px-4 py-2 rounded-lg font-medium transition-colors",
                isActive("/listings")
                  ? "bg-white text-primary"
                  : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Listings
            </Link>
            <Link
              href="/become-an-agent"
              className={cn(
                "block px-4 py-2 rounded-lg font-medium transition-colors",
                isActive("/become-an-agent")
                  ? "bg-white text-primary"
                  : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Become an agent
            </Link>
            <div className="px-4 pt-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-foreground/60" />
                <input
                  type="text"
                  placeholder="Search streets, addresses, LGAs"
                  className="w-full pl-10 pr-4 py-2 rounded-lg border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                />
              </div>
            </div>
            <div className="px-4">
              <Link
                href="/login"
                className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Log in/Sign up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
