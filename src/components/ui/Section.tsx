import { ReactNode } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className }: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9, y: 40 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={clsx(
        "px-4 sm:px-6 md:px-20 lg:px-32 py-10 sm:py-16 md:py-20",
        className
      )}
    >
      {children}
    </motion.section>
  );
}
