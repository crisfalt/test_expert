import { NgModule } from '@angular/core'
import { CatsComponent } from './views/view-cats/cats.component'
import { ButtonModule } from 'primeng/button'
import { UiRoutingModule } from './ui-routing.module'
import { TableModule } from 'primeng/table'
import { DropdownModule } from 'primeng/dropdown'
import { CommonModule } from '@angular/common'
import { StyleClassModule } from 'primeng/styleclass'
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { ModalCatsComponent } from './views/view-cats/modal-cats/modal-cats.component'
@NgModule({
  declarations: [CatsComponent, ModalCatsComponent],
  imports: [
    CommonModule,
    ButtonModule,
    UiRoutingModule,
    TableModule,
    DropdownModule,
    DialogModule,
    TagModule,
    StyleClassModule
  ],
  providers: [],
  bootstrap: []
})
export class UiModule { }
