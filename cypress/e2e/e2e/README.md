# 🧪 Automação de Testes E2E com Cypress - E-commerce (KaBuM)

Este projeto demonstra a implementação de testes End-to-End (E2E) utilizando **Cypress** em um cenário real de e-commerce.

Os testes simulam o comportamento de um usuário navegando pelo site da KaBuM, realizando buscas, aplicando filtros e adicionando produtos ao carrinho.

O foco é validar comportamento, experiência do usuário e integridade da interface.

---

# 🎯 Objetivo do Projeto

Validar fluxos críticos de um e-commerce real, garantindo que:

- A busca de produtos funcione corretamente
- A listagem retorne resultados válidos
- Filtros atualizem a URL corretamente
- Produtos possam ser acessados
- Produtos possam ser adicionados ao carrinho

O projeto demonstra domínio de:

- Estruturação de testes
- Organização por responsabilidade
- Reutilização de funções auxiliares
- Assertions estratégicas
- Simulação real de comportamento do usuário

---

# 🛠 Tecnologias Utilizadas

- Node.js
- Cypress
- JavaScript

---

# 📦 Estrutura do Projeto

```
cypress/
 └── e2e/
      ├── filters.cy.js
      └── shopping_cart.cy.js
```

Cada arquivo é responsável por um fluxo específico.

---

# 🎛 filters.cy.js

Responsável por validar filtros e comportamento da listagem.

### O que esse teste faz:

1. Acessa a página inicial
2. Pesquisa por "processador" Ou item desejado
3. Valida se existem resultados
4. Aplica filtro de Processador AMD
5. Aplica filtro de Frete Grátis
6. Valida atualização da URL

Esse teste valida comportamento dinâmico e atualização de estado da aplicação.

---

# 🛒 shopping_cart.cy.js

Responsável por validar o fluxo completo de busca até o carrinho.

### O que esse teste faz:

1. Acessa o site
2. Pesquisa por "Mouse" Ou item desejado
3. Valida exibição de resultados
4. Clica em um produto aleatório
5. Valida redirecionamento para página de produto
6. Adiciona o produto ao carrinho
7. Valida navegação para o carrinho

Esse fluxo simula uma jornada real de compra.

---

# 🚀 Como Rodar o Projeto

## 1️⃣ Clonar o repositório

```bash
git clone <url-do-repositorio>
```

## 2️⃣ Instalar dependências

```bash
npm install
```

## 3️⃣ Executar Cypress

Modo interface gráfica:

```bash
npx cypress open
```

Modo headless:

```bash
npx cypress run
```

---

# 📌 Boas Práticas Aplicadas

- Separação de fluxos por arquivo
- Uso de funções auxiliares para reaproveitamento
- Uso de assertions baseadas em comportamento
- Timeout estratégico
- Evitar waits fixos
- Simulação real de jornada de usuário
- Validação de URL para garantir navegação correta

---

# ⚠️ Observações

- Projeto desenvolvido para fins educacionais e demonstração de portfólio.
- Não realiza login nem finaliza pagamento.
- Não executa automações agressivas.
- Foco exclusivo em validação de fluxo e interface.

---

# 📹 Demonstração

Vídeo demonstrando execução dos testes disponível no portfólio.
https://portfolio-ronan-pinheiro.vercel.app

---

# 👨‍💻 Autor

Ronan Pinheiro  
Desenvolvedor Front-end & QA Automation  
Foco em React, Cypress e Experiências Imersivas (VR/AR)
