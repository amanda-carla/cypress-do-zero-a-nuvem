# 🧪 Cypress do Zero à Nuvem

Este projeto realiza testes end-to-end (E2E) com [Cypress](https://www.cypress.io/) em uma aplicação HTML estática hospedada localmente. O objetivo é praticar e demonstrar o uso do Cypress na automação de testes de interface.

🔗 **Repositório GitHub:** [github.com/amanda-carla/cypress-do-zero-a-nuvem](https://github.com/amanda-carla/cypress-do-zero-a-nuvem)

---

## 📁 Estrutura do Projeto

📦 cypress-do-zero-a-nuvem
├── cypress/ # Testes E2E com Cypress
│ ├── e2e/
│ ├── support/
│ └── fixtures/
├── src/ # Página HTML e arquivos estáticos
│ ├── index.html
│ ├── privacy.html
│ ├── script.js
│ └── style.css
├── .gitignore
├── cypress.config.js # Configurações do Cypress
├── LICENSE
├── package.json
├── package-lock.json
└── README.md

yaml
Copiar
Editar

---

## 🚀 Tecnologias utilizadas

- [Cypress](https://docs.cypress.io/) – Framework de testes E2E moderno
- HTML5 – Páginas estáticas simples (`index.html`, `privacy.html`)
- JavaScript – Scripts da página
- CSS – Estilização básica
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) – Extensão do VSCode para servir a página localmente

---

## ✅ Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- [VS Code](https://code.visualstudio.com/) com a extensão **Live Server**
- Git instalado (opcional)

---

## ⚙️ Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/amanda-carla/cypress-do-zero-a-nuvem.git
   cd cypress-do-zero-a-nuvem
Instale as dependências:

bash
Copiar
Editar
npm install
No VS Code, clique com o botão direito no arquivo src/index.html e selecione "Open with Live Server"

Verifique se a página foi aberta em http://127.0.0.1:5500/src/index.html

🧪 Executando os testes
Com o Live Server ativo, abra outro terminal e execute:

bash
Copiar
Editar
npx cypress open
No painel do Cypress, selecione o teste *.cy.js dentro da pasta cypress/e2e.

⚠️ Lembre-se de garantir que o caminho dentro de cy.visit() aponte para /src/index.html (ou privacy.html conforme o teste).

💡 Dicas úteis
Use it.only(...) para rodar um teste específico durante o desenvolvimento

O beforeEach garante que a página seja recarregada antes de cada teste

Comandos customizados podem ser definidos em cypress/support/commands.js

