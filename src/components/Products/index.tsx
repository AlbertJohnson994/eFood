// import Tag from '../Tag'
// import { CardContainer, Descricao, Titulo, Infos, CardFooter } from './styles'
// import { useLocation } from 'react-router-dom'

// type ProductProps = {
//   title: React.ReactNode
//   titleText?: string
//   description: string
//   category: string
//   infos: string[]
//   image: string
//   nota: string
// }

// const Product = ({
//   title,
//   titleText = '',
//   description,
//   category,
//   infos,
//   image,
//   nota
// }: ProductProps) => {
//   const location = useLocation()
//   const isProfile = location.pathname === '/perfil' // Adjust to your profile route

//   return (
//     <CardContainer isProfile={isProfile}>
//       <img src={image} alt={titleText} />
//       <Infos isProfile={isProfile}>
//         {infos.map((info) => (
//           <Tag key={info}>
//             <span>{info}</span>
//           </Tag>
//         ))}
//       </Infos>
//       <Titulo isProfile={isProfile}>
//         <span className="title">{title}</span>
//         <span className="nota">{nota}</span>
//       </Titulo>
//       <Descricao isProfile={isProfile}>{description}</Descricao>
//       <CardFooter isProfile={isProfile}>
//         <Tag>
//           <span>{category}</span>
//         </Tag>
//       </CardFooter>
//     </CardContainer>
//   )
// }

// export default Product

import Tag from '../Tag'
import { CardContainer, Descricao, Titulo, Infos, CardFooter } from './styles'
import { useLocation } from 'react-router-dom'

type ProductProps = {
  title: React.ReactNode
  titleText?: string
  description: string
  category: string
  infos: string[]
  image: string
  nota: string
}

const Product = ({
  title,
  titleText = '',
  description,
  category,
  infos,
  image,
  nota
}: ProductProps) => {
  const location = useLocation()
  const isProfile = location.pathname === '/perfil' // Adjust if your route is different

  return (
    <CardContainer isProfile={isProfile}>
      <img src={image} alt={titleText} />
      <Infos isProfile={isProfile}>
        {infos.map((info) => (
          <Tag key={info}>
            <span>{info}</span>
          </Tag>
        ))}
      </Infos>
      <Titulo isProfile={isProfile}>
        <span className="title">{title}</span>
        <span className="nota">{nota}</span>
      </Titulo>
      <Descricao isProfile={isProfile}>{description}</Descricao>
      <CardFooter isProfile={isProfile}>
        <Tag>
          <span>{category}</span>
        </Tag>
      </CardFooter>
    </CardContainer>
  )
}
export default Product
