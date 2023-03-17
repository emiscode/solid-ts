import { DadosPessoais } from "./dados-pessoais";

class Terceirizado {
  constructor(
    private _empresa: string,
    private _dadosPessoais: DadosPessoais
  ) { }

  get empresa(): string {
    return this._empresa
  }

  set empresa(nome: string) {
    this._empresa = nome
  }

  get dadosPessoais(): DadosPessoais {
    return this._dadosPessoais
  }
}

export { Terceirizado }
