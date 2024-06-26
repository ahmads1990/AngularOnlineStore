import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constants } from '../../../../sharedConstant';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    constructor(private http: HttpClient) {}

    getAllProducts() {
        return this.http.get(constants.baseApi + 'Products/GetAllProducts');
    }
}
