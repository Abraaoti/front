import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Departamento } from 'src/app/shared/models/departamento.model';
import { DepartamentoService } from 'src/app/shared/models/services/departamento.service';

@Component({
    selector: 'app-departamento-create',
    templateUrl: './departamento-create.component.html',
    styleUrls: ['./departamento-create.component.css']
})
export class DepartamentoCreateComponent implements OnInit {
    departamentoForm: FormGroup;

    public departamento!: Departamento;

    constructor(
        private ds: DepartamentoService,
        private location: Location,
        private router: Router,
        private _fb: FormBuilder,
        private _dialogRef: MatDialogRef<DepartamentoCreateComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
        this.departamentoForm = this._fb.group({
            id: [''],
            nome: ['', [Validators.required, Validators.minLength(7)]],

        });
    }




    ngOnInit(): void {
        this.departamentoForm.patchValue(this.data)


    }



    onCreate(): void {
        if (this.departamentoForm.valid) {
            this.ds.salvar(this.departamentoForm.value).subscribe(data => {                // this.router.navigate(["funcionarios/create"]);
                this.ds.mensagem("Operação realizada com sucesso!");
                this._dialogRef.close(true);
            }, err => {
                for (let i = 0; i < err.error.errors.length; i++) {
                    this.ds.mensagem(err.error.errors[i].message);
                }
            }
            )

        }

    }

    onCancel() {
        this.location.back();
    }


}