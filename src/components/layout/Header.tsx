import { Link } from 'react-router-dom'

export function Header() {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        AF.dev
      </Link>

      <div>
        <a href="/#about">Sobre</a>
        <a href="/#skills">Skills</a>
        <a href="/#projects">Projetos</a>
        <a href="/#experience">Experiência</a>
        <Link to="/architecture">Architecture</Link>
        <a href="/#contact">Contato</a>
      </div>
    </nav>
  )
}
