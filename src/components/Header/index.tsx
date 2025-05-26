import { HeaderBar, IconImage } from './styles'
import { Link as RouterLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
    <>
      <HeaderBar>
        <RouterLink to="/">
          <IconImage src={logo} alt="Logo" />
        </RouterLink>

        <h1>
          Viva experiências gastronômicas <br />
          <span>no conforto da sua casa</span>
        </h1>
      </HeaderBar>
    </>
  )
}

export default Header
