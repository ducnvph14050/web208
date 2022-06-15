import { Component, OnInit } from '@angular/core';
import { IProduc } from 'src/app/model/Products';
import { ProductService } from 'src/app/sevice/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

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