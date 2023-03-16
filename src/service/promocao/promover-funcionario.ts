import { Cargo, ECargo } from "../../entity/cargo";
import { Funcionario } from "../../entity/funcionario";
import { ValidacaoError } from "../../error/validacao-error";

class PromoverFuncionario {
  promover(funcionario: Funcionario, metaBatida: boolean) {
    if (ECargo.GERENTE === funcionario.cargo) {
      throw new ValidacaoError('Gerente não pode ser promovido')
    }

    if (metaBatida) {
      const cargoAtual = funcionario.cargo
      funcionario.promover(Object(Cargo)[cargoAtual].proximoCargo)
    } else {
      throw new ValidacaoError('Funcionário não bateu a meta')
    }
  }
}

export { PromoverFuncionario }
