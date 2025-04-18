import styled from 'styled-components'
import { cores } from '../../styles'

export const ContainerConfirm = styled.div`
  display: flex;
  flex-direction: column;
`

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${cores.vermelho};
  width: 100%;
  max-width: 400px;
  color: ${cores.bege};
`

export const OrderTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
`

export const MessageText = styled.p`
  font-size: 14px;
  margin-bottom: 24px;

  line-height: 22px;
`

export const ButtonConcluir = styled.button`
  background-color: ${cores.bege};
  color: ${cores.vermelho};
  border: none;
  padding: 4px 24px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`
