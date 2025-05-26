import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'

export const ProductListContainer = styled.section`
  padding: 16px;

  h2 {
    font-size: 24px;
    margin-bottom: 16px;
    justify-content: space-between;
    align-items: center;
    display: flex;
  }
`

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  padding: 16px;
`

export const CardContainer = styled.div`
  background-color: ${cores.cinza};
  position: relative;
  flex-direction: column;
  border: 1px solid ${cores.secundary};
  width: 472px;
  height: 398px;
  display: flex;
  color: ${cores.secundary};
  text-decoration: none;

  ${TagContainer} {
    margin-right: 8px;
    background-color: ${cores.secundary};
  }
`

export const Infos = styled.div`
  font-size: 12px;
  line-height: 22px;
  position: absolute;
  top: 16px;
  right: 16px;
  color: ${cores.secundary};
`

export const Titulo = styled.h3`
  justify-content: space-between;
  flex-direction: row;
  letter-spacing: 0%;
  display: flex;
  font-size: 16px;
  height: 21px;
  margin: 8px;
  align-items: left;
  color: ${cores};
  padding: 0 6px;

  .nota {
    max-width: 55px;
    height: 21px;
    top: 665px;
    left: 178px;
    font-size: 16px;
    font-weight: 700px;
    line-height: 100%;
    letter-spacing: 0%;
    justify-content: center;
  }
`

export const Descricao = styled.p`
  max-width: 456px;
  height: 88px;
  font-size: 14px;
  line-height: 22px;
  top: 702px;
  left: 179px;
  color: ${cores.secundary};
  margin: 8px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 6px;
  margin-bottom: 16px;


  ${ButtonContainer} {
    background-color: ${cores.secundary};
    color: ${cores.primary};
    cursor: pointer;
    font-weight: 700;
    font-size: 14px;
    text-wrap: nowrap;
    margin-top: 12px;
    padding: 4px;
    border-radius: none;

    &:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }
`
