import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatPort } from '../ports/cat.port';
import { CatModel } from '../models/cat.model';
@Injectable({
  providedIn: 'root'
})
export class CatService {

  private _url = 'https://jsonplaceholder.typicode.com/albums/';
  constructor(private http: HttpClient, private catPort: CatPort) { }

  async getCats(): Promise<CatModel[]> {
    return await this.catPort.getCats();
  }
}
