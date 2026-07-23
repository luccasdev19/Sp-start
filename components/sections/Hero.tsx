import Image from "next/image";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { whatsappMessages } from "@/lib/whatsapp";
import { stats } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-noc.jpg"
          alt="Equipe SP START em sala de monitoramento de TI"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-petrol/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="text-4xl font-medium leading-tight text-foreground sm:text-6xl">
          Gestao de TI inteligente para empresas que nao podem parar
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted">
          Monitoramento continuo, suporte humanizado e infraestrutura que
          acompanha o crescimento do seu negocio.
        </p>

        <div className="mt-10">
          <WhatsAppButton message={whatsappMessages.geral} />
        </div>

        <div className="mt-16 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex aspect-square flex-col items-center justify-center gap-3 rounded-card border border-border bg-surface-1/70 p-6 backdrop-blur-sm"
            >
              <stat.icon size={24} className="text-accent" aria-hidden="true" />
              <span className="text-2xl font-semibold text-foreground sm:text-3xl">
                {stat.value}
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
