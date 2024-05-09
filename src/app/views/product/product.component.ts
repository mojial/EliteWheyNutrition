import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { DataService } from '../../services/data.service';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
  product!: Product;

  constructor(private router: Router,private userService : UserService,  private route: ActivatedRoute, private dataService: DataService, private CartSerivce: CartService) {}

  
  navigateToProduct(productId: string) {
    this.router.navigate(['/product-detail', productId]);
  }

  public nig(productId: string): void {
    console.log(productId);
  }

  addToCart(productId: string) {
    // Llama al método addToCart del servicio CartService
    this.CartSerivce.addToCart(productId).subscribe(response => {
      console.log(response);
    });
  }

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
