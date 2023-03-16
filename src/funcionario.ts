import { Cargo } from "./cargo";
import { ValidacaoError } from "./validacao-error";

class Funcionario {
  constructor(
    private _nome: string,
    private _cpf: string,
    private _cargo: Cargo,
    private _salario: number,
    private _dataUltimoReajuste: string
  ) { }

  reajustarSalario(aumento: number) {
    const percentualReajuste = aumento / this._salario

    if (percentualReajuste > 0.4) {
      throw new ValidacaoError('Reajuste não pode ser superior a 40% do salário')
    }

    this._salario += aumento
    this._dataUltimoReajuste = new Date().toISOString()
  }

  get nome(): string {
    return this._nome
  }

  get cpf(): string {
    return this._cpf
  }

  get cargo(): Cargo {
    return this._cargo
  }

  get salario(): number {
    return this._salario
  }

  get dataUltimoReajuste(): string {
    return this._dataUltimoReajuste
  }
}

export { Funcionario }
