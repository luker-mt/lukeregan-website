import { type ReactNode } from "react";

type TextVariant =
  | "hero"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body-lg"
  | "body"
  | "small"
  | "caption";
type TextColor = "ink" | "muted" | "subtle";
type TextElement = "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4";

const variantClasses: Record<TextVariant, string> = {
  hero: "font-display text-hero tracking-tight",
  h1: "font-display text-h1 tracking-tight",
  h2: "font-display text-h2 tracking-tight",
  h3: "font-display text-h3",
  h4: "font-display text-h4",
  "body-lg": "text-body-lg",
  body: "text-body",
  small: "text-small",
  caption: "text-caption",
};

const colorModifiers: Record<TextColor, string> = {
  ink: "text-ink",
  muted: "text-ink-muted",
  subtle: "text-ink-subtle",
};

type Props = {
  children: ReactNode;
  as?: TextElement;
  variant?: TextVariant;
  color?: TextColor;
  className?: string;
};

export function Text({
  children,
  as: Component = "p",
  variant = "body",
  color = "ink",
  className = "",
}: Props) {
  const classes = `${variantClasses[variant]} ${colorModifiers[color]} ${className}`.trim();
  return <Component className={classes}>{children}</Component>;
}
