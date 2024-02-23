import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CatPort } from 'src/app/core/domain/ports/cat.port';
import { CatModel } from 'src/app/core/domain/models/cat.model';
import { environment } from 'environments/environment';
import { ResponseModel } from './models/reponse.model';

@Injectable({
  providedIn: 'root'
})
export class CatApiService extends CatPort {

  private _url = environment.url;
  private _prefix = 'cats/'
  constructor(private http: HttpClient) { super(); }


  getForId(id: String): Observable<CatModel> {
    return this.http.get<CatModel>(`${this._url}${this._prefix}breeds/${id}`);
  }

  getLists(): Observable<CatModel[]> {
    return this.http.get<CatModel[]>(`${this._url}${this._prefix}breeds`);
  }

  search(filter: { filter : string}): Observable<ResponseModel<CatModel[]>> {
    return this.http.post<ResponseModel<CatModel[]>>(`${this._url}${this._prefix}search`, filter);
  }
}
