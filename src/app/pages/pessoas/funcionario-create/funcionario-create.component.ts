import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DepartamentoService } from 'src/app/model/services/departamento.service';
import { FuncionarioService } from 'src/app/pessoa/services/funcionario.service';
import { Departamento } from 'src/app/shared/models/departamento.model';
import { Funcionario } from 'src/app/shared/models/funcionario.model';
@Component({
    selector: 'app-funcionario-create',
    templateUrl: './funcionario-create.component.html',
    styleUrls: ['./funcionario-create.component.css']
})
export class FuncionarioCreateComponent implements OnInit {
    funForm: FormGroup;
    private _departmento!: Departamento;
   
    funcionario: Funcionario = {
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
        admissao: '',
        departmento: this._departmento,
        demissao: ''
    }
    generos!: string[];

    estado_civil!: string[];
    departamentos!: Departamento[];
    constructor(
        private ds: DepartamentoService,
        private fs: FuncionarioService,
        private router: Router,
        private _fb: FormBuilder,
        private _dialogRef: MatDialogRef<FuncionarioCreateComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
        this.funForm = this._fb.group(this.funcionario);
    }
    
    
    public get departmento() {
        return this._departmento;
    }
    public set departmento(departmento: Departamento) {
        this._departmento = departmento;
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

                this.fs.update(this.funForm.value)
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
        this.ds.getDepartamentos().subscribe(data => {
            this.departamentos = data;
        }
        );
    }
  
}