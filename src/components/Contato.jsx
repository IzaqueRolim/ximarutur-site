import {
  INSTAGRAM_URL,
  INSTAGRAM_USER,
  WHATSAPP_EXIBIDO,
  linkWhatsapp,
} from '../data/contato.js'

export default function Contato({ mensagem }) {
  return (
    <section id="contato">
      <div className="wrap">
        <div className="contact">
          <div>
            <div className="eyebrow">Vamos planejar sua experiência?</div>
            <h2>Fale com a XimaruTur</h2>
            <p>
              Peça informações sobre valores, datas, disponibilidade e detalhes dos passeios. O
              atendimento é feito diretamente por mensagem.
            </p>
          </div>
          <div>
            <a
              className="btn"
              href={linkWhatsapp(mensagem)}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp ↗
            </a>
            <a className="btn outline" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              Instagram ↗
            </a>
            <p style={{ fontSize: '.72rem', color: '#dce6d8' }}>
              WhatsApp: {WHATSAPP_EXIBIDO} · Instagram: {INSTAGRAM_USER}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
