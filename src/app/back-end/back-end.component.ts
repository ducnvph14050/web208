import { Component, OnInit } from '@angular/core';
import { IProduc } from '../model/Products';
import { ProductService } from '../sevice/product.service';

@Component({
  selector: 'app-back-end',
  templateUrl: './back-end.component.html',
  styleUrls: ['./back-end.component.css']
})
export class BackEndComponent implements OnInit {

  data!: IProduc[]
  constructor(private productService: ProductService) {

    //this.products = this.ProductService.getProductList()!;
  }

  ngOnInit(): void {
    this.getProductList();
  }
  getProductList() {
    this.productService.getProductList().subscribe(data => {
      this.data = data;
    })
  }
  onHandelRemove(id: number) {
    this.productService.removeProduct(id).subscribe(() => {
      this.data = this.data.filter(item => item.id !== id);
    })
  }
  onHandelupdate(product : IProduc) {
    this.productService.updateProduct(product).subscribe(() => {
      this.data = this.data.filter(item => item.id !== product . id ? product: item);
    })
  }
  

}