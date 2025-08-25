import { Routes } from '@angular/router';
import { CadastroPoliciaisComponent } from './components/cadastro-policiais/cadastro-policiais.component';
import { ListagemPoliciaisComponent } from './components/listagem-policiais/listagem-policiais.component';

export const routes: Routes = [

    {path:'cadastro', component: CadastroPoliciaisComponent },
    {path:'lista', component: ListagemPoliciaisComponent },
    {path:'**', redirectTo: 'cadastro' }
];
