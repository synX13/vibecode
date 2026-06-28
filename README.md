# AI Agent System Documentation

This project uses a sophisticated AI agent instruction system to ensure consistency, maintainability, and proper documentation practices.

## 🤖 How the AI Agent System Works

### Core Concept

This project implements an **AI agent guidance system** using two immutable files/directories:

1. **AGENTS.md** - The master instruction file
2. **memory-bank/** - The project documentation database

### AGENTS.md (Immutable)

`AGENTS.md` is a permanent instruction file that **must never be**:
- Deleted
- Renamed
- Replaced
- Moved

It serves as the **constitution** for all AI agents working on this project, ensuring they follow consistent patterns and best practices.

### Memory-Bank Directory (Immutable)

The `memory-bank/` directory is also permanent and contains all project documentation. It is the **single source of truth** for:
- Project goals and vision
- Architecture decisions
- Design system guidelines
- Technical stack choices
- Coding standards
- Roadmap and progress tracking

## 📚 Mandatory Reading Order

Before starting ANY task, AI agents must read memory-bank files in this **exact order**:

```
0. constitution.md     → Project rules and principles
1. project.md          → Goals and vision
2. architecture.md     → System architecture
3. design-system.md    → Design guidelines
4. tech-stack.md       → Technology choices
5. coding-standard.md  → Coding conventions
6. roadmap.md          → Current progress
7. decisions.md        → Architecture decisions
```

### Page-Specific Documentation

When modifying or creating a specific page/section, agents must also read the corresponding documentation:

- **Homepage** → `homepage.md`
- **About** → `about.md`
- **Experience** → `experience.md`
- **Projects** → `projects.md`
- **AWS** → `aws.md`
- **Kubernetes** → `kubernetes.md`
- **Contact** → `contact.md`

## 🔄 Mandatory Updates

After completing ANY task, agents MUST update these files:

1. **roadmap.md** - Mark completed items with `[x]`
2. **decisions.md** - Document any architecture changes
3. **todo.md** - Track progress and next steps

## 💡 Key Principles for AI Agents

### 1. Never Hardcode Data
```typescript
// ❌ BAD
const name = "Agus Wikamto"

// ✅ GOOD
import { personalInfo } from '@/data/portfolio'
const name = personalInfo.name
```

### 2. Always Use Reusable Components
- Keep components small and focused
- Extract common functionality
- Avoid duplication

### 3. Follow the Design System
- Use specified colors from `tailwind.config.ts`
- Apply glassmorphism patterns
- Use Framer Motion for animations
- Follow spacing and typography guidelines

### 4. Prefer Server Components
- Use Server Components by default
- Only use Client Components ('use client') when necessary
- Minimize client-side JavaScript

### 5. Documentation is Law
- If it's not in memory-bank, it doesn't exist
- Always update documentation when making changes
- Never delete documentation, only update it

## 🏗️ Architecture for AI Agents

### Decision Flow

```
1. Read AGENTS.md
   ↓
2. Read memory-bank files in order (0-7)
   ↓
3. Read page-specific documentation (if applicable)
   ↓
4. Plan implementation based on documentation
   ↓
5. Execute task following guidelines
   ↓
6. Update roadmap.md, decisions.md, todo.md
   ↓
7. Verify all guidelines were followed
```

### File Organization Principles

```
src/
├── app/              # Next.js App Router pages
├── components/
│   ├── ui/          # Reusable UI components (shadcn/ui)
│   └── sections/    # Page sections (one per file)
├── data/            # All portfolio data (source of truth)
└── lib/             # Utilities and helpers
```

## 🎯 Benefits of This System

### For AI Agents:
- **Clear guidelines** - No ambiguity about what to do
- **Consistent patterns** - Same approach every time
- **Documentation-first** - Always know the context
- **Immutable reference** - Can't accidentally break core files

### For Humans:
- **Transparency** - See exactly what AI did and why
- **Traceability** - All decisions documented
- **Maintainability** - Easy to understand project structure
- **Consistency** - Code follows established patterns

## 📖 Example: AI Agent Workflow

When asked to "add a new project section":

1. **Read** `memory-bank/projects.md` to understand requirements
2. **Read** `memory-bank/design-system.md` for styling guidelines
3. **Read** `memory-bank/tech-stack.md` for technology constraints
4. **Check** `src/data/portfolio.ts` for data structure
5. **Create** `src/components/sections/projects.tsx`
6. **Update** `src/app/page.tsx` to include new section
7. **Update** `memory-bank/roadmap.md` - mark as complete
8. **Update** `memory-bank/decisions.md` if any new decisions were made

## 🔐 Immutability Rules

These files are **PERMANENT** and must never be removed or recreated:

```
AGENTS.md
memory-bank/
```

**Always update existing files instead of replacing them.**

## 📝 Documentation Philosophy

> "Documentation is the project's source of truth."

- If it's not documented, it doesn't exist
- Code implements the documentation
- Documentation drives implementation
- Keep documentation up-to-date

## 🚀 Getting Started as an AI Agent

1. **Always start** by reading AGENTS.md
2. **Follow** the mandatory reading order
3. **Respect** the immutability rules
4. **Update** documentation after every task
5. **Never hardcode** data
6. **Always use** reusable components
7. **Follow** the design system religiously

---

## Technical Implementation

The AI agent system is implemented through:

- **AGENTS.md** - Markdown instruction file parsed by AI
- **memory-bank/** - Structured documentation directory
- **Consistent file naming** - Predictable structure
- **Clear separation of concerns** - Documentation vs implementation

This system ensures that any AI agent (or human) can understand, maintain, and extend the project consistently.