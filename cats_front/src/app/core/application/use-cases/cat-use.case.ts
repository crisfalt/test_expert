import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CatUseCase {

  private _url = 'https://jsonplaceholder.typicode.com/albums/';
  constructor(private http: HttpClient) { }
}
