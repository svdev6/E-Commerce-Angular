import {Component, Input, signal, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
	@Input({required: true}) duration = 0
	@Input({required: true}) message = ''
	counter = signal<number>(0)
	counterRef!: ReturnType<typeof setInterval>

	constructor() {
		// NO ASYNC -- This is before render -- Just once
		this.duration = 12
		console.log('Constructor')
		this.printSeparator()

	}

	ngOnChanges(changes: SimpleChanges){
		// Before and during render
		console.log('ngOnChanges')
		console.log(changes)
		const duration = changes['duration']
		if(duration && duration.currentValue !== duration.previousValue){
			this.doSomething()
		}
		this.printSeparator()
	}

	ngOnInit() {
		// After render -- Just once -- Async calls
		console.log('ngOnInit')
		console.log('Duration -->', this.duration)
		console.log('Message -->', this.message)
		this.printSeparator()
		this.counterRef = setInterval(() => {
			console.log('Run interval')
			this.counter.update(prev => prev + 1)
		}, 1000)
	}

	ngAfterViewInit(){
		// After render -- if the children were rendered
		console.log('ngAfterViewInit')
		this.printSeparator()
	}

	ngOnDestroy(){
		// The component was destroyed
		console.log('ngOnDestroy')
		this.printSeparator()
		clearInterval(this.counterRef)
	}

	printSeparator(){
		console.log('-'.repeat(10))
	}

	doSomething(){
		console.warn('Duration was modified')
	}

}
