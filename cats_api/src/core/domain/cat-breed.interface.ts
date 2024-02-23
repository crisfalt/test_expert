import { Image } from './image.interface'

export interface CatBreed {
  image?: Image
  weight: {
    imperial: string
    metric: string
  }
  id: string
  name: string
  cfa_url?: string // Las URLs pueden ser opcionales si no están presentes en todos los objetos
  vetstreet_url?: string
  vcahospitals_url?: string
  temperament: string
  origin: string
  country_codes: string
  country_code: string
  description: string
  life_span: string
  indoor: number
  lap: number
  alt_names?: string // Se considera opcional en caso de que algunas razas no tengan nombres alternativos
  adaptability: number
  affection_level: number
  child_friendly: number
  dog_friendly: number
  energy_level: number
  grooming: number
  health_issues: number
  intelligence: number
  shedding_level: number
  social_needs: number
  stranger_friendly: number
  vocalisation: number
  experimental: number
  hairless: number
  natural: number
  rare: number
  rex: number
  suppressed_tail: number
  short_legs: number
  wikipedia_url?: string
  hypoallergenic: number
  reference_image_id: string
}
