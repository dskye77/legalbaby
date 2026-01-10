import { ReactNode } from "react";
import cn from "clsx"; // optional, makes className merging easy

type BadgeProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "default";
  className?: string;
};

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  const base =
    "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium";

  const variants = {
    primary: "bg-primary/25 text-primary border border-primary",
    secondary: "bg-secondary text-secondary-foreground border border-secondary/20",
    default: "bg-muted text-muted-foreground border border-border",
  };

  return <span className={cn(base, variants[variant], className)}>{children}</span>;
}
