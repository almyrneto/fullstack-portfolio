import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Tecnofábrica',
    role: 'Desenvolvedor Front-end / Fullstack',
    period: 'Experiência atual',
    description:
      'Atuação no desenvolvimento e manutenção de aplicações web e sistemas administrativos, utilizando principalmente React, TypeScript e integração com APIs.',
    projects: ['R10', 'Refinne', 'Tecnops'],
    activities: [
      'Desenvolvimento de interfaces web com React e TypeScript',
      'Criação e manutenção de sistemas backoffice/admin',
      'Integração e consumo de APIs REST',
      'Implementação de regras de negócio',
      'Desenvolvimento de funcionalidades complexas de interface',
      'Code review',
      'Correção de bugs e manutenção evolutiva',
      'Uso de RxJS em fluxos assíncronos',
      'Implementação de drag and drop com @dnd-kit',
      'Organização e componentização de código',
      'Trabalho em equipe utilizando Git e versionamento',
    ],
  },
  {
    company: 'iZap',
    role: 'Tecnologia e Suporte a Sistemas',
    period: 'Experiência anterior',
    description:
      'Atuação com tecnologia e suporte relacionado a sistemas e plataformas, participando de rotinas operacionais, organização de processos e resolução de problemas técnicos.',
    projects: [],
    activities: [
      'Atendimento e resolução de problemas técnicos',
      'Suporte relacionado a sistemas e plataformas',
      'Participação em rotinas operacionais',
      'Organização de processos e fluxos de trabalho',
      'Uso de ferramentas digitais no dia a dia',
      'Evolução da comunicação técnica e resolução prática de problemas',
    ],
  },
  {
    company: 'Economarket',
    role: 'Suporte e Operações de Tecnologia',
    period: 'Experiência anterior',
    description:
      'Atuação com suporte e operações ligadas à tecnologia, contato com sistemas internos, atendimento operacional e resolução de problemas do dia a dia.',
    projects: [],
    activities: [
      'Contato com sistemas internos',
      'Atendimento operacional',
      'Resolução de problemas do dia a dia',
      'Trabalho em equipe',
      'Adaptação a ambientes dinâmicos',
      'Desenvolvimento de responsabilidade operacional e comunicação',
    ],
  },
]

export function Experience() {
  return (
    <section className="section experienceSection" id="experience">
      <motion.div
        className="sectionHeader"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span>Experiência</span>
        <h2>Minha evolução profissional em tecnologia, produto e operação.</h2>
      </motion.div>

      <div className="experienceTimeline">
        {experiences.map((experience, index) => (
          <motion.article
            className="experienceCard"
            key={experience.company}
            initial={{ opacity: 0, x: index % 2 === 0 ? -36 : 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
          >
            <div className="experienceMarker">
              <span>{index + 1}</span>
            </div>

            <div className="experienceContent">
              <div className="experienceTop">
                <div>
                  <span>{experience.period}</span>
                  <h3>{experience.company}</h3>
                  <strong>{experience.role}</strong>
                </div>
              </div>

              <p>{experience.description}</p>

              {experience.projects.length > 0 && (
                <div className="experienceProjects">
                  <small>Projetos</small>

                  <div>
                    {experience.projects.map((project) => (
                      <span key={project}>{project}</span>
                    ))}
                  </div>
                </div>
              )}

              <ul>
                {experience.activities.map((activity) => (
                  <li key={activity}>{activity}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
