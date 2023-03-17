import { ECargo } from "./entity/cargo"
import { DadosPessoais } from "./entity/dados-pessoais"
import { Funcionario } from "./entity/funcionario"
import { PromoverFuncionario } from "./service/promocao/promover-funcionario"
import { ReajusteSalario } from "./service/reajuste/reajuste-salario"
import { ValidacaoPercentual } from "./service/reajuste/validacao-percentual"
import { ValidacaoPeriodicidade } from "./service/reajuste/validacao-periodicidade"


try {

  console.log('INFO => OK')

  const funcionario = new Funcionario(
    new DadosPessoais(
      'Emilio',
      '000-000-000-00',
      ECargo.ESPECIALISTA,
      1500,
    ),
    new Date().toISOString()
  )

  console.log(JSON.stringify(funcionario))

  const reajusteSalario = new ReajusteSalario([
    new ValidacaoPercentual(),
    new ValidacaoPeriodicidade()
  ])

  const promoverFuncionario = new PromoverFuncionario()
  promoverFuncionario.promover(funcionario, true)
  reajusteSalario.reajustarSalarioFuncionario(funcionario, 300)

  console.log(JSON.stringify(funcionario))

} catch (err) {
  console.log(Object(err).message)
}
