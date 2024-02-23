import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common'
import { Response } from 'express'
import { CatBreed } from 'src/core/domain/cat-breed.interface'
import { CatBreedList } from '../../../core/domain/cat-breed-list.interface'
import { CatsUseCase } from './../../../core/application/use-cases/cats.use-case'

@Controller('api/cats')
export class CatsController {
  constructor(private readonly catsUseCase: CatsUseCase) {}

  @Get('/breeds')
  async allBreeds(): Promise<CatBreedList[]> {
    return this.catsUseCase.breeds()
  }

  @Get('/breeds/:id')
  async breedById(@Param('id') id: string): Promise<CatBreed> {
    return this.catsUseCase.breedsById(id)
  }

  @Post('/search')
  async search(
    @Body('filter') filter: string,
    @Res() res: Response
  ): Promise<CatBreed[]> {
    const breedsFilter = await this.catsUseCase.search(filter)
    res.status(200).json({
      statusCode: 200,
      message: 'Datos filtrados',
      data: breedsFilter
    })
    return
  }
}
