import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/layout/MainLayout'
import { Architecture } from './pages/Architecture/Architecture'
import { Home } from './pages/Home/Home'
import './styles/app.css'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/architecture" element={<Architecture />} />
      </Routes>
    </MainLayout>
  )
}

export default App
