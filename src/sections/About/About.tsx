import { motion } from 'framer-motion'

const highlights = [
  {
    value: '+3',
    label: 'anos de experiência',
    description:
      'Atuação em aplicações web, sistemas internos e produtos digitais.',
  },
  {
    value: '3',
    label: 'empresas',
    description: 'Experiência em Economarket, iZap e Tecnofábrica.',
  },
  {
    value: 'Fullstack',
    label: 'perfil técnico',
    description:
      'Frontend, backend, integrações, automações e regras de negócio.',
  },
  {
    value: 'Cloud',
    label: 'visão de produção',
    description: 'Projeto com GitHub, CI/CD e deploy automatizado na AWS.',
  },
]

export function About() {
  return (
    <section className="section about" id="about">
      <motion.div
        className="sectionHeader"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span>Sobre mim</span>
        <h2>
          Desenvolvedor fullstack com visão de produto, código e operação.
        </h2>
      </motion.div>

      <div className="aboutGrid">
        <motion.div
          className="aboutPanel"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p>
            Sou desenvolvedor fullstack com experiência em aplicações web,
            backoffices administrativos, integrações com APIs, automação de
            processos e evolução de sistemas em produção.
          </p>

          <p>
            Atuei em projetos na Tecnofábrica como R10, Refinne e Tecnops, além
            de experiências anteriores em empresas como Economarket e iZap. Meu
            foco é construir soluções úteis, bem estruturadas e com impacto real
            no negócio.
          </p>
        </motion.div>

        <div className="highlightsGrid">
          {highlights.map((item, index) => (
            <motion.article
              className="highlightCard"
              key={item.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <strong>{item.value}</strong>
              <span>{item.label}</span>
              <p>{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
