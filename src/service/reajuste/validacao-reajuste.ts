import { Funcionario } from "../../entity/funcionario"

interface ValidacaoReajuste {
  validar(funcionario: Funcionario, aumento?: number): void
}

export { ValidacaoReajuste }
