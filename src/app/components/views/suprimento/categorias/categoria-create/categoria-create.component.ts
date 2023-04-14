import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/model/entidades/categoria';
import { CategoriaService } from 'src/app/model/services/categoria.service';

@Component({
    selector: 'app-categoria-create',
    templateUrl: './categoria-create.component.html',
    styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {
    categoria: Categoria = {
        nome: ''
    }
    constructor(private cs: CategoriaService) { }
    ngOnInit(): void {
        this.onCreate();
    }

    onCreate(): void {
        this.cs.create(this.categoria).subscribe(data => {
            //this.categoria = data;
            console.log(data)
        });
    }
}
