import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ReverseString'
})
export class ReverseString implements PipeTransform {

  nvalue: string | undefined

  transform(value: any): any {
  this.nvalue = value.split('').reverse().join('');
    return this.nvalue;
  }

}
