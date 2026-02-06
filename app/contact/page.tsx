import { Heading, Text, Button } from "@/components/ui";

export default function ContactPage() {
  return (
    <div className="bg-paper">
      <section className="section-padding container-custom max-w-container-narrow">
        <Text variant="caption" color="subtle" className="block mb-2">
          Contact
        </Text>
        <Heading level={1} className="mb-6">
          Work with me or say hello.
        </Heading>
        <Text variant="body-lg" color="muted" className="mb-10" as="p">
          Interested in working together or just want to chat? Reach out.
        </Text>
        <div className="space-y-6">
          <a
            href="mailto:hello@lukeregan.com"
            className="block font-display text-h3 text-ink hover:text-ink-muted transition-colors duration-fast"
          >
            hello@lukeregan.com
          </a>
          <p className="text-body text-ink-muted">
            Western Montana
          </p>
        </div>
        <div className="mt-10">
          <Button href="mailto:hello@lukeregan.com" variant="primary" size="lg">
            Send email
          </Button>
        </div>
      </section>
    </div>
  );
}
