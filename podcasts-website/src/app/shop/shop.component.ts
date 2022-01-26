import { Component,  OnInit , ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})

export class ShopComponent implements OnInit {

  displayedProducts: any;
  activeProductType: string = 'all';
  productsInCartAmount: number = 0;
  cartDetailedHidden = true;
  itemsInCartTotalSumInShop: number = 0;
  defaultInputAmount: number = 0;
  displayConfirmationMessage : boolean = false;


  eventsSubject: Subject<void> = new Subject<void>();

  constructor(private shopService: ShopService, private element: ElementRef) { }

  ngOnInit(): void {
    this.displayedProducts = this.shopService.getProductsByType('all');
    this.productsInCartAmount = this.shopService.amountOfProductsInCart;
  }

  chooseProductTypeToDisplay(type:string) {
    this.displayedProducts = this.shopService.getProductsByType(type);
    this.activeProductType = type;
  }

  addToCart(product:any) {
    var quantityInputElement = <HTMLInputElement>document.getElementById('quantity' + product?.id);
    var numberOfItems = Number(quantityInputElement.value);
    this.shopService.addProductsToCart(product, numberOfItems);
    this.updateItemsInCartTotalSum();
    this.changeCartButtonColor();
    this.updateproductsInCartAmount();
    this.displayConfirmationMessage = false;
  }

  changeCartButtonColor() {
    let cartButtonElement = this.element.nativeElement.querySelector('.cart-button');
    cartButtonElement.classList.add('dark');

    setTimeout(()=>{
      cartButtonElement.classList.remove('dark');
    }, 200);
  }

  toggleCartDetailVisibility() {
    this.cartDetailedHidden = !this.cartDetailedHidden;
    this.displayConfirmationMessage = false;
  }

  updateItemsInCartTotalSum() {
    this.itemsInCartTotalSumInShop = this.shopService.getProductsInCartTotalSum();
  }

  updateproductsInCartAmount() {
    this.productsInCartAmount = this.shopService.amountOfProductsInCart;
  }

  toggleConfirmation() {
    this.displayConfirmationMessage = !this.displayConfirmationMessage
  }

}

