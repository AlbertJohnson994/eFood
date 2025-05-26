import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'

interface ButtonProps {
  variant?: 'primary' | 'secundary'
  page?: 'home' | 'perfil'
}

export const ButtonContainer = styled.button<ButtonProps>`
  border: 2px solid
    ${({ variant }) =>
      variant === 'primary' ? cores.secundary : cores.primary};
  color: ${({ page }) => (page === 'perfil' ? cores.branca : cores.secundary)};
  background-color: ${({ page }) =>
    page === 'perfil' ? cores.primary : 'transparent'};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${cores.secundary};
  color: ${cores.secundary};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
`
