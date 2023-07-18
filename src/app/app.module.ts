import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
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
import { HomeComponent } from './components/views/home/home.component';
import { CargoReadComponent } from './components/views/rh/cargos/cargo-read/cargo-read.component';
import { PessoaReadComponent } from './components/views/rh/pessoas/pessoa-read/pessoa-read.component';
import { CategoriaReadComponent } from './components/views/suprimento/categorias/categoria-read/categoria-read.component';
import { FornecedorReadComponent } from './components/views/suprimento/fornecedores/fornecedor-read/fornecedor-read.component';
import { ProdutoReadComponent } from './components/views/suprimento/produtos/produto-read/produto-read.component';
import { ContaCreateComponent } from './components/views/financeiro/contas/conta-create/conta-create.component';
import { ContaPagarComponent } from './components/views/financeiro/contas/conta-pagar/conta-pagar.component';
import { ContaReceberComponent } from './components/views/financeiro/contas/conta-receber/conta-receber.component';
import { UsuarioCreateComponent } from './components/views/usuarios/usuario-create/usuario-create.component';
import { UsuarioReadComponent } from './components/views/usuarios/usuario-read/usuario-read.component';
import { UsuarioUpdateComponent } from './components/views/usuarios/usuario-update/usuario-update.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaCreateComponent } from './components/views/suprimento/categorias/categoria-create/categoria-create.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FuncionarioCreateComponent } from './components/views/rh/funcionarios/funcionario-create/funcionario-create.component';
import { FuncionarioReadComponent } from './components/views/rh/funcionarios/funcionario-read/funcionario-read.component';
import { LocalDateTimePipe } from './model/pipe/local-date-time.pipe';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FuncionarioDeleteComponent } from './components/views/rh/funcionarios/funcionario-delete/funcionario-delete.component';
import { FuncionarioUpdateComponent } from './components/views/rh/funcionarios/funcionario-update/funcionario-update.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';
import { PerfilCreateComponent } from './dp/components/views/perfis/perfil-create/perfil-create.component';
import { PerfilReadComponent } from './dp/components/views/perfis/perfil-read/perfil-read.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NavComponent,
        FooterComponent,
        HomeComponent,
        CargoReadComponent,
        PessoaReadComponent,
        CategoriaReadComponent,
        FornecedorReadComponent,
        ProdutoReadComponent,
        ContaCreateComponent,
        ContaPagarComponent,
        ContaReceberComponent,
        UsuarioCreateComponent,
        UsuarioReadComponent,
        UsuarioUpdateComponent,
        CategoriaCreateComponent,
        FuncionarioCreateComponent,
        FuncionarioReadComponent,
        LocalDateTimePipe,
        FuncionarioDeleteComponent,
        FuncionarioUpdateComponent,
        PerfilCreateComponent,
        PerfilReadComponent,
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
    ],
    providers: [
        LocalDateTimePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
