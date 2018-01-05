import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ShopItem } from '../../classes/shopitem';

@Component({
  selector: 'app-shopitem',
  templateUrl: './shopitem.component.html',
  styleUrls: ['./shopitem.component.scss']
})
export class ShopitemComponent implements OnInit, OnChanges {
  @Input() itemData: ShopItem;
  @Output() addedToCart = new EventEmitter<ShopItem>();
  display: String;

  constructor() { }

  ngOnInit() {
    this.display = this.itemData.imageMain;
  }

  ngOnChanges(changes: SimpleChanges) {

  }

  imageSwap(event) {
    if (this.display === this.itemData.imageMain) {
      if (this.itemData.imageAlt) {
        this.display = this.itemData.imageAlt;
      }
    } else if (this.itemData.imageAlt && (this.display === this.itemData.imageAlt)) {
      this.display = this.itemData.imageMain;
    }
  }

  addToCart(event) {
    this.addedToCart.emit(this.itemData);
  }

}
