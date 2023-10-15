import {Component, OnInit} from '@angular/core';
import {AdvantagesType, ProductType} from "./types/product.type";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ProductService] //подключили провайдер на уровне компонента
})
export class AppComponent implements OnInit{

  public products: ProductType[] = [];

  constructor (private productService: ProductService,
               public cartService: CartService ) { //инжектировали сервисы в компонент
  }

  ngOnInit() {
    this.products = this.productService.getProducts() //отдали продукты из сервиса
  }

  public advantages: AdvantagesType[] = [
    {
      title: 'Лучшие продукты',
      text: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      text: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      text: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      text: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    }
  ];


  public formValues = {
    productTitle: '',
    name: '',
    phone: ''
  }
  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    // this.scrollTo(target);
    // this.formValues.productTitle = product.title.toUpperCase();
    alert(product.title + ' добавлен в корзину');
    this.cartService.count++;
    this.cartService.total = this.cartService.total + product.price;
  }

  public phoneNumber = "375293689868";
  public instaLink = 'https://www.instagram.com/';
  public showCart = true;
}
