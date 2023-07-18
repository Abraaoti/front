import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUsuario } from '../entidades/iusuario';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private currentUserSubject?: BehaviorSubject<IUsuario>;
    public currentUser?: Observable<IUsuario>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<IUsuario>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }


    public get currentUserValue(): IUsuario {
        return this.currentUserSubject.getValue();
    }

    login(nome: string, senha: string) {
        return this.http.post<any>(`${environment.apiUrl}/auth`, { nome, senha })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('username');
        this.currentUserSubject.next(null);
    }

    //set name user new in storage
    setUserName(username: string) {

        localStorage.setItem('username', JSON.stringify(username));

    }

    getUserName() {

        return JSON.parse(localStorage.getItem('username'));
    }

}
