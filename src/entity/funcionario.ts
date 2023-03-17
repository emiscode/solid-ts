import { ECargo } from "./cargo"
import { DadosPessoais } from "./dados-pessoais"

class Funcionario {
  constructor(
    private _dadosPessoais: DadosPessoais,
    private _dataUltimoReajuste: string
  ) { }

  atualizarSalario(novoSalario: number) {
    this._dadosPessoais.salario = novoSalario
    this._dataUltimoReajuste = new Date().toISOString()
  }

  promover(novoCargo: ECargo) {
    this._dadosPessoais.cargo = novoCargo
  }

  get dataUltimoReajuste(): string {
    return this._dataUltimoReajuste
  }

  get dadosPessoais(): DadosPessoais {
    return this._dadosPessoais
  }
}

export { Funcionario }
