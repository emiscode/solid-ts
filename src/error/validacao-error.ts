class ValidacaoError extends Error {
  constructor(mensagem: string) {
    super(`Erro na validação => ${mensagem}`)
  }
}

export { ValidacaoError }
