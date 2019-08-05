export default {
  ADD_PORTFOLIO: (state, portfolio) => {
    portfolio.id = generateId(state.portfolios)
    state.portfolios.push(portfolio)
  },
  UPDATE_PORTFOLIO: (state, portfolio) => {
    state.portfolios = state.portfolios.map(p => {
      if (p.id === portfolio.id) {
        p = portfolio
      }
      return p
    })
  },
  REMOVE_PORTFOLIO: (state, id) => {
    state.portfolios = state.portfolios.filter(f => f.id !== id)
  }
}

function generateId (portfolios) {
  let id = parseInt(Math.random() * (99999 - 1) + 1)
  let exists = portfolios.some(p => p.id === id)
  if (!exists) {
    return id
  } else {
    return generateId(portfolios)
  }
}
