import { Container, Logo, Titulo } from './styles'

import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Hero = () => (
  <Container>
    <Logo>
      <Link to="/">
        <img src={logo} alt="efood" />
      </Link>
    </Logo>
    <Titulo>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </Titulo>
  </Container>
)
export default Hero
