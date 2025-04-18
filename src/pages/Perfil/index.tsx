import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import BannerPerfil from '../../components/BannerPerfil'
import ItemListPerfil from '../../components/ItemListPerfil'
import { useGetMenuQuery } from '../services/api'

const Perfil = () => {
  const { id } = useParams()
  const { data: perfil, isLoading } = useGetMenuQuery(id!)

  return (
    <>
      <Header />
      <BannerPerfil
        tituloRestaurante={perfil ? perfil.titulo : ''}
        tipoRestaurante={perfil ? perfil.tipo : ''}
        isLoading={isLoading}
      />
      <ItemListPerfil
        perfilRestaurantes={perfil ? [perfil] : []}
        isLoading={isLoading}
      />
    </>
  )
}

export default Perfil
