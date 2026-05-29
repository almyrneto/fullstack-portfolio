import './styles/app.css'
import { About } from './sections/About/About'
import { Skills } from './sections/Skills/Skills'
import { Projects } from './sections/Projects/Projects'
import { Experience } from './sections/Experience/Experience'

function App() {
  return (
    <main className="page">
      <section className="hero">
        <div className="orb orbOne" />
        <div className="orb orbTwo" />

        <nav className="navbar">
          <strong>AF.dev</strong>

          <div>
            <a href="#about">Sobre</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projetos</a>
            <a href="#experience">Experiência</a>
            <a href="#contact">Contato</a>
          </div>
        </nav>

        <div className="heroContent">
          <span className="badge">Fullstack Developer</span>

          <h1>
            Criando interfaces, sistemas e automações com visão de produto.
          </h1>

          <p>
            Sou Almyr Freiman, desenvolvedor fullstack com experiência em React,
            TypeScript, Node.js, NestJS, Supabase, automações, backoffices e
            integrações frontend + backend.
          </p>

          <div className="actions">
            <a href="#projects" className="primaryButton">
              Ver projetos
            </a>
            <a href="#contact" className="secondaryButton">
              Entrar em contato
            </a>
          </div>
        </div>
      </section>

      <About />
      <Skills />
      <Projects />
      <Experience />

      <section className="contact" id="contact">
        <h2>Vamos construir algo juntos?</h2>
        <p>
          Estou sempre evoluindo como desenvolvedor e construindo projetos que
          unem código, produto, automação e engenharia.
        </p>

        <a href="mailto:almyr@tecnofabrica.com.br" className="primaryButton">
          Enviar email
        </a>
      </section>
    </main>
  )
}

export default App