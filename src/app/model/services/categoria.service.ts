import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../entidades/categoria';
//const baseUrl = 'http://localhost:8080/api/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
categoriaURL = 'http://localhost:8080/api/categoria/';
  constructor(private http: HttpClient) { }



    findAll(): Observable<Categoria[]> {
        //const url = `${baseUrl}/lista`;
        return this.http.get<Categoria[]>(this.categoriaURL +'lista');
    }

    create(categoria: Categoria): Observable<Categoria> {
       // const url  = `${baseUrl}/create`;
        return this.http.post<Categoria>(this.categoriaURL+'create',categoria);
    }
  /**  mensagem(str: String): void {
        this._sbar.open('${str}', 'OK', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 3000

        });
    }*/
    update(id: number, categoria: Categoria): Observable<any> {
        return this.http.put(this.categoriaURL+'update/${id}', categoria);
    }

    delete(id: number): Observable<any> {
        return this.http.delete(this.categoriaURL+'delete/${id}');
    }

   

    findByTitle(nome: string): Observable<Categoria[]> {
        return this.http.get<Categoria[]>(this.categoriaURL +`?nome=${nome}`);
    }
}
