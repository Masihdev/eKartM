import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {

  searchText: string = '';

  // name: string = 'john doe;
  addToCart: number = 0;

  product = {
    name: 'iPhone 13',
    price: 989,
    color: 'black',
    discount: 8.5,
    inStock: 7,
    pic: 'assets/iphone.png'
  }

  getDiscountedPrice() {
    return (this.product.price - (this.product.price * this.product.discount / 100)).toFixed(2)
  }


  getValue(event: any) {
    console.log(event);
    // this.name = event.target.value;
  }

  incrementValue() {
    if (this.addToCart < this.product.inStock) {
      this.addToCart++;
    }
  }

  decrementValue() {
    if (this.addToCart > 0) {
      this.addToCart--;
    }
  }


  setSearchText(value: string) {
    this.searchText = value;
  }


}
