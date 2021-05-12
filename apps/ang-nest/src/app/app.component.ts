import { Component, OnInit } from '@angular/core'
import { appService } from './app.service'
import { Observable } from 'rxjs'
import { Product } from '@prisma/client'

@Component({
  selector: 'controls2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public $products: Observable<Product[]>

  constructor(public appService: appService) {}

  ngOnInit(): void {
    this.$products = this.appService.getProducts()
  }
}













