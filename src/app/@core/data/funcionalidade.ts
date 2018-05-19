export class Funcionalidade {
    codFuncionalidade: number;
    descricaoFuncionalidade = '';
    codSistema: number;
    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
