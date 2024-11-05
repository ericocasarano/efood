import styled from 'styled-components'
import fundoHero from '../../assets/images/fundo.png'
import { cores } from '../../styles'

export const ContainerHeader = styled.div`
  background-image: url(${fundoHero});
  padding: 62px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const TituloPerfil = styled.p`
  font-size: 18px;
  font-weight: 900;
`
export const LinkCart = styled.a`
  font-size: 18px;
  font-weight: 900;
  text-decoration: none;
  color: ${cores.vermelho};
`
