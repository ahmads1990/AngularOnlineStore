import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
})
export class LoginComponent {
    email: string = '';
    password: string = '';
    errorMessage: string = '';

    constructor(private authService: AuthService, private router: Router) {}

    login() {
        this.authService
            .login({ email: this.email, password: this.password })
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
