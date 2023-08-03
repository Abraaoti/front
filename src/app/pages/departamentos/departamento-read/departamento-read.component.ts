import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Departamento } from 'src/app/shared/models/departamento.model';
import { DepartamentoService } from 'src/app/shared/models/services/departamento.service';
import { DepartamentoCreateComponent } from '../departamento-create/departamento-create.component';

@Component({
  selector: 'app-departamento-read',
  templateUrl: './departamento-read.component.html',
  styleUrls: ['./departamento-read.component.css']
})
export class DepartamentoReadComponent {
     departamentos: Departamento[] = []
    displayedColumns: string[] = ['id','nome','acoes'];


    dataSource!: MatTableDataSource<any>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;


    constructor(
        private service: DepartamentoService,
        private router: Router,
        private _dialog: MatDialog,
    ) { }
    ngOnInit(): void {
        this.lista();
    }

    lista() {
        this.service.departamentos().subscribe(data => {
            this.departamentos = data;
            this.dataSource = new MatTableDataSource(this.departamentos);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
           
        }
        );



    }
    formDepartamento() {

        const dialogRef = this._dialog.open(DepartamentoCreateComponent);
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

    editForm(data: Departamento) {     
   console.log(data)
        const dialogRef = this._dialog.open(DepartamentoCreateComponent, {
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
