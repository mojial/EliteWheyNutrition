import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: any[] = [];
  totalPrice: string = '';
  shippingMethod: any = '1';
  discountCode: string = '';
  isProcessingPayment = false;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
  }

  removeFromCart(productId: string) {
    this.cartService.removeFromCart(productId).subscribe(response => {
      console.log(response);
    });
  }

  updateTotalPrice(event: any) {
    this.shippingMethod = event.target.value;
    this.totalPrice = this.getTotalPrice();
  }

  confirmShipping() {
    if (this.shippingMethod === '2') {
      this.router.navigate(['/cart'], { queryParams: { shippingMethod: this.shippingMethod } });
    }
  }

  getTotalPrice(): string {
    let totalPrice = 0;
    for (const item of this.cartItems) {
      totalPrice += item.product.price;
    }
    const shippingCost = this.shippingMethod === '2' ? 5 : 0;
    return (totalPrice + shippingCost).toFixed(2);
  }

  getTotalProducts(): number {
    return this.cartItems.length;
  }

  applyDiscount() {
    // Verifica si el código de descuento es válido y aplica el descuento si corresponde
    if (this.discountCode === 'MJA') {
      const totalPriceBeforeDiscount = parseFloat(this.totalPrice);
      const discountedPrice = totalPriceBeforeDiscount * 0.9; // Aplica un descuento del 10%
      this.totalPrice = discountedPrice.toFixed(2);
    }
  }

  processPayment() {
    this.isProcessingPayment = true;
  }
  
}
