import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContaCreateComponent } from './components/views/financeiro/contas/conta-create/conta-create.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PessoaReadComponent } from './pages/pessoas/pessoa-read/pessoa-read.component';
import { DepartamentoCreateComponent } from './pages/departamentos/departamento-create/departamento-create.component';
import { DepartamentoReadComponent } from './pages/departamentos/departamento-read/departamento-read.component';
import { CargoReadComponent } from './pages/cargos/cargo-read/cargo-read.component';
import { authGuard } from './shared/auth/auth.guard';
import { usuarionaoautenticadoGuard } from './models/services/guard/usuarionaoautenticado.guard';
import { usuarioautenticadoGuard } from './models/services/guard/usuarioautenticado.guard';


const routes: Routes = [

    { path: 'login', component: LoginComponent, canActivate: [usuarionaoautenticadoGuard] },
    {
        path: '', component: NavComponent, canActivate: [usuarioautenticadoGuard],
        children: [
            {
                path: '', component: HomeComponent
            },
            {
                path: 'pessoas', component: PessoaReadComponent
            },

            {
                path: 'pagar', component: ContaCreateComponent
            },
            {
                path: 'departamentos', component: DepartamentoReadComponent
            },
            {
                path: 'cargo/cargos', component: CargoReadComponent
            },
        ]
    },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
