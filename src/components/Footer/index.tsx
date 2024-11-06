import { Link } from 'react-router-dom'
import {
  ContainerFooter,
  SocialMediaItem,
  SocialMedias,
  TextoFooter
} from './styles'
import logo from '../../assets/images/logo.png'
import face from '../../assets/images/face-icon.png'
import insta from '../../assets/images/insta-icon.png'
import twitter from '../../assets/images/twitter-icon.png'

const Footer = () => (
  <ContainerFooter>
    <Link to="/">
      <img src={logo} alt="efood" />
    </Link>
    <SocialMedias>
      <SocialMediaItem>
        <Link to="#">
          <img src={insta} alt="Instagram" />
        </Link>
      </SocialMediaItem>
      <SocialMediaItem>
        <Link to="#">
          <img src={face} alt="FaceBook" />
        </Link>
      </SocialMediaItem>
      <SocialMediaItem>
        <Link to="#">
          <img src={twitter} alt="Twitter" />
        </Link>
      </SocialMediaItem>
    </SocialMedias>
    <TextoFooter>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.
    </TextoFooter>
  </ContainerFooter>
)

export default Footer
