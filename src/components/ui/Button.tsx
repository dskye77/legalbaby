import { ReactNode } from "react";
import cn from "clsx"; // optional helper for conditional class names

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  className,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-display tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 h-14 px-10 text-lg";

  const variants = {
    primary:
      "bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1",
    outline:
      "border-2 border-foreground/20 bg-transparent text-foreground font-medium hover:border-primary hover:text-primary hover:bg-primary/5",
  };

  return (
    <button className={cn(base, variants[variant], className)} onClick={onClick}>
      {children}
    </button>
  );
}
