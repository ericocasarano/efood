import { ContainerHeader, LinkCart, TituloPerfil } from './styles'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => (
  <ContainerHeader>
    <div className="container">
      <TituloPerfil>Restaurantes</TituloPerfil>
      <Link to="/">
        <img src={logo} alt="efood" />
      </Link>
      <LinkCart href="#">0 - produtos(s)</LinkCart>
    </div>
  </ContainerHeader>
)

export default Header
