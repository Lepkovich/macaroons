import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(phone: string): string {
    if (!phone) {
      return '';
    }
    // «+375 (29) 368-98-68» 375293689868
    return '+(' + phone.slice(0, 3) + ' (' + phone.slice(3, 5) + ') ' + phone.slice(5, 8) + '-' + phone.slice(8, 10) + '-' + phone.slice(10, 12);
  }

}
