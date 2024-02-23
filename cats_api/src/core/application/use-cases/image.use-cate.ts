import { HttpService } from '@nestjs/axios'
import { BadRequestException, Injectable } from '@nestjs/common'
import { firstValueFrom, map } from 'rxjs'
import { Image } from '../../domain/image.interface'

@Injectable()
export class ImageUseCase {
  private readonly aceBaseURI = process.env.API_URL
  constructor(private readonly httpService: HttpService) {}
  async getById(id: string): Promise<Image> {
    try {
      const image: Image = await firstValueFrom(
        this.httpService
          .get(`${this.aceBaseURI}images/${id}`)
          .pipe(map((response: any) => response.data))
      )

      return image
    } catch (error) {
      throw new BadRequestException('No se encontro el servicio')
    }
  }

  async getByBreedId(breedId: string): Promise<Image> {
    try {
      const image: Image = await firstValueFrom(
        this.httpService
          .get(`${this.aceBaseURI}images/search?breed_ids=${breedId}`)
          .pipe(map((response: any) => response.data))
      )

      return image
    } catch (error) {
      throw new BadRequestException('No se encontro el servicio')
    }
  }
}
