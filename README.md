# Desafio Fast - FullStack

## Rastreamento de Participação em Workshops

![Status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)

[cite_start]Este projeto foi desenvolvido como parte do desafio técnico para a vaga de Pessoa Desenvolvedora FullStack na FAST Soluções[cite: 2]. [cite_start]O objetivo é criar uma aplicação web completa para gerenciar e rastrear a participação de colaboradores em workshops trimestrais, fornecendo uma interface para visualização de dados e métricas de engajamento[cite: 5, 9, 10, 11].

---

## ✨ Funcionalidades Implementadas

O projeto foi além dos requisitos básicos, implementando todos os bônus e funcionalidades extras para criar uma aplicação robusta e completa.

### Backend (API REST em C# / .NET)

* [cite_start]**CRUD Completo:** Endpoints para Criar, Ler, Atualizar e Excluir (`CRUD`) para as entidades `Colaboradores` e `Workshops`[cite: 22, 24].
* [cite_start]**Sistema de Autenticação e Autorização:** Todos os endpoints (exceto o de login) são protegidos usando **JWT (JSON Web Tokens)**[cite: 31].
* [cite_start]**Gerenciamento de Presença:** Endpoint dedicado para registrar a participação de um colaborador em um workshop[cite: 11].
* [cite_start]**Consultas Avançadas:** O endpoint de detalhes do workshop (`GET /api/workshops/{id}`) retorna o objeto completo, incluindo a lista de colaboradores participantes[cite: 11, 49].
* **DTOs (Data Transfer Objects):** Uso de DTOs para moldar as respostas da API, evitando loops de referência e expondo apenas os dados necessários.
* [cite_start]**Documentação Interativa:** A API é totalmente documentada e testável via **Swagger/OpenAPI**, incluindo a configuração para autenticação JWT[cite: 32].

### Frontend (Angular)

* [cite_start]**Sistema de Autenticação Completo:** Telas e lógica para **Login** e **Logout**[cite: 34].
* **Proteção de Rotas (Route Guards):** As páginas internas da aplicação são protegidas e só podem ser acessadas por usuários autenticados. Tentativas de acesso direto redirecionam para a tela de login.
* **Layout Profissional e Responsivo:** A interface se adapta a diferentes tamanhos de tela, de desktops a dispositivos móveis.
* **CRUD Completo na Interface:**
    * Gerenciamento total de **Colaboradores** (Criar, Editar e Excluir) diretamente pela interface.
    * Gerenciamento total de **Workshops** (Criar, Editar e Excluir) diretamente pela interface.
* [cite_start]**Visualização de Detalhes:** Tela dedicada para exibir os detalhes de um workshop, incluindo a lista de participantes e um botão para voltar à lista anterior[cite: 49].
* **Adição de Presença:** Funcionalidade na tela de detalhes para adicionar um novo participante a um workshop.
* **Dashboard com Gráficos (Bônus):**
    * [cite_start]**Gráfico de Pizza** na tela de detalhes, mostrando a proporção de participantes vs. ausentes[cite: 56].
    * [cite_start]**Gráfico de Barras** em uma página de Dashboard, mostrando a quantidade total de workshops que cada colaborador participou[cite: 55].

---

## 🛠️ Tecnologias Utilizadas

#### **Backend**
* C# e .NET 8
* ASP.NET Core Web API
* Entity Framework Core 8
* SQLite (Banco de Dados Relacional)
* Autenticação com JWT (JSON Web Tokens)

#### **Frontend**
* Angular 17+
* TypeScript
* SCSS
* ng2-charts (Chart.js) para visualização de dados

#### **Ferramentas e Boas Práticas**
* Git e GitHub para versionamento de código
* DTO (Data Transfer Objects) Pattern no back-end
* Serviços e Interceptores HTTP no Angular
* Componentes Standalone e Roteamento com Lazy Loading
* Design Responsivo (CSS Grid, Flexbox, Media Queries)

---

## 🚀 Como Executar o Projeto

Siga os passos abaixo para rodar a aplicação localmente.

### Pré-requisitos
* [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
* [Node.js e NPM](https://nodejs.org/) (versão LTS recomendada)
* [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)

### 1. Configuração do Backend (API)

```bash
# Navegue até a pasta do projeto da API
cd FastChallenge.API

# Instale as dependências
dotnet restore

# Inicie o servidor da API
dotnet run