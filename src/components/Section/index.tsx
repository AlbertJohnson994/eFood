import { JSX } from 'react'
import { ProductListContainer, List } from './styles'

export type SectionProps = {
  title: string
  children?: JSX.Element | React.ReactNode
}

const Section = ({ title, children }: SectionProps) => (
  <ProductListContainer>
    <List>
      <div>{title}</div>
      {children}
    </List>
    <div className="section-overlay"></div>
  </ProductListContainer>
)
export default Section
