import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrl: './register.component.css',
})
export class RegisterComponent {
    email: string = '';
    password: string = '';
    errorMessage: string = '';
    constructor(private authService: AuthService, private router: Router) {}
    register() {}
}
