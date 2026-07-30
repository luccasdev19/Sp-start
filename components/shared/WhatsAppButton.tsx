import { createElement } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
  variant?: "primary" | "ghost";
  href?: string;
}

export function WhatsAppButton({
  message,
  label = "Fale com um especialista",
  variant = "primary",
  href,
}: WhatsAppButtonProps) {
  const isAnchor = Boolean(href);
  const resolvedHref = href ?? buildWhatsAppLink(message);
  const baseStyles =
    "inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-medium transition-colors";
  const variantStyles =
    variant === "primary"
      ? "bg-whatsapp text-black hover:bg-whatsapp/90"
      : "border border-border text-foreground hover:bg-surface-1";
  const props: Record<string, string> = {
    href: resolvedHref,
    className: baseStyles + " " + variantStyles,
  };
  if (!isAnchor) {
    props.target = "_blank";
    props.rel = "noopener noreferrer";
  }
  return createElement(
    "a",
    props,
    createElement(FaWhatsapp, { size: 20, "aria-hidden": "true" }),
    label
  );
}
