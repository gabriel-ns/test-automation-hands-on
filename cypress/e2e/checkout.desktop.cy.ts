describe('KitchenAid - Carrinho', () => {
  const url = '/checkout/#/cart'
  const skuId = 5 // artisan empire red 110v
  // const skuId = 9 // artisan empire red 220V
  // const skuId = 637 // artisan black matte 110v

  beforeEach(() => {
    cy.getOrderForm()
  })

  it('deve mostrar o modal de garantia automaticamente ao chegar no carrinho com produto adicionado, e fechar ao clicar no "X"', () => {
    cy.addSkuToCart([{ skuId, quantity: 1, seller: '1' }], 1)
    cy.visit(url)
  })

  it('deve mostrar o botão de adicionar garantia estendida ao chegar no carrinho com produto adicionado', () => {
  })

  it('deve mostrar a opção e calcular o frete ao clicar em calcular entrega', () => {
  })
})