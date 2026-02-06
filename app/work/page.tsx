import { Heading, Text, Card, CardMedia, CardContent } from "@/components/ui";

export default function WorkPage() {
  const projects = [
    { title: "Project one", tags: "Identity · Digital", description: "Short description." },
    { title: "Project two", tags: "Placemaking · Illustration", description: "Short description." },
    { title: "Project three", tags: "Film · Motion", description: "Short description." },
  ];

  return (
    <div className="bg-paper">
      <section className="section-padding container-custom">
        <Text variant="caption" color="subtle" className="block mb-2">
          Work
        </Text>
        <Heading level={1} className="mb-4">
          Selected projects
        </Heading>
        <Text variant="body-lg" color="muted" className="max-w-2xl mb-12">
          A selection of brand, digital, and placemaking work. More to come.
        </Text>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Card key={i} href={`/work/${i + 1}`}>
              <CardMedia>
                <div className="w-full h-full flex items-center justify-center text-ink-subtle text-caption">
                  Image
                </div>
              </CardMedia>
              <CardContent>
                <p className="text-caption text-ink-subtle mb-1">{p.tags}</p>
                <p className="font-display text-h4 text-ink">{p.title}</p>
                <p className="text-small text-ink-muted mt-1">{p.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
