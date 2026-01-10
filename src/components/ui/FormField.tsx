"use client";

import { InputHTMLAttributes, ReactNode } from "react";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  required?: boolean;
  hint?: ReactNode;
}

export default function FormField({
  label,
  id,
  required,
  hint,
  ...props
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="text-sm font-medium text-foreground"
      >
        {label}
        {required && <span className="text-primary ml-1">*</span>}
        {hint && (
          <span className="text-muted-foreground text-xs ml-1">
            {hint}
          </span>
        )}
      </label>

      <input
        id={id}
        required={required}
        className="flex h-10 w-full rounded-md border px-3 py-2 text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 bg-muted border-border"
        {...props}
      />
    </div>
  );
}
