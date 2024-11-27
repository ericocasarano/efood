import { Restaurante } from '../../pages/Home'
import Item from '../Item'
import { List } from './styles'

type Props = {
  restaurantes: Restaurante[]
}

const ItemList = ({ restaurantes }: Props) => {
  const getRestTags = (rest: Restaurante) => {
    const tags = [rest.tipo]
    if (rest.destacado) {
      tags.push('Destaque da semana')
    }

    return tags
  }

  return (
    <div className="container">
      <List>
        {restaurantes.map((restaurante) => (
          <li key={restaurante.id}>
            <Item
              id={restaurante.id}
              tags={getRestTags(restaurante)}
              image={restaurante.capa}
              title={restaurante.titulo}
              nota={restaurante.avaliacao}
              description={restaurante.descricao}
            />
          </li>
        ))}
      </List>
    </div>
  )
}

export default ItemList
