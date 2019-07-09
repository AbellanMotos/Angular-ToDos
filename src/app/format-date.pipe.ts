import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    let date = new Date(value);
    let months = [
      'enero',
      'febrero',
      'marzo',
      'abril',
      'mayo',
      'junio',
      'julio',
      'agosto',
      'septiembre',
      'octubre',
      'noviembre',
      'diciembre'
    ]
    return `${date.getDate()} - ${months[date.getMonth()]} - ${date.getFullYear()}`;
  }

}
