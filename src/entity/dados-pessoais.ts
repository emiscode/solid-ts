import { ECargo } from "./cargo";

class DadosPessoais {
  constructor(
    private _nome: string,
    private _cpf: string,
    private _cargo: ECargo,
    private _salario: number,
  ) { }

  get nome(): string {
    return this._nome
  }

  set nome(nome: string) {
    this._nome = nome
  }

  get cpf(): string {
    return this._cpf
  }

  set cpf(cpf: string) {
    this._cpf = cpf
  }

  get cargo(): ECargo {
    return this._cargo
  }

  set cargo(cargo: ECargo) {
    this._cargo = cargo
  }

  get salario(): number {
    return this._salario
  }

  set salario(salario: number) {
    this._salario = salario
  }
}

export { DadosPessoais }
