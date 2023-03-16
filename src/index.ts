import { Cargo } from "./entity/cargo"
import { Funcionario } from "./entity/funcionario"
import { ReajusteSalario } from "./service/reajuste/reajuste-salario"
import { ValidacaoPercentual } from "./service/reajuste/validacao-percentual"
import { ValidacaoPeriodicidade } from "./service/reajuste/validacao-periodicidade"


try {

  console.log('INFO => OK')

  const funcionario = new Funcionario(
    'Emilio',
    '000-000-000-00',
    Cargo.ESPECIALISTA,
    1500,
    new Date().toISOString()
  )

  console.log(JSON.stringify(funcionario))

  const reajusteSalario = new ReajusteSalario([
    new ValidacaoPercentual(),
    new ValidacaoPeriodicidade()
  ])

  reajusteSalario.reajustarSalarioFuncionario(funcionario, 300)

  console.log(JSON.stringify(funcionario))

  reajusteSalario.reajustarSalarioFuncionario(funcionario, 800)

} catch (err) {
  console.log(Object(err).message)
}
