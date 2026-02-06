import Link from "next/link";
import { notFound } from "next/navigation";
import { Heading, Text, Button } from "@/components/ui";

export default function WorkDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const num = Number(id);
  if (Number.isNaN(num) || num < 1) notFound();

  return (
    <div className="bg-paper">
      <section className="section-padding container-custom max-w-container-default">
        <Link
          href="/work"
          className="text-small text-ink-muted hover:text-ink transition-colors duration-fast inline-block mb-8"
        >
          ← Back to work
        </Link>
        <Text variant="caption" color="subtle" className="block mb-2">
          Project {id}
        </Text>
        <Heading level={1} className="mb-6">
          Project title {id}
        </Heading>
        <Text variant="body-lg" color="muted" className="mb-10 max-w-2xl" as="p">
          Placeholder for project detail. Content will come from Sanity later.
        </Text>
        <div className="aspect-video bg-paper-elevated border border-border rounded-lg flex items-center justify-center text-ink-subtle text-caption mb-12">
          Project image / media
        </div>
        <div className="prose max-w-none text-body text-ink space-y-4">
          <p>
            Project description and case study content will live here. You can add more sections, images, and blocks when you connect Sanity.
          </p>
        </div>
        <div className="mt-12">
          <Button href="/work" variant="secondary">
            View all work
          </Button>
        </div>
      </section>
    </div>
  );
}
