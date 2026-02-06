"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { VisuallyHidden } from "@/components/ui/VisuallyHidden";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/logos", label: "Logos" },
] as const;

export function Header() {
  const pathname = usePathname();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-nav bg-paper/95 backdrop-blur-sm border-b border-border"
      role="banner"
    >
      <div className="container-custom h-full flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-h4 text-ink hover:text-ink-muted transition-colors duration-fast"
          aria-label="Luke Regan Design — Home"
        >
          Luke Regan
        </Link>

        <nav aria-label="Main navigation" className="flex items-center gap-8">
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`text-small font-medium tracking-wide transition-colors duration-fast ${
                  isActive ? "text-ink" : "text-ink-muted hover:text-ink"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
