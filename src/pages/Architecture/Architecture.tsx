import { motion } from 'framer-motion'

const architectureBlocks = [
  {
    title: 'Frontend Architecture',
    description:
      'Aplicação construída com React, TypeScript e Vite, organizada em páginas, seções, componentes reutilizáveis, estilos globais e estrutura preparada para escala.',
    items: ['React', 'TypeScript', 'Vite', 'Componentização', 'CSS modular por contexto'],
  },
  {
    title: 'Project Structure',
    description:
      'O projeto separa responsabilidades entre pages, sections, components, styles e futuras camadas de services, hooks, types e utils.',
    items: ['pages', 'sections', 'components', 'styles', 'services', 'hooks'],
  },
  {
    title: 'Versionamento',
    description:
      'Desenvolvimento incremental com commits semânticos, separando documentação, features, refactors, correções e configuração de infraestrutura.',
    items: ['Git', 'GitHub', 'Conventional Commits', 'Branches futuras', 'Histórico público'],
  },
  {
    title: 'CI/CD',
    description:
      'Pipeline planejada com GitHub Actions para instalar dependências, validar o build, executar checagens e preparar deploy automatizado.',
    items: ['GitHub Actions', 'npm install', 'build', 'validação', 'deploy'],
  },
  {
    title: 'Cloud Deployment',
    description:
      'Deploy planejado na AWS utilizando S3, CloudFront, Route 53 e Certificate Manager para entregar uma aplicação estática performática e segura.',
    items: ['AWS S3', 'CloudFront', 'Route 53', 'HTTPS', 'ACM'],
  },
  {
    title: 'Product Thinking',
    description:
      'Além do visual, o projeto foi pensado para demonstrar organização, clareza técnica, evolução contínua, documentação e visão de produto.',
    items: ['UX', 'Performance', 'SEO', 'Acessibilidade', 'Escalabilidade'],
  },
]

export function Architecture() {
  return (
    <main className="architecturePage">
      <section className="architectureHero">
        <motion.span
          className="badge"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Engineering Case Study
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Arquitetura, decisões técnicas e evolução do projeto.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Esta página documenta como o portfólio foi estruturado para demonstrar
          não apenas habilidades visuais, mas também organização de código,
          versionamento, CI/CD, cloud deployment e visão de engenharia.
        </motion.p>
      </section>

      <section className="architectureGrid">
        {architectureBlocks.map((block, index) => (
          <motion.article
            className="architectureCard"
            key={block.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
          >
            <div className="architectureCardHeader">
              <span>0{index + 1}</span>
              <h2>{block.title}</h2>
            </div>

            <p>{block.description}</p>

            <div className="architectureTags">
              {block.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </section>
    </main>
  )
}