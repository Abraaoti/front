import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Cargo } from 'src/app/shared/models/cargo.model';
import { CargoService } from 'src/app/shared/models/services/cargo.service';
import { CargoCreateComponent } from '../cargo-create/cargo-create.component';

@Component({
    selector: 'app-cargo-read',
    templateUrl: './cargo-read.component.html',
    styleUrls: ['./cargo-read.component.css']
})
export class CargoReadComponent {
    cargos: Cargo[] = []
    displayedColumns: string[] = ['id', 'nome', 'acoes'];


    dataSource!: MatTableDataSource<any>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;


    constructor(
        private service: CargoService,
        private router: Router,
        private _dialog: MatDialog,
    ) { }
    ngOnInit(): void {
        this.lista();
    }

    lista() {
        this.service.cargos().subscribe(data => {
            this.cargos = data;
            this.dataSource = new MatTableDataSource(this.cargos);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;

        }
        );



    }
    formCargo() {

        const dialogRef = this._dialog.open(CargoCreateComponent);
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

    editForm(data: Cargo) {
        console.log(data)
        const dialogRef = this._dialog.open(CargoCreateComponent, {
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
