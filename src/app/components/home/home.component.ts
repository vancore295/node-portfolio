import { Component, OnInit } from '@angular/core';

// Classes
import { MenuItem } from '../../classes/menuitem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menuItems: MenuItem[];

  constructor() { }

  ngOnInit() {
  }

}
