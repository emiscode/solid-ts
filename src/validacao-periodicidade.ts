import { Funcionario } from "./funcionario"
import { ValidacaoError } from "./validacao-error"
import { ValidacaoReajuste } from "./validacao-reajuste"

class ValidacaoPeriodicidade implements ValidacaoReajuste {
  validar(funcionario: Funcionario): void {
    const dataAtual = new Date().toISOString()
    const dataUltimoReajuste = funcionario.dataUltimoReajuste
    const mesesDesdeUltimoReajuste = new Date(dataUltimoReajuste).getMonth() - new Date(dataAtual).getMonth()

    if (mesesDesdeUltimoReajuste < 6) {
      throw new ValidacaoError('Intervalo entre reajustes deve ser de no mínimo 6 meses')
    }
  }
}

export { ValidacaoPeriodicidade }
