import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs/internal/Observable';
import { Funcionario } from 'src/app/shared/models/funcionario.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private funcionarioURL = environment.apiUrl + "api/pessoa/";
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    // funcionarioURL = 'https://app-sg.herokuapp.com/api/funcionario/';
    constructor(private http: HttpClient, private _sbar: MatSnackBar) { }



    getFuncionarios(): Observable<Funcionario[]> {
        //const url = `${baseUrl}/lista`;
        return this.http.get<Funcionario[]>(this.funcionarioURL + 'lista');
    }
    genero(): Observable<string[]> {
        //const url = `${baseUrl}/lista`;
        return this.http.get<string[]>(this.funcionarioURL + 'generos');
    }
    estadoCivil(): Observable<string[]> {
        //const url = `${baseUrl}/lista`;
        return this.http.get<string[]>(this.funcionarioURL + 'estadoCivil');
    }
   

    create(funcionario: Funcionario): Observable<Funcionario> {
        // const url  = `${baseUrl}/create`;
        return this.http.post<Funcionario>(this.funcionarioURL + 'create', funcionario);
    }
    mensagem(str: String): void {
        this._sbar.open('${str}', 'OK', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 3000

        });
    }
    update(funcionario: Funcionario): Observable<Funcionario> {
        return this.http.put<Funcionario>(this.funcionarioURL + 'update', funcionario);
    }

    delete(id: number): Observable<any> {
        return this.http.delete(this.funcionarioURL + 'delete/${id}');
    }
    getFuncionario(id: number): Observable<Funcionario> {
        const url = `${this.funcionarioURL}/${id}`;
        return this.http.get<Funcionario>(url);
    }



    findByTitle(nome: string): Observable<Funcionario[]> {
        return this.http.get<Funcionario[]>(this.funcionarioURL + `?nome=${nome}`);
    }

}
