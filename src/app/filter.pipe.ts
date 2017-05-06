import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(herbs: any, term: any): any {
    if (term === undefined) {
      return herbs;
    } else {
      return herbs.filter(function(herb) {
        return herb.name.toLowerCase().includes(term.toLowerCase());
      });
    }
  }
}
