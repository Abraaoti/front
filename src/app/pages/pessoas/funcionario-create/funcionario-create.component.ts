import { Component, Inject, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FuncionarioService } from 'src/app/pessoa/services/funcionario.service';
import { Departamento } from 'src/app/shared/models/departamento.model';
import { Funcionario } from 'src/app/shared/models/funcionario.model';
import { DepartamentoService } from 'src/app/shared/models/services/departamento.service';
@Component({
    selector: 'app-funcionario-create',
    templateUrl: './funcionario-create.component.html',
    styleUrls: ['./funcionario-create.component.css']
})
export class FuncionarioCreateComponent implements OnInit {
    funcionarioForm: FormGroup;
    _departamento!: Departamento;
    funcionario: Funcionario = {
        _id: '',
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
        departamento: this._departamento,
        demissao: ''
    }
    generos!: string[];

    estado_civil!: string[];
    departamentos: Departamento[] = [];
    constructor(
        private ds: DepartamentoService,
        private location: Location,
        private fs: FuncionarioService,
        private router: Router,
        private _fb: FormBuilder,
        private _dialogRef: MatDialogRef<FuncionarioCreateComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
        this.funcionarioForm = this._fb.group({
            id: [this.funcionario._id],
            nome: [this.funcionario.nome, [Validators.required, Validators.minLength(7)]],
            sobrenome: [this.funcionario.sobrenome, [Validators.required, Validators.minLength(7)]],
            nascimento: [this.funcionario.nascimento, [Validators.required]],
            cpf: [this.funcionario.cpf, [Validators.required, Validators.minLength(11)]],
            rg: [this.funcionario.rg, [Validators.required, Validators.minLength(8)]],
            mae: [this.funcionario.mae, [Validators.required, Validators.minLength(1)]],
            pai: [this.funcionario.pai, [Validators.minLength(1)]],
            passaporte: [this.funcionario.passaporte, [Validators.minLength(6)]],
            genero: [this.funcionario.genero, [Validators.required]],
            estado_civil: [this.funcionario.estado_civil, [Validators.required]],
            naturalidade: [this.funcionario.naturalidade, [Validators.required]],
            // admissao: '',
            matricula: [this.funcionario.matricula, [Validators.required, Validators.minLength(3)]],
            //demissao: '',
            salario: [this.funcionario.salario, [Validators.required, Validators.minLength(3)]],
            admissao: [this.funcionario.admissao],
            departamento: [this._departamento, [Validators.required]],
            demissao: [this.funcionario.demissao],

        });
    }




    ngOnInit(): void {
        this.funcionarioForm.patchValue(this.data)
        this.g();
        this.ec();
        this.d();


    }

    get departamento() {   
         return this.funcionarioForm.get('departamento');
    }

    onCreate(): void {
        if (this.funcionarioForm.valid) {
            this.fs.salvar(this.funcionarioForm.value).subscribe(data => {                // this.router.navigate(["funcionarios/create"]);
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
        this.ds.departamentos().subscribe(data => {
            this.departamentos = data;
        }
        );
    }
    onCancel() {
        this.location.back();
    }


}