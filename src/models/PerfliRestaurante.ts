class PerfilRestaurante {
  image: string
  title: string
  description: string
  id: number

  constructor(title: string, description: string, image: string, id: number) {
    this.title = title
    this.description = description
    this.image = image
    this.id = id
  }
}

export default PerfilRestaurante