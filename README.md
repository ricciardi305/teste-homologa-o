<h1 align='center'>Teste Api News</h1>

<p align='center'>Esta api tem como objetivo listar artigos e notícias de todo o mundo.</p>

## <strong>Pré-requisitos</strong>

Para rodar a aplicação será necessário as seguinter tecnologias: </br>

- [x] [Git](https://git-scm.com)<br/>
- [x] [Docker](https://docs.docker.com/get-docker/)<br/>
- [x] [Docker Compose](https://docs.docker.com/compose/gettingstarted/)<br/>
- [x] [Node](https://nodejs.org/en/)<br/>

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

<strong>Antes de iniciar a aplicação seguindo o passo a passo a diante, você deve renomear o arquivo .env.example para .env</strong>
</br>

Esta api utiliza a [NewsAPI](https://newsapi.org/) para recuperar os artigos listados. Portanto, deve-se fornecer uma Api Key no arquivo .env. Esta chave pode ser resgatada no site da [NewApi](https://newsapi.org/) org.

</br>

## Inicializando a aplicação

```bash
# Clone este repositório
$ git clone git@github.com:ricciardi305/teste-homologacao.git

# entre na raiz do projeto clonado
$ cd teste-homologacao

# Gere o container no docker (se você ainda não tiver a imagem do node, o docker pode demorar um pouco para inicializar)
$ sudo docker-compose up --build

# Se não possui o docker
yarn start

# Pronto! A aplicação está rodando na porta3000
```

<br/><br/>

## Endpoints

</br>
Esta api possui 2 endpoints:
</br>
</br>
 - [everything](http://localhost:3000/everything)</br>
 - [top-headlines](http://localhost:3000/top-headlines)</br>
</br>
A api retorna 20 artigos por página
</br></br>

### Everything

Parâmetros:</br>

- q: Uma palavra ou frase inclusa em qualquer parte do artigo, seja título, descrição, conteúdo e etc.
- page: numero da página a ser consultada</br>

Exmplo de consulta: http://localhost:3000/everything?q=technologies&page=5
</br>
</br>

### Top-headlines

Parâmetros:</br>

- q: Uma palavra ou frase inclusa em qualquer parte do artigo, seja título, descrição, conteúdo e etc.
- page: numero da página a ser consultada</br>
- category: Pode filtrar as seguintes categorias:

  - business
  - entertainment
  - general
  - health
  - science
  - sports
  - technology

- country: Sigla de duas letras. Podem ser: `ae` `ar` `at` `au` `be` `bg` `br` `ca` `ch` `cn` `co` `cu` `cz` `de` `eg` `fr` `gb` `gr` `hk` `hu` `id` `ie` `il` `in` `it` `jp` `kr` `lt` `lv` `ma` `mx` `my` `ng` `nl` `no` `nz` `ph` `pl` `pt` `ro` `rs` `ru` `sa` `se` `sg` `si` `sk` `th` `tr` `tw` `ua` `us` `ve` `za` .

Exmplo de consulta: http://localhost:3000/everything?category=healthy&country=br
</br>

<br/><br/>

## <strong>Tecnologias</strong>

<br/>

- [x] [Node](https://nodejs.org/pt-br/) <img width="15" heigth="15" alt="NodeJS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" /><br/>
- [x] [NestJS](https://docs.nestjs.com/first-steps) <img width="15" heigth="15" alt="nestjs" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg" /><br/>
- [x] [TypeScript](https://www.typescriptlang.org/) <img width="15" heigth="15" alt="Typescript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" /><br/>

</br>

# Autor

<br/>

<a href="https://github.com/ricciardi305">
    <img src="https://avatars.githubusercontent.com/u/81863575?v=4&s=150" alt=""/>
    <br />
    <sub style="font-size: 16px"><b>Rafael Ricciardi</b></sub>
</a>

<br/>

> Feito com ❤️ por Rafael Ricciardi 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Rafael_Ricciardi-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tgmarinho/)](https://www.linkedin.com/in/rafaelricciardi/)
[![Gmail Badge](https://img.shields.io/badge/-ricciardi.rafael1997@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:tgmarinho@gmail.com)](mailto:ricciardi.rafael1997@gmail.com)
[![GitHub Badge](https://img.shields.io/badge/-Rafael_Ricciardi-100000?style=flat-square&logo=github&logoColor=white&link=https://github.com/ricciardi305)](https://github.com/ricciardi305)
