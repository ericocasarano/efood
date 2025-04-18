import Hero from '../../components/Hero'
import ItemList from '../../components/ItemList'

import { useGetRestaurantsQuery } from '../services/api'

export interface CardapioItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  return (
    <>
      <Hero />
      <ItemList restaurantes={restaurants || []} isLoading={isLoading} />
    </>
  )
}

export default Home
