# 💜 Protagoniza

> Plataforma que conecta mulheres autônomas e empreendedoras: oferecer serviços, buscar oportunidades, acessar cursos profissionalizantes e encontrar uma rede de apoio.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

---

## ✨ Sobre o projeto

O **Protagoniza** é uma aplicação web criada como trabalho em grupo do módulo de React do curso Serratec. A proposta nasceu da ideia de valorizar as múltiplas funções e talentos das mulheres, reunindo num só lugar quatro frentes que se apoiam:

- 👩‍💼 **Profissionais e serviços** — mulheres autônomas divulgam o que oferecem.
- 💼 **Oportunidades** — vagas e oportunidades na área de atuação delas.
- 🎓 **Cursos** — formações profissionalizantes para seguir crescendo.
- 🤝 **Rede de apoio** — grupos, ONGs e contatos de suporte.

---

## 🚀 Funcionalidades

- Listagem de profissionais, oportunidades, cursos e contatos de apoio, consumidos de uma API.
- Página de detalhe de cada profissional (rota dinâmica).
- Favoritar itens, com uma página dedicada às favoritas.
- Filtros por categoria e estados de carregamento e erro.
- Tema claro/escuro.

---

## 🛠️ Tecnologias

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/) — navegação entre páginas
- [Axios](https://axios-http.com/) — requisições HTTP
- [styled-components](https://styled-components.com/) — estilização
- [react-toastify](https://fkhadra.github.io/react-toastify/) — mensagens de erro/sucesso
- [MockAPI](https://mockapi.io/) — API de dados

---

## 🧩 Conceitos de React aplicados

- **Componentes e props** — componentes reutilizáveis, cada um com uma responsabilidade.
- **useState** — filtros, curtir, mostrar/esconder e tema.
- **useEffect** — busca de dados quando a página carrega.
- **Context API** — favoritos e tema compartilhados entre as páginas.
- **React Router DOM** — múltiplas rotas, incluindo uma rota com parâmetro dinâmico.

---

## 📁 Estrutura de pastas

```
src/
├── components/      # componentes reutilizáveis (Card, Navbar, Loading...)
├── context/         # FavoritosContext e ThemeContext
├── pages/           # uma pasta por página
├── services/        # api.jsx (instância do Axios)
├── styles/          # theme.jsx + global.jsx
└── App.jsx          # rotas + providers
```

---

## ▶️ Como rodar o projeto

Você vai precisar do [Node.js](https://nodejs.org/) instalado.

```bash
# 1. Clone o repositório
git clone https://github.com/SEU_USUARIO/protagoniza.git

# 2. Entre na pasta
cd protagoniza

# 3. Instale as dependências
npm install

# 4. Rode o projeto
npm run dev
```

A URL base da API fica em `src/services/api.jsx` — substitua pela URL do projeto de vocês no MockAPI.

---

## 👩‍💻 Equipe

Projeto desenvolvido em grupo. Cada integrante ficou responsável por uma página:

| Integrante | Página   + Fundação                                 |
|---|-----------------------------------------------------|
| *Luisa Abreu* | Home . Header · Footer · ThemeContext               |
| *Yasmim Verissimo* | Profissionais                                       |
| *Liliane Costa* | Detalhes (Profissionais) · Cadastro · Login · Perfil |
| *Nivea D Avila* | Oportunidades · Detalhe de Oportunidades            |
| *Natasha Mendonça* | Cursos · Cards · Loading · ErrorMessage             |
| *Anna Júlia Leite* | Rede de apoio · React Router                        |
| *Leticia Guimarães* | Favoritos                                           |

---
