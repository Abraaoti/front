import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IDepartamento } from 'src/app/model/entidades/idepartamento';
import { DepartamentoService } from 'src/app/model/services/departamento.service';

@Component({
    selector: 'app-departamento-create',
    templateUrl: './departamento-create.component.html',
    styleUrls: ['./departamento-create.component.css']
})
export class DepartamentoCreateComponent implements OnInit {
    depForm: FormGroup;
    departamento: IDepartamento = {      
        nome: '',

    }

    constructor(
        private dService: DepartamentoService,
        private router: Router,
        private _fb: FormBuilder,
        private _dialogRef: MatDialogRef<DepartamentoCreateComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
        this.depForm = this._fb.group(this.departamento);
    }
    ngOnInit(): void {
        this.depForm.patchValue(this.data)

    }

    onCreate(): void {
        if (this.depForm.valid) {
            if (this.data) {
                this.dService.update(this.data.id, this.depForm.value)
                    .subscribe({
                        next: (val: any) => {
                            this.dService.mensagem('Operação realizada com sucesso!');
                            this._dialogRef.close(true);
                        },
                        error: (err: any) => {
                            console.error(err);
                        },
                    });
            } else {

                this.dService.create(this.depForm.value).subscribe(data => {
                    console.log(this.depForm.value)
                    // this.router.navigate(["funcionarios/create"]);
                    this.dService.mensagem("Operação realizada com sucesso!");
                    this._dialogRef.close(true);
                }, err => {
                    for (let i = 0; i < err.error.errors.length; i++) {
                        this.dService.mensagem(err.error.errors[i].message);
                    }
                }
                )
            }
        }

    }

}
