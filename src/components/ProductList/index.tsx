// import Products from '../Products'
// import Dishes from '../../models/Dishes'

// import { ProductListContainer, List } from './styles'

// export type ProductListProps = {
//   title: string
//   dish: Dishes[]
//   onAddToCart?: (title: string) => void
// }

// export const ProductList = ({ title, dish }: ProductListProps) => (
//   <ProductListContainer>
//     <div className="container">
//       <h2>{title}</h2>
//       <List>
//         {dish.map((dishes: Dishes) => (
//           <Products
//             key={dishes.id}
//             category={dishes.category}
//             description={dishes.description}
//             image={dishes.image}
//             infos={dishes.infos}
//             title={dishes.title}
//             nota={dishes.nota}
//           />
//         ))}
//       </List>
//     </div>
//   </ProductListContainer>
// )

import { useLocation } from 'react-router-dom'
import Products from '../Products'
import Dishes from '../../models/Dishes'
import { ProductListContainer, List } from './styles'

export type ProductListProps = {
  title: string
  dish: Dishes[]
  onAddToCart?: (title: string) => void
}

export const ProductList = ({ title, dish }: ProductListProps) => {
  const location = useLocation()
  const isProfile = location.pathname === '/perfil' // Adjust route as needed

  return (
    <ProductListContainer>
      <div className="container">
        <h2>{title}</h2>
        <List isProfile={isProfile}>
          {dish.map((dishes: Dishes) => (
            <Products
              key={dishes.id}
              category={dishes.category}
              description={dishes.description}
              image={dishes.image}
              infos={dishes.infos}
              title={dishes.title}
              nota={dishes.nota}
            />
          ))}
        </List>
      </div>
    </ProductListContainer>
  )
}
