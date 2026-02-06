import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center font-body font-medium transition-all duration-normal ease-out-expo focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-ink text-paper hover:bg-accent-hover shadow-sm hover:shadow-md rounded-md",
  secondary:
    "bg-paper border border-border text-ink hover:border-border-strong hover:bg-paper-elevated rounded-md",
  ghost: "text-ink hover:bg-paper-elevated rounded-md",
  link: "text-ink underline-offset-4 hover:underline",
};

const sizes: Record<ButtonSize, string> = {
  sm: "text-small px-3 py-1.5 gap-2",
  md: "text-body px-5 py-2.5 gap-3",
  lg: "text-body-lg px-6 py-3 gap-4",
};

type Props = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  type = "button",
  disabled = false,
}: Props) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes} aria-disabled={disabled}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
