import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { constants } from '../../../../../sharedConstant';

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
    serverUrlStatic: string = '';
    // Injecting ProductService via constructor
    constructor(private productService: ProductsService) {}

    // On component startup use the service and get all products
    ngOnInit() {
        this.getAllProducts();
        this.serverUrlStatic = constants.baseApi.slice(0, -1);
    }
    getAllProducts() {
        this.loading = true;
        this.productService.getAllProducts().subscribe(
            (res: any) => {
                this.products = res;
                this.loading = false;
                console.log(res);
            },
            (error) => {
                alert(error.message);
                this.loading = false;
            }
        );
    }
}
