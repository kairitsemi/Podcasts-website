import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShopService } from '../shop.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  @Input() itemsInCartTotalSum: number = 0;
  @Output() closeCartEvent = new EventEmitter();
  @Output() sendInvoice = new EventEmitter();
  @Output() removeItemFromCartEvent = new EventEmitter();
  @Output() emptyCartEvent = new EventEmitter();
  @Input() showConfirmation:boolean = false;

  productsInCart: any[] = [];

  emailForm  = new FormGroup ({
    email: new FormControl('', [ Validators.email, Validators.required])
  })

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.productsInCart = this.shopService.getProductsInCartByProductandAmount();
    this.itemsInCartTotalSum = this.shopService.getProductsInCartTotalSum();
  }

  closeCart() {
    this.closeCartEvent.emit();
  }

  removeProductFromCart(productToBeRemoved:any) {
    this.shopService.removeProductFromCart(productToBeRemoved.id, productToBeRemoved.amount)
    this.itemsInCartTotalSum = this.shopService.getProductsInCartTotalSum();
    this.removeItemFromCartEvent.emit();
  }

  sendInvoiceAndEmptyCart() {
    this.shopService.removeItemsFromCart();
    this.emptyCartEvent.emit();
    this.emailForm.reset();
    this.productsInCart = this.shopService.getProductsInCartByProductandAmount();
    this.sendInvoice.emit();
  }

}
