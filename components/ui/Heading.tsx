import { type ReactNode } from "react";

type Level = 1 | 2 | 3 | 4;

const levelClasses: Record<Level, string> = {
  1: "font-display text-h1 tracking-tight text-ink",
  2: "font-display text-h2 tracking-tight text-ink",
  3: "font-display text-h3 text-ink",
  4: "font-display text-h4 text-ink",
};

type Props = {
  children: ReactNode;
  level: Level;
  as?: "h1" | "h2" | "h3" | "h4";
  className?: string;
};

export function Heading({
  children,
  level,
  as,
  className = "",
}: Props) {
  const Tag = as ?? (`h${level}` as "h1" | "h2" | "h3" | "h4");
  const classes = `${levelClasses[level]} ${className}`.trim();
  return <Tag className={classes}>{children}</Tag>;
}
