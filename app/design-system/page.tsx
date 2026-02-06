"use client";

import { Button, Text, Heading, Card, CardMedia, CardContent } from "@/components/ui";

/**
 * Design system showcase — hidden from main nav.
 * Visit /design-system to preview tokens, type scale, components, and spacing.
 */
export default function DesignSystemPage() {
  return (
    <div className="bg-paper">
      <div className="container-custom section-padding">
        <div className="mb-section">
          <Text variant="caption" color="subtle" className="block mb-2">
            Design system
          </Text>
          <Heading level={1}>Design system</Heading>
          <Text variant="body-lg" color="muted" className="mt-4 max-w-container-narrow">
            Tokens, type scale, components, and spacing. This page is not linked in the main navigation.
          </Text>
        </div>

        {/* ——— Color tokens ——— */}
        <section className="block-padding border-t border-border">
          <Heading level={2} className="mb-6">
            Color
          </Heading>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: "Ink", token: "var(--color-ink)", bg: "bg-ink", text: "text-paper" },
              { name: "Ink muted", token: "var(--color-ink-muted)", bg: "bg-ink-muted", text: "text-paper" },
              { name: "Ink subtle", token: "var(--color-ink-subtle)", bg: "bg-ink-subtle", text: "text-paper" },
              { name: "Paper", token: "var(--color-paper)", bg: "bg-paper", text: "text-ink", border: true },
              { name: "Paper elevated", token: "var(--color-paper-elevated)", bg: "bg-paper-elevated", text: "text-ink", border: true },
              { name: "Border", token: "var(--color-border)", bg: "bg-border", text: "text-ink" },
            ].map(({ name, token, bg, text, border }) => (
              <div key={name} className="space-y-2">
                <div
                  className={`h-20 rounded-lg ${bg} ${text} flex items-center justify-center text-small ${border ? "border border-border" : ""}`}
                />
                <p className="font-mono text-caption text-ink-subtle">{name}</p>
                <p className="font-mono text-caption text-ink-muted break-all">{token}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ——— Typography ——— */}
        <section className="block-padding border-t border-border">
          <Heading level={2} className="mb-6">
            Typography
          </Heading>
          <div className="space-y-8 max-w-container-narrow">
            <div>
              <Text variant="hero">Hero — We design brands people love.</Text>
              <p className="font-mono text-caption text-ink-subtle mt-1">hero · --text-hero · --font-display</p>
            </div>
            <div>
              <Text variant="h1">Heading 1</Text>
              <p className="font-mono text-caption text-ink-subtle mt-1">h1 · --text-h1</p>
            </div>
            <div>
              <Text variant="h2">Heading 2</Text>
              <p className="font-mono text-caption text-ink-subtle mt-1">h2 · --text-h2</p>
            </div>
            <div>
              <Text variant="h3">Heading 3</Text>
              <p className="font-mono text-caption text-ink-subtle mt-1">h3 · --text-h3</p>
            </div>
            <div>
              <Text variant="h4">Heading 4</Text>
              <p className="font-mono text-caption text-ink-subtle mt-1">h4 · --text-h4</p>
            </div>
            <div>
              <Text variant="body-lg">
                Body large — Preparing the ground – setting out a plan that's purposeful and effective.
              </Text>
              <p className="font-mono text-caption text-ink-subtle mt-1">body-lg · --text-body-lg</p>
            </div>
            <div>
              <Text variant="body">
                Body — Strategy, identity, and digital – crafted to connect. We're a full service agency.
              </Text>
              <p className="font-mono text-caption text-ink-subtle mt-1">body · --text-body</p>
            </div>
            <div>
              <Text variant="small">Small — Caption or secondary line.</Text>
              <p className="font-mono text-caption text-ink-subtle mt-1">small · --text-small</p>
            </div>
            <div>
              <Text variant="caption">Caption — Label or metadata.</Text>
              <p className="font-mono text-caption text-ink-subtle mt-1">caption · --text-caption</p>
            </div>
          </div>
          <div className="mt-8 p-6 bg-paper-elevated rounded-lg border border-border">
            <p className="font-mono text-small text-ink-muted">
              Fonts: --font-display (Instrument Serif), --font-body (DM Sans), --font-mono (IBM Plex Mono)
            </p>
          </div>
        </section>

        {/* ——— Spacing ——— */}
        <section className="block-padding border-t border-border">
          <Heading level={2} className="mb-6">
            Spacing
          </Heading>
          <div className="space-y-4">
            {[
              { name: "space-2", var: "--space-2", size: "0.5rem" },
              { name: "space-4", var: "--space-4", size: "1rem" },
              { name: "space-6", var: "--space-6", size: "1.5rem" },
              { name: "space-8", var: "--space-8", size: "2rem" },
              { name: "space-12", var: "--space-12", size: "3rem" },
              { name: "section-gap", var: "--section-gap", size: "clamp(4rem, 10vw, 8rem)" },
              { name: "block-gap", var: "--block-gap", size: "clamp(2rem, 5vw, 4rem)" },
              { name: "gutter", var: "--gutter", size: "clamp(1.5rem, 5vw, 2.5rem)" },
            ].map(({ name, var: v, size }) => (
              <div key={name} className="flex items-center gap-6">
                <div
                  className="h-8 bg-ink rounded-sm shrink-0"
                  style={{ width: "var(" + v + ")" }}
                />
                <div>
                  <p className="font-mono text-small text-ink">{name}</p>
                  <p className="font-mono text-caption text-ink-subtle">{size}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ——— Buttons ——— */}
        <section className="block-padding border-t border-border">
          <Heading level={2} className="mb-6">
            Buttons
          </Heading>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="primary" size="md">
              Primary
            </Button>
            <Button variant="secondary" size="md">
              Secondary
            </Button>
            <Button variant="ghost" size="md">
              Ghost
            </Button>
            <Button variant="link" size="md">
              Link style
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 items-center">
            <Button variant="primary" size="sm">
              Small
            </Button>
            <Button variant="primary" size="lg">
              Large
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 items-center">
            <Button variant="primary" href="/contact">
              As link (Contact)
            </Button>
          </div>
        </section>

        {/* ——— Cards ——— */}
        <section className="block-padding border-t border-border">
          <Heading level={2} className="mb-6">
            Cards
          </Heading>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card href="/work">
              <CardMedia>
                <div className="w-full h-full flex items-center justify-center text-ink-subtle text-caption">
                  Image
                </div>
              </CardMedia>
              <CardContent>
                <p className="text-caption text-ink-subtle mb-1">Identity · Digital</p>
                <p className="font-display text-h4 text-ink">Project title</p>
                <p className="text-small text-ink-muted mt-1">Short description.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p className="font-display text-h4 text-ink">Card without link</p>
                <p className="text-body text-ink-muted mt-2">Content only.</p>
              </CardContent>
            </Card>
            <Card href="/work">
              <CardMedia>
                <div className="w-full h-full flex items-center justify-center text-ink-subtle text-caption">
                  Image
                </div>
              </CardMedia>
              <CardContent>
                <p className="text-caption text-ink-subtle mb-1">Placemaking</p>
                <p className="font-display text-h4 text-ink">Another project</p>
                <p className="text-small text-ink-muted mt-1">Turning spaces into places.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ——— Motion ——— */}
        <section className="block-padding border-t border-border">
          <Heading level={2} className="mb-6">
            Motion
          </Heading>
          <div className="font-mono text-small text-ink-muted space-y-2">
            <p>--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1)</p>
            <p>--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1)</p>
            <p>--duration-fast: 150ms · --duration-normal: 280ms · --duration-slow: 400ms</p>
          </div>
        </section>

        <div className="pt-section border-t border-border">
          <Text variant="small" color="subtle">
            Design system · lukeregan.com · Not linked in nav
          </Text>
        </div>
      </div>
    </div>
  );
}
