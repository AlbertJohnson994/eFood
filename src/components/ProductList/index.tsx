import Products from '../Products'
import Dishes from '../../models/Dishes'
import { ProductListContainer, List } from './styles'

export type ProductListProps = {
  title: string
  dish: Dishes[]
  columns?: number // <-- novo
  background?: '#E66767' | '#eeea'
  textColor?: string
  isPerfil?: boolean
  onAddToCart?: (title: string) => void
}

export const ProductList = ({
  title,
  dish,
  columns = 2,
  background
}: ProductListProps) => {
  return (
    <ProductListContainer
      columns={columns}
      background={background || '#E66767'}
    >
      <div className="container">
        <h2>{title}</h2>
        <List columns={columns} background={background || '#E66767'}>
          {dish.map((dishes: Dishes) => (
            <Products
              key={dishes.id}
              background={background}
              id={dishes.id}
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
