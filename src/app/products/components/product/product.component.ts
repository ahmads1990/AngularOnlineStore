import { Component, Input } from '@angular/core';
import { constants } from '../../../../../sharedConstant';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
})
export class ProductComponent {
    @Input() product: any = {};
    serverUrlStatic: string = '';
    ngOnInit() {
        this.serverUrlStatic = constants.baseApi.slice(0, -1);
    }
}
