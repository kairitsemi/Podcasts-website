import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShopService } from '../shop.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  @Input() itemsInCartTotalSum:number = 0;
  @Output() closeCartEvent = new EventEmitter();
  @Output() removeItemFromCartEvent = new EventEmitter();
  @Output() emptyCartEvent = new EventEmitter();


  emailForm  = new FormGroup ({
    email: new FormControl('', [ Validators.email, Validators.required])
  })
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

  emptyCart() {
    this.showConfirmation = true;
    this.shopService.removeItemsFromCart();
    this.itemsInCartTotalSum = 0;
    this.productsInCart = this.shopService.getProductsInCartByProductandAmount();
    this.emptyCartEvent.emit();
    console.log(this.productsInCart , 'productid kui cart on tühjendatud 1')
  }


}
