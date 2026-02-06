import { Heading, Text } from "@/components/ui";

export default function LogosPage() {
  return (
    <div className="bg-paper">
      <section className="section-padding container-custom">
        <Text variant="caption" color="subtle" className="block mb-2">
          Logos
        </Text>
        <Heading level={1} className="mb-6">
          Logo work
        </Heading>
        <Text variant="body-lg" color="muted" className="max-w-2xl mb-12" as="p">
          A collection of brand marks and logo projects. Content coming soon.
        </Text>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="aspect-square bg-paper-elevated border border-border rounded-lg flex items-center justify-center text-ink-subtle text-caption"
            >
              Logo {i}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
