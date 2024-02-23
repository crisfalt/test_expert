import { HttpService } from '@nestjs/axios'
import { BadRequestException, Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { firstValueFrom, map } from 'rxjs'
import { CatBreedList } from '../../domain/cat-breed-list.interface'
import { CatBreed } from '../../domain/cat-breed.interface'
import { ImageUseCase } from './image.use-cate'

@Injectable()
export class CatsUseCase {
  private readonly aceBaseURI = null
  constructor(
    private readonly httpService: HttpService,
    private readonly imageUseCase: ImageUseCase,
    private configService: ConfigService
  ) {
    this.aceBaseURI = this.configService.get<string>('API_URL')
  }

  async breeds(): Promise<CatBreedList[]> {
    try {
      const breeds: CatBreed[] = await firstValueFrom(
        this.httpService
          .get(`${this.aceBaseURI}breeds`)
          .pipe(map((response: any) => response.data))
      )
      const catBreedList: CatBreedList[] = breeds.map((breed) => {
        return {
          id: breed.id,
          name: breed.name
        } as CatBreedList
      })

      return catBreedList
    } catch (error) {
      throw new BadRequestException('No se encontro el servicio')
    }
  }

  async breedsById(id: string): Promise<CatBreed> {
    try {
      const breed: CatBreed = await firstValueFrom(
        this.httpService
          .get(`${this.aceBaseURI}breeds/${id}`)
          .pipe(map((response: any) => response.data))
      )

      const image = await this.imageUseCase.getById(breed.reference_image_id)
      delete image.breeds
      breed.image = image ?? image

      return breed
    } catch (error) {
      throw new BadRequestException('No se encontro el servicio')
    }
  }

  async search(filter: string): Promise<CatBreed[]> {
    try {
      const breeds: CatBreed[] = await firstValueFrom(
        this.httpService
          .get(`${this.aceBaseURI}breeds`)
          .pipe(map((response: any) => response.data))
      )

      const breedsFilter: CatBreed[] = breeds.filter(
        (cat) => cat.id.includes(filter) || cat.name.includes(filter)
      )

      return breedsFilter
    } catch (error) {
      throw new BadRequestException('No se encontro el servicio')
    }
  }
}
