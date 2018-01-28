import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MadlibService } from '../../services/madlibs/madlib.service';

@Component({
  selector: 'app-madlib-list-item',
  templateUrl: './madlib-list-item.component.html',
  styleUrls: ['./madlib-list-item.component.scss']
})
export class MadlibListItemComponent implements OnInit {
  @Input() madlib: any;
  @Output() data: any;
  @Output() selectMadlib = new EventEmitter<any>();
  madlibkeys = [];


  constructor(private madlibService: MadlibService) { }

  ngOnInit() {
    this.madlibkeys = Object.keys(this.madlib.data);
  }

  select(data: any): void {
    this.selectMadlib.emit(data);
  }

  sendMadlib(madlib: any): void {
    this.madlibService.sendMadlib(madlib);
  }

  clearMadlib(): void {
    this.madlibService.clearMadlib();
  }

}
