import { Component, OnInit } from '@angular/core';

import { ShopService } from '../../services/shop/shop.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  pastOrders: any[] = [];
  isLoading = true;

  constructor(private shopservice: ShopService) { }

  ngOnInit() {
    this.getPastOrders();
  }

  getPastOrders(): void {
    this.shopservice.getOrders().subscribe(
      data => this.pastOrders = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

}
