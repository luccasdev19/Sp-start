const DEFAULT_MESSAGE =
  "Olá, vim pelo site e gostaria de saber mais sobre os serviços da SP START.";

/**
 * Monta a URL do wa.me com o número definido em NEXT_PUBLIC_WHATSAPP_NUMBER
 * e uma mensagem pre-definida, que pode variar por seção do site.
 *
 * @param message Mensagem customizada para a seção (opcional)
 */
export function buildWhatsAppLink(message: string = DEFAULT_MESSAGE): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

  if (!number) {
    // Em desenvolvimento, avisa no console caso a env var não esteja definida.
    console.warn(
      "NEXT_PUBLIC_WHATSAPP_NUMBER não está definida. Configure o arquivo .env.local."
    );
  }

  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${number ?? ""}?text=${encodedMessage}`;
}

// Mensagens pre-definidas por contexto, para reuso nos componentes.
export const whatsappMessages = {
  geral: DEFAULT_MESSAGE,
  monitoramento:
    "Olá, quero saber mais sobre o serviço de monitoramento 24/7 da SP START.",
} as const;
