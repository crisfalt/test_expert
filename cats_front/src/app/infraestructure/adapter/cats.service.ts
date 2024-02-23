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

  private _url = '';
  constructor(private http: HttpClient) { super(); }
  get(id: String): Observable<CatModel> {
    return this.http.get<CatModel>(this._url + id);
  }
}
