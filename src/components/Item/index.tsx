import Button from '../Button'
import Tag from '../Tag'
import {
  Card,
  Descricao,
  Nota,
  SectionCard,
  SectionTitulo,
  Tags,
  Titulo
} from './styles'

import star from '../../assets/icons/icons-star.png'

type Props = {
  tags: string[]
  image: string
  title: string
  nota: string
  description: string
  linkButton: string
}

const Item = ({ tags, image, title, nota, description, linkButton }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Tags>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </Tags>
    <SectionCard>
      <SectionTitulo>
        <Titulo>{title}</Titulo>
        <Nota>
          <span>{nota}</span>
          <img src={star} alt="Star" />
        </Nota>
      </SectionTitulo>
      <Descricao>{description}</Descricao>
      <Button type="link" title="Saiba mais" to={linkButton}>
        Saiba Mais
      </Button>
    </SectionCard>
  </Card>
)

export default Item
