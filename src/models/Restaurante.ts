class Restaurante {
  tags: string[]
  image: string
  title: string
  nota: string
  description: string
  linkButton: string
  id: number

  constructor(
    title: string,
    nota: string,
    description: string,
    tags: string[],
    image: string,
    linkButton: string,
    id: number
  ) {
    this.title = title
    this.nota = nota
    this.description = description
    this.tags = tags
    this.image = image
    this.linkButton = linkButton
    this.id = id
  }
}

export default Restaurante
