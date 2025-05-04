import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerBanner = styled.div`
  position: relative;
  height: 280px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 0;
  }

  .container {
    position: relative;
    z-index: 1; // apenas 1 para ficar acima do overlay (z-index: 0), mas abaixo de qualquer modal (z-index: 1000+)
    display: block;
  }
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
