import styled from 'styled-components'
import fundo from '../../assets/images/fundo.png'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  position: relative;
  width: 100%;
  height: 384px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${fundo}) no-repeat center center/cover;

  h1 {
    color: ${cores.secundary};
    font-size: 36px;
    font-weight: bold;
    text-align: center;
    margin: 0 auto;
    width: 539px;
    height: 84px;
    top: 236px;
    left: 414px;
    padding-top: 95px;
    z-index: 1;
  }
`

export const IconImage = styled.img`
  max-width: 125px;
  height: 57px;
  top: 40px;
  left: 680px;
  z-index: 1;
  position: absolute;
`
