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
   private departamentoURL = environment.apiUrl + "api/departamento/"
    // funcionarioURL = 'https://app-sg.herokuapp.com/api/funcionario/';
    constructor(private http: HttpClient, private _sbar: MatSnackBar) { }



    getDepartamentos(): Observable<IDepartamento[]> {
        //const url = `${baseUrl}/lista`;
        return this.http.get<IDepartamento[]>(this.departamentoURL + 'lista');
    }



    create(departamento: IDepartamento): Observable<IDepartamento> {
        // const url  = `${baseUrl}/create`;
        return this.http.post<IDepartamento>(this.departamentoURL + 'create', departamento);
    }
    mensagem(str: String): void {
        this._sbar.open('${str}', 'OK', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 3000

        });
    }
    update(id: number, departamento: IDepartamento): Observable<IDepartamento> {
        return this.http.put<IDepartamento>(this.departamentoURL + 'update/${id}', departamento);
    }

    deleteDepartamento(id: number): Observable<IDepartamento> {
        return this.http.delete<IDepartamento>(this.departamentoURL + 'delete/${id}').pipe()
        ;
    }



    findByTitle(nome: string): Observable<IDepartamento[]> {
        return this.http.get<IDepartamento[]>(this.departamentoURL + `?nome=${nome}`);
    }
}
