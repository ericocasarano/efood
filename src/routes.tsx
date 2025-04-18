import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Confirmacao from './components/Confirmacao' // ⬅️ Importar o novo componente

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil/:id" element={<Perfil />} />
    <Route path="/confirmacao" element={<Confirmacao />} /> {/* ⬅️ Nova rota */}
  </Routes>
)

export default Rotas
