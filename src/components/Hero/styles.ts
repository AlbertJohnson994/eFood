import styled from 'styled-components'
import fundo from '../../assets/images/fundo.png'
import { cores } from '../../styles'

export const HeroSection = styled.section`
  background-image: url(${fundo});
  background-size: cover;
  background-position: center;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-direction: column;
  }

  a {
    color: ${cores.textColor};
    font-weight: bold;
    text-decoration: none;
  }
`

export const Text = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center; /* This is the correct property for centering text */
  margin: 0 auto; /* Optional: helps with horizontal centering in block elements */
  width: 100%; /* Ensures the element takes full width */
`
export const LinkItem = styled.li`
  margin-right: 16px;
`

export const LinkCart = styled.a`
  color: $cores.textColor;
  font-weight: bold;
  text-decoration: none;
`
