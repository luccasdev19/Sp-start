import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Quem somos", href: "/#quem-somos" },
  { label: "Servicos", href: "/#servicos" },
  { label: "Atendimento", href: "/#atendimento" },
  { label: "Parcerias", href: "/#parcerias" },
  { label: "Blog", href: "/blog" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center">
         <Image
          src="/spstart-logo.png"
          alt="SP START Solucoes em TI"
          width={180}
          height={65}
          priority
          className="h-14 w-auto sm:h-16"
        />
        </Link>

        <nav className="hidden gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* TODO: menu mobile (drawer) ainda nao implementado */}
      </div>
    </header>
  );
}