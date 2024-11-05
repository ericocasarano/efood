import Hero from '../../components/Hero'
import ItemList from '../../components/ItemList'
import Restaurante from '../../models/Restaurante'
import tratoria from '../../assets/images/tratoria.png'
import sushi from '../../assets/images/sushi.png'

const listaRestaurantes: Restaurante[] = [
  {
    id: 1,
    tags: ['Destaque da Semana', 'Japonesa'],
    image: sushi,
    title: 'Hioki Sushi ',
    nota: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    linkButton: '/hioki-sushi'
  },
  {
    id: 2,
    tags: ['Italiana'],
    image: tratoria,
    title: 'La Dolce Vita Trattoria',
    nota: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    linkButton: '/vita-tratoria'
  },
  {
    id: 3,
    tags: ['Italiana'],
    image: tratoria,
    title: 'La Dolce Vita Trattoria',
    nota: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    linkButton: '/vita-tratoria'
  },
  {
    id: 4,
    tags: ['Italiana'],
    image: tratoria,
    title: 'La Dolce Vita Trattoria',
    nota: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    linkButton: '/vita-tratoria'
  }
]

const Home = () => (
  <>
    <Hero />
    <ItemList restaurantes={listaRestaurantes} />
  </>
)

export default Home
