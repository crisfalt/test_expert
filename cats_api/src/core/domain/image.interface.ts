import { CatBreed } from 'src/core/domain/cat-breed.interface'
export interface Image {
  id: string
  url: string
  width: number
  height: number
  breeds: CatBreed[]
}
