# SKUs para usar de testes

### Batedeira Artisan Empire Red

id sku: 5 [110V], 9 [220V]

reference id: KEA33CV

link para página de produto: https://www.kitchenaid.com.br/batedeira-stand-mixer-kitchenaid-empire-red-kea33cv/p

### Batedeira Artisan Black Matte

id sku: 637 [110V], 636 [220V]

reference id: KEA30CP

link para página de produto: https://www.kitchenaid.com.br/batedeira-stand-mixer-kitchenaid-artisan-black-matte-kea33cp-kea30cp/p

### Batedeira Artisan Silver 

id sku: 637 [110V]

reference id: KEA33CL

link para página de produto:  https://www.kitchenaid.com.br/batedeira-stand-mixer-kitchenaid-artisan-silver-kea33cl/p

# Documentações do Cypress

Dicas de alguns comandos que com certeza vamos precisar para utilizar aqui.

O Cypress possui uma documentação bastante ampla, e realmente recomendo utilizar os seguintes recursos:

- [Conceitos de testes](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress)
- [Melhores Práticas](https://docs.cypress.io/guides/references/best-practices)
- [Entendendo como criar novos testes E2E](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test)
  
A documentação é muito rica, dei algumas dicas, mas lá tem muito mais recursos e recursos mais avançados! Fiquem à vontade para experimentar.

### Visit

- [cy.visit](https://docs.cypress.io/api/commands/visit)

Bom, pra testar o site, temos que entrar nele né? Aqui explica como funciona e a forma correta de usar.

### Buscando elementos

- [cy.get](https://docs.cypress.io/api/commands/get)
- [cy.contains](https://docs.cypress.io/api/commands/contains)

Estes comandos são utilizados para encontrar elementos na página, tanto pelos identificadores quanto pelo
conteúdo.

### Interagindo com elementos

- [cy.type](https://docs.cypress.io/api/commands/type)
- [cy.click](https://docs.cypress.io/api/commands/click)
- [cy.scrollTo](https://docs.cypress.io/api/commands/scrollTo)

Após selecionar um elemento, nós podemos realizar ações do usuário nesses elementos,
como clicar, digitar, etc.

### Verificando os resultados das ações

- [cy.should](https://docs.cypress.io/api/commands/should)
- [cy.and](https://docs.cypress.io/api/commands/and)

Um dos objetivos dos testes é atestar um estado final depois de interagir, e para isso
temos comandos específicos para fazer isso. 

Podemos analisar a presença de elementos, conteúdo, atributos de CSS, se possui [ou não] uma classe específica, enfim, o que você precisar.


### Interceptando chamadas de API, e forçando seus resultados

- [cy.intercept](https://docs.cypress.io/api/commands/intercept)
- [cy.fixture](https://docs.cypress.io/api/commands/fixture)

Sempre que nossa página interage com uma API, seja interna ou externa, podemos interceptar essa chamada
para garantir que ela foi chamada [ou não]chamada), ou até mesmo impedir que essa chamada chegue até um 
servidor, e responder um conteúdo desejado e que pode até ser pré-definido como um fixture.


### Adicionando nossos próprios comandos


O Cypress permite que a gente estenda as funcionalidades ao [adicionar nossos próprios comandos](https://docs.cypress.io/api/cypress-api/custom-commands)
a ele.

**Mas quando usar isso?**

Todas as funcionalidades são extremamente genéricas para aplicações online, e muitas vezes precisamos abstrair algumas coisas específicas da nossa aplicação para facilitar a escrita e leitura dos testes.

Quer um exemplo? Adicionei nesse repo uma funcionalidade que adiciona um produto no carrinho, assim, temos a possibilidade de antes de visitar a página, já ter um produto adicionado, e assim, não precisar passar por uma página de produto pra fazer testes com produtos no carrinho. 

Fica muito mais rápido, e fácil de manter.

Dá uma olhada no arquivo em:
> cypress/support/vtex/orderForm.ts


