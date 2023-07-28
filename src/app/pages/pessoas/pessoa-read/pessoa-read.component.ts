import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { FuncionarioService } from 'src/app/pessoa/services/funcionario.service';
import { Funcionario } from 'src/app/shared/models/funcionario.model';
import { FuncionarioCreateComponent } from '../funcionario-create/funcionario-create.component';

@Component({
    selector: 'app-pessoa-read',
    templateUrl: './pessoa-read.component.html',
    styleUrls: ['./pessoa-read.component.css']
})
export class PessoaReadComponent implements OnInit {
    funcionarios: Funcionario[] = []
    displayedColumns: string[] = ['id', 'nome', 'nascimento', 'cpf', 'mae', 'pai', 'genero', 'estado_civil', 'naturalidade', 'departamento', 'salario', 'acoes'];


    dataSource!: MatTableDataSource<any>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;


    constructor(
        private service: FuncionarioService,
        private router: Router,
        private _dialog: MatDialog,
    ) { }
    ngOnInit(): void {
        this.lista();
    }

    lista() {
        this.service.getFuncionarios().subscribe(data => {

            this.funcionarios = data;
            this.dataSource = new MatTableDataSource(this.funcionarios);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
           
        }
        );



    }
    formFuncionario() {

        const dialogRef = this._dialog.open(FuncionarioCreateComponent);
        dialogRef.afterClosed().subscribe({
            next: (val) => {
                if (val) {
                    this.lista();
                }
            },
        });
        // this.router.navigate(["funcionario/create"]);
    }


    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    delete(id: number) {
        this.service.delete(id).subscribe({
            next: (res) => {
                this.service.mensagem('');
                this.lista();
            },
            error: console.log,
        });
    }

    editForm(data: Funcionario) {
        console.log(data)
        const dialogRef = this._dialog.open(FuncionarioCreateComponent, {
            data,
             
        });

        dialogRef.afterClosed().subscribe({
            next: (val) => {
                if (val) {
                    this.lista();
                }
            },
        });
    }

}
