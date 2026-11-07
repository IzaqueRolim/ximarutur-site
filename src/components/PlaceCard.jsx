export default function PlaceCard({ atrativo, onConsultar }) {
  const { nome, imagem, alt, posicao, nota } = atrativo

  return (
    <article className="place-card">
      {imagem ? (
        <img
          src={imagem}
          alt={alt ?? nome}
          loading="lazy"
          decoding="async"
          style={posicao ? { objectPosition: posicao } : undefined}
        />
      ) : (
        <div className="photo-placeholder">
          <span>🌿</span>
          <small>Foto do atrativo</small>
        </div>
      )}
      <div className="place-info">
        <h3>{nome}</h3>
        <a className="text-link" href="#contato" onClick={() => onConsultar(nome)}>
          Consultar passeio <span>↗</span>
        </a>
        {nota && <span className="photo-note">{nota}</span>}
      </div>
    </article>
  )
}
