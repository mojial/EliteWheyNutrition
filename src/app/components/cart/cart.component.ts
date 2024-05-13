import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { SubheaderComponent } from "../subheader/subheader.component";

@Component({
    selector: 'app-cart',
    standalone: true,
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.css',
    imports: [FormsModule, SubheaderComponent]
})
export class CartComponent {
  cartItems: any[] = [];
  totalPrice: string = '';
  shippingMethod: any = '1';
  discountCode: string = '';
  isProcessingPayment = false;

  constructor(private cartService: CartService, private router: Router, private userService : UserService) { }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(items => {
      this.cartItems = items;
    });
  }

  removeFromCart(productId: string) {
    const index = this.cartItems.findIndex(item => item.product.id === productId);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      // Eliminar el producto del carrito en la API
      this.cartService.removeFromCart(productId).subscribe(
        () => {
          console.log('Producto eliminado del carrito en la API');
        },
        (error) => {
          console.error('Error al eliminar el producto del carrito en la API:', error);
          // Si hay un error al eliminar el producto en la API, puedes agregar lógica aquí para revertir el cambio
          // Por ejemplo, volver a agregar el producto al carrito localmente
          // this.cartItems.splice(index, 0, item);
        }
      );
    }
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
    this.discountMsg();
  }

  processPayment() {
    this.isProcessingPayment = true;
  }

  codigo: string = '';
  mensaje: string = '';
  codigoValido: boolean = false;

  discountMsg() {
    this.codigoValido = (this.codigo.toLocaleUpperCase() === 'MJA');
    if (this.codigoValido) {
      this.mensaje = '¡Código aplicado! Has obtenido un 10% de descuento en tu compra.';
    } else {
      this.mensaje = 'Lo sentimos, el código ingresado no es válido. Por favor, verifica e inténtalo de nuevo.';
    }
  }

  onClick(){
    this.userService.logout()
    .then(()=>{
      this.router.navigate(['/register']);
    })
    .catch(error => console.log(error));
  }

  searchQuery: string = '';
  
  searchCategory() {
    if (this.searchQuery.trim() !== '') {
        let category: string = '';

        switch (true) {
            case this.searchQuery.toLowerCase().includes('proteina') || this.searchQuery.toLowerCase().includes('prote') 
            || this.searchQuery.toLowerCase().includes('whey') 
            || this.searchQuery.toLowerCase().includes('protein'):
                category = 'proteina';
                break;
            case this.searchQuery.toLowerCase().includes('creatine') || this.searchQuery.toLowerCase().includes('creatina')
            || this.searchQuery.toLowerCase().includes('crea')
            || this.searchQuery.toLowerCase().includes('monohidratada'):
                category = 'creatine';
                break;
            case this.searchQuery.toLowerCase().includes('aminoacidos') || this.searchQuery.toLowerCase().includes('amino')
            || this.searchQuery.toLowerCase().includes('amin') || this.searchQuery.toLowerCase().includes('bcaas')
            || this.searchQuery.toLowerCase().includes('bcaa'):
                category = 'aminoacidos';
                break;
            case this.searchQuery.toLowerCase().includes('hidratos') || this.searchQuery.toLowerCase().includes('mass')
            || this.searchQuery.toLowerCase().includes('gainer') || this.searchQuery.toLowerCase().includes('hidra'):
                category = 'hidratos';
                break;
            case this.searchQuery.toLowerCase().includes('preentrenos') || this.searchQuery.toLowerCase().includes('preworkout')
            || this.searchQuery.toLowerCase().includes('pree') || this.searchQuery.toLowerCase().includes('pre') 
            || this.searchQuery.toLowerCase().includes('pre-workout') || this.searchQuery.toLowerCase().includes('prework')
            || this.searchQuery.toLowerCase().includes('work') || this.searchQuery.toLowerCase().includes('entreno'):
                category = 'preentrenos';
                break;
            case this.searchQuery.toLowerCase().includes('controldepeso') || this.searchQuery.toLowerCase().includes('control')
            || this.searchQuery.toLowerCase().includes('mantener') || this.searchQuery.toLowerCase().includes('peso'):
                category = 'controldepeso';
                break;
            case this.searchQuery.toLowerCase().includes('barritas') || this.searchQuery.toLowerCase().includes('barrita')
            || this.searchQuery.toLowerCase().includes('bar') || this.searchQuery.toLowerCase().includes('chocolatina'):
                category = 'barritas';
                break;
            case this.searchQuery.toLowerCase().includes('vitaminasminerales') || this.searchQuery.toLowerCase().includes('vitaminas')
            || this.searchQuery.toLowerCase().includes('minerales') || this.searchQuery.toLowerCase().includes('vitamin')
            || this.searchQuery.toLowerCase().includes('mineral'):
                category = 'vitaminasminerales';
                break;
            case this.searchQuery.toLowerCase().includes('quemagrasas') || this.searchQuery.toLowerCase().includes('quema')
            || this.searchQuery.toLowerCase().includes('grasas') || this.searchQuery.toLowerCase().includes('grasa')
            || this.searchQuery.toLowerCase().includes('burner') || this.searchQuery.toLowerCase().includes('fat burner'):
                category = 'quemagrasas';
                break;
            case this.searchQuery.toLowerCase().includes('intraentrenos') || this.searchQuery.toLowerCase().includes('intra')
            || this.searchQuery.toLowerCase().includes('intra entreno') || this.searchQuery.toLowerCase().includes('intra entrenos'):
                category = 'intraentrenos';
                break;
            default:
                category = '';
                break;
        }

        if (category !== '') {
            this.router.navigate(['/', category]);
        } else {
            this.router.navigate(['/home']);
        }
    }
}
  
}
