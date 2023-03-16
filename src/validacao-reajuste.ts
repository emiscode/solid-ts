import { Funcionario } from "./funcionario";

interface ValidacaoReajuste {
  validar(funcionario: Funcionario, aumento?: number): void
}

export { ValidacaoReajuste }
