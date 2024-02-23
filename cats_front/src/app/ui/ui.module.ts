import { NgModule } from '@angular/core'
import { CatsComponent } from './view-cats/cats.component'
import { ButtonModule } from 'primeng/button'
import { UiRoutingModule } from './ui-routing.module'
import { TableModule } from 'primeng/table'
import { DropdownModule } from 'primeng/dropdown'
@NgModule({
  declarations: [CatsComponent],
  imports: [ButtonModule, UiRoutingModule, TableModule, DropdownModule],
  providers: [],
  bootstrap: []
})
export class UiModule {}
