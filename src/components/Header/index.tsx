import { HeaderBar, IconImage } from './styles'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import Hero from '../Hero'

const Header = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isProfile = location.pathname === '/perfil'

  return (
    <>
      <HeaderBar isHome={isHome} isProfile={isProfile}>
        <RouterLink to="/">
          <IconImage src={logo} alt="Logo" />
        </RouterLink>
      </HeaderBar>
      {isHome && <Hero />} {/* Hero will only show on home page */}
    </>
  )
}

export default Header
