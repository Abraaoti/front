import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/internal/operators/tap';
import { environment } from 'src/environments/environment';
import { IUsuario } from '../entitys/iusuario';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    private authUrl = environment.apiUrl + "api/auth/";
    private headers = new HttpHeaders().set('Content-Type', 'application/json');
    constructor(private http: HttpClient, private router: Router) { }

    logar(creds: IUsuario): Observable<any> {
         return this.http.post(this.authUrl + 'authenticate', JSON.stringify(creds), { headers: this.headers }).pipe(tap((resposta:any) => {
            if (!resposta.success) return;
            localStorage.setItem('token', btoa(JSON.stringify(resposta.token)));
            localStorage.setItem('usuario', btoa(JSON.stringify(creds)));
            this.router.navigate(['']);
        }));
    }

 
    
}
