import React from 'react'
import {
  BannerContainer,
  NavText,
  Imagem,
  Linkcart,
  HeaderContent
} from './styles'
import { Link } from 'react-router-dom'
import { IconImage } from '../Header/styles'
import logo from '../../assets/images/logo.png'
import carrinho from '../../assets/images/carrinho.svg'
import apresentacao from '../../assets/images/apresentacao.png'

const Banner = () => (
  <BannerContainer>
    <HeaderContent>
      <NavText>Restaurantes</NavText>

      <Link to="/">
        <IconImage src={logo} alt="Logo" />
      </Link>

      <Linkcart>
        <p>0 produto(s) no carrinho</p>
        <a href="/carrinho">
          <img src={carrinho} alt="Carrinho" />
        </a>
      </Linkcart>
    </HeaderContent>

    <Imagem>
      <img src={apresentacao} alt="" />
    </Imagem>
  </BannerContainer>
)
export default Banner
