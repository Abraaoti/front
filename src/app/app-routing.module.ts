import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentoCreateComponent } from './components/views/departamento/departamento-create/departamento-create.component';
import { HomeComponent } from './components/views/home/home.component';
import { FuncionarioCreateComponent } from './components/views/rh/funcionarios/funcionario-create/funcionario-create.component';
import { FuncionarioDeleteComponent } from './components/views/rh/funcionarios/funcionario-delete/funcionario-delete.component';
import { FuncionarioReadComponent } from './components/views/rh/funcionarios/funcionario-read/funcionario-read.component';
import { FuncionarioUpdateComponent } from './components/views/rh/funcionarios/funcionario-update/funcionario-update.component';

const routes: Routes = [

    {
        path: '', component: HomeComponent
    },
   
    {
        path: 'funcionario/lista', component: FuncionarioReadComponent
    },
    {
        path: 'funcionario/create', component: FuncionarioCreateComponent
    },
    {
        path: 'funcionario/delete/:id', component: FuncionarioDeleteComponent
    },
    {
        path: 'funcionario/update/:id', component: FuncionarioUpdateComponent
    },
   
    {
        path: 'departamento/create', component: DepartamentoCreateComponent
    },
   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
