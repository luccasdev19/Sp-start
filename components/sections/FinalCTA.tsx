import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { whatsappMessages } from "@/lib/whatsapp";
import { FadeIn } from "@/components/shared/FadeIn";

export function FinalCTA() {
  return (
    <section className="relative bg-gradient-to-b from-transparent via-petrol/20 to-background px-6 py-24">
      <FadeIn>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-medium text-foreground sm:text-4xl">
            Fale com um especialista
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground-muted">
            Tire suas duvidas e descubra a solucao ideal para a infraestrutura
            da sua empresa.
          </p>
          <div className="mt-10 flex justify-center">
            <WhatsAppButton message={whatsappMessages.geral} />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
