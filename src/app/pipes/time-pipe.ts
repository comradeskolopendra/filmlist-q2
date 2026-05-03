import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
  standalone: true
})
export class TimePipe implements PipeTransform {
  transform(minutes: number | undefined): string {
    if (!minutes) {
      return "not given time"
    }

    let hours = 0;

    while (minutes >= 60) {
      hours += 1;
      minutes -= 60;
    }

    return `${hours} hours ${minutes} mins`
  }
}
