import { Component } from '@angular/core';
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
      this.chamadoService.getChamadosBusca(userForm.controls['solucaoProposta'].
      value, userForm.controls['projeto'].value).subscribe(products => this.chamados = products);
  }
}
