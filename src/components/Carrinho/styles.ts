import styled from 'styled-components'
import { cores } from '../../styles'

export const Cart = styled.aside`
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-end; // Alinha todo conteúdo à esquerda
    background-color: ${cores.secundary};
    padding: 24px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      width: 344px;
      height: 100px;
      background-color: ${cores.primary};
      border: 1px solid ${cores.cinzaClaro};
      border-radius: 8px;
      padding: 8px;
      margin-bottom: 16px;
      display: flex;
      flex-direction: row; // Lado a lado
      align-items: center;
      position: relative;

      img:first-of-type {
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 4px;
        margin-right: 12px;
      }

      .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-grow: 1;

        h2 {
          font-size: 14px;
          margin: 0;
          font-weight: bold;
          color: ${cores.secundary};
        }

        span {
          font-size: 14px;
          color: ${cores.secundary};
          margin-top: 4px;
        }
      }

      img:last-of-type {
        position: absolute;
        bottom: 8px;
        right: 8px;
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }
  }

  .preco {
    width: 344px;
    font-size: 16px;
    font-weight: bold;
    margin-top: 8px;

    p {
      margin: 0;
      display: flex;
      justify-content: space-between;
      color: ${cores.primary};
    }

    span {
      color: ${cores.primary};
    }
  }

  button {
    width: 344px;
    margin-top: 16px;
    background-color: ${cores.primary};
    color: ${cores.secundary};
    border: none;
    padding: 12px;
    font-weight: bold;
    font-size: 14px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.9;
    }
  }
`
