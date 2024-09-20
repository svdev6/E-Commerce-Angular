import { Pipe, PipeTransform } from '@angular/core';
import {formatDistance} from 'date-fns'
import {es} from "date-fns/locale";

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

	transform(value: Date): string {
		return formatDistance(new Date(), value, {
			locale: es
		}).replace('alrededor de', '')
	}
}
