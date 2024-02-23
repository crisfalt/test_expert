import { Component } from '@angular/core'
import { CatUseCase } from 'src/app/core/application/use-cases/cat-use.case';
import { CatModel } from 'src/app/core/domain/models/cat.model';

@Component({
  selector: 'app-root',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent {
  products!: CatModel[];

  constructor(private catUseCase: CatUseCase) { }

  ngOnInit() {
  }
}
