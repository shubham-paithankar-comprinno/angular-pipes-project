import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertKmtoMiles'
})
export class ConvertKmtoMilesPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    if (value === 0) {
      return
    }
    return value * 1.6
  }

}
