import { CategoriaBanner, ContainerBanner, TituloBanner } from './styles'
import Loader from '../Loader'
type Props = {
  tituloRestaurante: string
  tipoRestaurante: string
  capaRestaurante: string
  isLoading: boolean
}

const BannerPerfil = ({
  tituloRestaurante,
  tipoRestaurante,
  capaRestaurante,
  isLoading
}: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <ContainerBanner style={{ backgroundImage: `url(${capaRestaurante})` }}>
      <div className="container">
        <CategoriaBanner>{tipoRestaurante}</CategoriaBanner>
        <TituloBanner>{tituloRestaurante}</TituloBanner>
      </div>
    </ContainerBanner>
  )
}

export default BannerPerfil
