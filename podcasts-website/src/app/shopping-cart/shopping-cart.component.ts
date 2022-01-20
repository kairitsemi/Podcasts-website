import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  @Input() itemsInCartTotalSum:number = 0;
  @Output() closeCartEvent = new EventEmitter();
  @Output() removeItemFromCartEvent = new EventEmitter();


  productsInCart: any;
  showConfirmation = false;

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.productsInCart = this.shopService.getProductsInCartByProductandAmount();
    console.log(this.productsInCart)
  }

  closeCart() {
    this.closeCartEvent.emit();
  }

  removeProductFromCart(productToBeRemoved:any){
    this.shopService.removeProductFromCart(productToBeRemoved.id, productToBeRemoved.amount)
    this.itemsInCartTotalSum = this.shopService.getProductsInCartTotalSum();
    this.removeItemFromCartEvent.emit();
  }

  displayConfirmation() {
    this.showConfirmation = true;
  }


}
