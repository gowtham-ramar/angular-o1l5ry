import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  pure: false
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], filter: any): any {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    if (filter.type && filter.type == 'boolean')
    
      return items.filter(item => item[filter.key] == filter.value);
  else
    return items.filter(item => item[filter.key].toLowerCase().indexOf(filter.value.toLowerCase()) !== -1);
  }
}
