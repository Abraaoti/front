import { Component, Inject, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FuncionarioService } from 'src/app/pessoa/services/funcionario.service';
import { Departamento } from 'src/app/shared/models/departamento.model';
import { Funcionario } from 'src/app/shared/models/funcionario.model';
import { DepartamentoService } from 'src/app/shared/models/services/departamento.service';
import { Cargo } from 'src/app/shared/models/cargo.model';
import { CargoService } from 'src/app/shared/models/services/cargo.service';
@Component({
    selector: 'app-funcionario-create',
    templateUrl: './funcionario-create.component.html',
    styleUrls: ['./funcionario-create.component.css']
})
export class FuncionarioCreateComponent implements OnInit {
    public funcionarioForm: FormGroup;
    public cargo!: Cargo;
    public departamento!: Departamento;
    public funcionario!: Funcionario;

    ngDropdown = 1;

    generos!: string[];
    estado_civil!: string[];
    departamentos: Departamento[] = [];
    cargos: Cargo[] = [];

    constructor(
        private ds: DepartamentoService,
        private cs: CargoService,
        private location: Location,
        private fs: FuncionarioService,
        private router: Router,
        private _fb: FormBuilder,
        private _dialogRef: MatDialogRef<FuncionarioCreateComponent>,
        @Inject(MAT_DIALOG_DATA)
        public data: any,
    ) {
        this.funcionarioForm = this._fb.group({
            id: [''],
            nome: ['', [Validators.required, Validators.minLength(7)]],
            sobrenome: ['', [Validators.required, Validators.minLength(7)]],
            nascimento: ['', [Validators.required]],
            cpf: ['', [Validators.required, Validators.minLength(11)]],
            rg: ['', [Validators.required, Validators.minLength(8)]],
            mae: ['', [Validators.required, Validators.minLength(1)]],
            pai: ['', [Validators.minLength(1)]],
            passaporte: ['', [Validators.minLength(6)]],
            genero: [null, [Validators.required]],
            estado_civil: [null, [Validators.required]],
            naturalidade: ['', [Validators.required]],
            //demissao: '',
            salario: ['', [Validators.required, Validators.minLength(3)]],
            admissao: [''],
            demissao: [''],
            departamento: this._fb.group(new Departamento),
            cargo: this._fb.group(new Cargo)

        });
    }




    ngOnInit(): void {
        this.funcionarioForm.patchValue(this.data)
        this.g();
        this.ec();
        this.d();
        this.c();

    }
    compareObjects(o1: any, o2: any): boolean {
        return o1.nome === o2.nome && o1.id === o2.id;
    }


    onCreate(): void {
        if (this.funcionarioForm.valid) {
            this.fs.salvar(this.funcionarioForm.value).subscribe(data => {                // this.router.navigate(["funcionarios/create"]);
                this.fs.mensagem("Operação realizada com sucesso!");
                this.resetFuncionarioForm();
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
    c() {
        this.cs.cargos().subscribe(data => {
            this.cargos = data;
        }
        );
    }
    onCancel() {
        this.location.back();
        //this.funcionario;
    }


    resetFuncionarioForm() {
        this.funcionarioForm.reset();
    }


}