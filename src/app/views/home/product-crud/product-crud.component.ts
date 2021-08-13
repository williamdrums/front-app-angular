import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/components/product/product.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private productService: ProductService,private router: Router) { }

  ngOnInit(): void {
   
  }

  navigateToProductCreate(): void{
         this.router.navigate(['/products/create']);
  }

}
