import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
})
export class CadastroComponent implements OnInit {

  ngOnInit(): void {
    document.getElementById("botaoCadastrar")!.addEventListener("click", this.validarFormulario);
  }

  public validarFormulario() {
      var nome: any = (document.getElementById("nome") as any).value;
      var email: any = (document.getElementById("email") as any).value;
      var senha: any = (document.getElementById("senha") as any).value;
      var senhaConfirmacao: any = (document.getElementById("senhaConfirmacao") as any).value;
      var concordo: any = (document.getElementById("concordo") as any).checked;

      console.log(senha);
      console.log(senhaConfirmacao);

      if(nome === ""){
          alert("Por favor, preencha seu nome para prosseguir.");
          return false;
      } else if (email === ""){
          alert("Por favor, preencha seu email para prosseguir.");
          return false;
      } else if (senha === ""){
          alert("Por favor, preencha sua senha para prosseguir.");
          return false;
      }else if (senha !== senhaConfirmacao){
          alert("As senhas não coincidem.");
          return false;
      }else if(!concordo){
          alert("Você precisa concordar com os termos para prosseguir.");
          return false;
      }
      //todas as validações estão válidas, prosseguir
      alert("Formulário válido. Você pode enviar");
      return true;
  }
}
