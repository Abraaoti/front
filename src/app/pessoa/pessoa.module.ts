import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioService } from './services/funcionario.service';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { PessoaReadComponent } from '../pages/pessoas/pessoa-read/pessoa-read.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatNativeDateModule } from '@angular/material/core';
import { FuncionarioCreateComponent } from '../pages/pessoas/funcionario-create/funcionario-create.component';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
    declarations: [
        PessoaReadComponent,
        FuncionarioCreateComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatTableModule,
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        HttpClientModule,
        MatInputModule,
        MatDatepickerModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatIconModule,
        MatPaginatorModule,
        MatSortModule,
        MatNativeDateModule,
        MatDividerModule,

    ],
    providers: [
        FuncionarioService,
    ]
})
export class PessoaModule { }
