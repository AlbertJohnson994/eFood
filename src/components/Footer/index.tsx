import instagramIcon from '../../assets/images/instagram.png'
import facebookIcon from '../../assets/images/facebook.png'
import twitterIcon from '../../assets/images/twitter.png'
import logo from '../../assets/images/logo.png'

import {
  FooterContainer,
  FooterSection,
  Link,
  Links,
  SectionTitle
} from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <FooterSection>
        <SectionTitle>
          <img src={logo} alt="logo" />
        </SectionTitle>
        <Links>
          <li>
            <Link href="#">
              <img src={instagramIcon} alt="Instagram" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <img src={facebookIcon} alt="Facebook" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <img src={twitterIcon} alt="Twitter" />
            </Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <Links>
          <p>
            A efood é uma plataforma para divulgação de estabelecimentos, a
            responsabilidade pela entrega, qualidade dos produtos é toda do
            estabelecimento contratado. <br /> {currentYear} - &copy; eFOOD -
            Todos os direitos reservados. <i>By: Albert Johnson</i>
          </p>
        </Links>
      </FooterSection>
      <p></p>
    </div>
  </FooterContainer>
)

export default Footer
