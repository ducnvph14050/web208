import { Component, OnInit } from '@angular/core';
import { IProduc } from 'src/app/model/Products';
import { ProductService } from 'src/app/sevice/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
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
}