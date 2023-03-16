import { Funcionario } from "../../entity/funcionario"
import { ValidacaoReajuste } from "./validacao-reajuste"
import { ValidacaoError } from "../../error/validacao-error"

class ValidacaoPercentual implements ValidacaoReajuste {
  validar(funcionario: Funcionario, aumento: number): void {
    const percentualReajuste = aumento / funcionario.salario

    if (percentualReajuste > 0.4) {
      throw new ValidacaoError('Reajuste não pode ser superior a 40% do salário')
    }
  }
}

export { ValidacaoPercentual }
