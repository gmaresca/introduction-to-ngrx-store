import { Component, OnInit } from '@angular/core';
import * as list22 from './chapter2.js';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-chapter2',
	templateUrl: './chapter2.component.html',
	styleUrls: ['./chapter2.component.scss']
})
export class Chapter2Component implements OnInit {

	progressLabel: any;

	constructor() { }


	listing22() {
		from('RxJS').subscribe(console.log);

		//--------------------------------------------------//
		//                Usage                             //
		//--------------------------------------------------//
		const arr = [1, 2, 3, 4, 5, 6];

		let it = list22.BufferIterator(arr, 2);
		console.log(it.next());
		console.log(it.next());
		console.log(it.next());

		// for( let i of new list22.BufferIt(arr,3)){
		// 	console.log(i);
		// }
	}

	simplePromise() {
		const fortyTwo = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(42);
			}, 2000);
		});

		from(fortyTwo).pipe(map((x: number) => x + 1)).subscribe(console.log); //-> 43

		console.log('Program terminated');
	}

	// page 56
	simpleObs() {
		const source$ = Observable.create(observer => {
			observer.next('4111111111111111');
			observer.next('5105105105105100');
			observer.next('4342561111111118');
			observer.next('6500000000000002');
			observer.complete();
		});
		const subscription = source$.subscribe(console.log);
	}

	listing24() {
		/**
 		*  RxJS in Action
 		*  Listing 2.4
 		*  @author Paul Daniels
		 *  @author Luis Atencio
		 * 
		 This is a cold observable
 		*/
		const progressBar$ = Observable.create(observer => {
			const OFFSET = 3000;
			const SPEED = 50;

			let val = 0;
			function progress() {
				if (++val <= 100) {
					observer.next(val);
					setTimeout(progress, SPEED);
				}
				else {
					observer.complete();
				}
			};
			setTimeout(progress, OFFSET);
		});

		//--------------------------------------------------//
		//                Usage                             //
		//--------------------------------------------------//
		
			
			progressBar$
				.subscribe(
					val => this.progressLabel = (Number.isInteger(val) ? val + "%" : val),
					error => console.log(error.message),
					() => this.progressLabel = 'Complete!'
				);
		
	}

	ngOnInit() {
	}

}
