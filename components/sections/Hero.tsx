import Image from "next/image";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { stats } from "@/lib/constants";
import { StatCounter } from "@/components/shared/StatCounter";

export function Hero() {
  return (
    <section className="relative flex min-h-[90svh] flex-col overflow-hidden">
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/hero-monitoramento-mobile.png"
          alt="Equipe SP START em sala de monitoramento de TI"
          fill
          priority
          draggable={false}
          sizes="100vw"
          className="brand-photo select-none object-cover sm:hidden"
        />
        <Image
          src="/hero-monitoramento.png"
          alt="Equipe SP START em sala de monitoramento de TI"
          fill
          priority
          draggable={false}
          sizes="100vw"
          className="brand-photo hidden select-none object-cover object-[65%_top] sm:block sm:object-center sm:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-petrol/50 via-background/35 to-background/55" />
      </div>
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 py-16 text-center sm:py-20">
        <h1 className="text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-5xl">
          Gestão de TI inteligente para empresas que não podem parar.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground-muted sm:text-lg">
          Monitoramento contínuo, suporte humanizado e infraestrutura que acompanha o crescimento do seu negócio.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <WhatsAppButton label="Descubra como reduzir falhas" href="#contato" />
          <a
            href="#servicos"
            className="inline-flex items-center justify-center rounded-full border border-border px-8 py-4 text-base font-medium text-foreground transition-colors hover:bg-surface-1"
          >
            Conheça nossos serviços
          </a>
        </div>
        <div className="mt-10 grid w-full min-w-0 grid-cols-3 gap-2 sm:mt-16 sm:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex min-h-36 min-w-0 flex-col items-center justify-center gap-1 rounded-card border border-border bg-surface-1/90 px-1.5 py-4 sm:aspect-square sm:gap-3 sm:bg-surface-1/70 sm:p-6 sm:backdrop-blur-sm"
            >
              <stat.icon size={24} className="size-5 text-accent sm:size-6" aria-hidden="true" />
              <span className="w-full text-center text-lg font-medium tabular-nums text-foreground sm:text-3xl sm:proportional-nums">
                <StatCounter value={stat.value} prefix={stat.prefix} />
                {stat.suffix && (
                  <span className="ml-0.5 text-sm font-normal text-foreground-subtle sm:ml-1 sm:text-lg">
                    {stat.suffix}
                  </span>
                )}
              </span>
              <span className="max-w-full text-center text-[10px] leading-snug text-foreground-subtle sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
