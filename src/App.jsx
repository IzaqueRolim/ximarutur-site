import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Atrativos from './components/Atrativos.jsx'
import Modalidades from './components/Modalidades.jsx'
import Contato from './components/Contato.jsx'
import Footer from './components/Footer.jsx'
import { MENSAGEM_PADRAO, mensagemParaPasseio } from './data/contato.js'

export default function App() {
  // Ao clicar em "Consultar passeio", o botão de WhatsApp passa a levar o nome do atrativo.
  const [mensagem, setMensagem] = useState(MENSAGEM_PADRAO)

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Atrativos onConsultar={(nome) => setMensagem(mensagemParaPasseio(nome))} />
        <Modalidades />
        <Contato mensagem={mensagem} />
      </main>
      <Footer />
    </>
  )
}
