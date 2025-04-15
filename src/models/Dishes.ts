class Dishes {
  category: string
  description: string
  image: string
  infos: string[]
  title: string
  id: number
  nota: string

  constructor(
    category: string,
    description: string,
    image: string,
    infos: string[],
    title: string,
    id: number,
    nota: string
  ) {
    this.category = category
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
    this.id = id
    this.nota = nota
  }
}

export default Dishes
