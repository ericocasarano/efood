import Button from '../Button'
import { Card, Descricao, Titulo } from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const ItemPerfil = ({ image, title, description }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Button type="button" title="Adicionar ao carrinho">
      Adicionar ao carrinho
    </Button>
  </Card>
)

export default ItemPerfil
