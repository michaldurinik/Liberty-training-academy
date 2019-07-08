import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sum'
})
export class SumPipe implements PipeTransform {
  constructor() {
    console.log('Creating Sum Pipe');
  }

  transform(numbers: number[]): any {
    console.log('- Performing Sum Transform');
    return numbers.reduce((total, item) => total + item);
  }
}
