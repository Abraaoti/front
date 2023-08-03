import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { first } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Funcionario } from 'src/app/shared/models/funcionario.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class FuncionarioService {

    private funcionarioURL = environment.apiUrl + "api/p/";

    constructor(private http: HttpClient, private _sbar: MatSnackBar) { }



    getFuncionarios(): Observable<Funcionario[]> {
        //const url = `${baseUrl}/lista`;
        return this.http.get<Funcionario[]>(this.funcionarioURL + 'pessoas').pipe(first());
    }
    genero(): Observable<string[]> {
        //const url = `${baseUrl}/lista`;
        return this.http.get<string[]>(this.funcionarioURL + 'generos').pipe(first());
    }
    estadoCivil(): Observable<string[]> {
        //const url = `${baseUrl}/lista`;
        return this.http.get<string[]>(this.funcionarioURL + 'estadoCivil').pipe(first());
    }

    salvar(funcionario: Partial<Funcionario>){
        if (funcionario._id !==null) {
            return this.update(funcionario);
        }
        return  this.create(funcionario);
    }

    mensagem(msg: string): void {
        this._sbar.open(msg, '', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 5000

        });
    }
   private update(funcionario: Partial<Funcionario>) {   
        return this.http.put<Funcionario>(this.funcionarioURL + 'update', funcionario).pipe(first());
    }
    private create(funcionario: Partial<Funcionario>){
        return this.http.post<Funcionario>(this.funcionarioURL + 'create', funcionario).pipe(first());
    }

    delete(id: any){
        return this.http.delete(this.funcionarioURL + 'delete/'+id);
    }
   
    findByTitle(nome: string): Observable<Funcionario[]> {
        return this.http.get<Funcionario[]>(this.funcionarioURL + `?nome=${nome}`);
    }

}
