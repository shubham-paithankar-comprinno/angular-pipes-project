import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertKmtoMiles'
})
export class ConvertKmtoMilesPipe implements PipeTransform {

  transform(value: number, args: string): unknown {
    if (value === 0) {
      return
    }

    switch(args) {
      case 'km': {
        return value * 1.6
      }

      case 'm': {
        return value * 1.6 * 1000
      }

      case 'cm': {
        return value * 1.6 * 1000 * 100
      }
      
      default:
        throw new Error('Target Unit not supported')
    }

  }

}
