import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatService } from '../../domain/services/cat.service';
import { CatModel } from '../../domain/models/cat.model';
@Injectable({
  providedIn: 'root'
})
export class CatUseCase {
  constructor( private catService: CatService) { }

  async searchAll(search: string): Promise<CatModel[]> {
    const response = await this.catService.getSearch(search);
    return response.data
  }

  async getForId(id: string): Promise<CatModel> {
    const response = await this.catService.getForId(id);
    return response
  }

  async getLists(): Promise<CatModel[]> {
    const response = await this.catService.getLists();
    return response
  }
}
