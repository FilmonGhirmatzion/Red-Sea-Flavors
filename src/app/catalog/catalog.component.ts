import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
      product: IProduct;

      constructor(){
        this.product={
          id: 1,
          description:
            "Qlql is made of Meet it healthy, made with organic ingredients.",
          name: "Qlql",
          imageName: "qlql.jpg",
          category: "Meat Dishes",
          price: 12.5,
          discount: 0.25,
        };
      }

    getImageUrl(product: IProduct){
      return '/assets/images/food-items/' + product.imageName;

    }

}
