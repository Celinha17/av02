# Projeto Cadastro e Listagem de Policiais

## Objetivo
Este projeto tem como objetivo permitir o cadastro e a listagem de policiais, facilitando o gerenciamento de informações de agentes de segurança. O sistema é dividido em backend (Node.js + Express + SQLite) e frontend (Angular), proporcionando uma aplicação web completa e responsiva.

## Tecnologias Utilizadas
- **Backend:** Node.js, Express, SQLite
- **Frontend:** Angular

## Estrutura do Projeto
```
backend/
  db.js
  package.json
  server.js
  tabela.sql
  controllers/
    policialController.js
  models/
    policialModel.js
  routes/
    policialRoutes.js
frontend/
  angular.json
  package.json
  README.md
  tsconfig.app.json
  tsconfig.json
  tsconfig.spec.json
  public/
    favicon.ico
  src/
    index.html
    main.ts
    styles.css
    app/
      app.component.css
      app.component.html
      app.component.spec.ts
      app.component.ts
      app.config.ts
      app.routes.ts
      components/
        cadastro-policiais/
          cadastro-policiais.component.css
          cadastro-policiais.component.html
          cadastro-policiais.component.spec.ts
          cadastro-policiais.component.ts
        listagem-policiais/
          listagem-policiais.component.css
          listagem-policiais.component.html
          listagem-policiais.component.spec.ts
          listagem-policiais.component.ts
      services/
        policial.service.spec.ts
        policial.service.ts
```

## Instalação e Execução

### Backend
1. Acesse a pasta `backend`:
   ```powershell
   cd backend
   ```
2. Instale as dependências:
   ```powershell
   npm install
   ```
3. Execute o servidor:
   ```powershell
   node server.js
   ```
   O backend estará disponível em `http://localhost:3000`.

### Frontend
1. Acesse a pasta `frontend`:
   ```powershell
   cd frontend
   ```
2. Instale as dependências:
   ```powershell
   npm install
   ```
3. Execute o servidor de desenvolvimento Angular:
   ```powershell
   npx ng serve
   ```
   O frontend estará disponível em `http://localhost:4200`.

## Observações
- Certifique-se de que o backend esteja rodando antes de acessar o frontend.
- O banco de dados SQLite será criado automaticamente ao iniciar o backend.
- Para customizações, edite os arquivos nas pastas `components` e `services` do frontend, ou nas pastas `controllers`, `models` e `routes` do backend.

---

Para dúvidas ou sugestões, entre em contato com o responsável pelo projeto.
