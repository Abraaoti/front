import { Component, Inject, OnInit } from '@angular/core';
import { IFuncionario } from 'src/app/model/entidades/funcionario';
import { FuncionarioService } from 'src/app/model/services/funcionario.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';




@Component({
    selector: 'app-funcionario-create',
    templateUrl: './funcionario-create.component.html',
    styleUrls: ['./funcionario-create.component.css']
})
export class FuncionarioCreateComponent implements OnInit {
    funForm: FormGroup;
    funcionario: IFuncionario = {
        nome: '',
        sobrenome: '',
        nascimento: '',
        cpf: '',
        rg: '',
        mae: '',
        pai: '',
        passaporte: '',
        genero: '',
        estado_civil: '',
        departamento: {},
        naturalidade: '',
        // admissao: '',
        matricula: '',
        //demissao: '',
        salario: 0,

    }
    generos!: string[];

    estado_civil!: string[];
    departamentos!: any;
    constructor(
        private fs: FuncionarioService,
        private router: Router,
        private _fb: FormBuilder,
        private _dialogRef: MatDialogRef<FuncionarioCreateComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
        this.funForm = this._fb.group(this.funcionario);
    }
    ngOnInit(): void {
        this.funForm.patchValue(this.data)
        this.g();
        this.ec();
        this.d();

    }

    onCreate(): void {
        if (this.funForm.valid) {
            if (this.data) {
                this.fs.update(this.data.id,this.funForm.value)
                    .subscribe({
                        next: (val: any) => {
                            this.fs.mensagem('Operação realizada com sucesso!');
                            this._dialogRef.close(true);
                        },
                        error: (err: any) => {
                            console.error(err);
                        },
                    });
            } else {

                this.fs.create(this.funForm.value).subscribe(data => {
                    console.log(this.funForm.value)
                    // this.router.navigate(["funcionarios/create"]);
                    this.fs.mensagem("Operação realizada com sucesso!");
                    this._dialogRef.close(true);
                }, err => {
                    for (let i = 0; i < err.error.errors.length; i++) {
                        this.fs.mensagem(err.error.errors[i].message);
                    }
                }
                )
            }
        }

    }

    g() {
        this.fs.genero().subscribe(data => {
            this.generos = data;
        }
        );
    }
    ec() {
        this.fs.estadoCivil().subscribe(data => {
            this.estado_civil = data;
        }
        );
    }
    d() {
        this.fs.departamento().subscribe(data => {
            this.departamentos = data;
        }
        );
    }
    //departamentos(): void {
    // this.router.navigate(["funcionarios/create"]);
    // this._dialogRef.close(true);
    // }

    //addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    //this.nasc = (`${event.value}`);
    //}
}
