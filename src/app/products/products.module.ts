import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ListOfProductsComponent } from './components/list-of-products/list-of-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        ProductComponent,
        ListOfProductsComponent,
        ProductsDetailsComponent,
    ],
    imports: [CommonModule, HttpClientModule],
})
export class ProductsModule {}
