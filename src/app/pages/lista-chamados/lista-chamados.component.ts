import { Component, OnInit } from '@angular/core';
import { Chamado } from '../../@core/data/chamado';
import { ChamadoService } from '../../@core/data/chamado.service';

@Component({
  selector: 'ngx-lista-chamados',
  templateUrl: './lista-chamados.component.html',
  styleUrls: ['./lista-chamados.component.scss'],
})
export class ListaChamadosComponent implements OnInit {
  chamados: Chamado[] = [];
  showList: boolean;
  constructor(private chamadoService: ChamadoService) {
    this.showList = false;
  }
  fetchDataFromService() {
    this.showList = true;
    this.chamados = this.chamadoService.getChamadoData();
  }

  ngOnInit() {
    this.fetchDataFromService();
  }
}
