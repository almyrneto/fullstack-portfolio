import { motion } from 'framer-motion'
import { MetricCard } from '../../components/ui/MetricCard'
import { SectionHeader } from '../../components/ui/SectionHeader'

const metrics = [
  {
    value: '3',
    label: 'Empresas',
    description: 'Experiência em Economarket, iZap e Tecnofábrica.',
  },
  {
    value: '6+',
    label: 'Projetos',
    description: 'Projetos reais, backoffices, automações e sistemas internos.',
  },
  {
    value: '20+',
    label: 'Tecnologias',
    description: 'Stack moderna com frontend, backend, mobile, cloud e DevOps.',
  },
  {
    value: 'AWS',
    label: 'Deploy automático',
    description:
      'CI/CD com GitHub Actions, S3, CloudFront e invalidação de cache.',
  },
]

const stackLevels = [
  { name: 'React', level: 95 },
  { name: 'TypeScript', level: 92 },
  { name: 'Node.js', level: 85 },
  { name: 'NestJS', level: 80 },
  { name: 'Supabase', level: 82 },
  { name: 'AWS / DevOps', level: 72 },
]

const pipelineSteps = [
  'Commit',
  'GitHub Actions',
  'Format',
  'Lint',
  'Build',
  'S3 Deploy',
  'CloudFront',
]

export function Dashboard() {
  return (
    <section className="section dashboardSection" id="dashboard">
      <SectionHeader
        eyebrow="Developer Dashboard"
        title="Um resumo interativo da minha stack, experiência e fluxo de entrega."
      />

      <div className="dashboardGrid">
        <div className="metricsGrid">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              value={metric.value}
              label={metric.label}
              description={metric.description}
              delay={index * 0.07}
            />
          ))}
        </div>

        <motion.article
          className="dashboardPanel"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="dashboardPanelHeader">
            <span>Current Stack</span>
            <strong>Live Skills</strong>
          </div>

          <div className="stackLevels">
            {stackLevels.map((stack, index) => (
              <div className="stackLevel" key={stack.name}>
                <div className="stackLevelHeader">
                  <span>{stack.name}</span>
                  <small>{stack.level}%</small>
                </div>

                <div className="stackTrack">
                  <motion.div
                    className="stackFill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stack.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: index * 0.08,
                      ease: 'easeOut',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.article>
      </div>

      <motion.article
        className="pipelinePanel"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <div className="dashboardPanelHeader">
          <span>Delivery Pipeline</span>
          <strong>Do commit ao deploy</strong>
        </div>

        <div className="pipelineFlow">
          {pipelineSteps.map((step, index) => (
            <div className="pipelineStep" key={step}>
              <span>{index + 1}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </motion.article>
    </section>
  )
}
