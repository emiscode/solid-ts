import { Cargo } from "./cargo";

class Funcionario {
  constructor(
    private _nome: string,
    private _cpf: string,
    private _cargo: Cargo,
    private _salario: number,
    private _dataUltimoReajuste: string
  ) { }

  atualizarSalario(novoSalario: number) {
    this._salario = novoSalario
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
