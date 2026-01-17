import Link from "next/link";
import { Twitter, Instagram, Youtube, Linkedin } from "lucide-react";
import Logo from "../atoms/Logo";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-primary-foreground/80">
              Ethical real estate service provider in Nigeria.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-semibold text-sm">Navigation</h3>
              <ul className="space-y-6 text-sm ">
                <li>
                  <Link
                    href="/"
                    className="hover:opacity-80 transition-opacity"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/listings"
                    className="hover:opacity-80 transition-opacity"
                  >
                    Listings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/properties"
                    className="hover:opacity-80 transition-opacity"
                  >
                    Properties
                  </Link>
                </li>
                <li>
                  <Link
                    href="/agents"
                    className="hover:opacity-80 transition-opacity"
                  >
                    Agents
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="font-semibold text-sm">Legal</h3>
              <ul className="space-y-6 text-sm">
                <li>
                  <Link
                    href="/privacy"
                    className="hover:opacity-80 transition-opacity"
                  >
                    Privacy Policies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-and-condition"
                    className="hover:opacity-80 transition-opacity"
                  >
                    Terms and Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:opacity-80 transition-opacity"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faqs"
                    className="hover:opacity-80 transition-opacity"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20">
          <p className="text-sm text-center text-primary-foreground/80">
            © Copyright {new Date().getFullYear()} Ethic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
