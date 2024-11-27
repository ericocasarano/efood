import Hero from '../../components/Hero'
import ItemList from '../../components/ItemList'
import tratoria from '../../assets/images/tratoria.png'
import sushi from '../../assets/images/sushi.png'
import { useEffect, useState } from 'react'

export interface CardapioItem {
  foto: string
  preço: number
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
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Hero />
      <ItemList restaurantes={restaurantes} />
    </>
  )
}

export default Home
