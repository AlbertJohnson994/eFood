import styled, { keyframes } from 'styled-components'
import { cores } from '../../styles'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const ModalWrapper = styled.div<{ visible: boolean }>`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  animation: ${fadeIn} 0.3s ease-in-out;
  z-index: 10;
`

export const Fundo = styled.div`
  position: relative;
  display: block;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  &::after {
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0.56;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 344px;
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const Infos = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 12px;
  background-color: ${cores.secundary};

  .imageOverlay {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  .text-content {
    flex: 1;
    color: ${cores.branca};

    h2 {
      font-size: 32px;
      margin-bottom: 16px;
    }

    p {
      font-size: 16px;
      line-height: 1.5;
      margin-bottom: 24px;

      span {
        display: block;
        margin-top: 8px;
      }
    }
  }

  .btnOverlay {
    background-color: ${cores.primary};
    color: ${cores.secundary};
    border: none;
    padding: 12px 24px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${cores.branca};
    }
  }
`

export const Container2 = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
