import { useState } from 'react'
import apresentacao from '../../assets/images/apresentacao.png'
import pizaImg from '../../assets/images/piza.png'
import fecharIcon from '../../assets/images/fechar.png'
import { Fundo, Infos, Container2, ModalWrapper } from './styles'

const Hero2 = () => {
  const [modalEstaAberto, setModalEstaAberto] = useState(true)

  const fecharModal = () => {
    setModalEstaAberto(false)
  }

  return (
    <Fundo style={{ backgroundImage: `url(${apresentacao})` }}>
      <ModalWrapper visible={modalEstaAberto}>
        <Infos>
          <img className="imageOverlay" src={pizaImg} alt="pizza" />
          <div className="text-content">
            <Container2>
              <header
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
              >
                <h2>Pizza Marguerita</h2>
                <img
                  src={fecharIcon}
                  alt="Fechar"
                  onClick={fecharModal}
                  style={{ cursor: 'pointer', width: 24, height: 24 }}
                />
              </header>
            </Container2>

            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem.
              <br />
              <span>Serve: de 2 a 3 pessoas</span>
            </p>
            <button className="btnOverlay">Adicionar ao carrinho</button>
          </div>
        </Infos>
      </ModalWrapper>

      <div className="overlay"></div>
    </Fundo>
  )
}

export default Hero2
