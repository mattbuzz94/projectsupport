import { NgModule } from '@angular/core';


import { ThemeModule } from '../../@theme/theme.module';
import { ListaChamadosComponent } from './lista-chamados.component';
import { ChamadoService } from '../../@core/data/chamado.service';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    ListaChamadosComponent,
  ],
  providers: [
    ChamadoService
  ],
})
export class ListaChamadosModule { }
