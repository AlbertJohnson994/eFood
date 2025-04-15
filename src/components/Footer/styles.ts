import styled from 'styled-components'
import { cores } from '../../styles'
import fundo from '../../assets/images/fundo.png'

export const FooterContainer = styled.footer`
  background-image: url(${fundo});
  background-size: cover;
  background-position: center;
  color: ${cores.textColor};
  padding: 32px 0;
  text-align: center;
  width: 100%;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    content: '';
  }
`

export const SectionTitle = styled.h4`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Links = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  list-style: none;
  padding: 0;
  margin: 0;
`

export const Link = styled.a`
  text-decoration: none;
  display: inline-block;
  margin-bottom: 64px;

  img {
    width: 24px;
    height: 24px;
  }
`

export const FooterSection = styled.div`
  margin-bottom: 24px;
  max-width: 600px;
  font-size: 10px;
  padding-top: 24px:
  line-height: 100%;
  margin-bottom: 14px;
`
