import {Component, signal} from '@angular/core';
import {CounterComponent} from "@shared/components/counter/counter.component";
import {HighlightDirective} from "@shared/directives/highlight.directive";
import {WaveAudioComponent} from "@info/components/wave-audio/wave-audio.component";

@Component({
  selector: 'app-about',
  standalone: true,
	imports: [
		CounterComponent,
		WaveAudioComponent,
		HighlightDirective
	],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export default class AboutComponent {
	duration = signal(1000)
	message = signal('Hola')

	changeDuration(ev: Event){
		const input = ev.target as HTMLInputElement
		this.duration.set(input.valueAsNumber)
	}

	changeMessage(ev: Event){
		const input = ev.target as HTMLInputElement
		this.message.set(input.value)
	}

}
