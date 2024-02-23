import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CatPort } from 'src/app/core/domain/ports/cat.port';
import { CatModel } from 'src/app/core/domain/models/cat.model';

@Injectable({
  providedIn: 'root'
})
export class CatApiService extends CatPort {

  private _url = 'https://jsonplaceholder.typicode.com/albums/';
  constructor(private http: HttpClient) { super(); }
  getByID(id: String): Observable<CatModel> {
    return this.http.get<CatModel>(this._url + id).pipe(delay(2000));
  }
  getAll(): Observable<CatModel[]> {
    return this.http.get<Array<CatModel>>(this._url);
  }
  saveNew(_alb: CatModel): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
