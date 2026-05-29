import { Route, Routes } from 'react-router-dom'
import './styles/app.css'
import { Footer } from './components/Footer/Footer'
import { Architecture } from './pages/Architecture/Architecture'
import { Home } from './pages/Home/Home'

function App() {
  return (
    <main className="page">
      <nav className="navbar">
        <strong>AF.dev</strong>

        <div>
          <a href="/">Home</a>
          <a href="/#about">Sobre</a>
          <a href="/#skills">Skills</a>
          <a href="/#projects">Projetos</a>
          <a href="/#experience">Experiência</a>
          <a href="/architecture">Architecture</a>
          <a href="/#contact">Contato</a>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/architecture" element={<Architecture />} />
      </Routes>

      <Footer />
    </main>
  )
}

export default App
