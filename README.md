📞 Central de Atendimento ao Cliente – Testes Automatizados (Cypress)

Este projeto contém testes automatizados end-to-end (E2E) desenvolvidos com Cypress para validar o funcionamento da aplicação Central de Atendimento ao Cliente TAT.

O objetivo é garantir que os principais fluxos do formulário de atendimento estejam funcionando corretamente, validando comportamentos como preenchimento de campos, validações, envio do formulário e interações com elementos da interface.
________________________________________
🚀 Tecnologias Utilizadas
•	JavaScript
•	Cypress
•	Node.js
•	HTML
________________________________________
📂 Estrutura do Projeto
cypress/
 ├── e2e
 │   └── cac.cy.js
 ├── fixtures
 │   └── example.json
 ├── support
 │   ├── commands.js
 │   └── e2e.js

src/
 └── index.html

cypress.config.js
package.json

Descrição:
•	e2e/ → Contém os testes automatizados
•	fixtures/ → Arquivos usados para simulação de dados (upload de arquivos)
•	support/ → Comandos customizados do Cypress
•	src/ → Aplicação que está sendo testada
________________________________________
▶️ Como Executar o Projeto

1️⃣ Clonar o repositório
git clone <url-do-repositorio>
________________________________________
2️⃣ Acessar a pasta do projeto
cd nome-do-projeto
________________________________________
3️⃣ Instalar as dependências
npm install
________________________________________
4️⃣ Abrir o Cypress
npx cypress open
ou executar em modo headless:
npx cypress run
________________________________________
🧪 Cenários de Teste Automatizados

Os testes cobrem diferentes comportamentos da aplicação.
✔️ Validação da aplicação
•	Verificação do título da página
________________________________________
✔️ Testes de formulário

•	Preenchimento dos campos obrigatórios
•	Envio do formulário com sucesso
•	Validação de email inválido
•	Validação de campos obrigatórios
•	Limpeza de campos do formulário
________________________________________
✔️ Validação de campos

•	Campo telefone aceita apenas valores numéricos
•	Validação de telefone obrigatório
________________________________________
✔️ Seleção de elementos

•	Seleção de produtos por:
o	texto
o	valor
o	índice
________________________________________
✔️ Interações com interface

•	Seleção de radio buttons
•	Marcação e desmarcação de checkboxes
________________________________________
✔️ Upload de arquivos

Testes para:
•	Upload de arquivo via fixtures
•	Upload simulando drag-and-drop
•	Upload utilizando alias
________________________________________
✔️ Navegação entre páginas

•	Verificação de link da Política de Privacidade
•	Acesso à página removendo atributo target
________________________________________
🔧 Comandos Customizados

O projeto utiliza um comando customizado para agilizar o preenchimento do formulário:
cy.fillMandatoryFieldsAndSubmit()

Este comando realiza:
•	Preenchimento dos campos obrigatórios
•	Envio do formulário automaticamente
________________________________________
📌 Boas práticas aplicadas

•	Uso de beforeEach para reutilização de setup
•	Uso de fixtures
•	Criação de comandos customizados
•	Validações utilizando should
•	Testes independentes
________________________________________
👩‍💻 Autora

Adriana Silva Bicalho
Profissional da área de Quality Assurance (QA) com foco em testes automatizados utilizando Cypress.
🔗 LinkedIn
http://www.linkedin.com/in/adrianasilvabic
