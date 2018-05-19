import { Component } from '@angular/core';
import { Chamado } from '../../@core/data/chamado';
import { ChamadoService } from '../../@core/data/chamado.service';
import { NgForm } from '@angular/forms';
import { FuncionalidadeService } from '../../@core/data/funcionalidade.service';
import { Funcionalidade } from '../../@core/data/funcionalidade';

@Component({
  selector: 'ngx-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss'],
})
export class FormBuscaComponent {
  chamados: Chamado[] = [];
  funcionalidades: Funcionalidade[] = [];
  constructor(private chamadoService: ChamadoService,
    private funcionalidadeService: FuncionalidadeService,
    // private router: Router) { }
  ) { }
  onFormSubmit(userForm: NgForm) {
    this.chamadoService.getChamadosBusca(userForm.controls['solucaoProposta'].
      value, userForm.controls['projeto'].value).subscribe(chamados => this.chamados = chamados);
  }

  onChange(deviceValue) {
    // tslint:disable-next-line:no-console
    console.log(deviceValue);
    this.funcionalidadeService.getFuncionalidades(deviceValue).subscribe(funcionalidades => this.funcionalidades = funcionalidades);
  }
}
