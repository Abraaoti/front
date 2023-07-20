import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { IFuncionario } from 'src/app/model/entidades/funcionario';
import { FuncionarioService } from 'src/app/model/services/funcionario.service';
import { FuncionarioCreateComponent } from '../funcionario-create/funcionario-create.component';

@Component({
    selector: 'app-funcionario-read',
    templateUrl: './funcionario-read.component.html',
    styleUrls: ['./funcionario-read.component.css']
})
export class FuncionarioReadComponent implements OnInit {
    funcionarios: IFuncionario[] = []
    displayedColumns: string[] = ['id', 'nome', 'nascimento', 'cpf',  'mae', 'pai',  'genero', 'estado_civil', 'naturalidade','departamento','salario', 'acoes'];


    dataSource!: MatTableDataSource<any>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;


    constructor(
        private service: FuncionarioService,
        private router: Router,
        private _dialog: MatDialog,
        // private _coreService: CoreService
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
            console.log(this.funcionarios)
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

    editForm(data: any) {
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
