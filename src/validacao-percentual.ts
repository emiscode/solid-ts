import { Funcionario } from "./funcionario"
import { ValidacaoError } from "./validacao-error"
import { ValidacaoReajuste } from "./validacao-reajuste"

class ValidacaoPercentual implements ValidacaoReajuste {
  validar(funcionario: Funcionario, aumento: number): void {
    const percentualReajuste = aumento / funcionario.salario

    if (percentualReajuste > 0.4) {
      throw new ValidacaoError('Reajuste não pode ser superior a 40% do salário')
    }
  }
}

export { ValidacaoPercentual }
