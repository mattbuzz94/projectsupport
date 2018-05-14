import { Component, OnInit } from '@angular/core';
import { Chamado } from '../../@core/data/chamado';
import { ChamadoService } from '../../@core/data/chamado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss']
})
export class FormBuscaComponent  {

  private titulo: string;
  chamados: Chamado[] = [];

  //constructor(private chamadoService: ChamadoService,
   // private router: Router) { }

  //ngOnInit() {
    /*CHAMA O SERVIÇO E RETORNA TODAS AS PESSOAS CADASTRADAS */
    // this.chamadoService.getChamadoById(555699).subscribe((chamado) => this.chamado = chamado);
    // this.chamadoService.getRepos('fat_env_ap', 'import').subscribe(products => this.chamados = products);
  //}

}
