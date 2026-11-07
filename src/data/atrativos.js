import maroaga from '../assets/passeios/caverna-refugio-do-maroaga.jpg'
import judeia from '../assets/passeios/gruta-da-judeia.jpg'
import ypi from '../assets/passeios/salto-do-ypi.jpg'
import cristalina from '../assets/passeios/lagoa-cristalina.jpg'
import rioVermelho from '../assets/passeios/rio-vermelho.jpg'
import natal from '../assets/passeios/cachoeira-natal.jpg'
import sussuarana from '../assets/passeios/cachoeira-da-sussuarana.jpg'
import azulPark from '../assets/passeios/lagoa-azul-park.jpg'
import azulMaranhao from '../assets/passeios/lagoa-azul-do-maranhao.jpg'
import asframa from '../assets/passeios/cachoeira-asframa.jpg'
import urubui from '../assets/passeios/corredeira-do-urubui.jpg'
import mutum from '../assets/passeios/cachoeira-do-mutum.jpg'
import jacuzzis from '../assets/passeios/jacuzzis-do-mutum.jpg'
import neblina from '../assets/passeios/cachoeira-da-neblina.jpg'
import pedraFurada from '../assets/passeios/cachoeira-pedra-furada.jpg'
import iracema from '../assets/passeios/cachoeira-de-iracema.jpg'

// Para adicionar/trocar uma foto: importe o arquivo acima e preencha `imagem`.
// `posicao` ajusta o enquadramento do recorte (object-position) em fotos verticais.
export const atrativos = [
  { nome: 'Caverna Refúgio do Maroaga', imagem: maroaga, posicao: 'center 60%' },
  { nome: 'Gruta da Judeia', imagem: judeia, posicao: 'center 55%' },
  { nome: 'Salto do Ypi', imagem: ypi, posicao: 'center 60%' },
  { nome: 'Lagoa Cristalina', imagem: cristalina },
  { nome: 'Rio Vermelho', imagem: rioVermelho, posicao: 'center 70%' },
  { nome: 'Cachoeira Natal', imagem: natal, posicao: 'center 55%' },
  { nome: 'Cachoeira da Sussuarana', imagem: sussuarana, posicao: 'center 55%' },
  { nome: 'Lagoa Azul Park', imagem: azulPark },
  {
    nome: 'Lagoa Azul do Maranhão',
    imagem: azulMaranhao,
    alt: 'Lagoa Azul do Maranhão — foto enviada pela agência',
    nota: 'Foto enviada pela XimaruTur',
  },
  { nome: 'Cachoeira Asframa', imagem: asframa },
  { nome: 'Corredeira do Urubuí', imagem: urubui, posicao: 'center 45%' },
  { nome: 'Cachoeira do Mutum', imagem: mutum },
  { nome: 'Jacuzzis do Mutum', imagem: jacuzzis, posicao: 'center 30%' },
  { nome: 'Cachoeira da Neblina', imagem: neblina, posicao: 'center 40%' },
  { nome: 'Cachoeira Pedra Furada', imagem: pedraFurada },
  { nome: 'Cachoeira de Iracema', imagem: iracema, posicao: 'center 45%' },
]
