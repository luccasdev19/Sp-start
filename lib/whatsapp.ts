const DEFAULT_MESSAGE =
  "Ola, vim pelo site e gostaria de saber mais sobre os servicos da SP START";

/**
 * Monta a URL do wa.me com o numero definido em NEXT_PUBLIC_WHATSAPP_NUMBER
 * e uma mensagem pre-definida, que pode variar por secao do site.
 *
 * @param message Mensagem customizada para a secao (opcional)
 */
export function buildWhatsAppLink(message: string = DEFAULT_MESSAGE): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  if (!number) {
    // Em desenvolvimento, avisa no console caso a env var nao esteja setada
    console.warn(
      "NEXT_PUBLIC_WHATSAPP_NUMBER nao esta definida. Configure o arquivo .env.local"
    );
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${number ?? ""}?text=${encodedMessage}`;
}

// Mensagens pre-definidas por contexto, para reuso nos componentes
export const whatsappMessages = {
  geral: DEFAULT_MESSAGE,
  monitoramento:
    "Ola, quero saber mais sobre o servico de monitoramento 24/7 da SP START",
  consultoria:
    "Ola, gostaria de agendar uma consultoria de TI com a SP START",
  suporte:
    "Ola, preciso de suporte tecnico e quero conhecer os planos da SP START",
} as const;
