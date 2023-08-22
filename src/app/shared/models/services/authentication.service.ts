import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { catchError, first, map, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Credenciais } from '../credenciais';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    jwtService = JwtHelperService;

    private authUrl = environment.apiUrl + "api/auth/";
    private headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(private http: HttpClient, private _sbar: MatSnackBar, private router: Router) { }

    login(creds: Credenciais): Observable<any> {
        return this.http.post(this.authUrl + 'authenticate', JSON.stringify(creds), { headers: this.headers }).pipe(tap((resposta: any) => {

            if (resposta !== null) {
                console.log(resposta)
                localStorage.setItem('token', btoa(JSON.stringify(resposta.token)));
                this.successFullLogin(btoa(JSON.stringify(resposta.token)));
                localStorage.setItem('usuario', btoa(JSON.stringify(creds)));
                this.router.navigate(['']);
                return true;

            } else {
                return false;
                this.mensagem('Nome  ou senha incorreta!');
            }


        }, err => {

            for (let i = 0; i < err.error.errors.length; i++) {
                this.mensagem(err.error.errors[i].message);
                this.router.navigate(['/login']);
            }
        }

        )
        );

    }
    isAutenticar(): boolean {
        let token = localStorage.getItem('token');
        if (token !== null) {
            return true;
        }
        return false;

    }
    successFullLogin(authToken: string) {
        localStorage.setItem('token', authToken);
    }

    mensagem(msg: string): void {
        this._sbar.open(msg, '', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 3000

        });
    }
    getToken(): string {
        var token = (localStorage.getItem('token') as unknown as Credenciais).username;
        if (token !== null) {
            return token;
        }
        return token ? token : "";
    }
    get logado(): boolean {
        return localStorage.getItem('token') ? true : false;
    }


    logout(): void {

        localStorage.clear();
        this.router.navigate(['login']);
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
        localStorage.removeItem('token');
    }


    // Error
    handleError(error: HttpErrorResponse) {
        let msg = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            //msg = error.error.message;
            this.mensagem(error.error.message)
        } else {
            // server-side error
            msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
            this.mensagem(msg)
        }
        return throwError(this.mensagem(msg));
    }

    clean(): void {
        window.sessionStorage.clear();
    }

  obterUsuarioLogado(): string {
     
      let usuario = localStorage.getItem('usuario');
        if (usuario !== null) {
            return usuario;
        }
        return usuario ? usuario : "";
     
  }

}
