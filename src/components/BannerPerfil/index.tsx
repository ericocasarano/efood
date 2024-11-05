import { CategoriaBanner, ContainerBanner, TituloBanner } from './styles'

type Props = {
  tituloRestaurante: string
}

const BannerPerfil = ({ tituloRestaurante }: Props) => (
  <ContainerBanner>
    <div className="container">
      <CategoriaBanner>Italina</CategoriaBanner>
      <TituloBanner>{tituloRestaurante}</TituloBanner>
    </div>
  </ContainerBanner>
)

export default BannerPerfil
