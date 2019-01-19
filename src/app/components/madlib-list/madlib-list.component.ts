import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-madlib-list',
  templateUrl: './madlib-list.component.html',
  styleUrls: ['./madlib-list.component.scss']
})
export class MadlibListComponent implements OnInit {
  @Input() madlibs;
  activeTab = 0;

  constructor() { }

  ngOnInit() {
    this.activeTab = 0;
  }

  setActiveTab(index: number) {
    this.activeTab = index;
  }

}
