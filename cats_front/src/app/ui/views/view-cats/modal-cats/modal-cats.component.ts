import { Component, EventEmitter, Input, Output } from '@angular/core'
import { LazyLoadEvent } from 'primeng/api';
import { lastValueFrom } from 'rxjs';
import { CatUseCase } from 'src/app/core/application/use-cases/cat-use.case';
import { CatModel } from 'src/app/core/domain/models/cat.model';

@Component({
  selector: 'app-modal-cats',
  templateUrl: './modal-cats.component.html',
  styleUrls: ['./modal-cats.component.scss'],
})
export class ModalCatsComponent {
  loading: boolean = false;
  cat!: CatModel;
  @Input() displayDialog: boolean = false;
  @Input() id: string = '';
  @Output() closed = new EventEmitter();

  constructor(private catUseCase: CatUseCase) { }

  async ngOnInit() {
    this.loading = true;
    await this.loadCatId();
    this.loading = false;
  }

  async loadCatId(){
    this.cat = await this.catUseCase.getForId(this.id)
  }

  hideDialog() {
    this.displayDialog = false;
    this.closed.emit();
  }

}
