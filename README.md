# Loja de HQs Marvel

Este repositório contém uma aplicação completa de **uma loja de HQs**, composta por **dois projetos integrados**:

- **Back-end** → Fornece uma API personalizada que serve dados de um **mock com 100 HQs** previamente definidos.
- **Front-end** → Consome essa API, listando e exibindo detalhes das HQs.


<br>
<br>

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

---

### 🏗️ Estrutura do Repositório

```
HQs-marvel/
│
├── backend/       # API Node.js com Express que serve o mock de HQs
│ ├── controllers/ # Lógica para retornar HQs com suporte a filtros e paginação
│ ├── mock/        # Arquivo com dados estáticos de 100 HQs da Marvel
│ ├── routes/      # Define as rotas da API (/api/comics)
│ ├── index.js/    # Ponto de entrada do servidor, configura o Express, CORS e as rotas
│
│
├── frontend/      # Interface web em React + TypeScript
│ ├── cypress/     # Armazena todos testes E2E
│ │ ├── src/
│ │ ├── assets/    # Imagens e icones
│ │ ├── components # Todos componentes reutilizáveis
│ │ ├── hooks      # Hooks do Redux
│ │ ├── mock       # Armazena os cupons
│ │ ├── models     # Todas Tipagens globais
│ │ ├── pages      # Página Home, Details e Cart
│ │ ├── redux      # Estado global do projeto
│ │ ├── routes     # Gerenciamento de rotas
│ ├── Dockerfile   # Configuração Docker

```

---

## Front-end

- Apresenta os resultados da API de forma interativa.

## 🛠️ Tecnologias

- **Typescript 5.9.2** - Linguagem
- **React 19.1.1** - Biblioteca base
- **Redux toolkit 2.8.2** - Biblioteca de estado
- **Styled-components 6.1.19** - Biblioteca de Estilização
- **Cypress 15** - Framework de testes
- **React-router-dom 7.8.1** - Biblioteca de gerenciamento de rotas

## 🚀 Funcionalidades

- **Listar HQs**
- **Exibir detalhes das HQs**
- **Simular compra das HQs**

---

## 🖥️ **Back-end**

- Fornece uma API personalizada que serve dados de um **mock com 100 HQs da Marvel**

## 🛠️ Tecnologias

- **Node.js 20.12.2** - Ambiente de execução
- **Express 5.1.0** - Framework backend

---

## 🚀 Execução

### Desenvolvimento

```bash
# Clonar repositório
 git clone <repository-url>
 cd HQs-marvel
```

### Executar os projetos

- **Backend**

```bash
# Acessar repositório backend
cd backend

# Instalar dependências do projeto
 pnpm install

# Iniciar servidor
 node index.js

 - O backend estará disponível em: http://localhost:3001
```

- **🌐 Backend em Produção**

```bash
# O backend está hospedado no Render e pode ser acessado publicamente pelo link:

https://hqs-marvel.onrender.com/api/comics

- O frontend já está configurado para consumir esta URL em produção.
```

- **Frontend**

```bash
# Acessar repositório frontend
cd frontend

# Instalar dependências do projeto
 pnpm install

# Executar Projeto
 pnpm start

 - O frontend estará disponível em: http://localhost:3000
```

---

## 📡 Serviço do Backend

- O backend expõe endpoints para acessar e pesquisar os dados do mock de 100 HQs.
  Ele implementa paginação, limite de resultados e busca por título.

## 🚦 Endpoints

```http
# Endpoint Principal

GET https://hqs-marvel.onrender.com/api/comics
```

## Exemplo de Requisição

```http
# Buscar as primeiras 10 HQs que contenham a palavra "Spider"

GET https://hqs-marvel.onrender.com/api/comics?page=1&limit=10&search=Spider
```

**Restulado**

<pre> json {
  "page": 1,
  "limit": 10,
  "total": 100,
  "results": [
    {
      "id": 1,
      "title": "The Amazing Spider-Man #1",
      "thumbnail": "https://tse2.mm.bing.net/th/id/OIP.HbhFiQuRdN7_SGPSLbpHZAHaLM?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    }
  ]
}  </pre>

---

## 🧪 Testes E2E

- O frontend inclui testes E2E com Cypress.

```bash
# Para abrir o cypress:
pnpm cy:open

# Para rodar os testes no terminal
 pnpm cy:run
```

---

## 🐋 Usando Docker

**Você pode rodar a aplicação de HQs facilmente com Docker.**

- O Dockerfile faz duas coisas:

  1. Constrói a aplicação com Node.js e pnpm.

  2. Servirá a aplicação usando Nginx na porta 80.

### 🚀 Como Rodar

```bash
# Construir a imagem
docker build -t hq-app .

# Rodar o container
docker run -p 8080:80 hq-ap

- A aplicação estará disponível em http://localhost:8080
```

---

## 📄 Licença

- Este projeto é de uso livre para fins educacionais.
