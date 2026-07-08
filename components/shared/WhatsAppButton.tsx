import { FaWhatsapp } from "react-icons/fa";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
  variant?: "primary" | "ghost";
}

export function WhatsAppButton({
  message,
  label = "Falar no WhatsApp",
  variant = "primary",
}: WhatsAppButtonProps) {
  const href = buildWhatsAppLink(message);

  const baseStyles =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors";

  const variantStyles =
    variant === "primary"
      ? "bg-whatsapp text-black hover:bg-whatsapp/90"
      : "border border-border text-foreground hover:bg-surface-1";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles}`}
    >
      <FaWhatsapp size={18} aria-hidden="true" />
      {label}
    </a>
  );
}
