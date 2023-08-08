import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ContaCreateComponent } from './components/views/financeiro/contas/conta-create/conta-create.component';
import { ContaPagarComponent } from './components/views/financeiro/contas/conta-pagar/conta-pagar.component';
import { ContaReceberComponent } from './components/views/financeiro/contas/conta-receber/conta-receber.component';
import { UsuarioCreateComponent } from './components/views/usuarios/usuario-create/usuario-create.component';
import { UsuarioReadComponent } from './components/views/usuarios/usuario-read/usuario-read.component';
import { UsuarioUpdateComponent } from './components/views/usuarios/usuario-update/usuario-update.component';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalDateTimePipe } from './model/pipe/local-date-time.pipe';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';
import { MensagemReadComponent } from './components/views/mensagens/mensagem-read/mensagem-read.component';
import { PessoaModule } from './pessoa/pessoa.module';
import { LoginComponent } from './components/pages/login/login.component';
import { DepartamentoReadComponent } from './pages/departamentos/departamento-read/departamento-read.component';
import { DepartamentoCreateComponent } from './pages/departamentos/departamento-create/departamento-create.component';
import { CargoReadComponent } from './pages/cargos/cargo-read/cargo-read.component';
import { CargoCreateComponent } from './pages/cargos/cargo-create/cargo-create.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NavComponent,
        FooterComponent,
        HomeComponent,
        ContaCreateComponent,
        ContaPagarComponent,
        ContaReceberComponent,
        UsuarioCreateComponent,
        UsuarioReadComponent,
        UsuarioUpdateComponent,
        MensagemReadComponent,
        LoginComponent,
        DepartamentoReadComponent,
        DepartamentoCreateComponent,
        CargoReadComponent,
        CargoCreateComponent,

    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatFormFieldModule,
        MatTableModule,
        MatTabsModule,
        MatButtonModule,
        MatCardModule,
        MatExpansionModule,
        MatTooltipModule,
        HttpClientModule,
        MatInputModule,
        FormsModule,
        MatDatepickerModule,
        MatSelectModule,
        MatRadioModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatPaginatorModule,
        MatSortModule,
        MatSnackBarModule,
        MatNativeDateModule,
        PessoaModule,
    ],
    providers: [
        LocalDateTimePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
