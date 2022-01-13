import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ShopService {

  productsInCartChanged = new EventEmitter
  productsInCart: any[] = [];
  productsInCartTotalSum: number = 0;
  amountOfProductsInCart: number = 0;

  constructor() {};

  getProductsByType(selectedType:string) {
    var chosenProductsByType = [];

    if (selectedType === 'all') {
      chosenProductsByType = this.products;
      return chosenProductsByType
    } else {
      for (let i = 0; i < this.products.length; i++) {
        if(this.products[i].type === selectedType){
          chosenProductsByType.push(this.products[i])
        }
      }
      return chosenProductsByType
    }
  }

  addProductsToCart(product: any, quantity:any) {

    if (this.productsInCart.some(prod => prod.id === product.id)) {
        for (let i = 0; i < this.productsInCart.length; i++ ) {
          if (this.productsInCart[i].id === product.id) {
            this.productsInCart[i].amount += quantity * 1;
            this.productsInCart[i].priceSum += this.productsInCart[i].singleItemPrice * quantity * 1
          }
        }
    } else {
      product.amount += quantity * 1;
      product.priceSum = product.singleItemPrice * quantity * 1
      this.productsInCart.push(product);
    }
    this.updateAmountOfProductsInCart(quantity, 'add');
  }

  updateAmountOfProductsInCart(quantity:number, operation:string){
    if(operation == 'add') {
      this.amountOfProductsInCart += quantity * 1;
    } else {
      this.amountOfProductsInCart -= quantity * 1;
    }
  }

  getProductsInCartByProductandAmount() {
    return this.productsInCart
  }

  getProductsInCartTotalSum() {
    this.productsInCartTotalSum = 0;
    for(let i = 0; i < this.productsInCart.length; i++  ){
      this.productsInCartTotalSum +=  this.productsInCart[i].priceSum;
    }
   return  this.productsInCartTotalSum
  }

  removeProductFromCart(productId: number, amount: number) {
    for (let i = 0; i < this.productsInCart.length; i++ ) {
      if (this.productsInCart[i].id === productId) {
        this.productsInCart.splice(i, 1)
      }
    }
    this.updateAmountOfProductsInCart(amount, 'subtract');
  }

 products = [
   {
     id: 1,
     type: 'shirt',
     singleItemPrice: 19.90,
     priceSum: 19.90,
     material: 'cotton',
     name:'Kinnisvarajutud T-Shirt',
     imagePath:'assets/tshirt.jpg',
     amount: 0,
   },
   {
    id: 2,
    type: 'shirt',
    singleItemPrice: 25.90,
    priceSum: 25.90,
    material: 'cotton',
    name:'Kinnisvarajutud Long Sleeve',
    imagePath:'assets/long_sleeve.jpg',
    amount: 0,
  },
  {
    id: 3,
    type: 'shirt',
    singleItemPrice: 25.90,
    priceSum: 25.90,
    material: 'cotton',
    name:'Kinnisvarajutud Hoodie',
    imagePath:'assets/hoodie.jpg',
    amount: 0,
  },
  {
    id: 4,
    type: 'shirt',
    singleItemPrice: 19.90,
    priceSum: 19.90,
    material: 'cotton',
    name:'Kinnisvarajutud Christmas T-shirt',
    imagePath:'assets/christmas_tshirt.jpg',
    amount: 0,
  },
  {
    id: 5,
    type: 'mug',
    singleItemPrice: 5.00,
    priceSum: 5.00,
    material: 'clay',
    name:'Ceramic Medium Mug',
    imagePath:'assets/small_mug.jpg',
    amount: 0,
  },
  {
    id: 6,
    type: 'mug',
    singleItemPrice: 11.90,
    priceSum: 11.90,
    material: 'clay',
    name:'Ceramic Large Mug',
    imagePath:'assets/large_mug.jpg',
    amount: 0,
  },
  {
    id: 7,
    type: 'bag',
    singleItemPrice: 19.90,
    priceSum: 19.90,
    material: 'cotton',
    name:'Logo Tote Bag',
    imagePath:'assets/small_tote.jpg',
    amount: 0,
  },
  {
    id: 8,
    type: 'bag',
    singleItemPrice: 19.90,
    priceSum: 19.90,
    material: 'polyester',
    name:'Beach Tote Bag',
    imagePath:'assets/large_tote.jpg',
    amount: 0,
  },
 ]
}
