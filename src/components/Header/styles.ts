import styled from 'styled-components'
import fundo from '../../assets/images/fundo.png'
import apresentacao from '../../assets/images/apresentacao.png'

export const HeaderBar = styled.header<{
  isHome?: boolean
  isProfile?: boolean
}>`
  position: relative;
  width: 100%;
  height: ${({ isHome }) => (isHome ? '300px' : '300px')};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: height 0.3s ease;

  /* Default background for all pages */
  background: url(${fundo}) no-repeat center center/cover;

  /* Profile page background override */
  ${({ isProfile }) =>
    isProfile &&
    `
    background: url(${apresentacao}) no-repeat center center/cover;
  `}

  /* Home page specific styles */
  ${({ isHome }) =>
    isHome &&
    `
    /* Additional home page styles if needed */
  `}
`

export const IconImage = styled.img`
  max-width: 200px;
  height: 100%;
  z-index: 1;
  position: relative;
`
