// styles.ts
import styled from 'styled-components'
import { cores } from '../../styles'
import fundo from '../../assets/images/fundo.png'
import apresentacao from '../../assets/images/apresentacao.png'

export const BannerContainer = styled.div`
  background-image: url(${apresentacao});
  width: 100%;
  height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const Imagem = styled.div`
  width: 100%;
  height: 480px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #f8f8f8;
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  background: url(${fundo}) repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 186px;
  z-index: 1;
`

export const NavText = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${cores.secundary};
  margin: 210px;
`

export const Linkcart = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 210px;

  p {
    color: ${cores.secundary};
    font-size: 18px;
    font-weight: bold;
  }

  a img {
    width: 24px;
    height: 24px;
  }
`
