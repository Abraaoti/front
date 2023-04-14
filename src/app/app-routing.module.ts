import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { FuncionarioCreateComponent } from './components/views/rh/funcionarios/funcionario-create/funcionario-create.component';
import { FuncionarioDeleteComponent } from './components/views/rh/funcionarios/funcionario-delete/funcionario-delete.component';
import { FuncionarioReadComponent } from './components/views/rh/funcionarios/funcionario-read/funcionario-read.component';
import { FuncionarioUpdateComponent } from './components/views/rh/funcionarios/funcionario-update/funcionario-update.component';
import { CategoriaCreateComponent } from './components/views/suprimento/categorias/categoria-create/categoria-create.component';
import { CategoriaReadComponent } from './components/views/suprimento/categorias/categoria-read/categoria-read.component';

const routes: Routes = [

    {
        path: '', component: HomeComponent
    },
    {
        path: 'categorias', component: CategoriaReadComponent
    },
    {
        path: 'categorias/create', component: CategoriaCreateComponent
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
   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
