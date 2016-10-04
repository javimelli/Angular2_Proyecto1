import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: '<img src="assets/img/reloj.png"><h1>{{minutos}}:{{segundos}}</h1><p><button (click)="tooglePause()">{{buttonLabel}}</button></p>'
})

export class AppComponent {

	minutos: number;
	segundos: number;
	isPaused: boolean;
	buttonLabel: string; 

	constructor(){
		this.resetTimer();
		setInterval(() => this.tick(), 1000);
	}

	private resetTimer(): void{
		this.minutos = 24;
		this.segundos = 59;
		this.buttonLabel = 'Empezar';
		this.tooglePause();		
	}

	private tick(): void{
		if(!this.isPaused){
			this.buttonLabel = 'Detener';	
			if(--this.segundos < 0){
				this.segundos = 59;
				if(--this.minutos < 0){
					this.resetTimer();
				}
			}
		}
	}

	tooglePause(): void{
		this.isPaused = !this.isPaused;
		if(this.minutos < 24 || this.segundos < 59){
			this.buttonLabel = this.isPaused ? 'Reanudar' : 'Detener';
		}

	} 
}