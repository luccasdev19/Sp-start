import { ButtonHTMLAttributes, forwardRef } from "react";
import { clsx } from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
}

// Placeholder simples ate a instalacao completa do shadcn/ui via CLI
// (npx shadcn@latest add button), que vai substituir este arquivo.
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary: "bg-foreground text-background hover:bg-foreground/90",
      outline: "border border-border text-foreground hover:bg-surface-1",
      ghost: "text-foreground hover:bg-surface-1",
    };

    return (
      <button
        ref={ref}
        className={clsx(base, variants[variant], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
