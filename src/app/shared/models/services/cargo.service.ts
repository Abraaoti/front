import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { first, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cargo } from '../cargo.model';

@Injectable({
    providedIn: 'root'
})
export class CargoService {

    private pathURL = environment.apiUrl + "api/c/";
    constructor(private http: HttpClient, private _sbar: MatSnackBar) { }



    cargos(): Observable<Cargo[]> {
        //const url = `${baseUrl}/lista`;
        return this.http.get<Cargo[]>(this.pathURL + 'lista').pipe(first());
    }


    salvar(cargo: Partial<Cargo>) {
        if (cargo.id !== null) {
            return this.update(cargo);
        }
        return this.create(cargo);
    }

    mensagem(msg: string): void {
        this._sbar.open(msg, '', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 5000

        });
    }
    private update(cargo: Partial<Cargo>) {
        return this.http.put<Cargo>(this.pathURL + 'update', cargo).pipe(first());
    }
    private create(cargo: Partial<Cargo>) {
        return this.http.post<Cargo>(this.pathURL + 'create', cargo).pipe(first());
    }

    delete(id: any) {
        return this.http.delete(this.pathURL + 'delete/' + id);
    }

    findByTitle(nome: string): Observable<Cargo[]> {
        return this.http.get<Cargo[]>(this.pathURL + `?nome=${nome}`);
    }
}
