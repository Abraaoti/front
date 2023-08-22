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
    loading = false;
    error = '';
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
        this.loading = true;
        if (this.cadForm.invalid) return;
        var creds = this.cadForm.getRawValue() as Credenciais;
        this.auth.login(creds).subscribe(response => {


            if (response !== null) {
                return true;

            } else {
                return false;
            }




        }
        )

    }


    logout(): void {
        // clear token remove user from local storage to log user out
        localStorage.removeItem('token');
    }



    validarCampos(): boolean {
        return this.cadForm.valid;// this.creds.email && this.creds.senha.;
    }
}
