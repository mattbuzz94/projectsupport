import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Reportar <b><a href="mailto:matheus.rodrigues@thomsonreuters.com"
     target="_blank">melhoria</a></b></span>
  `,
})
export class FooterComponent {
}
