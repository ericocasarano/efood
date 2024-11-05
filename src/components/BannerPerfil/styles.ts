import styled from 'styled-components'
import bannerTratoria from '../../assets/images/banner-tratoria.png'
import { cores } from '../../styles'

export const ContainerBanner = styled.div`
  background-image: url(${bannerTratoria});

  .container {
    display: block;
 `
export const CategoriaBanner = styled.p`
  font-weight: 100;
  font-size: 32px;
  color: ${cores.branco};
  padding: 25px 0 156px 0;
`
export const TituloBanner = styled.p`
  font-weight: 900;
  font-size: 32px;
  color: ${cores.branco};
  padding-bottom: 32px;
`
