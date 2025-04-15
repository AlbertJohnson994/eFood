import { HeroSection, Text } from './styles'
import { LinkCart, LinkItem } from './styles'
import { Link as RouterLink } from 'react-router-dom' // ✅ Correto para navegação SPA

import carrinho from '../../assets/images/carrinho.svg'

export const Hero = () => (
  <HeroSection>
    <div>
      <Text>
        Viva experiências gastronômicas <br />
        <span>no conforto da sua casa</span>
      </Text>
    </div>
    <nav>
      <LinkItem>
        <RouterLink to="/perfil">Perfil</RouterLink>
      </LinkItem>
    </nav>

    <LinkCart href="#">
      0 - produto(s)
      <img src={carrinho} alt="Carrinho" />
    </LinkCart>
  </HeroSection>
)

export default Hero
