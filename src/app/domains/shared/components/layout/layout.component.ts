import { Component } from '@angular/core';
import {CounterComponent} from "@shared/components/counter/counter.component";
import {HighlightDirective} from "@shared/directives/highlight.directive";
import {WaveAudioComponent} from "@info/components/wave-audio/wave-audio.component";
import {HeaderComponent} from "@shared/components/header/header.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-layout',
  standalone: true,
	imports: [
		CounterComponent,
		HighlightDirective,
		WaveAudioComponent,
		HeaderComponent,
		RouterOutlet
	],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
