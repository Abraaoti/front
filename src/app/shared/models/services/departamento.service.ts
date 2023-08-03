import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { first, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Departamento } from '../departamento.model';

@Injectable({
    providedIn: 'root'
})
export class DepartamentoService {
     private pathURL = environment.apiUrl + "api/departamento/";
    constructor(private http: HttpClient, private _sbar: MatSnackBar) { }



    departamentos(): Observable<Departamento[]> {
        //const url = `${baseUrl}/lista`;
        return this.http.get<Departamento[]>(this.pathURL + 'lista').pipe(first());
    }


    salvar(departamento: Partial<Departamento>) {
        if (departamento.id !== null) {
            return this.update(departamento);
        }
        return this.create(departamento);
    }

    mensagem(msg: string): void {
        this._sbar.open(msg, '', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 5000

        });
    }
    private update(departamento: Partial<Departamento>) {
        return this.http.put<Departamento>(this.pathURL + 'update', departamento).pipe(first());
    }
    private create(departamento: Partial<Departamento>) {
        return this.http.post<Departamento>(this.pathURL + 'create', departamento).pipe(first());
    }

    delete(id: any) {
        return this.http.delete(this.pathURL + 'delete/' + id);
    }

    findByTitle(nome: string): Observable<Departamento[]> {
        return this.http.get<Departamento[]>(this.pathURL + `?nome=${nome}`);
    }
}
