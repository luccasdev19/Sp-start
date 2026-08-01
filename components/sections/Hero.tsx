import Image from "next/image";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { stats } from "@/lib/constants";
import { StatCounter } from "@/components/shared/StatCounter";

export function Hero() {
  return (
    <section className="relative flex min-h-[90svh] flex-col overflow-hidden">
      <div className="absolute inset-x-0 top-0 z-0 h-[90svh] sm:inset-0 sm:h-auto">
        <Image
          src="/hero-noc.jpg"
          alt="Equipe SP START em sala de monitoramento de TI"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center sm:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-petrol/50 via-background/35 to-background sm:to-background/55" />
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
        <div className="mt-16 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex aspect-square flex-col items-center justify-center gap-3 rounded-card border border-border bg-surface-1/70 p-6 backdrop-blur-sm"
            >
              <stat.icon size={24} className="text-accent" aria-hidden="true" />
              <span className="text-2xl font-medium text-foreground sm:text-3xl">
                <StatCounter value={stat.value} prefix={stat.prefix} />
                {stat.suffix && (
                  <span className="ml-1 text-lg font-normal text-foreground-subtle">
                    {stat.suffix}
                  </span>
                )}
              </span>
              <span className="text-center text-sm text-foreground-subtle">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
