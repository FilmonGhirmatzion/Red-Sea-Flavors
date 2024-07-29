import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {
      products: IProduct[];
      filter: string = '';

      constructor(private carSvc: CartService){
        this.products=[
          {
            id: 1,
            description:
              "Qlql is made of Meet it healthy, made with organic ingredients.",
            name: "Qlql",
            imageName: "qlql.jpg",
            category: "Meat Dishes",
            price: 12.5,
            discount: 0.25,
          },
          {
            id: 17,
            description: "A delicious Habesha stew made from powdered chickpeas or broad beans, seasoned with onions, garlic, and berbere spice.  ካብ ድኹም ፍሮማይ ወይ ካብ ገፊሕ ባልደንጓ እተሰርሐ ጥዑም ጸብሒ ሃበሻ ሽጕርትን ጻዕዳ ሽጕርትን ቀመማትን ዘለዎ እዩ ነይሩ። ",
            name: "Shiro",
            imageName: "shiro.png",
            category: "Vegetarian Dishes",
            price: 11.5,
            discount: 0.2,
          },
          {
            id: 6,
            description:
              "delightful Habesha dish made from fresh spinach, sautéed with onions, garlic, and a blend of traditional spices.",
            name: "Hamli",
            imageName: "hamli.png",
            category: "Vegetarian Dishes",
            price: 10,
            discount: 0,
          },
          {
            id: 2,
            description:
              "A traditional Habesha dish featuring cubes of raw beef seasoned with awaze (a spicy mustard sauce) and accompanied by injera. This dish is known for its bold flavors and tender meat, often enjoyed by those who appreciate the unique taste of raw, well-seasoned beef.",
            name: "gored gored",
            imageName: "gored gored.jpg",
            category: "Meat Dishes",
            price: 17.0,
            discount: 0.2,
          },
          {
            id: 3,
            description:
              "Lentils are cooked with onions, garlic, and a blend of spices, creating a hearty and flavorful stew that pairs perfectly with injera. They are a rich source of protein and fiber, making them a staple in vegetarian and vegan diets.",
            name: "lentils",
            imageName: "lentils.jpg",
            category: "Vegetarian Dishes",
            price: 12.5,
            discount: 0,
          },
          {
            id: 16,
            description:
              "Shrimp Tibs feature sautéed shrimp with onions, garlic, and berbere, creating a spicy and savory meal. Shrimp is prized for its tender texture and ability to absorb flavors, making it a delicious addition to a variety of dishes.",
            name: "Shrimp",
            imageName: "shrimp.png",
            category: "Seafood Dishes",
            price: 19.5,
            discount: 0.1,
          },
          {
            id: 13,
            description: "sliced smoked salmon served on bread or crackers with cream cheese, capers, red onions, and sometimes dill or lemon. It's known for its rich, delicate flavor and is a popular choice",
            name: "Smoked salmon",
            imageName: "smoked-salmon.jpg",
            category: "Appetizers",
            price: 7,
            discount: 0,
          },
          {
            id: 7,
            description:
              "nvolving roasting, grinding, and brewing coffee in a jebena pot. It's served in small cups",
            name: "Habesha Coffee",
            imageName: "habesha coffee.jpg",
            category: "Drinks",
            price: 5,
            discount: 0,
          },
        ]
      }

    getImageUrl(product: IProduct){
      return '/assets/images/food-items/' + product.imageName;

    }
     addToCart(product: IProduct){
       this.carSvc.add(product);
     }

    getFilteredProducts() {
      return this.filter === ''
        ? this.products
        : this.products.filter(
          (product: any) => product.category === this.filter
        );
    }

}
