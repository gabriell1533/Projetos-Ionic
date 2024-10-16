import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tela2',
  templateUrl: './tela2.page.html',
  styleUrls: ['./tela2.page.scss'],
})
export class Tela2Page implements OnInit {

    // passar os tipos de parametros
    qEscolhido: string | null = null
    resultado: number  | null = null
    dias: number | null = null;
    valord: number | null = null;

  // privado
  constructor(private route: ActivatedRoute) { }

  //ngOnInit para rodar esse código assim que a página for aberta
  ngOnInit() {

    this.qEscolhido = this.route.snapshot.queryParamMap.get('qEscolhido');

    const diasstr = this.route.snapshot.queryParamMap.get('pdias');
    const resultadostr = this.route.snapshot.queryParamMap.get('presultado');
    const valordstr = this.route.snapshot.queryParamMap.get('pvalord');

    // converter
    this.dias = diasstr ? parseInt(diasstr, 10) : null;
    this.resultado = resultadostr ? parseFloat(resultadostr) : null;
    this.valord = valordstr ? parseInt(valordstr, 10) : null;

  }

}
