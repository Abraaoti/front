import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Credenciais } from 'src/app/shared/models/credenciais';
import { AuthService } from 'src/app/shared/models/services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public cadForm!: FormGroup;
    public creds!: Credenciais;
    public authenticar = null;
    public token = null;

    constructor(
        private auth: AuthService,
        private fb: FormBuilder,
        private router: Router

    ) {
        this.cadForm = this.fb.group({
            username: ['', [Validators.required, Validators.minLength(3)]],
            password: ['', [Validators.required, Validators.minLength(3)]],

        });
    }


    ngOnInit(): void {

        this.cadForm.patchValue(this)

    }
    logar() {

        this.auth.autenticar(this.cadForm.value).subscribe((response: any) => {
                      
            this.auth.successFullLogin(response.token);
            //this.auth.mensagem(response.token);
            this.router.navigateByUrl('/home');

        }, err => {
            for (let i = 0; i < err.error.errors.length; i++) {
                this.auth.mensagem(err.error.errors[i].message);
                this.router.navigateByUrl('/login');
            }
        }
        )

    }

  

    validarCampos(): boolean {
        return this.cadForm.valid;// this.creds.email && this.creds.senha.;
    }
}
