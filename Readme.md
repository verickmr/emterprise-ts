# Teste Técnico – Desenvolvedor Web Backend JR

## Descrição do Projeto

API RESTful de gerenciamento de empresas e funcionários desenvolvida para o processo seletivo da Contato Seguro.  
Permite operações de cadastro, consulta, atualização e exclusão de empresas e funcionários, seguindo os requisitos do teste técnico.

---

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- MongoDB
- Mongoose
- Docker / Docker Compose
- Swagger
- Zod

---

## Como Executar Localmente

### Pré-requisitos

- Node.js 18+
- Docker e Docker Compose

---

### 1. Clone o repositório

git clone https://github.com/verickmr/emterprise-ts.git


---

### 2. Instale as dependências

npm install


---

### 3. Suba o banco MongoDB com Docker

docker-compose up -d


---

### 4. Configure o arquivo `.env`

Crie um arquivo `.env` na raiz do projeto com o conteúdo:

PORT=8000
MONGODB_URL=mongodb://root:root123@localhost:27017/enterprise?authSource=admin



---

### 5. Inicie a API em modo desenvolvimento

npm run dev


A aplicação estará disponível em [http://localhost:8000](http://localhost:8000).

---

## Documentação da API (Swagger)

A API possui documentação interativa via Swagger.
Após iniciar o servidor, acesse:

http://localhost:8000/api-docs

Lá você poderá visualizar e testar todos os endpoints da API diretamente pelo navegador.

## Documentação dos Endpoints

### Empresas

- **POST /companies** Criar nova empresa  
- **GET /companies** Listar todas as empresas  
- **GET /companies/:id** Buscar empresa por ID  
- **PUT /companies/:id** Atualizar dados de empresa  
- **DELETE /companies/:id** Excluir empresa

### Funcionários

- **POST /employees** Criar novo funcionário  
- **GET /employees** Listar todos funcionários  
- **GET /employees/company/:companyId** Listar funcionários de uma empresa  
- **PUT /employees/:id** Atualizar dados do funcionário  
- **DELETE /employees/:id** Excluir funcionário

---

## Principais decisões técnicas

- Organização do projeto por camadas: modelos, controladores, rotas e repositórios, aplicando princípios SOLID.
- Utilização do Mongoose para validação e gerenciamento dos dados, simplificando integração com MongoDB.
- Uso de Docker Compose para garantir ambiente de banco replicável.
- Variáveis de ambiente para configuração flexível.

---


## Contato

Em caso de dúvidas sobre o projeto ou funcionamento, estou à disposição por este e-mail ou WhatsApp.