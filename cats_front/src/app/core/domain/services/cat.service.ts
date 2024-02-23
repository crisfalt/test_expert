import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatPort } from '../ports/cat.port';
import { CatModel } from '../models/cat.model';
import { lastValueFrom } from 'rxjs';
import { ResponseModel } from 'src/app/infraestructure/adapter/models/reponse.model';
@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private catPort: CatPort) { }

  async getSearch(search: string): Promise<ResponseModel<CatModel[]>> {
    return await lastValueFrom(this.catPort.search({ filter: search }))
  }

  async getLists(): Promise<CatModel[]> {
    return await lastValueFrom(this.catPort.getLists())
  }

  async getForId(id: String): Promise<CatModel> {
    return await lastValueFrom(this.catPort.getForId(id))
  }
}
