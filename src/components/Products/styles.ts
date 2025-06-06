import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'

interface ProductListProps {
  background: string
  columns?: number
  textColor: string
}

export const CardContainer = styled.div<ProductListProps>`
  background-color: ${(props) =>
    props.background === '#E66767' ? '#E66767' : '#eeea'};
  position: relative;
  flex-direction: column;
  border: 1px solid ${cores.secundary};
  width: 100%;
  height: 398px;
  display: flex;
  color: ${(props) =>
    props.textColor === cores.branca ? cores.primary : cores.secundary};
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
interface TituloProps {
  background: string
  textColor: string
}

export const Titulo = styled.h1<TituloProps>`
  background-color: ${(props) => props.background};
  color: ${(props) => props.textColor || cores.branca};
  justify-content: space-between;
  flex-direction: row;
  letter-spacing: 0%;
  display: flex;
  font-size: 16px;
  height: 21px;
  margin: 8px;
  align-items: left;
  font-weight: 700;
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

export const Descricao = styled.p<ProductListProps>`
  color: ${(props) =>
    props.textColor === cores.primary ? cores.secundary : cores.primary};
  max-width: 456px;
  height: 88px;
  font-size: 14px;
  line-height: 22px;
  top: 702px;
  left: 179px;
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
