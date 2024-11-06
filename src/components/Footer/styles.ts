import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerFooter = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${cores.bege};

  > a > img {
    margin: 40px 0 32px 0;
  }
`
export const SocialMedias = styled.ul`
  display: flex;
`

export const SocialMediaItem = styled.li`
  margin-right: 8px;
`
export const TextoFooter = styled.p`
  margin-right: 8px;
  font-size: 10px;
  font-weight: 400px;
  line-height: 12px;
  margin: 80px 0 40px 0;
  text-align: center;
`
