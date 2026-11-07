import PlaceCard from './PlaceCard.jsx'
import { atrativos } from '../data/atrativos.js'

export default function Atrativos({ onConsultar }) {
  const faltamFotos = atrativos.some((a) => !a.imagem)

  return (
    <section id="atrativos">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="kicker">Natureza para descobrir</div>
            <h2>Nossos atrativos</h2>
          </div>
          <p>
            Escolha o lugar que deseja conhecer. Para valores, datas e disponibilidade, entre em
            contato diretamente com a agência.
          </p>
        </div>
        <div className="grid">
          {atrativos.map((a) => (
            <PlaceCard key={a.nome} atrativo={a} onConsultar={onConsultar} />
          ))}
        </div>
        {faltamFotos && (
          <p className="notice">
            As imagens dos demais atrativos ainda precisam ser enviadas ou aprovadas pela agência.
            Os espaços ilustrativos serão substituídos por fotos reais antes da publicação
            definitiva.
          </p>
        )}
      </div>
    </section>
  )
}
