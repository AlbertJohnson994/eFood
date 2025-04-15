import { JSX } from 'react'
import { TagContainer } from './styles'

export type TagProps = {
  size?: 'small' | 'medium' | 'large'
  children: JSX.Element
}

const Tag = ({ children, size = 'small' }: TagProps) => (
  <TagContainer size={size}>{children}</TagContainer>
)

export default Tag
