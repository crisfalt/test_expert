import { NgModule } from '@angular/core'
import { CatsComponent } from './view-cats/cats.component'
import { ButtonModule } from 'primeng/button'
import { UiRoutingModule } from './ui-routing.module'

@NgModule({
  declarations: [CatsComponent],
  imports: [ButtonModule, UiRoutingModule],
  providers: [],
  bootstrap: []
})
export class UiModule {}
