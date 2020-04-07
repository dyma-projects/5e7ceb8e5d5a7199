import {Directive, ElementRef, HostListener} from '@angular/core'

@Directive({
	selector : '[myColor]'
})
export class ColorDirective {

	constructor(private el: ElementRef) {
	}

	@HostListener('window:keydown', ['$event'])
	onKeyDown(event: KeyboardEvent) {
		if (event.keyCode == 39) {
			this.el.nativeElement.style.color ="red";
		} else if (event.keyCode == 37) {
			this.el.nativeElement.style.color ="blue";
		} else if (event.keyCode == 40) {
			this.el.nativeElement.style.color ="violet";
		} else if (event.keyCode == 38) {
			this.el.nativeElement.style.color ="aqua";
		}
	}
	
}