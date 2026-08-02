import Image from "next/image";
import { WhatsAppButton } from "@/components/shared/WhatsAppButton";
import { whatsappMessages } from "@/lib/whatsapp";
import { FadeIn } from "@/components/shared/FadeIn";

export function FinalCTA() {
  return (
    <section id="contato" className="relative flex min-h-[280px] items-center overflow-hidden px-6 py-8 sm:min-h-[560px] sm:py-16">
      <Image
        src="/cta-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[32%_center] sm:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/45 to-background/60" />
      <FadeIn className="w-full">
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-medium text-foreground sm:text-4xl">
            Fale com um especialista.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-foreground-muted">
            Tire suas dúvidas e descubra a solução ideal para a infraestrutura da sua empresa.
          </p>
          <div className="mt-6 flex justify-center sm:mt-10">
            <WhatsAppButton message={whatsappMessages.geral} />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
