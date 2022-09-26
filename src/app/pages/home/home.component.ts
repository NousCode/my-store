import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  productId: string | null = null;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.productService.getAllProducts(this.limit, this.offset)
    .subscribe(data => {
      this.products = data;
    });
    this.route.queryParamMap.subscribe(params => {
      this.productId = params.get('product');
      console.log(this.productId);

    })
  }

  onLoadMore() {
    this.productService.getAllProducts(this.limit, this.offset).subscribe((data) => {
      this.products = this.products.concat(data);
      this.offset += this.limit;
    })
  }
}
