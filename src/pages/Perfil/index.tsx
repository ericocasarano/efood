import marguerita from '../../assets/images/tratoria-marguerita.png'
import PerfilRestaurante from '../../models/PerfliRestaurante'
import ItemListPerfil from '../../components/ItemListPerfil'
import Header from '../../components/Header'
import BannerPerfil from '../../components/BannerPerfil'

const listaRestaurantesPerfl: PerfilRestaurante[] = [
  {
    id: 1,
    image: marguerita,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    image: marguerita,
    title: 'Pizza Mussarela',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    image: marguerita,
    title: 'Pizza Mussarela',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    image: marguerita,
    title: 'Pizza Mussarela',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 5,
    image: marguerita,
    title: 'Pizza Mussarela',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 6,
    image: marguerita,
    title: 'Pizza Mussarela',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const Perfil = () => (
  <>
    <Header />
    <BannerPerfil tituloRestaurante="La Dolce Vita Trattoria" />
    <ItemListPerfil perfilRestaurantes={listaRestaurantesPerfl} />
  </>
)

export default Perfil
