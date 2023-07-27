import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Credenciais } from 'src/app/shared/models/credenciais';
import { AuthenticationService } from 'src/app/shared/models/services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    creds: Credenciais = {
        email: '',
        senha: ''
    }
    email = new FormControl(null, Validators.email);
    senha = new FormControl(null, Validators.minLength(3));
    authenticar = null;

    constructor(private auth: AuthenticationService) { }


    ngOnInit(): void {


    }
    logar() {
        this.auth.autenticar(this.creds).subscribe(response => {
            //this.authenticar = response.headers.get('Authorization');
            this.auth.successFullLogin(response.statusText);
            this.auth.mensagem(response.statusText);
        }
        )
    }
    validarCampos(): boolean {
        return this.email.valid && this.senha.valid;
    }
}
