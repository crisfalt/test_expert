import { Observable } from 'rxjs';
import { CatModel } from '../models/cat.model';

export abstract class CatPort {
  abstract getByID(id: String): Observable<CatModel>;
  abstract getAll(): Observable<Array<CatModel>>;
  abstract saveNew(_alb: CatModel): Observable<void>;
}
