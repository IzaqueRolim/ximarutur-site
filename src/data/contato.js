export const WHATSAPP_NUMERO = '5592994038463'
export const WHATSAPP_EXIBIDO = '(92) 99403-8463'
export const INSTAGRAM_URL = 'https://www.instagram.com/ximarutur/'
export const INSTAGRAM_USER = '@XimaruTur'

export const MENSAGEM_PADRAO = 'Olá! Gostaria de consultar os passeios da XimaruTur.'

export const mensagemParaPasseio = (nome) =>
  `Olá! Gostaria de consultar valores e disponibilidade para ${nome}.`

export const linkWhatsapp = (mensagem) =>
  `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`
