# Clicksotf-API

## Pre-requisitos

- Node.js
- Docker
- Docker-compose

## Banco de dados

Para esta aplicação, foi utilizado um Banco de dados Postgres dentro de um container Docker, para utilizar a aplicação, primeiro é necessario fazer o build e subir o container com a imagem do Banco de dados.

## Utilizando a API

Primeiro é necessário inicializar e subir o Banco de Dados utilizando o Docker.

Primeiro é necessario fazer o build da imagem com o seguinte comando:

``` 
  docker build -t database . 
```

Depois é necessario subir a imagem em um container utilizando o docker-compose

``` 
  docker-compose up -d 
```

Verifique se o container do Banco de dados esta rodando 

``` 
  docker ps 
```

Depois que o Banco esta funcionando, é necessario subir o servidor da API com o comando 

``` 
  npm start
```

O servidor da API por padrão estara funcionando na porta 3333, no endereço http://localhost:3333

## Utilizando a API

Para utilizar a API você pode utilizar o software Insomnia, para realizar as requisições na API

O arquivo do Insomnia contendo os Endpoints esta nesse link: [Endpoints no Insominia](./Insomnia_2021-05-19.json)
