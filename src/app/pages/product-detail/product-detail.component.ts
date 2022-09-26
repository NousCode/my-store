import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {

  productId: string | null = null;
  product: Product | null = null;

  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.route.paramMap
    .pipe(
      switchMap((params) => {
        this.productId = params.get('id');
        if (this.productId) {
          return this.productService.getProduct(this.productId);
        }
        return [null];
      })
    )
    .subscribe(data => {
      this.product = data;
    })
  }

  goToBack() {
    this.location.back();
  }
}
