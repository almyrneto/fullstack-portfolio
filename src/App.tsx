import './styles/app.css'
import { About } from './sections/About/About'
import { Skills } from './sections/Skills/Skills'

const stacks = [
  'React',
  'React Native',
  'TypeScript',
  'JavaScript',
  'Node.js',
  'NestJS',
  'Python',
  'Flutter',
  'Dart',
  'Supabase',
  'APIs REST',
  '@dnd-kit',
  'RxJS',
  'Linux',
  'Git',
]

const projects = [
  {
    title: 'CRM Kanban Inteligente',
    description:
      'Sistema estilo Kanban para gestão de leads, movimentação por etapas, regras de negócio e geração de mensagens com IA.',
    stack: ['React', 'TypeScript', 'Supabase', '@dnd-kit'],
  },
  {
    title: 'Bot de Automação de Posts',
    description:
      'Automação para criação de posts para Instagram e LinkedIn, reduzindo trabalho manual e acelerando produção de conteúdo.',
    stack: ['Python', 'Automação', 'Bots', 'APIs'],
  },
  {
    title: 'Backoffice/Admin Systems',
    description:
      'Desenvolvimento de sistemas administrativos, integrações com APIs, manutenção de sistemas e evolução de regras de negócio.',
    stack: ['React', 'Node.js', 'NestJS', 'REST APIs'],
  },
]

function App() {
  return (
    <main className="page">
      <section className="hero">
        <div className="orb orbOne" />
        <div className="orb orbTwo" />

        <nav className="navbar">
          <strong>AF.dev</strong>

          <div>
            <a href="#projects">Projetos</a>
            <a href="#experience">Experiência</a>
            <a href="#contact">Contato</a>
            <a href="#about">Sobre</a>
            <a href="#skills">Skills</a>
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

      <section className="section">
        <div className="sectionHeader">
          <span>Stack</span>
          <h2>Tecnologias que uso para construir soluções completas</h2>
        </div>

        <div className="skillsGrid">
          {stacks.map((stack) => (
            <div className="skillCard" key={stack}>
              {stack}
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="sectionHeader">
          <span>Projetos</span>
          <h2>Experiências práticas aplicadas em produtos reais</h2>
        </div>

        <div className="projectsGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.title}>
              <div className="projectGlow" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tags">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience" id="experience">
        <div className="sectionHeader">
          <span>Experiência</span>
          <h2>Atuação profissional</h2>
        </div>

        <div className="timeline">
          <div className="timelineItem">
            <strong>Tecnofábrica</strong>
            <p>
              Desenvolvimento fullstack em projetos como R10, Refinne e Tecnops,
              atuando com frontend, backend, APIs, regras de negócio, code review
              e automações.
            </p>
          </div>

          <div className="timelineItem">
            <strong>iZap</strong>
            <p>
              Desenvolvimento e manutenção de sistemas, implementação de
              funcionalidades e evolução de aplicações.
            </p>
          </div>

          <div className="timelineItem">
            <strong>Economarket</strong>
            <p>
              Atuação em soluções digitais, manutenção de sistemas e melhorias
              voltadas para operação e produtividade.
            </p>
          </div>
        </div>
      </section>

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