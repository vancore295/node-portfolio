import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-madlib-list-item',
  templateUrl: './madlib-list-item.component.html',
  styleUrls: ['./madlib-list-item.component.scss']
})
export class MadlibListItemComponent implements OnInit {
  @Input() madlib: any;
  @Output() data: any;
  @Output() selectMadlib = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }

  select(data: any): void {
    this.selectMadlib.emit(data);
  }

}
