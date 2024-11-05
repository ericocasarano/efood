import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  color: ${cores.vermelho};
  background-color: ${cores.bege};
  font-size: 14px;
  font-weight: 700;
  padding-top: 4px;
  padding-bottom: 4px;
  width: 100%;
  border: none;
`
export const ButtonLink = styled(Link)`
  color: ${cores.bege};
  background-color: ${cores.vermelho};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  text-decoration: none;
`
