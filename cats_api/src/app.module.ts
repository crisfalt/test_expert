import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { CoreModule } from './core/core.module'
import { HttpServerModule } from './infraestrucure/http-server/http-server.module'

@Module({
  imports: [
    CoreModule,
    HttpServerModule,
    ConfigModule.forRoot({
      isGlobal: true // Hace que las variables de configuración estén disponibles globalmente
    })
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
