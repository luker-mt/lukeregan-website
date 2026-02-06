import Link from "next/link";
import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
  className?: string;
};

export function Card({ children, href, className = "" }: Props) {
  const base =
    "block rounded-lg border border-border bg-paper-elevated shadow-sm transition-all duration-normal ease-out-expo hover:shadow-md hover:border-border-strong overflow-hidden";

  if (href) {
    return (
      <Link href={href} className={`${base} ${className}`.trim()}>
        {children}
      </Link>
    );
  }

  return <div className={`${base} ${className}`.trim()}>{children}</div>;
}

export function CardMedia({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`aspect-[4/3] bg-paper overflow-hidden ${className}`.trim()}>
      {children}
    </div>
  );
}

export function CardContent({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`p-6 ${className}`.trim()}>
      {children}
    </div>
  );
}
