# DevOps-PucPR 🚀

![CI Status](https://img.shields.io/github/actions/workflow/status/afpellin/DevOps-PucPR/ci.yml?branch=main) ![CD Status](https://img.shields.io/github/actions/workflow/status/afpellin/DevOps-PucPR/cd.yml?branch=main)

## 📄 Descrição

Este repositório contém um projeto desenvolvido para a disciplina de DevOps na PUCPR. Ele demonstra o fluxo completo de **CI/CD** utilizando **GitHub Actions**, além da **dockerização** da aplicação.

**Objetivos:**

* 🌿 Criação de branches e commits organizados
* 🔄 Pull Requests com integração contínua (CI) e testes automatizados
* 🚀 Deploy contínuo (CD) com build e push de imagens Docker
* 🐳 Execução local da aplicação em container Docker

**Linguagem base:** Node.js com Express
**Ferramentas:** Git, GitHub, Docker, GitHub Actions, Jest, Supertest

---

## 🗂 Estrutura do Projeto

```
DevOps-PucPR/
├─ .github/workflows/      # Workflows CI/CD do GitHub Actions
├─ src/                    # Código-fonte da aplicação
├─ test/                   # Testes automatizados
├─ Dockerfile              # Dockerfile para containerização
├─ .dockerignore           # Arquivo de ignore do Docker
├─ package.json            # Dependências e scripts Node.js
└─ README.md               # Este arquivo
```

---

## 💻 Como Rodar Localmente

### 📥 Instalação das dependências

```bash
npm install
```

### ▶️ Executar aplicação

```bash
npm start
```

Acesse no navegador: [http://localhost:3000](http://localhost:3000)

### 🧪 Executar testes

```bash
npm test
```

---

## 🐳 Rodar com Docker

### 🏗 Build da imagem

```bash
docker build -t devops-pucpr .
```

### ▶️ Executar container

```bash
docker run -d -p 8080:3000 devops-pucpr
```

Acesse no navegador: [http://localhost:8080](http://localhost:8080)

### 🔍 Verificar container em execução

```bash
docker ps
```

---

## ⚙️ Workflows GitHub Actions

* 🔧 **CI**: Testes automatizados com Jest
* 📦 **CD**: Build e push da imagem Docker (opcional para Docker Hub)
* 📣 **Alerta Discord**: Notificações de commits e deploys

> Configure os **secrets** `DOCKER_USERNAME`, `DOCKER_PASSWORD` e `DISCORD_WEBHOOK` no repositório para publicar imagens e receber alertas.

---

## 👤 Autor

**André Felipe Pellin Bonfim**
[GitHub](https://github.com/afpellin) | [LinkedIn](https://www.linkedin.com/in/afpellin/)
