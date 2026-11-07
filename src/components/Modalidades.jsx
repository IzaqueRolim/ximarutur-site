import { modalidades } from '../data/modalidades.js'

export default function Modalidades() {
  return (
    <section id="modalidades">
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="kicker">Escolha como viajar</div>
            <h2>Modalidades de passeio</h2>
          </div>
          <p>
            Três maneiras de viver Presidente Figueiredo. Consulte a equipe para saber quais opções
            estão disponíveis em cada atrativo.
          </p>
        </div>
        <div className="modes">
          {modalidades.map((m) => (
            <article className="mode" key={m.titulo}>
              <div className="num">{m.num}</div>
              <h3>{m.titulo}</h3>
              <p>{m.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
