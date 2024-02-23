import { Observable } from 'rxjs';
import { CatModel } from '../models/cat.model';
import { ResponseModel } from 'src/app/infraestructure/adapter/models/reponse.model';

export abstract class CatPort {
  abstract getForId(id: String): Observable<CatModel>
  abstract getLists(): Observable<CatModel[]>
  abstract search(filter: { filter: string }): Observable<ResponseModel<CatModel[]>>
}
