import { ButtonContainer, ButtonLink } from './styles'

type ButtonProps = {
  type?: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, to, onClick, children }: ButtonProps) => {
  if (type === 'button') {
    return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>
  } else if (type === 'link') {
    return <ButtonLink to={to as string}>{children}</ButtonLink>
  }
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>
}
export default Button
