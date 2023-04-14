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
        naturalidade: '',
        // admissao: '',
        matricula: '',
        //demissao: '',
        salario: 0,

    }
    generos: string[] = [
        'feminino',
        'masculino',
        'outros',
    ]

    estado_civil: string[] = [
        'solteiro(a)',
        'casado(a)',
        'divorciado(a)',
        'viúva(o)',
    ];
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
    }

    onCreate(): void{
        if (this.funForm.valid) {
            if (this.data) {
                this.fs.update(this.data.id, this.funForm.value)
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
    //cancel(): void {
        // this.router.navigate(["funcionarios/create"]);
       // this._dialogRef.close(true);
   // }

    //addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    //this.nasc = (`${event.value}`);
    //}
}
