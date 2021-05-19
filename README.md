# Clicksotf-API

## Pre-requisitos

- node >= v14.16.1
- docker >= 20.10.6 
- docker-compose >= 1.25.0
- Insomnia

## Banco de dados

Para esta aplicação, foi utilizado um Banco de dados Postgres dentro de um container Docker, para utilizar a aplicação, primeiro é necessario fazer o build e subir o container com a imagem do Banco de dados.

## Rodando a aplicação

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

Para simplificar estes comandos anteriores você pode simplesmente utilizar um script que esta na raiz do projeto que incializa o Banco de Dados e sobe o container.

``` 
  ./db_init.sh
```

Depois que o Banco esta funcionando, é necessario subir o servidor da API com o comando 

``` 
  npm start
```

O servidor da API por padrão estara funcionando na porta 3333, no endereço http://localhost:3333

## Utilizando a API

Para utilizar a API você pode utilizar o software Insomnia, para realizar as requisições na API

O arquivo do Insomnia em formato JSON contendo os Endpoints esta nesse link: [Endpoints no Insominia](./Insomnia_2021-05-19.json)
