import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrl: './register.component.css',
})
export class RegisterComponent {
    name: string = '';
    email: string = '';
    password: string = '';
    errorMessage: string = '';
    constructor(private authService: AuthService, private router: Router) {}
    register() {
        this.authService
            .register({
                email: this.email,
                password: this.password,
                name: this.name,
            })
            .subscribe(
                () => {
                    this.router.navigate(['/products']);
                },
                (error) => {
                    this.errorMessage = error; // Display error message
                }
            );
    }
}
