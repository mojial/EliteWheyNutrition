import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { CardComponent } from "../../components/card/card.component";
import { UserService } from '../../services/user.service';
import { ProductComponent } from "../product/product.component";
import { CartService } from '../../services/cart.service';


@Component({
    selector: 'app-product-detail',
    standalone: true,
    templateUrl: './product-detail.component.html',
    styleUrl: './product-detail.component.css',
    imports: [CardComponent, ProductComponent]
})
export class ProductDetailComponent {
  
  product!: Product;

  constructor(private router: Router, private userService : UserService,  private route: ActivatedRoute, private dataService: DataService, private CartSerivce: CartService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = params['id']; // Obtener productId del parámetro de ruta
      this.dataService.getProductById(productId).subscribe(product => {
        this.product = product;
      });
    });
  }

  onClick(){
    this.userService.logout()
    .then(()=>{
      this.router.navigate(['/register']);
    })
    .catch(error => console.log(error));
  }
}
