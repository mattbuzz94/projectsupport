import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { FormBuscaComponent } from './form-busca.component';
import { ChamadoService } from '../../@core/data/chamado.service';
import { FuncionalidadeService } from '../../@core/data/funcionalidade.service';


@NgModule({
  imports: [
    ThemeModule,
  ],
  declarations: [
    FormBuscaComponent,
  ],
  providers: [
    ChamadoService,
    FuncionalidadeService,
  ],
})
export class FormBuscaModule { }
