import Link from "next/link";
import { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
};

const variants = {
  primary: "button-primary",
  secondary: "button-secondary",
  ghost: "button-ghost"
};

export function ButtonLink({
  href,
  variant = "primary",
  children,
  className = "",
  target,
  rel
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`${variants[variant]} ${className}`.trim()}
      target={target}
      rel={rel}
    >
      {children}
    </Link>
  );
}
