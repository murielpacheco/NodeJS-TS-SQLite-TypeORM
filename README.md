<h1 align="center">NLW Together - Node.js</h1>

### Aplicação feita durante o evento NLW Together promovido pela [Rocketseat](https://www.rocketseat.com.br/).

## Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [JSONWebToken](https://github.com/auth0/node-jsonwebtoken#readme)
- [TypeORM](https://typeorm.io/#/)

## Projeto

Valoriza é uma plataforma para promover o reconhecimento entre companheiros de equipe.

## Breve resumo do uso das tecnologias no projeto

<ul>
  <li>Node.js: Ambiente para desenvolver aplicações em Javascript que rodam no lado do servidor</li>
  <li>Typescript: Superset do Javascript que ajuda na escrita do código durante o processo de desenvolvimento. Dando mais segurança aos desenvolvedores ao determinar os tipos de variados elementos do JS.</li>
  <li>Express: Framework para o desenvolvimento de APIs dentro do Node sendo uma excelente escolha no uso para construir aplicações web flexíveis e rápidas.</li>
  <li>JSONWebToken: Utilizado na parte de autenticação da aplicação, o JWT é uma ótima opção para aplicações que exigem um token que será passado entre requisições para validações, autenticações e etc.</li>
  <li>TypeORM: Framework de ORM (Object-Relational Mapping) de fácil e intuitivo uso que faz toda a parte de abstração do que há dentro do banco de dados (tabelas, colunas, relacionamentos). Disponibilizando para nossa aplicação todos os dados necessários para desenvolvimento acontecer sem que a utilização de queries SQL seja necessária.</li>
  </br>
  <li>Ademais, criar uma aplicação completa que se conecta ao banco de dados e disponibiliza todos os métodos e rotas para o cliente faz com que se tenha uma visão muito esclarecida de todo o processo: Rotas<->Controller<->Services(useCases)<->Repositórios<->Entidades(models)<->Migrations(Banco de dados)  </li>
</ul>

## Como executar

- Clone o repositório
- Rode `yarn` para baixar as dependências
- Rode `yarn typeorm migration:run` para criar as tabelas do banco de dados.
- Rode o `yarn dev` para iniciar a aplicação.

Aplicação rodando em `http://localhost:3333`
