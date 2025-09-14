# 🚀 DevOps-PucPR

🔧 [CI](https://github.com/afpellin/DevOps-PucPR/actions/workflows/ci.yml)  
📦 [CD](https://github.com/afpellin/DevOps-PucPR/actions/workflows/cd.yml)

## 📄 Descrição

Este repositório contém um projeto desenvolvido para a disciplina de DevOps na PUCPR.  
Ele demonstra o fluxo completo de **CI/CD** utilizando **GitHub Actions**, além da **dockerização** da aplicação.

O objetivo é aplicar conceitos práticos de DevOps, incluindo:  
- Criação de branches e commits organizados;  
- Pull Requests com integração contínua (CI) e testes automatizados;  
- Deploy contínuo (CD) com build e push de imagens Docker;  
- Execução local da aplicação em container Docker.

**Linguagem base:** Node.js com Express  
**Ferramentas utilizadas:** Git, GitHub, Docker, GitHub Actions, Jest, Supertest

---

## Estrutura do Projeto

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

## Como Rodar Localmente

### Instalação das dependências

```bash
npm install
```

### Executar aplicação

```bash
npm start
```

Acesse no navegador: [http://localhost:3000](http://localhost:3000)  

### Executar testes

```bash
npm test
```

---

## Rodar com Docker

### Build da imagem

```bash
docker build -t ci-cd-demo .
```

### Executar container

```bash
docker run -d -p 8080:3000 ci-cd-demo
```

### Verificar container em execução

```bash
docker ps
```

Acesse no navegador: [http://localhost:8080](http://localhost:8080)

---

## Workflows GitHub Actions

- **CI:** Testes automatizados com Jest + lint (placeholder)  
- **CD:** Build e push da imagem Docker (opcional para Docker Hub)

> Certifique-se de configurar os **secrets** `DOCKERHUB_USERNAME` e `DOCKERHUB_TOKEN` no repositório, caso queira publicar a imagem no Docker Hub.

---

## Autor

**André Felipe Pellin Bonfim**  
[GitHub](https://github.com/afpellin) | [LinkedIn](https://www.linkedin.com/in/afpellin/")
