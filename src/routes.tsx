import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Perfil from './Pages/Perfil'
import Product from './Pages/Product'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<Perfil />} />
    <Route path="/product/:id" element={<Product />} />
  </Routes>
)

export default Rotas
