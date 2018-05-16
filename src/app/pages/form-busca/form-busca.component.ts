import { Component, OnInit } from '@angular/core';
import { Chamado } from '../../@core/data/chamado';
import { ChamadoService } from '../../@core/data/chamado.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ngx-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss'],
})
export class FormBuscaComponent {

  private titulo: string;
  chamados: Chamado[] = [];
  constructor(private chamadoService: ChamadoService,
    private router: Router) { }

    onFormSubmit(userForm: NgForm) {
      this.chamadoService.getRepos(userForm.controls['solucaoProposta'].
      value, userForm.controls['projeto'].value).subscribe(products => this.chamados = products);
  }

  /*onSubmit = function (chamado) {
    let obj: Chamado = JSON.parse(chamado);
    console.log(obj.solucaoProposta);
    console.log(obj.projeto);
    console.log(chamado);

    this.chamadoService.getRepos(obj.solucaoProposta,obj.projeto).subscribe(products => this.chamados = products);
  }*/


  // ngOnInit() {
  /*CHAMA O SERVIÇO E RETORNA TODAS AS PESSOAS CADASTRADAS */
  // this.chamadoService.getChamadoById(555699).subscribe((chamado) => this.chamado = chamado);
  // this.chamadoService.getRepos('fat_env_ap', 'import').subscribe(products => this.chamados = products);
  // }

}
