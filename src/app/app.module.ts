import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetalheProdutoComponent } from './detalhe-produto/detalhe-produto.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EntrarComponent } from './entrar/entrar.component';
import { PoliticaComponent } from './politica/politica.component';
import { TermoComponent } from './termo/termo.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { DetalheProduto2Component } from './detalhe-produto2/detalhe-produto2.component';
import { DetalheProduto3Component } from './detalhe-produto3/detalhe-produto3.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DetalheProdutoComponent,
    CadastroComponent,
    EntrarComponent,
    PoliticaComponent,
    TermoComponent,
    CarrinhoComponent,
    DetalheProduto2Component,
    DetalheProduto3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
