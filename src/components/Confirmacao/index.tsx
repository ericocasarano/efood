// src/components/Confirmacao/index.tsx

import React from 'react'
import {
  MessageContainer,
  OrderTitle,
  MessageText,
  ButtonConcluir,
  ContainerConfirm
} from './styles'

type ConfirmacaoProps = {
  orderData?: {
    orderId: string
  }
}

const Confirmacao: React.FC<ConfirmacaoProps> = ({ orderData }) => {
  const mensagemFixa = `Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.

Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.

Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.

Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!`

  return (
    <ContainerConfirm>
      <MessageContainer>
        <OrderTitle>
          Pedido realizado{orderData?.orderId ? ` - ${orderData.orderId}` : ''}
        </OrderTitle>
        <MessageText style={{ whiteSpace: 'pre-line' }}>
          {mensagemFixa}
        </MessageText>
        <ButtonConcluir onClick={() => window.location.reload()}>
          Concluir
        </ButtonConcluir>
      </MessageContainer>
    </ContainerConfirm>
  )
}

export default Confirmacao
