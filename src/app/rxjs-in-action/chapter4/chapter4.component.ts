import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-chapter4',
  templateUrl: './chapter4.component.html',
  styleUrls: ['./chapter4.component.scss']
})
export class Chapter4Component implements OnInit {

  isRed: boolean = false;

  constructor() { }

  listing42() {

    timer(1000).subscribe(() => {
      if (!this.isRed) { this.isRed = true }
      else { this.isRed = false }
    });

  }

  ngOnInit() {
  }

}
