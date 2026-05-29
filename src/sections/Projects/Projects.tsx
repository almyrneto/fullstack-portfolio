import { motion } from 'framer-motion'

const projects = [
  {
    title: 'CRM Kanban Inteligente',
    type: 'Projeto Fullstack',
    description:
      'Sistema para gestão de leads em formato Kanban, com drag and drop complexo, regras de movimentação por etapa e geração de mensagens com IA.',
    stack: ['React', 'TypeScript', 'Supabase', '@dnd-kit', 'IA'],
  },
  {
    title: 'R10',
    type: 'Projeto Tecnofábrica',
    description:
      'Atuação em desenvolvimento frontend, integração com APIs, implementação de regras de negócio e evolução contínua do produto.',
    stack: ['React', 'TypeScript', 'APIs REST', 'Business Rules'],
  },
  {
    title: 'Refinne',
    type: 'Projeto Tecnofábrica',
    description:
      'Desenvolvimento fullstack, consumo de APIs REST, criação de funcionalidades administrativas e manutenção evolutiva do sistema.',
    stack: ['Fullstack', 'React', 'Node.js', 'APIs REST'],
  },
  {
    title: 'Tecnops',
    type: 'Projeto Tecnofábrica',
    description:
      'Sistema operacional/backoffice com integrações frontend + backend, fluxos administrativos e implementação de novas funcionalidades.',
    stack: ['Backoffice', 'Admin System', 'React', 'APIs'],
  },
  {
    title: 'Bot de Automação de Conteúdo',
    type: 'Automação',
    description:
      'Bot criado para automatizar a criação de posts para Instagram e LinkedIn, reduzindo tarefas manuais e acelerando produção de conteúdo.',
    stack: ['Python', 'Bots', 'Instagram', 'LinkedIn'],
  },
  {
    title: 'Backoffices Administrativos',
    type: 'Sistemas internos',
    description:
      'Criação e evolução de painéis administrativos, integrações com APIs, regras de negócio e interfaces para operação de sistemas.',
    stack: ['React', 'TypeScript', 'REST APIs', 'Admin'],
  },
]

export function Projects() {
  return (
    <section className="section projects" id="projects">
      <motion.div
        className="sectionHeader"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span>Projetos</span>
        <h2>Projetos que conectam produto, código e impacto real.</h2>
      </motion.div>

      <div className="featuredProjectsGrid">
        {projects.map((project, index) => (
          <motion.article
            className="featuredProjectCard"
            key={project.title}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <div className="projectCardTop">
              <span>{project.type}</span>
              <small>0{index + 1}</small>
            </div>

            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <div className="projectStack">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="projectCardLine" />
          </motion.article>
        ))}
      </div>
    </section>
  )
}
