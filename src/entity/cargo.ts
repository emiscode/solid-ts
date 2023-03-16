enum ECargo {
  ASSISTENTE = 'ASSISTENTE',
  ANALISTA = 'ANALISTA',
  ESPECIALISTA = 'ESPECIALISTA',
  GERENTE = 'GERENTE'
}

const Cargo = {
  ASSISTENTE: {
    name: ECargo.ASSISTENTE,
    proximoCargo: ECargo.ANALISTA
  },
  ANALISTA: {
    name: ECargo.ANALISTA,
    proximoCargo: ECargo.ESPECIALISTA
  },
  ESPECIALISTA: {
    name: ECargo.ESPECIALISTA,
    proximoCargo: ECargo.GERENTE
  },
  GERENTE: {
    name: ECargo.GERENTE,
    proximoCargo: ECargo.GERENTE
  },
}

export { ECargo, Cargo }
