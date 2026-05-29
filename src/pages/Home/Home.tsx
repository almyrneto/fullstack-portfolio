import { About } from '../../sections/About/About'
import { Skills } from '../../sections/Skills/Skills'
import { Projects } from '../../sections/Projects/Projects'
import { Experience } from '../../sections/Experience/Experience'
import { Contact } from '../../sections/Contact/Contact'

export function Home() {
  return (
    <>
      <section className="hero">
        <div className="orb orbOne" />
        <div className="orb orbTwo" />

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
      <Contact />
    </>
  )
}