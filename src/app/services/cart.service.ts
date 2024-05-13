import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  // Método para obtener los productos de la cesta
  getCartItems(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/api/cart');
  }

  // Método para agregar un producto a la cesta
  addToCart(productId: string): Observable<any> {
    return this.http.post<any>('http://localhost:3000/api/cart', { productId });
  }
  
  // Método para eliminar un producto del carrito
  removeFromCart(productId: string): Observable<any> {
    const url = `${'http://localhost:3000/api/cart'}/${productId}`;
    return this.http.delete<any>(url);
  }

  

  // Método para actualizar la cantidad de un producto en la cesta
  updateCartItemQuantity(userId: string, productId: string, quantity: number): Observable<any> {
    return this.http.put<any>('http://localhost:3000/api/cart/product', { userId, productId, quantity });
  }
}
