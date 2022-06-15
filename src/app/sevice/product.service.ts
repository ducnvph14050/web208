import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduc } from '../model/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API=`http://localhost:3000/products`;
  constructor(
    private http: HttpClient
  ) { }
  getProduct(id: any): Observable<IProduc> {
    // return data.find(item => item.id === id);
    return this.http.get<IProduc>(`${this.API}/${id}`);
  }
  getProductList(): Observable<IProduc[]> {
    return this.http.get<IProduc[]>(`${this.API}`);
  }
  removeProduct(id: number): Observable<IProduc> {
    return this.http.delete <IProduc>(`${this.API}/${id}`);
    

  }
  addProduct(product: IProduc) {
    return this.http.post<IProduc>(`${this.API}`,product)


  }
  updateProduct(product: IProduc): Observable<IProduc> {
    return this.http.put<IProduc>(`${this.API}/${product.id}`, product);
  }
}
