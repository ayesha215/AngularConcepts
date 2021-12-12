import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agePipe',
})
export class AgePipePipe implements PipeTransform {
  transform(value: string): number {
    let currentYear: any = new Date().getFullYear();
    let teamsBirthYear: any = new Date(value).getFullYear();
    let teamsAge = currentYear - teamsBirthYear;

    return teamsAge;
  }
}
