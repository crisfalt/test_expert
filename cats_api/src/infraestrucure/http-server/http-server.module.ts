import { HttpModule } from '@nestjs/axios'
import { Module } from '@nestjs/common'
import { ImageUseCase } from 'src/core/application/use-cases/image.use-cate'
import { CatsUseCase } from '../../core/application/use-cases/cats.use-case'
import { CatsController } from './controllers/cats.controller'

@Module({
  imports: [HttpModule],
  controllers: [CatsController],
  providers: [CatsUseCase, ImageUseCase]
})
export class HttpServerModule {}
