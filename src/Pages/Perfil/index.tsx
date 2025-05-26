import piza from '../../assets/images/piza.png'
import Dishes from '../../models/Dishes'
import { ProductList } from '../../components/ProductList'
import { cores } from '../../styles'

export const pizza: Dishes[] = [
  {
    id: 1,
    category: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [],
    title: 'Pizza Marguerita',
    image: piza,
    nota: ''
  },
  {
    id: 2,
    category: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [],
    title: 'Pizza Marguerita',
    image: piza,
    nota: ''
  },
  {
    id: 3,
    category: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [],
    title: 'Pizza Marguerita',
    image: piza,
    nota: ''
  },
  {
    id: 4,
    category: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [],
    title: 'Pizza Marguerita',
    image: piza,
    nota: ''
  },
  {
    id: 5,
    category: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [],
    title: 'Pizza Marguerita',
    image: piza,
    nota: ''
  },
  {
    id: 6,
    category: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [],
    title: 'Pizza Marguerita',
    image: piza,
    nota: ''
  }
]

const Perfil = () => (
  <>
    <ProductList
      dish={pizza}
      title="Perfil"
      columns={3}
      background="#E66767"
      textColor="#FFEBD9"
    />
  </>
)
export default Perfil
