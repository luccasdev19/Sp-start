import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { whatsappMessages } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-4xl flex-col items-start justify-center px-6 py-24">
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
    </section>
  );
}
