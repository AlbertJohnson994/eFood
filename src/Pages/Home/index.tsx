import { ProductList } from '../../components/ProductList'

import sushi from '../../assets/images/sushi.png'
import fish from '../../assets/images/fish.png'
import Dishes from '../../models/Dishes'

const seaFood: Dishes[] = [
  {
    id: 1,
    category: 'Saiba mais',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa'],
    title: 'Hioki Sushi',
    image: sushi,
    nota: '4.9 ⭐'
  },
  {
    id: 2,
    category: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    image: fish,
    nota: '4.6 ⭐'
  },
  {
    id: 3,
    category: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    image: fish,
    nota: '4.6 ⭐'
  },
  {
    id: 4,
    category: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    image: fish,
    nota: '4.6 ⭐'
  },
  {
    id: 5,
    category: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    image: fish,
    nota: '4.6 ⭐'
  },
  {
    id: 6,
    category: 'Japonesa',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    title: 'La Dolce Vita Trattoria',
    image: fish,
    nota: '4.6 ⭐'
  }
]

const Home = () => (
  <>
    <ProductList dish={seaFood} title="Home" />
  </>
)
export default Home
