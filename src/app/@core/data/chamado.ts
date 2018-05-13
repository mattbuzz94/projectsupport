export class Chamado {
     numeroChamado: number;
     tituloChamado = '';

     descricaoChamado = '';

     tipoChamado = '';

     analistaNome = '';

     solucaoProposta = '';

     statusChamado = '';

     projeto = '';

     comentarioInterno = '';

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
