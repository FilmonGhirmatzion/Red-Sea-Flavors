import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() buy = new EventEmitter()


  getImageUrl(product: IProduct){
    return '/assets/images/food-items/' + product.imageName;

  }

  buyButtonClicked(product:IProduct){
    this.buy.emit();
 }

  addToCart(product: IProduct) {}

}
