import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  products: Product[] = [];
  product: Product = {
    name: '',
    price: null
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  createProduct(): void {
    if (this.product) {
      this.productService.create(this.product).subscribe((data) => {
        this.productService.showMessage('Produto criado com sucesso!');
        this.router.navigate(['/products'])
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
