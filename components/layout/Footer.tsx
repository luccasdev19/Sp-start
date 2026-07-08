import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">SP START</p>
            <p className="mt-2 max-w-xs text-sm text-foreground-subtle">
              Solucoes em TI, gestao de infraestrutura e suporte especializado.
            </p>
          </div>

          <nav className="flex flex-col gap-2 text-sm text-foreground-subtle">
            <Link href="/#quem-somos" className="hover:text-foreground">
              Quem somos
            </Link>
            <Link href="/servicos" className="hover:text-foreground">
              Servicos
            </Link>
            <Link href="/blog" className="hover:text-foreground">
              Blog
            </Link>
          </nav>
        </div>

        <p className="mt-12 text-xs text-foreground-subtle">
          {year} SP START Solucoes em TI. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
