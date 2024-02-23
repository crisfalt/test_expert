import { Component, EventEmitter, Input, Output } from '@angular/core'
import { lastValueFrom } from 'rxjs';
import { CatUseCase } from 'src/app/core/application/use-cases/cat-use.case';
import { CatModel } from 'src/app/core/domain/models/cat.model';

@Component({
  selector: 'app-modal-cats',
  templateUrl: './modal-cats.component.html',
  styleUrls: ['./modal-cats.component.scss'],
})
export class ModalCatsComponent {
  cats!: CatModel[];
  @Input() displayDialog: boolean = false;
  @Output() closed = new EventEmitter();

  constructor(private catUseCase: CatUseCase) { }

  async ngOnInit() {
    const response = await this.catUseCase.getCats();
    this.cats = response
  }

  hideDialog() {
    this.displayDialog = false;
    this.closed.emit();
  }

}
