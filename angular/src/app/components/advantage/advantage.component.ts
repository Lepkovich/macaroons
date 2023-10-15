import {Component, Input} from '@angular/core';
import {AdvantagesType} from "../../types/product.type";

@Component({
  selector: 'advantage',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.scss']
})
export class AdvantageComponent {
  @Input() advantage: AdvantagesType;
  @Input() i!: number;
  constructor() {
    this.advantage = {
      title: '',
      text: ''
    }
  }
}
