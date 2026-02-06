import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="border-t border-border bg-paper section-padding"
      role="contentinfo"
    >
      <div className="container-custom">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-display text-h3 text-ink mb-4">
              Work with me or say hello.
            </h2>
            <div className="flex flex-wrap gap-6 text-body text-ink-muted">
              <Link
                href="/contact"
                className="hover:text-ink transition-colors duration-fast"
              >
                Start a project
              </Link>
              <Link
                href="mailto:hello@lukeregan.com"
                className="hover:text-ink transition-colors duration-fast"
              >
                Say hello
              </Link>
            </div>
          </div>
          <div className="text-small text-ink-subtle space-y-1">
            <p>
              <a
                href="mailto:hello@lukeregan.com"
                className="hover:text-ink transition-colors duration-fast"
              >
                hello@lukeregan.com
              </a>
            </p>
            <p>Western Montana</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border text-caption text-ink-subtle">
          © {new Date().getFullYear()} Luke Regan
        </div>
      </div>
    </footer>
  );
}
