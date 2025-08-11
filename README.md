### OBSERVAÇÃO

Ao tentar acessar a API vi que estava fora do ar, retornando status 500, vi em alguns fóruns que várias pessoas estavam passando
pelo mesmo problema. Com meu comprometimento, decidi fazer um mock simulando a API da marvel. Criei um backend, com um mock de 100 quadrinhos.
Criei uma API e consumi ela no frontend, utilizando meus conhecimentos em API REST.

## Sobre projeto backend

## Link do repositório backend:

https://github.com/felipemali/backend_testeApp

## Backend

O backend foi desenvolvido em Node.js com Express e serve como API REST que fornece os dados dos quadrinhos para o frontend.

# Estrutura

index.js — ponto de entrada do servidor, configura o Express, CORS e as rotas
routes/marvelRoutes.js — define as rotas da API (/api/comics)
controllers/marvelController.js — lógica para retornar quadrinhos com suporte a filtros e paginação
mock/marvelComicsMock.js — arquivo com dados estáticos de 100 quadrinhos da Marvel (mock)

## Funcionalidades da API

Listagem paginada: suporta parâmetros page e limit para controlar quantos quadrinhos são retornados por página
Busca por título: aceita parâmetro search para filtrar quadrinhos cujo título contenha o termo pesquisado (case insensitive)
Flag de raridade: marca aleatoriamente 10 quadrinhos como “raros” em cada resposta, com a flag isRare
Resposta estruturada: inclui total de quadrinhos filtrados, página atual, limite, e os dados da página solicitada

## Exemplo de uso da API

https://backend-testeapp.onrender.com/api/comics
exemplo: https://backend-testeapp.onrender.com/api/comics?limit=14&search=spider
-Retornará todos quadrinhos que tenha o nome spider



#### FRONTEND ####

# Sobre o projeto

Este projeto é uma loja virtual focada na venda de quadrinhos da Marvel.
O usuário pode navegar por uma lista de HQs, buscar por títulos específicos, visualizar detalhes de cada HQ e
adicionar produtos ao carrinho para simular uma compra.

# Funcionalidades principais

-Listagem de HQs na página inicial.
-Campo de busca para filtrar HQs pelo título
-Página de detalhes mostrando informações detalhadas do quadrinho selecionado.
-Carrinho de compras onde o usuário pode adicionar, visualizar itens, adicionar cupom e simular a realização da compra.
-Uso de Redux para gerenciar o estado global da aplicação (carrinho, filtros)
-Navegação entre páginas usando React Router
-Layout estilizado com Styled Components para facilitar manutenção e customização
-Ícones integrados usando Lucide Icons
-Testes end-to-end automatizados com Cypress para garantir o funcionamento das principais rotas e fluxos
-Containerização da aplicação com Docker para facilitar deploy e execução local

## Cupons

marvelraro10 para 10% de desconto
marvelcomum5 para 5% de desconto

## Tecnologias utilizadas

ReactJS
TypeScript
Redux Toolkit
React Router
Styled Components
Lucide Icons
Cypress
Docker

## Como rodar o projeto localmente

Node.js (versão 20.12.2)

## Rodar com Docker:

docker build -t hqs-app .
docker run -p 8080:80 hqs-app

# DOCKER

🐳 Docker configurado:

# Dockerfile incluso

# .dockerignore criado ignorando os arquivos:

node_modules
.git
dist
build
.vscode
.env

# Testes

pnpm cypress:open ou
pnpm cypress:run

# Estrutura do projeto

/src/assets/img - para acessar as imagens
/src/components - Componentes reutilizáveis
/src/hooks - onde esta todos hooks
/src/mock - onde esta os cupons
/src/models - onde esta toda tipagem do retorno da API
/src/pages - Páginas do site (Home, Detalhes, Carrinho)
/src/redux - esta toda configuração redux
/src/routes - esta toda configuração de rotas
/Dockerfile - esta toda configuração do Docker
