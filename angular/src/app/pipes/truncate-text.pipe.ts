import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText'
})
export class TruncateTextPipe implements PipeTransform {

  transform(text: string): string {
    if (text.length > 95) {
      return text.substring(0, 95) + '...';
    }
    return text;
  }
}
