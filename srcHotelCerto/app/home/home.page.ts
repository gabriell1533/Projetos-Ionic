import { Component } from '@angular/core';

// importar o NavController
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

resultado = 0;
dias = 0;
quarto = '';
qEscolhido = '';
valord = 0;

  // coloco ele como privado
  constructor(private navCtrl:NavController) {}

  Calcular()
  {
    if (this.quarto == "Standard"){
      this.resultado = this.dias*806
      this.qEscolhido = 'Standard';
    }
    else if (this.quarto == "Superior"){
      this.resultado = this.dias*1050;
      this.qEscolhido = 'Superior';
    }
      else if (this.quarto == "Master"){
        this.resultado = this.dias*1500;
        this.qEscolhido = "Master";
      }
        else{
          this.resultado = this.dias*2100;
          this.qEscolhido = "Luxo";
        }

        this.valord = this.resultado / this.dias;
            // Navegar para a tela2 e passar os parametros
    this.navCtrl.navigateForward('/tela2', {
      queryParams: {
        pquarto: this.quarto,
        pdias: this.dias,
        presultado: this.resultado,
        pvalord: this.valord,
        qEscolhido: this.qEscolhido

      },

    });

}

}
