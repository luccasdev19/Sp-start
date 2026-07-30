import Link from "next/link";
import Image from "next/image";
import { Mail, Instagram, MessageCircle } from "lucide-react";

const navItems = [
  { label: "Quem somos", href: "/#quem-somos" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Atendimento", href: "/#atendimento" },
  { label: "Parcerias", href: "/#parcerias" },
];

const contactItems = [
  {
    label: "comercial@spstart.com",
    href: "mailto:comercial@spstart.com",
    icon: Mail,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5511992685241",
    icon: MessageCircle,
  },
  {
    label: "@spstart.tec",
    href: "https://www.instagram.com/spstart.tec/",
    icon: Instagram,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-1">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          <div>
            <Image
              src="/spstart-logo.png"
              alt="SP START Soluções em TI"
              width={160}
              height={58}
              className="h-12 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground-subtle">
              Infraestrutura de TI estável, segura e preparada para o crescimento do seunegócio.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground">Navegação</h4>
            <nav className="mt-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-foreground-muted transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-medium text-foreground">Contato</h4>
            <div className="mt-4 flex flex-col gap-3">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 text-sm text-foreground-muted transition-colors hover:text-foreground"
                >
                  <item.icon size={16} className="text-accent" aria-hidden="true" />
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-sm text-foreground-subtle">
            © {year} SP START Soluções em TI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
