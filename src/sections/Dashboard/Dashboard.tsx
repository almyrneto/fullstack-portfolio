import { motion } from 'framer-motion'
import { SectionHeader } from '../../components/ui/SectionHeader'
import { useGitHubRepository } from '../../hooks/useGitHubRepository'

const productionUrl = 'https://d2nbrtkevbbqoo.cloudfront.net'

const pipelineSteps = [
  'Commit',
  'GitHub Actions',
  'Format',
  'Lint',
  'Build',
  'S3 Deploy',
  'CloudFront',
]

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('pt-BR')
}

export function Dashboard() {
  const { repository, commits, isLoading, error } = useGitHubRepository()

  return (
    <section className="section dashboardSection" id="dashboard">
      <SectionHeader
        eyebrow="Developer Dashboard"
        title="Dados reais do projeto, deploy e evolução do repositório."
      />

      <motion.article
        className="githubPanel"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <div className="dashboardPanelHeader">
          <span>GitHub Live Data</span>
          <strong>Repositório em tempo real</strong>
        </div>

        {isLoading && (
          <p className="githubStatus">Carregando dados do GitHub...</p>
        )}

        {error && <p className="githubStatus">{error}</p>}

        {repository && (
          <>
            <div className="githubStats">
              <div>
                <strong>{repository.name}</strong>
                <span>Repository</span>
              </div>

              <div>
                <strong>{repository.stargazers_count}</strong>
                <span>Stars</span>
              </div>

              <div>
                <strong>{repository.forks_count}</strong>
                <span>Forks</span>
              </div>

              <div>
                <strong>{repository.open_issues_count}</strong>
                <span>Issues</span>
              </div>

              <div>
                <strong>{repository.language ?? 'N/A'}</strong>
                <span>Main Language</span>
              </div>

              <div>
                <strong>{formatDate(repository.pushed_at)}</strong>
                <span>Last Push</span>
              </div>
            </div>

            <div className="githubActions">
              <a href={repository.html_url} target="_blank" rel="noreferrer">
                Ver repositório
              </a>

              <a href={productionUrl} target="_blank" rel="noreferrer">
                Ver produção
              </a>
            </div>
          </>
        )}
      </motion.article>

      <div className="dashboardOperationsGrid">
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

        <motion.article
          className="productionPanel"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <div className="dashboardPanelHeader">
            <span>Production Status</span>
            <strong>Online</strong>
          </div>

          <div className="productionStatusList">
            <div>
              <span>CI</span>
              <strong>Active</strong>
            </div>

            <div>
              <span>Deploy</span>
              <strong>AWS S3</strong>
            </div>

            <div>
              <span>CDN</span>
              <strong>CloudFront</strong>
            </div>

            <div>
              <span>HTTPS</span>
              <strong>Enabled</strong>
            </div>
          </div>
        </motion.article>
      </div>

      {commits.length > 0 && (
        <motion.article
          className="githubPanel"
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="dashboardPanelHeader">
            <span>Repository Activity</span>
            <strong>Últimos commits</strong>
          </div>

          <div className="githubCommits">
            {commits.map((commit) => (
              <a
                href={commit.html_url}
                target="_blank"
                rel="noreferrer"
                key={commit.sha}
              >
                <span>{commit.commit.message}</span>
                <small>{formatDate(commit.commit.author.date)}</small>
              </a>
            ))}
          </div>
        </motion.article>
      )}
    </section>
  )
}
