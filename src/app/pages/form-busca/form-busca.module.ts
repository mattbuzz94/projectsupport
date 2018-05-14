import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { FormBuscaComponent } from './form-busca.component';
import { ChamadoService } from '../../@core/data/chamado.service';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    FormBuscaComponent,
  ],
  providers: [
    ChamadoService
  ],
})
export class FormBuscaModule { }
