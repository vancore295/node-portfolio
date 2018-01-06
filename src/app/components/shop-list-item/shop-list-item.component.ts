import { Component, OnInit, Input } from '@angular/core';

import { ShopItem } from '../../classes/shopitem';

@Component({
  selector: 'app-shop-list-item',
  templateUrl: './shop-list-item.component.html',
  styleUrls: ['./shop-list-item.component.scss']
})
export class ShopListItemComponent implements OnInit {
  @Input() item: ShopItem;

  constructor() { }

  ngOnInit() {
  }

}
