import { CategoriaBanner, ContainerBanner, TituloBanner } from './styles'
import Loader from '../Loader' // ajuste o caminho conforme necessário

type Props = {
  tituloRestaurante: string
  tipoRestaurante: string
  isLoading: boolean
}

const BannerPerfil = ({
  tituloRestaurante,
  tipoRestaurante,
  isLoading
}: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <ContainerBanner>
      <div className="container">
        <CategoriaBanner>{tipoRestaurante}</CategoriaBanner>
        <TituloBanner>{tituloRestaurante}</TituloBanner>
      </div>
    </ContainerBanner>
  )
}

export default BannerPerfil
