import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core'
import { Table, TableLazyLoadEvent } from 'primeng/table';
import { CatUseCase } from 'src/app/core/application/use-cases/cat-use.case';
import { CatModel } from 'src/app/core/domain/models/cat.model';

@Component({
  selector: 'app-root',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent {

  @ViewChild('dt1') dt1!: Table

  cats!: CatModel[];
  displayDialog: boolean = false;
  catId: string = '';
  listCats!: CatModel[]
  loading: boolean = false;
  selectedItem: string = '';

  constructor(private catUseCase: CatUseCase, private cdr: ChangeDetectorRef) { }

  async ngOnInit() {
    await this.loadListBreeds();
  }

  async loadListBreeds() {
    this.listCats = await this.catUseCase.getLists();
  }

  async loadTable(event?: TableLazyLoadEvent | Event, type = 'filter') {
    let search = ''
    if (type === 'search') {
      event = event as Event
      search = (event.target as HTMLInputElement).value
      if (search === '') this.dt1.clear()
    }
    this.loading = true;
    this.cats = await this.catUseCase.searchAll(search);
    this.loading = false;
  }

  showDialog(id: string) {
    this.displayDialog = true;
    this.catId = id
  }

  hideDialog() {
    this.displayDialog = false;
  }

  applyFilter(event: Event) {
    return (event.target as HTMLInputElement).value;
  }
}
