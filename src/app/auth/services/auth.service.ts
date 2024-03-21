import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constants } from '../../../../sharedConstant';
import { Observable, tap } from 'rxjs';
@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private authToken: string | null = null;
    constructor(private http: HttpClient) {}

    login(credentials: { email: string; password: string }): Observable<any> {
        return this.http
            .post<any>(constants.baseApi + 'Users/Login', credentials)
            .pipe(
                tap((response) => {
                    if (response && response.token) {
                        this.setAuthToken(response);
                    }
                })
            );
    }
    register(userData: {
        email: string;
        password: string;
        name: string;
    }): Observable<any> {
        return this.http
            .post<any>(constants.baseApi + 'Users/Register', userData)
            .pipe(
                tap((response) => {
                    if (response && response.token) {
                        this.setAuthToken(response);
                    }
                })
            );
    }
    setAuthToken(token: string) {
        this.authToken = token;
        // Save token to local storage
        localStorage.setItem('authToken', token);
    }
    getAuthToken(): string | null {
        if (!this.authToken) {
            // Retrieve token from local storage
            this.authToken = localStorage.getItem('authToken');
        }
        return this.authToken;
    }
    logout() {
        this.authToken = null;
        // Remove token from local storage
        localStorage.removeItem('authToken');
    }
}
