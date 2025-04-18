import Button from '../Button'
import {
  Botao,
  CartContainer,
  CartItem,
  Overlay,
  Sidebar,
  TotalValue
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove, openCheckout } from '../../store/reducers/cart'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const handleCheckout = () => {
    if (items.length === 0) {
      alert('Adicione itens ao carrinho antes de continuar com a entrega.')
      return
    }

    dispatch(openCheckout())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorTotal) => {
      return (acumulador += valorTotal.preco)
    }, 0)
  }

  const formatarPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formatarPreco(item.preco)}</span>
              </div>
              <Botao onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>

        <TotalValue>
          <p>Valor total</p>
          <p>{formatarPreco(getTotalPrice())}</p>
        </TotalValue>

        <Button
          title="Clique aqui para continuar com a entrega"
          type="button"
          onClick={handleCheckout}
        >
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
