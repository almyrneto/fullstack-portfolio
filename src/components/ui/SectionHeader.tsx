type SectionHeaderProps = {
  eyebrow: string
  title: string
}

export function SectionHeader({ eyebrow, title }: SectionHeaderProps) {
  return (
    <div className="sectionHeader">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  )
}
