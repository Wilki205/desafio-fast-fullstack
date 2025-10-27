# 💻 Desafio Fast - FullStack

## 🧭 Rastreamento de Participação em Workshops

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)

Este projeto foi desenvolvido como parte do desafio técnico para a vaga de **Pessoa Desenvolvedora FullStack** na **FAST Soluções**.
O objetivo é criar uma aplicação web completa para gerenciar e rastrear a participação de colaboradores em workshops trimestrais, fornecendo uma interface para visualização de dados e métricas de engajamento.

---

## ✨ Funcionalidades Implementadas

O projeto foi além dos requisitos básicos, implementando todos os bônus e funcionalidades extras para criar uma aplicação robusta e completa.

### 🔧 Backend (API REST em C# / .NET)

* **CRUD Completo:** Endpoints para Criar, Ler, Atualizar e Excluir (`CRUD`) para as entidades `Colaboradores` e `Workshops`.
* **Autenticação e Autorização com JWT:** Todos os endpoints (exceto login) são protegidos com **JSON Web Tokens**.
* **Gerenciamento de Presença:** Endpoint dedicado para registrar a participação de um colaborador em um workshop.
* **Consultas Avançadas:** Uso de **DTOs** para retornar objetos completos, como a lista de participantes em um workshop.
* **Documentação Interativa:** API documentada via **Swagger/OpenAPI**, incluindo autenticação JWT.

### 🖥️ Frontend (Angular)

* **Sistema de Autenticação Completo:** Telas e lógica para **Login** e **Logout**.
* **Proteção de Rotas:** Páginas internas só acessíveis por usuários autenticados.
* **Layout Responsivo:** Interface adaptável a diferentes tamanhos de tela.
* **CRUD Completo:**

  * Gerenciamento total de **Colaboradores** (Criar, Editar e Excluir).
  * Gerenciamento total de **Workshops** (Criar, Editar e Excluir).
* **Tela de Detalhes:** Exibe participantes de um workshop e botão para retornar.
* **Adição de Presença:** Inclusão de novos participantes direto na tela de detalhes.
* **Dashboard com Gráficos (Bônus):**

  * **Gráfico de Pizza:** Mostra a proporção de participantes.
  * **Gráfico de Barras:** Exibe quantos workshops cada colaborador participou.

---

## 🛠️ Tecnologias Utilizadas

### Backend

* C# e .NET 8
* ASP.NET Core Web API
* Entity Framework Core 8
* SQLite
* Autenticação com JWT

### Frontend

* Angular 17+
* TypeScript
* SCSS
* ng2-charts (Chart.js)

---

## 🚀 Como Executar o Projeto

### 🔹 Pré-requisitos

* [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
* [Node.js e NPM](https://nodejs.org/) (versão LTS recomendada)
* [Angular CLI](https://angular.io/cli) → `npm install -g @angular/cli`

---

### 🔹 1. Clonando o Repositório

```bash
git clone https://github.com/Wilki205/desafio-fast-fullstack.git

# Em seguida, navegue até a pasta do projeto
cd desafio-fast-fullstack
```

---

### 🔹 2. Configuração do Backend (API)

```bash
# Navegue até a pasta do projeto da API
cd FastChallenge.API

# Instale as dependências
dotnet restore

# Inicie o servidor da API
dotnet run
```

A API estará disponível em: **[http://localhost:5171](http://localhost:5171)**

---

### 🔹 3. Configuração do Frontend (App)

```bash
# Navegue até a pasta do projeto do Angular
cd FastChallenge-App

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento do Angular
ng serve
```

A aplicação estará acessível em: **[http://localhost:4200](http://localhost:4200)**

---

### 🔹 4. Credenciais de Teste

| Usuário | Senha        |
| ------- | ------------ |
| fast    | desafio@2025 |

---

## 📸 Screenshots

* **Tela de Login**
* **Lista de Workshops**
* **Dashboard (Gráfico de Barras)**
* **Detalhes de Workshop (Gráfico de Pizza)**
* **Versão Mobile (Responsiva)**

---

## 🏁 Status do Projeto

✅ Concluído e 100% funcional, com todas as features implementadas e testadas.

---

## 👨‍💻 Autor

**Wilkison Bruno Barbosa de Souza**
🔗 [GitHub](https://github.com/Wilki205)
