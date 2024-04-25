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
  public elitewheyCategoriesUrl = 'http://localhost:3000/categories';

  public getElitewheyUrlReponse(): Observable<Product[]> {
    return this.http.get<Product[]>(this.elitewheyProductsUrl);
  }

  public getElitewheyCategoriesUrlReponse(): Observable<Product> {
    return this.http.get<Product>(this.elitewheyCategoriesUrl);
  }
}
