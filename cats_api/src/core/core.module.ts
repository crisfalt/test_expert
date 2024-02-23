import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { CatsUseCase } from './application/use-cases/cats.use-case'
import { ImageUseCase } from './application/use-cases/image.use-cate'

@Module({
  imports: [HttpModule],
  providers: [CatsUseCase, ImageUseCase],
  exports: [CatsUseCase, ImageUseCase]
})
export class CoreModule {}
