import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  @Output() btnClicked = new EventEmitter();

  scrollTo(dest: string) {
    this.btnClicked.emit(dest);
  }
  constructor() {}

  ngOnInit(): void {}
}
