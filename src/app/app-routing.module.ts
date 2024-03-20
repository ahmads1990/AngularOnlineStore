import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOfProductsComponent } from './products/components/list-of-products/list-of-products.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';

const routes: Routes = [
    { path: 'products', component: ListOfProductsComponent },
    { path: 'user/login', component: LoginComponent },
    { path: 'user/register', component: RegisterComponent },
    { path: '**', redirectTo: 'products', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
