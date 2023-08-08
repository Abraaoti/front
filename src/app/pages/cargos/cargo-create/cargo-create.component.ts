import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Cargo } from 'src/app/shared/models/cargo.model';
import { CargoService } from 'src/app/shared/models/services/cargo.service';

@Component({
    selector: 'app-cargo-create',
    templateUrl: './cargo-create.component.html',
    styleUrls: ['./cargo-create.component.css']
})
export class CargoCreateComponent implements OnInit {
    cargoForm!: FormGroup;
    public cargo!: Cargo;
    public cargos!: Cargo[];


    constructor(
        private cs: CargoService,
        private location: Location,
        private router: Router,
        private _fb: FormBuilder,
        private _dialogRef: MatDialogRef<CargoCreateComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {

    }

    ngOnInit(): void {

        //this.cargoForm.patchValue(this.data)

        this.cargoForm = this._fb.group({
            id: [''],
            nome: ['', [Validators.required, Validators.minLength(7)]],

        });
    }

    onCreate(): void {
        if (this.cargoForm.valid) {
            this.cs.salvar(this.cargoForm.value).subscribe(data => {                // this.router.navigate(["funcionarios/create"]);
                this.cs.mensagem("Operação realizada com sucesso!");
                this._dialogRef.close(true);
            }, err => {
                for (let i = 0; i < err.error.errors.length; i++) {
                    this.cs.mensagem(err.error.errors[i].message);
                }
            }
            )

        }

    }

    onCancel() {
        this.location.back();
    }


}
