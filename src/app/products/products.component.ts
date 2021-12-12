import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from '../app.service';
import { productModel } from '../user.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<productModel[]> | undefined;
  constructor(private appservice: AppService) {}

  ngOnInit(): void {
    this.getProductsUsingAsyncPipe();
  }

  getProductsUsingAsyncPipe() {
    this.products$ = this.appservice.getAllProducts();
  }
}
