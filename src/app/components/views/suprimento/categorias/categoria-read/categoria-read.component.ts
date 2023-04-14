import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/model/entidades/categoria';
import { CategoriaService } from 'src/app/model/services/categoria.service';

@Component({
    selector: 'app-categoria-read',
    templateUrl: './categoria-read.component.html',
    styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {
    categorias: Categoria[] = []
    displayedColumns: string[] = ['id', 'nome', 'categorias', 'acoes'];

    constructor(private service: CategoriaService, private router: Router) { }
    ngOnInit(): void {
        this.lista();
    }

    lista() {
        this.service.findAll().subscribe(data => {
            this.categorias = data;
            console.log(this.categorias)
        }
        );
    }
    formCategoria() {
        this.router.navigate(["categorias/create"]);
    }
}
