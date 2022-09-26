import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  limit = 10;
  offset = 0;

  constructor(
    private productService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.productService.getAllProducts(this.limit, this.offset)
    .subscribe(data => {
      this.products = data;
    });
  }

  onLoadMore() {
    this.productService.getAllProducts(this.limit, this.offset).subscribe((data) => {
      this.products = this.products.concat(data);
      this.offset += this.limit;
    })
  }
}
