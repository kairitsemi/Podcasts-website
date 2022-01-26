import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ShopService {

  productsInCart: any[] = [];
  productsInCartTotalSum: number = 0;
  amountOfProductsInCart: number = 0;
  emptyArray: any[] = []

  constructor() {};

  getProductsByType(selectedType:string) {

    var chosenProductsByType = [];

    if (selectedType === 'all') {
      chosenProductsByType = this.products;
      return chosenProductsByType
    } else {
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].type === selectedType){
          chosenProductsByType.push(this.products[i])
        }
      }
      return chosenProductsByType
    }
  }

  addProductsToCart(product: any, quantity:number) {
    if (this.productsInCart.some(prod => prod.id === product.id)) {
        for (let i = 0; i < this.productsInCart.length; i++ ) {
          if (this.productsInCart[i].id === product.id) {
            this.productsInCart[i].amount += quantity;
            this.productsInCart[i].priceSum += this.productsInCart[i].singleItemPrice * quantity
          }
        }
    } else {
      product.amount += quantity;
      product.priceSum = product.singleItemPrice * quantity
      this.productsInCart.push(product);
    }
    this.updateAmountOfProductsInCart(quantity, 'add');
  }

  updateAmountOfProductsInCart(quantity:number, operationType:string) {
    if (operationType == 'add') {
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
    for (let i = 0; i < this.productsInCart.length; i++  ){
      this.productsInCartTotalSum +=  this.productsInCart[i].priceSum;
    }
   return  this.productsInCartTotalSum
  }

  removeProductFromCart(productId: number, amount: number) {
    for (let i = 0; i < this.productsInCart.length; i++ ) {
      if (this.productsInCart[i].id === productId) {
        this.productsInCart[i].amount = 0;
        this.productsInCart.splice(i, 1);
      }
    }
    this.updateAmountOfProductsInCart(amount, 'subtract');
  }

  removeItemsFromCart() {
    this.productsInCart.length = 0;
    this.productsInCartTotalSum = 0;
    this.amountOfProductsInCart = 0;
    for(let i= 0; i < this.products.length; i++) {
        this.products[i].amount = 0;
    }
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
