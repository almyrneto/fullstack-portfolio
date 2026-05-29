import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Styled-components'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'NestJS', 'APIs REST', 'Supabase', 'PostgreSQL'],
  },
  {
    title: 'Mobile',
    skills: ['React Native', 'Flutter', 'Dart'],
  },
  {
    title: 'Engenharia',
    skills: ['Git', 'Linux', 'npm', 'Code Review', 'RxJS'],
  },
  {
    title: 'Automação',
    skills: ['Python', 'Bots', 'Processos', 'Instagram', 'LinkedIn'],
  },
  {
    title: 'Interfaces avançadas',
    skills: ['Drag and Drop', '@dnd-kit', 'Backoffice', 'Admin systems'],
  },
]

export function Skills() {
  return (
    <section className="section skills" id="skills">
      <motion.div
        className="sectionHeader"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span>Skills</span>
        <h2>Stack técnica aplicada em produtos, sistemas e automações.</h2>
      </motion.div>

      <div className="skillsShowcase">
        {skillGroups.map((group, index) => (
          <motion.article
            className="skillGroupCard"
            key={group.title}
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.01 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <div className="skillGroupHeader">
              <span>0{index + 1}</span>
              <h3>{group.title}</h3>
            </div>

            <div className="skillPills">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}