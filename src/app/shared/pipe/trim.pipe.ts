import { Pipe, PipeTransform } from '@angular/core';

/**
 * Shortens the length of a text and ads '...' as postfix
 */
@Pipe({name: 'trim'})
export class TrimPipe implements PipeTransform {

  transform(text: string, maxLength = 20): string {
    if (!text || text.length <= 20) {
      return text;
    }
    return text.trim().substring(0, 20) + '...';
  }

}
