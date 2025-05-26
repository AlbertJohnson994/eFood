import { useParams } from 'react-router-dom'
import Hero2 from '../../components/Hero2'
import Entrega from '../../components/Entrega'
import Carrinho from '../../components/Carrinho'
import { ProductList } from '../../components/ProductList'
import Dishes from '../../models/Dishes'
import piza from '../../assets/images/piza.png'

// Lista de pizzas (mock)
const pizza: Dishes[] = [
  {
    id: 1,
    category: 'Mais detalhes',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [],
    title: 'Pizza Marguerita',
    image: piza,
    nota: ''
  },
  {
    id: 2,
    category: 'Mais detalhes',
    description:
      'Pizza Pepperoni: molho de tomate, queijo derretido e rodelas generosas de pepperoni. Clássica e irresistível!',
    infos: [],
    title: 'Pizza Pepperoni',
    image: piza,
    nota: ''
  },
  {
    id: 3,
    category: 'Mais detalhes',
    description:
      'Pizza Quatro Queijos: combinação de mussarela, gorgonzola, parmesão e catupiry. Cremosa e saborosa!',
    infos: [],
    title: 'Pizza Quatro Queijos',
    image: piza,
    nota: ''
  },
  {
    id: 4,
    category: 'Mais detalhes',
    description:
      'Pizza Quatro Queijos: combinação de mussarela, gorgonzola, parmesão e catupiry. Cremosa e saborosa!',
    infos: [],
    title: 'Pizza Quatro Queijos',
    image: piza,
    nota: ''
  },
  {
    id: 5,
    category: 'Mais detalhes',
    description:
      'Pizza Quatro Queijos: combinação de mussarela, gorgonzola, parmesão e catupiry. Cremosa e saborosa!',
    infos: [],
    title: 'Pizza Quatro Queijos',
    image: piza,
    nota: ''
  },
  {
    id: 6,
    category: 'Mais detalhes',
    description:
      'Pizza Quatro Queijos: combinação de mussarela, gorgonzola, parmesão e catupiry. Cremosa e saborosa!',
    infos: [],
    title: 'Pizza Quatro Queijos',
    image: piza,
    nota: ''
  }
  // Adicione mais se quiser
]

const Product = () => {
  const { id } = useParams()

  return (
    <>
      <ProductList
        title=""
        dish={[]} // passando como array
      />

      <Hero2 />
      <ProductList title="Mais opções deliciosas" dish={pizza} />
      <Carrinho />
      <Entrega />
    </>
  )
}

export default Product
