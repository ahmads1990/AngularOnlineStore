import { TestBed, inject } from '@angular/core/testing';
import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';

import { ProductsService } from './products.service';
import { constants } from '../../../../sharedConstant';

describe('ProductsService', () => {
    let service: ProductsService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [ProductsService],
        });
        service = TestBed.inject(ProductsService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify(); // Ensure that no outstanding requests are pending
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should fetch all products', () => {
        const mockProducts = [
            { id: 1, name: 'Product 1' },
            { id: 2, name: 'Product 2' },
        ];

        // Make a mock HTTP request
        service.getAllProducts().subscribe((products) => {
            expect(products).toEqual(mockProducts);
        });

        const req = httpMock.expectOne(constants.baseApi + 'products');
        expect(req.request.method).toBe('GET');

        // Respond with mock data
        req.flush(mockProducts);
    });
});
