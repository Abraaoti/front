import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IDepartamento } from '../entidades/idepartamento';

@Injectable({
    providedIn: 'root'
})
export class DepartamentoService {
    apiURL = environment.apiUrl + "api/departamento/"
    // funcionarioURL = 'https://app-sg.herokuapp.com/api/funcionario/';
    constructor(private http: HttpClient, private _sbar: MatSnackBar) { }



    findAll(): Observable<IDepartamento[]> {
        //const url = `${baseUrl}/lista`;
        return this.http.get<IDepartamento[]>(this.apiURL + 'lista');
    }



    create(departamento: IDepartamento): Observable<IDepartamento> {
        // const url  = `${baseUrl}/create`;
        return this.http.post<IDepartamento>(this.apiURL + 'create', departamento);
    }
    mensagem(str: String): void {
        this._sbar.open('${str}', 'OK', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 3000

        });
    }
    update(id: number, departamento: IDepartamento): Observable<IDepartamento> {
        return this.http.put<IDepartamento>(this.apiURL + 'update/${id}', departamento);
    }

    delete(id: number): Observable<any> {
        return this.http.delete(this.apiURL + 'delete/${id}');
    }



    findByTitle(nome: string): Observable<IDepartamento[]> {
        return this.http.get<IDepartamento[]>(this.apiURL + `?nome=${nome}`);
    }
}
