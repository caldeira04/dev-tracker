# 🧠 DevTrack – Gerencie a evolução dos seus projetos

**DevTrack** é uma plataforma SaaS voltada para desenvolvedores organizarem a evolução dos seus projetos de forma simples, visual e produtiva.

## ✨ Funcionalidades

Cada projeto possui três áreas principais:

### ✅ Tasks (To-Do List)

Organize as tarefas do projeto em uma lista simples de "afazeres".

**Campos de uma Task:**
- `title`: Título da tarefa
- `description`: Descrição detalhada
- `priority`: Prioridade (ex: baixa, média, alta)
- `isCompleted`: Booleano para tarefa concluída
- `dateCompleted`: Data de conclusão (opcional)
- `dueDate`: Prazo (opcional)

---

### 💡 Ideas (Kanban)

Organize ideias de novas funcionalidades, melhorias ou ajustes em um sistema de **Kanban** com status personalizáveis.

**Campos de uma Ideia:**
- `title`: Título da ideia
- `description`: Detalhes da ideia
- `status`:  
  - `brainstorm`  
  - `in_review`  
  - `approved`  
  - `in_progress`  
  - `done`  
  - `rejected`

---

### 📘 Changelog (Timeline)

Mantenha um histórico claro e organizado de tudo que foi feito no projeto com uma timeline.

**Campos de um Changelog:**
- `date`: Data do evento
- `description`: Descrição do que foi feito (semelhante a um commit manual)

---

## 💻 Tecnologias Utilizadas

- **Frontend:** [Next.js](https://nextjs.org/), [Shadcn/UI](https://ui.shadcn.com/)
- **Banco de Dados:** [Neon](https://neon.tech/) (PostgreSQL)
- **ORM/Data Layer:** [Prisma](https://www.prisma.io/) ou [Convex](https://convex.dev/)
- **Autenticação:** [Clerk](https://clerk.dev/) ou [NextAuth.js](https://next-auth.js.org/)
- **Pagamentos:** [Stripe](https://stripe.com/) ou [Pagar.me](https://pagar.me/)

---

## 💸 Planos

| Plano   | Limites                              | Preço     |
|---------|--------------------------------------|-----------|
| Free    | 1 projeto / até 30 itens no total    | R$0,00    |
| Starter | Até 3 projetos / 100 itens no total  | R$19,90   |
| Pro     | Até 10 projetos / itens ilimitados   | R$49,90   |

> *Itens* = soma de Tasks + Ideas + Changelog entries.
