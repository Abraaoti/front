import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';
import { catchError, first, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Credenciais } from '../credenciais';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    jwtService = JwtHelperService;
    
    headers = new HttpHeaders().set('Content-Type', 'application/json');
    currentUser = {};
    authenticated = false;
    private baseUrl = environment.apiUrl + "api/auth/";
    constructor(private http: HttpClient, private _sbar: MatSnackBar) { }

    autenticar(creds: Credenciais) {

        return this.http.post(this.baseUrl + 'authenticate', creds, { headers: this.headers }).pipe(
            map((res) => {
                return res || {};
            }),
            catchError(this.handleError)
        );
        //return this.http.post(this.baseUrl + 'authenticate', creds).pipe(first());
    }
    isAutenticar() {
        let token = localStorage.getItem('token');
        if (token != null) {
            return !this.autenticar.prototype(token)
        }
        return false;
    }
    successFullLogin(authToken: string) {
        localStorage.setItem('token', authToken);
    }
    logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        localStorage.clear;
    }
    mensagem(msg: string): void {
        this._sbar.open(msg, '', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 3000

        });
    }
    getToken() {
        return localStorage.getItem('access_token');
    }
    get isLoggedIn(): boolean {
        let authToken = localStorage.getItem('access_token');
        return authToken !== null ? true : false;
    }
   
    // User profile
    getUserProfile(id: any): Observable<any> {
        let api = `${this.baseUrl}/user-profile/${id}`;
        return this.http.get(api, { headers: this.headers }).pipe(
            map((res) => {
                return res || {};
            }),
            catchError(this.handleError)
        );
    }
    // Error
    handleError(error: HttpErrorResponse) {
        let msg = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            msg = error.error.message;
        } else {
            // server-side error
            msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return throwError(msg);
    }
    
     clean(): void {
        window.sessionStorage.clear();
    }
}
