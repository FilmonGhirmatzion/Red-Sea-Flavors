import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart.service';
import { ProductService } from './product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
      products: any;
      filter: string = '';

      constructor(
        private carSvc: CartService,
        private productSvc: ProductService,
        private router: Router
      )
        {}

      ngOnInit() {
        this.productSvc.getProducts().subscribe((products) => {
          this.products = products;
        });
      }

     addToCart(product: IProduct){
       this.carSvc.add(product);
       this.router.navigate(['/cart']);
     }
      // getImageUrl(product: IProduct){
    //   return '/assets/images/food-items/' + product.imageName;

    // }

    getFilteredProducts() {
      return this.filter === ''
        ? this.products
        : this.products.filter(
          (product: any) => product.category === this.filter
        );
    }

}
