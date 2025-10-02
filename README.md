# Portfolio Web - Ensino Médio Técnico

Sistema completo de portfólio para apresentação de trabalhos acadêmicos, com sistema de votação e gerenciamento de contatos.

## Sobre o Projeto

Este projeto foi desenvolvido para permitir que alunos do Ensino Médio Técnico apresentem seus melhores trabalhos de forma organizada e profissional. O sistema conta com:

- **Tela de Apresentação** do aluno ao abrir o site
- **Catálogo de Trabalhos** organizados por áreas do conhecimento
- **Sistema de Votação** para escolher os melhores trabalhos
- **Formulário de Contato** com salvamento no banco de dados
- **Painel Administrativo** para visualizar mensagens recebidas
- **Gerenciamento de Atividades** (adicionar/remover trabalhos)

## Tecnologias Utilizadas

### Backend
- **Python 3.x**
- **Flask** - Framework web
- **Flask-SQLAlchemy** - ORM para banco de dados
- **Flask-CORS** - Gerenciamento de CORS
- **PyMySQL** - Conector MySQL
- **Python-dotenv** - Gerenciamento de variáveis de ambiente

### Frontend
- **React.js** - Biblioteca JavaScript
- **React Router DOM** - Roteamento
- **React Bootstrap** - Componentes UI
- **Axios** - Requisições HTTP
- **Bootstrap 5** - Estilização

### Banco de Dados
- **MySQL** - Sistema de gerenciamento de banco de dados

## Estrutura do Projeto

```
PORTFOLIO-WEB/
│
├── backend/
│   └── src/
│       ├── config/
│       │   └── database.py          # Configuração do banco de dados
│       ├── controllers/
│       │   ├── aluno_controller.py
│       │   ├── contato_controller.py
│       │   ├── trabalho_controller.py
│       │   └── voto_controller.py
│       ├── models/
│       │   ├── aluno.py
│       │   ├── contato.py
│       │   ├── trabalho.py
│       │   └── voto.py
│       ├── routes/
│       │   ├── alunos.py
│       │   ├── contatos.py
│       │   ├── trabalhos.py
│       │   └── votos.py
│       ├── app.py                   # Aplicação Flask principal
│       └── .env                     # Variáveis de ambiente
│
├── frontend/
│   ├── public/
│   │   ├── favicon.ico
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Footer.jsx
│   │   │   ├── FormContato.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── SistemaVotacao.jsx
│   │   │   └── TrabalhoCard.jsx
│   │   ├── pages/
│   │   │   ├── AdminContatos.jsx   
│   │   │   ├── AdminTrabalhos.jsx   
│   │   │   ├── Apresentacao.jsx     
│   │   │   ├── CienciasHumanas.jsx
│   │   │   ├── CienciasNatureza.jsx
│   │   │   ├── Contato.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Linguagens.jsx
│   │   │   ├── Matematica.jsx
│   │   │   └── Tecnico.jsx
│   │   ├── services/
│   │   │   └── api.js               # Configuração do Axios
│   │   ├── App.css
│   │   ├── App.jsx
│   │   └── index.js
│   ├── package.json
│   └── .env
│
└── README.md
```

## Configuração e Instalação

### Pré-requisitos

- Python 3.8 ou superior
- Node.js 14 ou superior
- MySQL 8.0 ou superior
- Git

### Clonar o Repositório

```bash
git clone https://github.com/marceloaccacio9-netizen/portfolio-web.git
cd portfolio-web
```

### Configurar o Backend

```bash
# Navegar para a pasta backend
cd backend

# Criar ambiente virtual
python -m venv venv

# Ativar ambiente virtual
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

# Instalar dependências
pip install flask flask-sqlalchemy flask-cors pymysql python-dotenv
```

**Criar arquivo `.env` na pasta `backend/`:**

```env
SECRET_KEY=sua_chave_secreta_aqui
DATABASE_USER=root
DATABASE_PASSWORD=sua_senha
DATABASE_HOST=localhost
DATABASE_NAME=portfolio_db
```

**Criar o banco de dados:**

```sql
CREATE DATABASE portfolio_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

**Iniciar o servidor:**

```bash
python -m src.app
```

O backend estará rodando em: `http://localhost:5000`

### Configurar o Frontend

```bash
# Abrir novo terminal e navegar para a pasta frontend
cd frontend

# Instalar dependências
npm install

# Criar arquivo .env na pasta frontend/
```

**Criar arquivo `.env` na pasta `frontend/`:**

```env
REACT_APP_API_URL=http://localhost:5000/api
```

**Iniciar o servidor de desenvolvimento:**

```bash
npm start
```

O frontend estará rodando em: `http://localhost:3000`

## Funcionalidades Principais

### 1. Tela de Apresentação
- Exibida automaticamente ao abrir o site pela primeira vez
- Apresenta informações do aluno, escola e turma
- Foto de perfil personalizável
- Botão para entrar no portfólio

### 2. Áreas do Conhecimento
- **Linguagens** - Português, Literatura, Inglês, etc.
- **Ciências da Natureza** - Física, Química, Biologia
- **Matemática** - Matemática e suas tecnologias
- **Ciências Humanas** - História, Geografia, Sociologia, Filosofia
- **Técnico/Profissionalizante** - Projetos técnicos

