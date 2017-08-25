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
  menuItems: any [];
  isLoading = true;

  constructor(private menuService: MenuService, private http: Http) {
    this.menuItems = [
        {
      route: 'unityGames',
      href: '',
      target: '',
      linkLabel: 'Unity Games',
      imageSource: '',
      dataToggle: '',
      dataPlacement: '',
      title: '',
      showImage: false,
      showLabel: true
  },
  {
      route: 'shop',
      href: '',
      target: '',
      linkLabel: 'Shop',
      imageSource: '',
      dataToggle: '',
      dataPlacement: '',
      title: '',
      showImage: false,
      showLabel: true
  },
  {
      route: 'resume',
      href: '',
      target: '',
      linkLabel: 'Resume',
      imageSource: '',
      dataToggle: '',
      dataPlacement: '',
      title: '',
      showImage: false,
      showLabel: true
  },
  {
      route: 'gameJams',
      href: '',
      target: '',
      linkLabel: 'Game Jams',
      imageSource: '',
      dataToggle: '',
      dataPlacement: '',
      title: '',
      showImage: false,
      showLabel: true
  },
  {
      route: '',
      href: 'https://github.com/vancore295',
      target: '_blank',
      linkLabel: 'Github',
      imageSource: 'http://res.cloudinary.com/dm210vfbb/image/upload/v1502672153/GitHub-Mark-120px-plus_c7f6jb.png',
      dataToggle: 'tooltip',
      dataPlacement: 'left',
      title: 'Github',
      showImage: true,
      showLabel: false
  }];
  }

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
