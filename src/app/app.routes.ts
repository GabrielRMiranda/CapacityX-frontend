import { Routes } from '@angular/router';
import { ListagemComponent } from './contratoTrabalho/listagem/listagem.component';
import { CadastroComponent } from './contratoTrabalho/cadastro/cadastro.component';
import { EdicaoComponent } from './contratoTrabalho/edicao/edicao.component';

export const routes: Routes = [

  { path: '', redirectTo: 'listagem', pathMatch: 'full'  },

  { path: 'listagem', component: ListagemComponent  },

  { path: 'cadastro', component: CadastroComponent  },
  
  { path: 'edicao/:id', component: EdicaoComponent  }

];
