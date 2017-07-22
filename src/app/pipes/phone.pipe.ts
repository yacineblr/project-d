import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    let phone: String = '';
    // tslint:disable-next-line:curly
    for (let i = 0; i < value.length; i++) {
      if (i % 2 === 0 ) { phone += ' ' + value[i]; } else { phone += value[i]; }
    }
    return phone;
  }

}
