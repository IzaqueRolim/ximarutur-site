import logo from '../assets/logo.jpg'

export default function Header() {
  return (
    <header>
      <div className="wrap nav">
        <a className="brand brand-logo" href="#" aria-label="XimaruTur — início">
          <img className="brand-mark" src={logo} alt="Logo da XimaruTur" width="52" height="52" />
          <span className="brand-word">
            XIMARUTUR<small>TURISMO E EXPERIÊNCIAS NA AMAZÔNIA</small>
          </span>
        </a>
        <nav className="navlinks">
          <a href="#atrativos">Atrativos</a>
          <a href="#modalidades">Modalidades</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  )
}
