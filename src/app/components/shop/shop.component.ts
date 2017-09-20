import { Component, OnInit } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

import { ShopItem } from '../../classes/shopitem';

import { ShopService } from '../../services/shop.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  shopItems: any = [];
  isLoading = true;

  constructor(private shopservice: ShopService, private http: Http ) { }

  ngOnInit() {
  }

  getShopItems() {
    this.shopservice.getAll().subscribe(
      data => this.shopItems = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  getItemsByType(shop): any {
    this.shopservice.findByType(shop).subscribe(
      data => this.shopItems = data,
      error => console.log(error)
    );
  }

}
