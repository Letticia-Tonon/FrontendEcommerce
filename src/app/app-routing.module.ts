import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PoliticaComponent } from './politica/politica.component';
import { TermoComponent } from './termo/termo.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { DetalheProduto2Component } from './detalhe-produto2/detalhe-produto2.component';
import { DetalheProduto3Component } from './detalhe-produto3/detalhe-produto3.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },  {
    path:'detalhe-produto',
    component:DetalheProdutoComponent
  },  {
    path:'detalhe-produto2',
    component:DetalheProduto2Component
  },  {
    path:'detalhe-produto3',
    component:DetalheProduto3Component
  },
  {
    path:'entrar',
    component:EntrarComponent
  },
  {
    path:'cadastro',
    component:CadastroComponent
  },
  {
    path: 'politica',
    component: PoliticaComponent
  },
  {
    path: 'termo',
    component: TermoComponent
  },
  {
    path: 'carrinho',
    component: CarrinhoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
