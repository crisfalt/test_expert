import { Observable } from 'rxjs';
import { CatModel } from '../models/cat.model';

export abstract class CatPort {
  abstract get(id: String): Observable<CatModel>;
  abstract getCats(): CatModel[]
}
