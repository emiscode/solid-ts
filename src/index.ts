import { Cargo } from "./cargo"
import { Funcionario } from "./funcionario"
import { ValidacaoError } from "./validacao-error"

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

  funcionario.reajustarSalario(300)

  console.log(JSON.stringify(funcionario))

  funcionario.reajustarSalario(800)

} catch (err) {
  console.log(Object(err).message)
}
