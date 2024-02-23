import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CatService } from '../../domain/services/cat.service';
import { CatModel } from '../../domain/models/cat.model';
@Injectable({
  providedIn: 'root'
})
export class CatUseCase {
  constructor( private catService: CatService) { }

  async getCats(): Promise<CatModel[]> {
    return await this.catService.getCats();
  }
}
