import Link from "next/link";
import { Text, Heading, Button } from "@/components/ui";

export default function HomePage() {
  return (
    <div className="bg-paper">
      {/* Hero — Smiling Wolf style */}
      <section className="section-padding container-custom">
        <Heading level={1} className="max-w-3xl">
          I'm Luke Regan — art director and multidisciplinary graphic designer.
        </Heading>
        <Text
          variant="body-lg"
          color="muted"
          className="mt-6 max-w-2xl"
          as="p"
        >
          I design brands, places, and products that people love. Based in western Montana. Currently accepting freelance and full-time opportunities.
        </Text>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/contact" variant="primary" size="lg">
            Get in touch
          </Button>
          <Button href="/work" variant="secondary" size="lg">
            View work
          </Button>
        </div>
      </section>

      {/* Featured work placeholder */}
      <section className="section-padding border-t border-border">
        <div className="container-custom">
          <Text variant="caption" color="subtle" className="block mb-2">
            Featured
          </Text>
          <Heading level={2} className="mb-8">
            Selected work
          </Heading>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Link
                key={i}
                href="/work"
                className="group block"
              >
                <div className="aspect-[4/3] bg-paper-elevated border border-border rounded-lg mb-4 flex items-center justify-center text-ink-subtle text-caption group-hover:border-border-strong transition-colors duration-normal">
                  Project {i}
                </div>
                <p className="font-display text-h4 text-ink group-hover:text-ink-muted transition-colors">
                  Project title {i}
                </p>
                <p className="text-small text-ink-muted mt-1">
                  Short description.
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/work" variant="secondary">
              View all work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
