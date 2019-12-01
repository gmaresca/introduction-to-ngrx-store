import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';


@Component({
  selector: 'app-chapter3',
  templateUrl: './chapter3.component.html',
  styleUrls: ['./chapter3.component.scss']
})
export class Chapter3Component implements OnInit {
  isRed: boolean = false;

  constructor() { }

  listing42() {
    
    timer(1000).subscribe(() => this.isRed = true);

  }

  ngOnInit() {
  }

}
