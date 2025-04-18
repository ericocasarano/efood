import { Restaurante } from '../../pages/Home'
import ItemPerfil from '../ItemPerfil'
import { List, Modal, ModalContent } from './styles'
import close from '../../assets/icons/close.png'
import { CardapioItem } from '../../pages/Home'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import Loader from '../Loader'

type Props = {
  perfilRestaurantes: Restaurante[]
  isLoading: boolean
}

const ItemListPerfil = ({ perfilRestaurantes, isLoading }: Props) => {
  const [itemSelecionado, setItemSelecionado] = useState<CardapioItem | null>(
    null
  )
  const [modalAberto, setModalAberto] = useState(false)

  const abrirModal = (item: CardapioItem) => {
    setItemSelecionado(item)
    setModalAberto(true)
  }

  const fecharModal = () => {
    setItemSelecionado(null)
    setModalAberto(false)
  }

  const formatarPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }

  const dispatch = useDispatch()

  const addToCart = (item: CardapioItem) => {
    dispatch(add(item))
    dispatch(open())
  }

  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="container">
      <List>
        {perfilRestaurantes.map((perfil) =>
          perfil.cardapio && perfil.cardapio.length > 0 ? (
            perfil.cardapio.map((item) => (
              <li onClick={() => abrirModal(item)} key={item.id}>
                <ItemPerfil
                  image={item.foto}
                  title={item.nome}
                  description={item.descricao}
                />
              </li>
            ))
          ) : (
            <li key={`sem-cardapio-${perfil.id}`}>Sem itens disponíveis.</li>
          )
        )}
      </List>

      {modalAberto && itemSelecionado && (
        <Modal>
          <ModalContent>
            <header>
              <img onClick={fecharModal} src={close} alt="Fechar" />
            </header>
            <div>
              <img src={itemSelecionado.foto} alt={itemSelecionado.nome} />
              <div>
                <h2>{itemSelecionado.nome}</h2>
                <p>{itemSelecionado.descricao}</p>
                <p>Porção: {itemSelecionado.porcao}</p>
                <p>Preço: {formatarPreco(itemSelecionado.preco)}</p>
                <a href="#" onClick={() => addToCart(itemSelecionado)}>
                  Adicionar ao carrinho
                </a>
              </div>
            </div>
          </ModalContent>
          <div className="overlay" onClick={fecharModal}></div>
        </Modal>
      )}
    </div>
  )
}

export default ItemListPerfil
