import Restaurante from '../../models/Restaurante'
import Item from '../Item'
import { List } from './styles'

type Props = {
  restaurantes: Restaurante[]
}

const ItemList = ({ restaurantes }: Props) => (
  <div className="container">
    <List>
      {restaurantes.map((restaurante) => (
        <Item
          key={restaurante.id}
          tags={restaurante.tags}
          image={restaurante.image}
          title={restaurante.title}
          nota={restaurante.nota}
          description={restaurante.description}
          linkButton={restaurante.linkButton}
        />
      ))}
    </List>
  </div>
)

export default ItemList
