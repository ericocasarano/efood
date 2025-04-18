import { ContainerHeader, LinkCart, TituloPerfil } from './styles'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <ContainerHeader>
      <div className="container">
        <TituloPerfil>Restaurantes</TituloPerfil>
        <Link to="/">
          <img src={logo} alt="efood" />
        </Link>
        <LinkCart onClick={openCart}>{items.length} - produtos(s)</LinkCart>
      </div>
    </ContainerHeader>
  )
}

export default Header
