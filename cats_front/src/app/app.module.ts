import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations'

import { ButtonModule } from 'primeng/button'
import { AppRoutingModule } from './app-routing.module'
import { HttpClientModule } from '@angular/common/http'
import { CatPort } from './core/domain/ports/cat.port'
import { CatApiService } from './infraestructure/adapter/cats.service'
import { UiModule } from './ui/ui.module'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    UiModule
  ],
  providers: [{ provide: CatPort, useClass: CatApiService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
