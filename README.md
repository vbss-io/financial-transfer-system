Em Desenvolvimento

# Simulador de um Banco Digital

## Resumo [**BackEnd**](https://github.com/vitorbss12/Full-Stack-Financial-Transfer-System/tree/main/backend)

O BackEnd dessa aplicação consiste em uma API que simula operações básicas de uma conta financeira, onde é possível fazer login com `username` e `password`, cadastrar novos usuários, consultar o balanço de um usuário, transferir dinheiro para outros usuários e consultar o extrato de transações de um usuário, podendo filtrar por data e tipo de operação (cash-in/cash-out).
A `API` foi desenvolvida em `NodeJS` com `TypeScript`, `Express` e `PostgreSQL` como banco de dados. Possui uma `arquitetura MSC` (Model, Service e Controller) e `ORM` (Object Relational Mapping) com `Sequelize`. Também possui autenticação com `JWT` e criptografia com `bcrypt`, as validações foram feitas com `zod` e tratamento de erros com `express-async-errors`.

Para mais detalhes: [**README.md**](https://github.com/vitorbss12/Full-Stack-Financial-Transfer-System/tree/main/backend)

## Conteúdo
- [Simulador de um Banco Digital](#simulador-de-um-banco-digital)
  - [Resumo **BackEnd**](#resumo-backend)
  - [Conteúdo](#conteúdo)
- [**Estrutura da Aplicação**](#estrutura-da-aplicação)

# **Estrutura da Aplicação**
````
backend
  ├── src
    ├── app.ts            # definições de middlewares e rotas da API
    ├── server.ts         # inicialização da API
    ├── /controllers      # camada de controller - requisição do cliente para a API
    ├── /database         # conexão com o banco de dados via Sequelize
      ├── /config         # config sequelize
      ├── /migrations     # migrations sequelize
      ├── /models         # models sequelize
      ├── /seeders        # seeders sequelize
    ├── /interfaces       # interfaces da aplicação
    ├── /middlewares      # Validação e autenticação de dados
    ├── /models           # camada de model isolada
    ├── /routes           # rotas para cada endpoint
    ├── /services         # camada de service - regras de negócio
    ├── /errors           # catalogo de erros
````