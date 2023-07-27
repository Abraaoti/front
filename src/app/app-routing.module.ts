import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContaCreateComponent } from './components/views/financeiro/contas/conta-create/conta-create.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PessoaReadComponent } from './pages/pessoas/pessoa-read/pessoa-read.component';

const routes: Routes = [
    {
        path: 'login', component: LoginComponent
    },
    {
        path: '', component: NavComponent,
        children: [
            {
                path: 'home', component: HomeComponent
            },
            {
                path: 'pessoas', component: PessoaReadComponent
            },

            {
                path: 'pagar', component: ContaCreateComponent
            },
        ]
    },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
