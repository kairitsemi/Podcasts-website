import { Component,  OnInit , ElementRef } from '@angular/core';
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
  productsInCart: any;
  cartDetailedHidden = true;
  itemsInCartTotalSum:number = 0;

  constructor(private shopService: ShopService, private element: ElementRef) { }

  ngOnInit(): void {
    this.displayedProducts = this.shopService.getProductsByType('all');
    this.productsInCartAmount = this.shopService.amountOfProductsInCart;
    this.productsInCart = this.shopService.getProductsInCartByProductandAmount();
    this.itemsInCartTotalSum= this.shopService.getProductsInCartTotalSum();
  }

  chooseProductTypeToDisplay(type:string) {
    this.displayedProducts = this.shopService.getProductsByType(type);
    this.activeProductType = type;
  }

  addToCart(product:any) {
    var quantityInputElement= <HTMLInputElement>document.getElementById('quantity' + product?.id);
    var numberOfItems = Number(quantityInputElement.value);
    this.shopService.addProductsToCart(product, numberOfItems);
    this.productsInCartAmount = this.shopService.amountOfProductsInCart;
    this.itemsInCartTotalSum = this.shopService.getProductsInCartTotalSum();
    this.changeCartButtonColor();
  }

  changeCartButtonColor() {
    let cartButtonElement = this.element.nativeElement.querySelector('.cart-button');
    cartButtonElement.classList.add('dark');

    setTimeout(()=>{
      cartButtonElement.classList.remove('dark');
    }, 200);
  }

  getProductsInCart() {
    this.productsInCart = this.shopService.getProductsInCartByProductandAmount();
  }

  toggleCartDetail() {
    this.cartDetailedHidden = !this.cartDetailedHidden;
  }

  removeProductFromCart(productToBeRemoved:any){
    this.shopService.removeProductFromCart(productToBeRemoved.id, productToBeRemoved.amount)
    this.productsInCartAmount = this.shopService.amountOfProductsInCart;
    this.itemsInCartTotalSum = this.shopService.getProductsInCartTotalSum();
  }


}
