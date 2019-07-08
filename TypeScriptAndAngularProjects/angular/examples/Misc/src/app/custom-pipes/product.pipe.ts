import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'product',
  pure: false
})
export class ProductPipe implements PipeTransform {
  constructor() {
    console.log('Creating Product Pipe');
  }

  transform(numbers: number[], scalar = 1): any {
    console.log('- Performing Product Transform');
    return numbers.reduce((total, item) => total * item) * scalar;
  }
}
