import {Component, ElementRef, Input, signal, ViewChild} from '@angular/core';
import WaveSurfer from "wavesurfer.js";

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.css'
})
export class WaveAudioComponent {

	@Input({required: true}) audioURL = ''
	@ViewChild('wave') waveContainer!: ElementRef
	private ws!: WaveSurfer
	isPlaying = signal(false)

	ngAfterViewInit(){
		this.ws = WaveSurfer.create({
			url: this.audioURL,
			container: this.waveContainer.nativeElement
		})
		this.ws.on('play', () => {
			this.isPlaying.set(true)
		})
		this.ws.on('pause', () => {
			this.isPlaying.set(false)
		})
	}

	async playPause(){
		await this.ws.playPause()
	}

}
