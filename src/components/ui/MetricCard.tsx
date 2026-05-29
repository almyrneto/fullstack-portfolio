import { motion } from 'framer-motion'

type MetricCardProps = {
  value: string
  label: string
  description: string
  delay?: number
}

export function MetricCard({
  value,
  label,
  description,
  delay = 0,
}: MetricCardProps) {
  return (
    <motion.article
      className="metricCard"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
    >
      <strong>{value}</strong>
      <span>{label}</span>
      <p>{description}</p>
    </motion.article>
  )
}