### 3. Sistema de Votação
- Um voto por trabalho por usuário (baseado em cookie)
- Contador de votos em tempo real
- Ranking dos trabalhos mais votados

### 4. Gerenciamento de Contatos
- Formulário de contato no site
- Salvamento automático no banco de dados
- Painel administrativo para visualizar mensagens
- Detalhes completos de cada mensagem (nome, email, data/hora)

### 5. Gerenciamento de Trabalhos (Admin)
- Adicionar novos trabalhos
- Editar trabalhos existentes
- Remover trabalhos
- Upload de arquivos/links

## Estrutura do Banco de Dados

### Tabela: `alunos`
```sql
- id (INT, PRIMARY KEY)
- nome (VARCHAR)
- email (VARCHAR)
- turma (VARCHAR)
- foto_url (VARCHAR)
```

### Tabela: `trabalhos`
```sql
- id (INT, PRIMARY KEY)
- titulo (VARCHAR)
- descricao (TEXT)
- area (VARCHAR)
- aluno_id (INT, FOREIGN KEY)
- arquivo_url (VARCHAR)
- criado_em (DATETIME)
```

### Tabela: `votos`
```sql
- id (INT, PRIMARY KEY)
- trabalho_id (INT, FOREIGN KEY)
- ip_usuario (VARCHAR)
- criado_em (DATETIME)
```

### Tabela: `contatos`
```sql
- id (INT, PRIMARY KEY)
- nome (VARCHAR)
- email (VARCHAR)
- mensagem (TEXT)
- criado_em (DATETIME)
```

## Rotas da API

### Alunos
```
GET    /api/alunos           - Listar todos os alunos
GET    /api/alunos/:id       - Buscar aluno por ID
POST   /api/alunos           - Criar novo aluno
PUT    /api/alunos/:id       - Atualizar aluno
DELETE /api/alunos/:id       - Deletar aluno
```

### Trabalhos
```
GET    /api/trabalhos        - Listar todos os trabalhos
GET    /api/trabalhos?area=  - Filtrar por área
GET    /api/trabalhos/:id    - Buscar trabalho por ID
POST   /api/trabalhos        - Criar novo trabalho
PUT    /api/trabalhos/:id    - Atualizar trabalho
DELETE /api/trabalhos/:id    - Deletar trabalho
GET    /api/ranking/:area    - Ranking por área
```

### Votação
```
POST   /api/votar/:id        - Votar em um trabalho
GET    /api/verificar-voto/:id - Verificar se já votou
```

### Contatos
```
GET    /api/contatos         - Listar todos os contatos
GET    /api/contatos/:id     - Buscar contato por ID
POST   /api/contatos         - Criar novo contato
```

## Rotas do Frontend

```
/                     - Tela de Apresentação
/home                 - Página Principal (Dashboard)
/linguagens           - Trabalhos de Linguagens
/ciencias-natureza    - Trabalhos de Ciências da Natureza
/matematica           - Trabalhos de Matemática
/ciencias-humanas     - Trabalhos de Ciências Humanas
/tecnico              - Trabalhos Técnicos
/contato              - Formulário de Contato
/admin/contatos       - Painel Admin - Visualizar Contatos
/admin/trabalhos      - Painel Admin - Gerenciar Trabalhos
```

## Segurança

- Validação de dados no frontend e backend
- Proteção contra SQL Injection (SQLAlchemy ORM)
- CORS configurado para aceitar apenas origens confiáveis
- Sanitização de inputs
- Variáveis de ambiente para dados sensíveis

## Deploy

### Backend (Heroku, Railway, ou PythonAnywhere)
1. Configurar variáveis de ambiente
2. Instalar dependências do `requirements.txt`
3. Configurar banco de dados MySQL na nuvem
4. Deploy da aplicação Flask

### Frontend (Vercel, Netlify, ou GitHub Pages)
1. Build da aplicação: `npm run build`
2. Configurar variável `REACT_APP_API_URL` com URL do backend
3. Deploy da pasta `build/`

## Notas Importantes

- **Primeira execução**: As tabelas do banco serão criadas automaticamente
- **Foto de perfil**: Substituir URL no arquivo `Apresentacao.jsx`
- **Customização**: Editar informações do aluno em `Apresentacao.jsx`
- **Admin**: Adicionar autenticação para rotas administrativas em produção

## Solução de Problemas

### Backend não conecta ao banco
- Verificar credenciais no arquivo `.env`
- Confirmar que o MySQL está rodando
- Verificar se o banco de dados foi criado

### Frontend não conecta à API
- Verificar URL da API no arquivo `.env` do frontend
- Confirmar que o backend está rodando
- Verificar configuração de CORS

### Erro ao votar
- Limpar cookies do navegador
- Verificar se o trabalho existe no banco
- Confirmar conexão com a API

## Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

## Autor

**Marcelo Antony**
- Email: marceloaccacio9@gmail.com

## Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

---

**Desenvolvido Marcelo Antony Accacio Olhier 3ano iot T2**
