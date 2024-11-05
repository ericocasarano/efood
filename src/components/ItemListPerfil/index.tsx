import PerfilRestaurante from '../../models/PerfliRestaurante'
import ItemPerfil from '../ItemPerfil'
import { List } from './styles'

type Props = {
  perfilRestaurantes: PerfilRestaurante[]
}

const ItemListPerfil = ({ perfilRestaurantes }: Props) => (
  <div className="container">
    <List>
      {perfilRestaurantes.map((perfilRestaurantes) => (
        <ItemPerfil
          key={perfilRestaurantes.id}
          image={perfilRestaurantes.image}
          title={perfilRestaurantes.title}
          description={perfilRestaurantes.description}
        />
      ))}
    </List>
  </div>
)

export default ItemListPerfil
