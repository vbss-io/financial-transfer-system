Em Desenvolvimento

# Simulador de um Banco Digital

## Resumo [**BackEnd**](https://github.com/vitorbss12/Full-Stack-Financial-Transfer-System/tree/main/backend)

O BackEnd dessa aplicação consiste em uma API que simula operações básicas de uma conta financeira, onde é possível fazer login com `username` e `password`, cadastrar novos usuários, consultar o balanço de um usuário, transferir dinheiro para outros usuários e consultar o extrato de transações de um usuário, podendo filtrar por data e tipo de operação (cash-in/cash-out).
A `API` foi desenvolvida em `NodeJS` com `TypeScript`, `Express` e `PostgreSQL` como banco de dados. Possui uma `arquitetura MSC` (Model, Service e Controller) e `ORM` (Object Relational Mapping) com `Sequelize`. Também possui autenticação com `JWT` e criptografia com `bcrypt`, as validações foram feitas com `zod` e tratamento de erros com `express-async-errors`.

Para mais detalhes: [**README.md**](https://github.com/vitorbss12/Full-Stack-Financial-Transfer-System/tree/main/backend)

## Resumo [**FrontEnd**](https://github.com/vitorbss12/Full-Stack-Financial-Transfer-System/tree/main/backend)

O FrontEnd possui uma interface minimalista e consome a API desenvolvida no BackEnd, simula uma aplicação de uma conta financeira, onde é possível fazer login com `username` e `password`, consultar o balanço de um usuário, transferir dinheiro para outros usuários e consultar o extrato de transações de um usuário, podendo filtrar por data e tipo de operação (cash-in/cash-out).
Foi desenvolvido em `ReactJS` com `TypeScript` e criado utilizando `Vite`. A estilização foi feita com `Tailwind CSS` e `Radix-UI`, com ícones da biblioteca `phosphor-icons` e `Axios` para fazer as requisições à API.

Demo:
![Demo](/images/Demo.png)

Para mais detalhes: [**README.md**](https://github.com/vitorbss12/Full-Stack-Financial-Transfer-System/tree/main/frontend)

## Conteúdo
- [Simulador de um Banco Digital](#simulador-de-um-banco-digital)
  - [Resumo **BackEnd**](#resumo-backend)
  - [Resumo **FrontEnd**](#resumo-frontend)
  - [Conteúdo](#conteúdo)
- [**Estrutura da Aplicação**](#estrutura-da-aplicação)
- [**Instruções**](#instruções)
    - [**Instalação e Execução**](#instalação-e-execução)

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
  
frontend
  ├── public
    ├── index.html        # arquivo html
  ├── src
    ├── App.tsx           # definições de rotas e componentes
    ├── index.tsx         # inicialização da aplicação
    ├── /components       # componentes da aplicação
    ├── /pages            # páginas da aplicação
    ├── /services         # camada de service - regras de negócio
    ├── /styles           # estilização da aplicação
    ├── /utils            # funções utilitárias
````

# **Instruções**

Portas utilizadas:
- Banco de Dados: 5432
- BackEnd: 3001
- FrontEnd: 5173

### **Instalação e Execução**

A instalação e execução vai depender do ambiente (`Local` ou `Docker`) que você está utilizando. Para executar localmente veja no README do [Frontend](https://github.com/vitorbss12/Full-Stack-Financial-Transfer-System/tree/main/backend) e do [Backend](https://github.com/vitorbss12/Full-Stack-Financial-Transfer-System/tree/main/backend). As instruções a seguir são para execução utilizando Docker.

Os `Scripts` disponíveis permitem a execução completa da aplicação em um ambiente `Docker` com `Docker Compose`, ou apenas o Banco de Dados PostgreSQL.

**Apenas o Banco de Dados com Docker**
```bash
npm run compose:up:dev
```

Apagar o Container
```bash
npm run compose:down:dev
```

O Front e o Back podem ser executados em suas respetivas pastas.

**Aplicação Completa**
```bash
npm run compose:up
```

Apagar os Containers
```bash
npm run compose:down
```

**Logs do Docker**
```bash
npm run compose:logs
```