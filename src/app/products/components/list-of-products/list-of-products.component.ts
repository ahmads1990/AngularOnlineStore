import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
    selector: 'app-list-of-products',
    templateUrl: './list-of-products.component.html',
    styleUrl: './list-of-products.component.css',
})
export class ListOfProductsComponent {
    // List of products viewing
    products: any[] = [];
    // Boolean used to toggle the loading spinner
    loading: boolean = false;
    // Injecting ProductService via constructor
    constructor(private productService: ProductsService) {}

    // On component startup use the service and get all products
    ngOnInit() {
        this.getAllProducts();
    }
    getAllProducts() {
        this.loading = true;
        this.productService.getAllProducts().subscribe(
            (res: any) => {
                this.products = res;
                this.loading = false;
            },
            (error) => {
                alert(error.message);
                this.loading = false;
            }
        );
    }
}
