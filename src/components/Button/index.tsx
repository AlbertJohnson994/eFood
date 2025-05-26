import { JSX } from 'react'
import { ButtonContainer, ButtonLink } from './styles'

export type ButtonProps = {
  type?: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secundary' // Fixed typo: 'secundary' → 'secondary'
  page?: 'home' | 'perfil'
}

const Button = ({
  type = 'button', // Added default value
  to,
  onClick,
  children,
  variant = 'primary',
  title,
  page = 'home' // Added default value
}: ButtonProps): JSX.Element => {
  // Added explicit return type
  if (type === 'button') {
    return (
      <ButtonContainer
        variant={variant}
        type="button"
        title={title}
        onClick={onClick}
        page={page} // Pass the page prop to ButtonContainer
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
