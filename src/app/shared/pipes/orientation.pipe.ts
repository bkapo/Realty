import { Pipe, PipeTransform } from '@angular/core';

import { Orientation } from '../models/propertyabstract.model';

@Pipe({name: 'orientation'})
export class OrientationPipe implements PipeTransform {
    myvalue: Orientation;
    Orientation: typeof Orientation = Orientation;

  transform(value: number, exponent: string): string {
      return Orientation[value];
  }
}