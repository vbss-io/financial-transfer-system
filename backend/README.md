# BackEnd

O BackEnd dessa aplicação consiste em uma API que simula operações básicas de uma conta financeira, onde é possível fazer login com `username` e `password`, cadastrar novos usuários, consultar o balanço de um usuário, transferir dinheiro para outros usuários e consultar o extrato de transações de um usuário, podendo filtrar por data e tipo de operação (cash-in/cash-out).
A `API` foi desenvolvida em `NodeJS` com `TypeScript`, `Express` e `PostgreSQL` como banco de dados. Possui uma `arquitetura MSC` (Model, Service e Controller) e `ORM` (Object Relational Mapping) com `Sequelize`. Também possui autenticação com `JWT` e criptografia com `bcrypt`, as validações foram feitas com `zod` e tratamento de erros com `express-async-errors`.

## Conteúdo

- [BackEnd](#backend)
  - [Conteúdo](#conteúdo)
- [**API - Endpoints**](#api---endpoints)
    - [**`POST /users/login`**](#post-userslogin)
    - [**`POST /users/create`**](#post-userscreate)
    - [**`GET /accounts/balance`**](#get-accountsbalance)
    - [**`POST /transactions/cash-out`**](#post-transactionscash-out)
    - [**`GET /transactions/list`**](#get-transactionslist)
    - [**`GET /transactions/list/search?date={dd/mm/aaa}&op={cash-in/cash-out}`**](#get-transactionslistsearchdateddmmaaaopcash-incash-out)
- [**Banco de Dados**](#banco-de-dados)
- [**Instruções**](#instruções)
    - [**Instalação e Execução**](#instalação-e-execução)
- [**Linter**](#linter)

# **API - Endpoints**

<details>
  <summary><strong>Login/Cadastro</strong></summary>

  ### **`POST /users/login`**

  Body:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```

  Response:
  ```json
  {
    "username": "string",
    "id": "number",
    "token": "string"
  }
  ```

  - Só é possível fazer login com um usuário cadastrado.
  - O corpo da requisição deve conter um `username` e `password`, validados com `zod`.
  - É usado `bcrypt` para comparar a senha enviada com a senha criptografada no banco de dados.

  ### **`POST /users/create`**

  Body:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```

  Response:
  ```json
  {
    "username": "string",
    "id": "number",
    "token": "string"
  }
  ```

  - Só é possível cadastrar um novo usuário com um `username` que não esteja cadastrado.
  - Ao criar um novo usuário, uma conta é criada automaticamente com saldo de R$ 100,00.
  - O corpo da requisição deve conter um `username` e `password`, validados com `zod`, onde o `username` deve ter no mínimo 3 caracteres e o `password` no mínimo 8 caracteres e possuir pelo menos uma letra maiúscula e um número.
  - Com um body válido é criado um novo usuário no banco de dados com a senha criptografada usando `bcrypt`.
  
  <br />
</details>

<details>
  <summary><strong>Accounts</strong></summary>

  ### **`GET /accounts/balance`**

  Response:
  ```json
  {
    "balance": "number"
  }
  ```

  - Só é possível consultar o saldo de um usuário logado.
  - A rota possui autenticação com `JWT`, onde o `token` deve ser enviado no header da requisição.
  - As informações de usuário são obtidas do `token` e o usuário só tem acesso ao seu próprio saldo.

  <br />
</details>

<details>
  <summary><strong>Transactions</strong></summary>

  ### **`POST /transactions/cash-out`**

  Body:
  ```json
  {
    "creditedUsername": "string",
    "value": "number",
  }
  ```

  Response:
  ```json
  {
    "id": "number",
    "debitedAccountId": "number",
    "creditedAccountId": "number",
    "value": "string",
    "createdAt": "string"
  }
  ```

  - Só é possível transferir dinheiro para outro usuário logado e com token válido.
  - Só é possível transferir dinheiro para um usuário que exista e não é possível que um usuário transfira dinheiro para ele mesmo.
  - `creditedUsername` e `value` são validados com `zod`, onde `creditedUsername` deve ter no mínimo 3 caracteres e `value` deve ser um número positivo.
  - Não é possível fazer uma transferência com um valor maior que o saldo da conta do usuário.

  ### **`GET /transactions/list`**

  Response:
  ```json
  [
    {
      "id": "number",
      "value": "string",
      "operation": "string",
      "createdAt": "string",
      "debitedAccount": "string",
      "creditedAccount": "string"
    },
    ...
  ]
  ```

  - Só é possível consultar o extrato de transações de um usuário logado e com token válido.
  - Um usuário só tem acesso ao seu próprio extrato de transações e operações cash-in e cash-out que ele realizou/recebeu.

  ### **`GET /transactions/list/search?date={dd/mm/aaa}&op={cash-in/cash-out}`**

  Query Params:
  ```json
  {
    "date": "string",
    "op": "string"
  }
  ```

  Response:
  ```json
  [
    {
      "id": "number",
      "value": "string",
      "operation": "string",
      "createdAt": "string",
      "debitedAccount": "string",
      "creditedAccount": "string"
    },
    ...
  ]
  ```

  - Só é possível consultar o extrato de transações de um usuário logado e com token válido.
  - Um usuário só tem acesso ao seu próprio extrato de transações e operações cash-in e cash-out que ele realizou/recebeu.
  - O filtro pode ser feito por data e/ou operação onde a data é no formato `dd/mm/aaaa` e a operação pode ser `cash-in` ou `cash-out`.

  <br />
</details>

# **Banco de Dados**

O banco de dados utilizado foi o `PostgreSQL` e o `Sequelize` foi utilizado como ORM. Segue abaixo o diagrama do banco de dados:

<details>
  <summary><strong>Diagrama</strong></summary>

  <!-- ![Diagrama]() -->
  Em Breve

  <br />
</details>

# **Instruções**

Para executar o projeto utilizando Docker siga as instruções no README na raiz do repositório: [aqui](https://github.com/vitorbss12/Full-Stack-Financial-Transfer-System) - EM BREVE

### **Instalação e Execução**

Para executar o projeto é necessário:
  - O **Node** deve ter versão igual ou superior à 16.14.0 LTS
  - Ter o **PostgreSQL** rodando (pode ser local ou em um container Docker)
  - Configuração correta do arquivo `.env` com as variáveis de ambiente

  ```bash
    POSTGRES_USER=postgres
    POSTGRES_PASSWORD=postgres
    POSTGRES_DB=ngcash
    POSTGRES_HOST=localhost
    POSTGRES_PORT=5432
    APP_PORT=3001
  ```

`Scripts` para instalação e execução do projeto:
####
**Instalar as dependências**
```bash
  npm install
```

**Iniciar a aplicação**
```bash
  npm start
```

**Iniciar a aplicação em modo de desenvolvimento**
```bash
  npm run dev
```

**Resetar o banco de dados**
```bash
  npm run reset:db
```

# **Linter**

Este projeto foi desenvolvido utilizando o linter `ESLint` seguindo as boas práticas definidas na [Trybe](https://www.betrybe.com/).

  - Para executar o linter, basta executar o comando:
````
npm run lint
````

- Quer saber mais sobre mim? Veja o meu [LinkedIn](https://www.linkedin.com/in/vitorbss/).