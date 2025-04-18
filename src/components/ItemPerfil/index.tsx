import Button from '../Button'
import { Card, Descricao, Titulo } from './styles'

type Props = {
  image: string
  title: string
  description: string
  onClick?: () => void // Adicionando a prop onClick como opcional
}

const ItemPerfil = ({ image, title, description }: Props) => {
  return (
    <Card>
      <img src={image} alt={title} />
      <Titulo>{title}</Titulo>
      <Descricao>{description}</Descricao>
      <Button type="button" title="Adicionar ao carrinho">
        Adicionar ao carrinho
      </Button>
    </Card>
  )
}
export default ItemPerfil
