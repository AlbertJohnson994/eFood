import Button from '../Button'
import Tag from '../Tag'
import { CardContainer, Descricao, Titulo, Infos } from './styles'

import { Link as RouterLink } from 'react-router-dom'

type ProductsProps = {
  id: number
  title: React.ReactNode
  titleText?: string
  description: string
  category: string
  infos: string[]
  image: string
  nota: string
  background?: '#E66767' | '#eeea' | '#FFEBD9'
  textColor?: '#E66767' | '#eeea' | '#FFEBD9'
  isPerfil?: boolean
}

const Products = ({
  title,
  titleText = '',
  description,
  category,
  infos,
  image,
  nota,
  background
}: ProductsProps) => {
  return (
    <CardContainer background={background || '#eeea'} textColor="#E66767">
      <img src={image} alt={titleText} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>
            <span>{info}</span>
          </Tag>
        ))}
      </Infos>
      <Titulo
        background={background || '#eeea'}
        textColor={background === '#FFEBD9' ? '#FFEBD9' : '#FFEBD9'}
      >
        <span className="title">{title}</span>
        <span className="nota">{nota}</span>
      </Titulo>
      <Descricao
        background={background || '#eeea'}
        textColor={background === '#FFEBD9' ? '#FFEBD9' : '#FFEBD9'}
      >
        {description}

        <RouterLink to="/perfil">
          <Button
            type="button"
            variant="primary"
            title={category}
            onClick={() => console.log('Clicked')}
          >
            {category}
          </Button>
        </RouterLink>
      </Descricao>
    </CardContainer>
  )
}
export default Products
