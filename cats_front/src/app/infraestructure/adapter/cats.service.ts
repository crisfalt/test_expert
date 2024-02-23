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

  getCats(): CatModel[] {
    return [
      {
        id: '1000',
        name: 'Bamboo Watch',
        category: 'Siamese',
        image: 'https://picsum.photos/200/200?random=1',
        price: 65,
        quantity: 24
      },
      {
        id: '1001',
        name: 'Black Watch',
        category: 'Persian',
        image: 'https://picsum.photos/200/200?random=2',
        price: 72,
        quantity: 61
      },
      {
        id: '1002',
        name: 'Blue Band',
        category: 'Maine Coon',
        image: 'https://picsum.photos/200/200?random=3',
        price: 79,
        quantity: 2
      },
      {
        id: '1003',
        name: 'Blue T-Shirt',
        category: 'Scottish Fold',
        image: 'https://picsum.photos/200/200?random=4',
        price: 29,
        quantity: 25
      },
      {
        id: '1004',
        name: 'Bracelet',
        category: 'Sphynx',
        image: 'https://picsum.photos/200/200?random=5',
        price: 15,
        quantity: 73
      },
      {
        id: '1005',
        name: 'Brown Purse',
        category: 'British Shorthair',
        image: 'https://picsum.photos/200/200?random=6',
        price: 120,
        quantity: 0
      },
      {
        id: '1006',
        name: 'Chakra Bracelet',
        image: 'https://picsum.photos/200/200?random=7',
        category: 'Ragdoll',
        price: 32,
        quantity: 5
      },
      {
        id: '1007',
        name: 'Galaxy Earrings',
        image: 'https://picsum.photos/200/200?random=8',
        category: 'Bengal',
        price: 34,
        quantity: 23
      },
      {
        id: '1008',
        name: 'Game Controller',
        category: 'American Bobtail',
        image: 'https://picsum.photos/200/200?random=9',
        price: 99,
        quantity: 2
      },
      {
        id: '1009',
        name: 'Gaming Set',
        category: 'Norwegian Forest',
        image: 'https://picsum.photos/200/200?random=10',
        price: 299,
        quantity: 63
      },
      {
        id: '1010',
        name: 'Gold Phone Case',
        image: 'https://picsum.photos/200/200?random=11',
        category: 'Persian',
        price: 24,
        quantity: 0
      },
      {
        id: '1011',
        name: 'Green Earbuds',
        image: 'https://picsum.photos/200/200?random=12',
        category: 'Maine Coon',
        price: 89,
        quantity: 23
      },
      {
        id: '1012',
        name: 'Green T-Shirt',
        image: 'https://picsum.photos/200/200?random=13',
        category: 'Siamese',
        price: 49,
        quantity: 74
      },
      {
        id: '1013',
        name: 'Grey T-Shirt',
        category: 'Scottish Fold',
        image: 'https://picsum.photos/200/200?random=14',
        price: 48,
        quantity: 0
      },
      {
        id: '1014',
        name: 'Headphones',
        category: 'Ragdoll',
        image: 'https://picsum.photos/200/200?random=15',
        price: 175,
        quantity: 8
      },
      {
        id: '1015',
        name: 'Light Green T-Shirt',
        category: 'British Shorthair',
        image: 'https://picsum.photos/200/200?random=16',
        price: 49,
        quantity: 34
      },
      {
        id: '1016',
        name: 'Lime Band',
        category: 'Sphynx',
        image: 'https://picsum.photos/200/200?random=17',
        price: 79,
        quantity: 12
      },
      {
        id: '1017',
        name: 'Mini Speakers',
        image: 'https://picsum.photos/200/200?random=18',
        category: 'Bengal',
        price: 85,
        quantity: 42
      },
      {
        id: '1018',
        name: 'Painted Phone Case',
        image: 'https://picsum.photos/200/200?random=19',
        category: 'Ragdoll',
        price: 56,
        quantity: 41
      },
      {
        id: '1019',
        name: 'Pink Band',
        category: 'Maine Coon',
        image: 'https://picsum.photos/200/200?random=20',
        price: 79,
        quantity: 63
      },
      {
        id: '1020',
        name: 'Pink Purse',
        category: 'American Bobtail',
        image: 'https://picsum.photos/200/200?random=21',
        price: 110,
        quantity: 0
      }
    ];
  }


  get(id: String): Observable<CatModel> {
    return this.http.get<CatModel>(this._url + id);
  }
}
