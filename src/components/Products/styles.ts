// import styled from 'styled-components'
// import { cores } from '../../styles'
// import { TagContainer } from '../Tag/styles'

// export const CardContainer = styled.div<{ isProfile?: boolean }>`
//   background-color: ${({ isProfile }) =>
//     isProfile ? cores.textColor : cores.cinza};
//   padding: 8px;
//   position: relative;
//   flex-direction: column;
//   border: 2px solid ${cores.textColor};
//   width: 100%;
//   height: auto;
//   display: flex;
//   color: ${({ isProfile }) => (isProfile ? cores.corFundo : 'inherit')};

//   ${TagContainer} {
//     margin-right: 8px;
//   }

//   img {
//     width: 100%;
//     height: 200px;
//     border-radius: 2px;
//     object-fit: cover;
//   }
// `

// export const Infos = styled.div<{ isProfile?: boolean }>`
//   position: absolute;
//   top: 16px;
//   right: 16px;
//   display: block;
//   gap: 4px;
//   flex-wrap: wrap;
//   color: ${({ isProfile }) => (isProfile ? cores.corFundo : 'inherit')};
// `

// export const Titulo = styled.h3<{ isProfile?: boolean }>`
//   font-size: 14px;
//   font-weight: bold;
//   margin-bottom: 8px;
//   padding: 6px;
//   margin-top: 16px;
//   display: flex;
//   align-items: left;
//   justify-content: space-between;
//   color: ${({ isProfile }) => (isProfile ? cores.corFundo : 'inherit')};
// `

// export const Descricao = styled.p<{ isProfile?: boolean }>`
//   font-size: 14px;
//   margin-top: 16px;
//   display: block;
//   line-height: 22px;
//   color: ${({ isProfile }) => (isProfile ? cores.corFundo : 'inherit')};
// `

// export const CardFooter = styled.div<{ isProfile?: boolean }>`
//   margin-top: 16px;
//   justify-content: space-between;
//   align-items: center;
//   padding: 8px;

//   button {
//     background-color: ${({ isProfile }) =>
//       isProfile ? cores.corFundo : cores.textColor};
//     color: ${({ isProfile }) => (isProfile ? cores.textColor : 'white')};
//     border: none;
//     padding: 6px 12px;
//     cursor: pointer;
//     font-weight: bold;
//     transition: all 0.3s ease;

//     &:hover {
//       opacity: 0.9;
//     }
//   }
// `

import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const CardContainer = styled.div<{ isProfile?: boolean }>`
  background-color: ${({ isProfile }) =>
    isProfile ? cores.textColor : cores.cinza};
  padding: 8px;
  position: relative;
  flex-direction: column;
  border: 2px solid ${cores.textColor};
  width: 100%;
  height: auto;
  display: flex;
  color: ${({ isProfile }) => (isProfile ? cores.corFundo : 'inherit')};

  ${TagContainer} {
    margin-right: 8px;
  }

  img {
    width: 100%;
    height: 200px;
    border-radius: 2px;
    object-fit: cover;
  }
`

export const Infos = styled.div<{ isProfile?: boolean }>`
  position: absolute;
  top: 16px;
  right: 16px;
  display: block;
  gap: 4px;
  flex-wrap: wrap;
  color: ${({ isProfile }) => (isProfile ? cores.corFundo : 'inherit')};
`

export const Titulo = styled.h3<{ isProfile?: boolean }>`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
  padding: 6px;
  margin-top: 16px;
  display: flex;
  align-items: left;
  justify-content: space-between;
  color: ${({ isProfile }) => (isProfile ? cores.corFundo : 'inherit')};
`

export const Descricao = styled.p<{ isProfile?: boolean }>`
  font-size: 14px;
  margin-top: 16px;
  display: block;
  line-height: 22px;
  color: ${({ isProfile }) => (isProfile ? cores.corFundo : 'inherit')};
`

export const CardFooter = styled.div<{ isProfile?: boolean }>`
  margin-top: 16px;
  justify-content: space-between;
  align-items: center;
  padding: 8px;

  button {
    background-color: ${({ isProfile }) =>
      isProfile ? cores.corFundo : cores.textColor};
    color: ${({ isProfile }) => (isProfile ? cores.textColor : 'white')};
    border: none;
    padding: 6px 12px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.9;
    }
  }
`
