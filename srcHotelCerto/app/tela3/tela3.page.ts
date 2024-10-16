import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tela3',
  templateUrl: './tela3.page.html',
  styleUrls: ['./tela3.page.scss'],
})
export class Tela3Page implements OnInit{

  qEscolhido: string | null = null
  resultado: number  | null = null
  dias: number | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
    this.qEscolhido = this.route.snapshot.queryParamMap.get('quarto');
    });
}
}
