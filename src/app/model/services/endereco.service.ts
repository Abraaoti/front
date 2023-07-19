import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEndereco } from '../entidades/iendereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  apiURL = 'http://localhost:8080/api/endereco/';
  constructor(private http: HttpClient) { }



    findAll(): Observable<IEndereco[]> {
        //const url = `${baseUrl}/lista`;
        return this.http.get<IEndereco[]>(this.apiURL +'lista');
    }

    create(endereco: IEndereco): Observable<IEndereco> {
       // const url  = `${baseUrl}/create`;
        return this.http.post<IEndereco>(this.apiURL+'create',endereco);
    }
  /**  mensagem(str: String): void {
        this._sbar.open('${str}', 'OK', {
            horizontalPosition: 'end',
            verticalPosition: 'top',
            duration: 3000

        });
    }*/
    update(id: number, endereco: IEndereco): Observable<any> {
        return this.http.put(this.apiURL+'update/${id}', endereco);
    }

    delete(id: number): Observable<any> {
        return this.http.delete(this.apiURL+'delete/${id}');
    }

   

    findByCep(cep: string): Observable<IEndereco[]> {
        return this.http.get<IEndereco[]>(this.apiURL +`?cep=${cep}`);
    }
}
