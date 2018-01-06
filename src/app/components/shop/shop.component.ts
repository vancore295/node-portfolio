import { Component, OnInit,  OnChanges, SimpleChanges } from '@angular/core';
import { HttpModule, Http } from '@angular/http';

import { ShopItem } from '../../classes/shopitem';
import { Order } from '../../classes/order';
import { OrderItem } from '../../classes/orderItem';

import { ShopService } from '../../services/shop/shop.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit, OnChanges {

  shopItems: ShopItem[] = [];
  cart: ShopItem[] = [];
  total: Number = 0;

  isLoading: Boolean = true;
  processingOrder: Boolean = false;

  constructor(private shopservice: ShopService, private http: Http ) { }

  ngOnInit() {
    this.getShopItems();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.total = this.calcTotal(this.cart);
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

  addTocart(item: ShopItem) {
    this.cart.push(item);
    this.total = this.calcTotal(this.cart);
    console.log(this.cart);
  }

  calcTotal(items: ShopItem[]) {
    let total = 0;

    for (let i = 0; i < items.length; i++) {
      total += items[i].price;
    }

    return total;
  }

  checkOut(cart: ShopItem[]) {
    console.log('Checking out');
    this.processingOrder = true;
    const newOrder = new Order();
    newOrder.items = this.convertToOrder(cart);

  }

  convertToOrder(items: ShopItem[]): OrderItem[] {
    const newItems: OrderItem[] = [];

    for (let i = 0; i < items.length;  i++) {
      const temp = new OrderItem();
      temp.shopItemId = items[i]._id;

      newItems.push(temp);
    }

    return newItems;
  }


}
