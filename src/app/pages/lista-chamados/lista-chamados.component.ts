import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Chamado } from '../../@core/data/chamado';
import { ChamadoService } from '../../@core/data/chamado.service';

@Component({
  selector: 'app-lista-chamados',
  templateUrl: './lista-chamados.component.html',
  styleUrls: ['./lista-chamados.component.scss']
})
export class ListaChamadosComponent implements OnInit {

  private titulo: string;
  chamados: Chamado[] = [];

  constructor(private chamadoService: ChamadoService,
    private router: Router) { }

  ngOnInit() {
    /*CHAMA O SERVIÇO E RETORNA TODAS AS PESSOAS CADASTRADAS */
    // this.chamadoService.getChamadoById(555699).subscribe((chamado) => this.chamado = chamado);
    this.chamadoService.getRepos('fat_env_ap', 'import').subscribe(products => this.chamados = products);
  }
}
