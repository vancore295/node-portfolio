import { Component, OnInit, Input } from '@angular/core';

// Classes
import { MenuItem } from '../../classes/menuitem';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.scss']
})
export class MenuitemComponent implements OnInit {
  @Input() menuItem: MenuItem;

  constructor() { }

  ngOnInit() {
  }

}
