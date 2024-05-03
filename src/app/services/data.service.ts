import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  public elitewheyProductsUrl = 'http://localhost:3000/products';
  public creatinaUrl = 'http://localhost:3000/products/category/1';
  public proteinaUrl = 'http://localhost:3000/products/category/2';
  public aminoacidosUrl = 'http://localhost:3000/products/category/3';
  public hidratosUrl = 'http://localhost:3000/products/category/4';
  public preentrenosUrl = 'http://localhost:3000/products/category/5';
  public controldepesoUrl = 'http://localhost:3000/products/category/6';
  public barritasUrl = 'http://localhost:3000/products/category/7';
  public vitaminasmineralesUrl = 'http://localhost:3000/products/category/8';
  public quemagrasasUrl = 'http://localhost:3000/products/category/9';
  public intraentrenosUrl = 'http://localhost:3000/products/category/10';


  public getElitewheyUrlReponse(): Observable<Product[]> {
    return this.http.get<Product[]>(this.elitewheyProductsUrl);
  }

  public creatinaReponse(): Observable<Product[]> {
    return this.http.get<Product[]>(this.creatinaUrl);
  }

  public proteinaResponse(): Observable<Product[]> {
    return this.http.get<Product[]>(this.proteinaUrl);
  }

  public aminoacidosResponse(): Observable<Product[]> {
    return this.http.get<Product[]>(this.aminoacidosUrl);
  }

  public hidratosResponse(): Observable<Product[]> {
    return this.http.get<Product[]>(this.hidratosUrl);
  }

  public preentrenosResponse(): Observable<Product[]> {
    return this.http.get<Product[]>(this.preentrenosUrl);
  }

  public controldepesoResponse(): Observable<Product[]> {
    return this.http.get<Product[]>(this.controldepesoUrl);
  }

  public barritasResponse(): Observable<Product[]> {
    return this.http.get<Product[]>(this.barritasUrl);
  }

  public vitaminasmineralesResponse(): Observable<Product[]> {
    return this.http.get<Product[]>(this.vitaminasmineralesUrl);
  }

  public quemagrasasResponse(): Observable<Product[]> {
    return this.http.get<Product[]>(this.quemagrasasUrl);
  }

  public intraentrenosResponse(): Observable<Product[]> {
    return this.http.get<Product[]>(this.intraentrenosUrl);
  }

  getProductById(productId: string): Observable<Product> {
    return this.http.get<Product>(`${this.elitewheyProductsUrl}/${productId}`);
  }

}
