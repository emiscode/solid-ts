import { Funcionario } from "./funcionario";
import { ValidacaoReajuste } from "./validacao-reajuste";

class ReajusteSalario {
  constructor(private _validacoes: Array<ValidacaoReajuste>) { }

  reajustarSalarioFuncionario(funcionario: Funcionario, aumento: number) {
    this._validacoes.forEach(validacao => {
      validacao.validar(funcionario, aumento)
    })

    const salarioReajustado = funcionario.salario + aumento
    funcionario.atualizarSalario(salarioReajustado)
  }
}

export { ReajusteSalario }
