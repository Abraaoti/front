import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { Credenciais } from '../credenciais';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private baseUrl = environment.apiUrl + "api/auth/";
    constructor(private http: HttpClient, private _sbar: MatSnackBar) { }

    autenticar(creds: Credenciais) {
        return this.http.post(this.baseUrl + 'authenticate', creds,{observe:'response', responseType:'text'});
       // return this.http.post(this.baseUrl + 'authenticate', creds,{observe:'response', responseType:'text'});
    }
    successFullLogin(authToken: string) {
        localStorage.setItem('token',authToken);         
    }
    mensagem(str: String): void {
        this._sbar.open('${str}', 'OK', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 3000

        });
    }
}
