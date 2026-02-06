import { Heading, Text } from "@/components/ui";

export default function AboutPage() {
  return (
    <div className="bg-paper">
      <section className="section-padding container-custom max-w-container-narrow">
        <Text variant="caption" color="subtle" className="block mb-2">
          About
        </Text>
        <Heading level={1} className="mb-6">
          About me
        </Heading>
        <Text variant="body-lg" color="muted" className="mb-8" as="p">
          Art director and multidisciplinary graphic designer based in western Montana. I blend strategic insight with creative craft — brand identity, digital design, placemaking, and print.
        </Text>
        <div className="prose prose-ink-muted space-y-4 text-body text-ink">
          <p>
            Over the years I've worked on brand transformation, identity, and digital projects. I'm currently accepting freelance and full-time opportunities.
          </p>
          <p>
            Get in touch at{" "}
            <a href="mailto:hello@lukeregan.com" className="text-ink underline underline-offset-4 hover:text-ink-muted transition-colors">
              hello@lukeregan.com
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
