import { Component } from '@angular/core'
import { lastValueFrom } from 'rxjs';
import { CatUseCase } from 'src/app/core/application/use-cases/cat-use.case';
import { CatModel } from 'src/app/core/domain/models/cat.model';

@Component({
  selector: 'app-root',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss'],
})
export class CatsComponent {
  cats!: CatModel[];
  displayDialog: boolean = false;

  constructor(private catUseCase: CatUseCase) { }

  async ngOnInit() {
    const response = await this.catUseCase.getCats();
    this.cats = response
  }

  showDialog() {
    this.displayDialog = true;
  }

  hideDialog() {
    this.displayDialog = false;
  }
}
