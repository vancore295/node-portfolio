import { Component, OnInit } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

// Classes
import { MenuItem } from '../../classes/menuitem';

import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menuItems: any =  [];
  isLoading = true;

  constructor(private menuService: MenuService, private http: Http) { }

  ngOnInit() {
    this.getMenuItems();
  }

  getMenuItems() {
      this.menuService.getMenuItems().subscribe(
          data => this.menuItems = data,
          error => console.log(error),
          () => this.isLoading = false
      );
  }
}
