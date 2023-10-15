import { Injectable } from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()

export class ProductService {

  constructor() { }

  getProducts(): ProductType[] {
    return [
      {
        image: 'macaroon-1.png',
        title: 'Макарун с малиной',
        price: 1.7
      },
      {
        image: 'macaroon-2.png',
        title: 'Макарун с манго',
        price: 1.7
      },
      {
        image: 'macaroon-3.png',
        title: 'Пирог с ванилью',
        price: 1.7
      },
      {
        image: 'macaroon-4.png',
        title: 'Пирог с фисташками',
        price: 1.7
      }
    ];
  }
}
