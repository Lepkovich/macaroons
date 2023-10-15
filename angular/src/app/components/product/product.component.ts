import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductType} from "../../types/product.type";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  @Input() product: ProductType;
  @Input() i!: number;

  @Output() addToCartEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>();
  constructor() {
    this.product = {
      image: '',
      title: '',
      price: 0
    }
  }

  addProductToCart() {
    this.addToCartEvent.emit(this.product);
  }
}
