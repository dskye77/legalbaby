import { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className }: SectionProps) {
  return (
    <section
      className={clsx(
        "px-4 sm:px-6 md:px-20 lg:px-32 py-10 sm:py-16 md:py-20",
        className
      )}
    >
      {children}
    </section>
  );
}
