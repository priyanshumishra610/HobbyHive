# 🐝 HobbyHive

### 🔥 The World's Most Powerful **Peer-to-Peer Skill & Hobby Exchange Platform**

HobbyHive is not just an app — it's a **global movement** where humans exchange knowledge without money barriers.  
If you play guitar and want to learn cooking, and someone cooks like a chef but wants to learn guitar…  
**HobbyHive connects you both — instantly. For free. Forever.**

🌍 Learn anything.  
💛 Teach what you love.  
🤝 Build meaningful human connections.  
🚀 Powered with AI. Designed for the next billion learners.

---

## ✨ Vision
To create the **largest global learning network**, where skills flow freely between people like energy in a hive — collaborative, powerful, unstoppable.

---

## 🎯 Mission
Democratize learning.  
Eliminate the "I wish I could learn" barrier.  
Replace money → with **community**, **collaboration**, and **human exchange**.

---

# 🌟 Key Features

## 🔗 Skill Exchange Engine
- ✔️ Learn any skill  
- ✔️ Teach any skill  
- ✔️ One-to-one exchange model  
- ✔️ Credits-based learning system  
- ✔️ 100% Free forever  

---

## 🤖 AI Powered Smart Matching
HobbyHive is brainy.  
It understands your:

- Skills  
- Hobbies  
- Learning goals  
- Available time  
- Location preference (Online / Offline)  

Then it finds the **perfect match** 🤝  
Smart. Fast. Meaningful.

---

## 🧠 AI Learning Mentor
Get your personal AI coach:

- Personalized learning roadmap  
- Practice tasks  
- Weekly progress reports  
- Motivation tracking  
- Improvement analytics  

---

## 👥 Hyper-Trust Community System
Because trust matters.

- Profile verification  
- Skill badges  
- Experience levels  
- Ratings & Reviews  
- Community reputation system  

Safer. Stronger. Trusted.

---

## 🗓️ Seamless Scheduling & Communication
No chaos. No confusion.

- In-app chat  
- Available time slots  
- Calendar sync  
- Reminder notifications  

Just smooth collaboration.

---

## 🎭 Interest Communities & Clubs
Join communities like:

- 🎸 Music Club  
- 🍳 Cooking Hive  
- 🎨 Art & Creativity  
- 💻 Coding Circle  
- 📚 Language World  
- 🥁 Instrument Lab  
- 🏋 Gym & Fitness Hive  

Make friends. Share passions. Grow together.

---

## 🎉 Events & Workshops
- Free community workshops  
- Online learning rooms  
- Local meetups  
- Skill tournaments  
- Hackathons  
- Creative challenges  

Learning becomes fun again 🎈

---

## 🏆 Gamification — Learn Like a Legend
- XP Points  
- Level System  
- Learning streaks  
- Achievement badges  
- Mastery ranks  
- Leaderboards  

Stay addicted to improving your life.

---

## 🛡️ Safety First
- Secure authentication  
- Verified users  
- Report & block system  
- AI content safety  
- Transparent community rules  

Your safety matters.

---

# 💎 HobbyHive Plus
HobbyHive remains **free forever** 💛  
Premium exists only to enhance experience — NOT to restrict learning.

### **Premium Benefits**
- ⭐ Priority Matching  
- ⭐ Profile Boost  
- ⭐ Advanced AI Mentor  
- ⭐ Early Event Access  
- ⭐ Exclusive Premium Badges  
- ⭐ Extra Credits  

No force. Only choice.

---

# 🧬 System Architecture

```mermaid
flowchart TD

A[User Registers / Login] --> B[Create Profile 🎭]
B --> C[Add Skills & Hobbies]
C --> D[AI Skill Engine 🤖]

D -->|Wants to Learn| E[Matchmaking System 🔗]
D -->|Wants to Teach| F[Teacher Discovery System 👨‍🏫]

E --> G[Best Match Found 🤝]
F --> G

G --> H[In-App Chat 💬]
H --> I[Schedule & Calendar 🗓️]
I --> J[Session Happens 🎉]

J --> K[Feedback + Ratings ⭐]
K --> L[Credits Earned / Spent 💱]

L --> M[Progress Tracking 📈]
M --> N[AI Mentor Suggests Next Step 🧠]

N --> O[Community + Events 🎭]
O --> P[User Growth + Reputation 🏆]

P --> C[Back to Profile Updates 🔁]
```

---

# 🏗️ MVP Core Components
- Authentication  
- Skill management  
- AI Recommendation System  
- Matching Engine  
- Messaging System  
- Credits System  
- Profile Reputation  
- Scheduling System  

---

# 🚀 Roadmap

### Phase 1 — MVP Launch
- ✔️ Core platform  
- ✔️ Matching + Credits  
- ✔️ Profiles  
- ✔️ Messaging  
- ✔️ Communities  

### Phase 2 — AI Superpower
- ✔️ AI Mentor  
- ✔️ AI Matching Upgrade  
- ✔️ Smart learning roadmap  

### Phase 3 — Expansion
- ✔️ Global scaling  
- ✔️ Live events  
- ✔️ Partnerships  
- ✔️ HobbyHive Plus  

---

# 🌍 Impact
HobbyHive will…

- Empower students  
- Help creators grow  
- Build community culture  
- Make learning free worldwide  
- Replace loneliness with meaningful connections  
- Turn hobbies into skills  
- Turn strangers into friends  
- Turn world into one giant classroom  

---

# 🧑‍💻 Tech Stack

## Frontend
- **Framework:** Next.js 15 (App Router)
- **UI Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** Shadcn UI (Radix UI primitives)
- **State Management:** Zustand
- **Data Fetching:** TanStack React Query (React Query)
- **HTTP Client:** Axios

## Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Authentication:** JWT
- **Validation:** Zod

## Infrastructure (Future)
- **Hosting:** Vercel (Frontend) / AWS / Railway (Backend)
- **Database:** PostgreSQL (managed)
- **AI:** OpenAI / Gemini (for matching & mentor features)
- **Real-time:** WebSocket (for chat)

---

# 📁 Project Structure

```
hobbyhive/
├── README.md                    # This file
├── package.json                 # Root workspace configuration
├── tsconfig.json                # Root TypeScript config
├── .gitignore                   # Git ignore rules
│
├── apps/
│   └── web/                     # Next.js Frontend Application
│       ├── src/
│       │   ├── app/             # Next.js App Router pages
│       │   │   ├── page.tsx     # Landing page
│       │   │   ├── layout.tsx   # Root layout
│       │   │   ├── auth/        # Auth pages (login, register)
│       │   │   ├── dashboard/   # Dashboard page
│       │   │   ├── profile/     # Profile pages
│       │   │   ├── matches/     # Match suggestions page
│       │   │   ├── chat/        # Chat pages
│       │   │   └── booking/     # Session booking page
│       │   ├── components/      # React components
│       │   │   ├── ui/          # Shadcn UI components
│       │   │   ├── layout/      # Layout components
│       │   │   └── modules/     # Feature-specific components
│       │   ├── services/        # API services
│       │   │   └── api/         # API client & endpoints
│       │   ├── hooks/           # Custom React hooks
│       │   ├── store/           # Zustand stores
│       │   ├── types/           # TypeScript types
│       │   ├── constants/       # App constants
│       │   ├── utils/           # Utility functions
│       │   └── styles/          # Global styles
│       ├── public/              # Static assets
│       ├── next.config.js       # Next.js configuration
│       ├── tailwind.config.ts   # Tailwind configuration
│       └── package.json
│
├── backend/                     # Express Backend API
│   ├── src/
│   │   ├── index.ts             # Entry point
│   │   ├── config/              # Configuration files
│   │   │   ├── database.ts      # Prisma client
│   │   │   └── errorHandler.ts  # Error handling
│   │   └── modules/             # Feature modules
│   │       ├── auth/            # Authentication
│   │       ├── users/           # User management
│   │       ├── profile/         # User profiles
│   │       ├── matching/        # Matching engine
│   │       ├── chat/            # Chat functionality
│   │       ├── booking/         # Session booking
│   │       └── middleware/      # Express middleware
│   ├── prisma/
│   │   └── schema.prisma        # Database schema
│   ├── package.json
│   └── tsconfig.json
│
└── shared/                      # Shared code
    ├── types/                   # Shared TypeScript types
    ├── constants/               # Shared constants
    ├── utils/                   # Shared utilities
    └── package.json
```

---

# 🚀 Getting Started

## Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 (or yarn/pnpm)
- **PostgreSQL** >= 14.0 (or use a managed database like Supabase, Neon, etc.)
- **Git**

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hobbyhive
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create `.env` files in the root and backend directories:
   
   **Root `.env` (optional):**
   ```env
   NODE_ENV=development
   ```
   
   **Backend `.env`:**
   ```env
   NODE_ENV=development
   PORT=3001
   DATABASE_URL=postgresql://user:password@localhost:5432/hobbyhive?schema=public
   JWT_SECRET=your-super-secret-jwt-key-change-in-production
   JWT_EXPIRES_IN=7d
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   FRONTEND_URL=http://localhost:3000
   ```
   
   **Frontend `.env.local`:**
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:3001/api
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Set up the database**
   ```bash
   cd backend
   npm run db:generate  # Generate Prisma Client
   npm run db:push      # Push schema to database (for development)
   # OR
   npm run db:migrate   # Create migration (for production)
   ```

5. **Start the development servers**

   **Terminal 1 - Backend:**
   ```bash
   npm run dev:backend
   ```
   Backend will run on `http://localhost:3001`

   **Terminal 2 - Frontend:**
   ```bash
   npm run dev
   ```
   Frontend will run on `http://localhost:3000`

6. **Open your browser**
   Navigate to `http://localhost:3000` to see the application.

---

# 📝 Available Scripts

## Root Level

- `npm run dev` - Start frontend development server
- `npm run dev:backend` - Start backend development server
- `npm run build` - Build frontend for production
- `npm run build:backend` - Build backend for production
- `npm run type-check` - Type-check all workspaces
- `npm run lint` - Lint all workspaces

## Frontend (`apps/web`)

- `npm run dev` - Start Next.js dev server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Backend (`backend`)

- `npm run dev` - Start Express dev server with hot-reload
- `npm run build` - Compile TypeScript
- `npm run start` - Start production server
- `npm run db:generate` - Generate Prisma Client
- `npm run db:push` - Push schema changes to database
- `npm run db:migrate` - Create and run migrations
- `npm run db:studio` - Open Prisma Studio (database GUI)

---

# 🏗️ Architecture Overview

## Frontend Architecture

- **Next.js 15 App Router** - File-based routing with React Server Components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Shadcn UI** - Accessible component library
- **React Query** - Server state management and caching
- **Zustand** - Client-side state management (lightweight alternative to Redux)
- **Axios** - HTTP client with interceptors for auth

## Backend Architecture

- **Modular Structure** - Each feature is a self-contained module
- **RESTful API** - Standard REST endpoints
- **JWT Authentication** - Token-based auth
- **Prisma ORM** - Type-safe database access
- **Error Handling** - Centralized error handling middleware
- **Type Safety** - Full TypeScript coverage

## Database Schema

Key models:
- **User** - User accounts
- **UserProfile** - Extended user profile information
- **Skill** - Available skills
- **UserSkill** - User-skill relationships (teach/learn)
- **Match** - Matched users
- **Chat** - Chat conversations
- **ChatMessage** - Individual messages
- **Session** - Scheduled skill exchange sessions
- **Review** - User reviews and ratings

---

# 🔒 Authentication

The application uses **JWT (JSON Web Tokens)** for authentication:

1. User registers/logs in
2. Backend returns a JWT token
3. Frontend stores token in localStorage
4. Token is sent with every API request via Authorization header
5. Backend validates token on protected routes

**Note:** For production, consider using httpOnly cookies for better security.

---

# 📚 API Endpoints

## Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login with email/password
- `POST /api/auth/google` - Login with Google OAuth
- `POST /api/auth/logout` - Logout
- `GET /api/auth/me` - Get current user

## Profile
- `GET /api/profile` - Get current user's profile
- `POST /api/profile` - Create/update profile
- `POST /api/profile/skills/teach` - Add skill to teach
- `POST /api/profile/skills/learn` - Add skill to learn
- `DELETE /api/profile/skills/:skillId` - Remove skill

## Matching
- `GET /api/matching/recommendations` - Get match recommendations
- `GET /api/matching/matches` - Get all matches
- `POST /api/matching/:matchId/accept` - Accept a match
- `POST /api/matching/:matchId/decline` - Decline a match

## Chat
- `GET /api/chat` - Get all chats
- `GET /api/chat/:id` - Get chat with messages
- `POST /api/chat/:id/messages` - Send message

## Booking
- `POST /api/booking` - Create session
- `GET /api/booking` - Get sessions
- `PATCH /api/booking/:id` - Update session
- `POST /api/booking/:id/cancel` - Cancel session

---

# 🎨 UI Components

The project uses **Shadcn UI**, which provides:
- Accessible components built on Radix UI
- Customizable with Tailwind CSS
- Copy-paste component code (not a dependency)
- Type-safe with TypeScript

Common components available:
- Button
- Card
- Input
- Dialog
- Dropdown Menu
- Select
- Avatar
- Toast
- And more...

---

# 🧪 Development Guidelines

## Code Style

- Use **TypeScript** for all new code
- Follow **ESLint** rules
- Use **Prettier** for formatting (recommended)
- Write **meaningful commit messages**
- Add **comments** for complex logic

## Git Workflow

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Commit: `git commit -m "feat: add feature description"`
4. Push: `git push origin feature/your-feature`
5. Create a Pull Request

## Adding New Features

1. Create module folder in `backend/src/modules/`
2. Create routes file: `*.routes.ts`
3. Create controller file: `*.controller.ts`
4. Add routes to `backend/src/index.ts`
5. Create corresponding API service in `apps/web/src/services/api/`
6. Create UI components in `apps/web/src/components/modules/`
7. Create pages in `apps/web/src/app/`

---

# 🐛 Troubleshooting

## Database Connection Issues

- Ensure PostgreSQL is running
- Check `DATABASE_URL` in `.env` file
- Run `npm run db:generate` to regenerate Prisma Client

## Port Already in Use

- Change `PORT` in backend `.env`
- Change `NEXT_PUBLIC_API_URL` in frontend `.env.local`
- Or kill the process using the port:
  ```bash
  # Mac/Linux
  lsof -ti:3001 | xargs kill
  lsof -ti:3000 | xargs kill
  ```

## Type Errors

- Run `npm run type-check` to see all TypeScript errors
- Ensure all dependencies are installed: `npm install`
- Regenerate Prisma Client: `npm run db:generate` (in backend)

---

# 🚧 MVP Status

This is an **MVP (Minimum Viable Product)** with placeholder implementations for:

- ✅ Authentication (Email + Google OAuth skeleton)
- ✅ User Profile Management
- ✅ Skill Management (Teach/Learn)
- ✅ Matching Engine (skeleton)
- ✅ Chat System (skeleton)
- ✅ Session Booking (skeleton)
- ✅ Review System (database schema ready)

**Next Steps:**
- Implement actual matching algorithm
- Complete chat functionality with WebSocket
- Add session booking logic
- Implement review and rating system
- Add Google OAuth integration
- Add real-time notifications
- Implement trust score calculation

---

# 📄 License

[Add your license here]

---

# 🤝 Contribute
We welcome:

- Developers  
- Designers  
- Product Thinkers  
- Educators  
- Students  
- Dreamers  
- Doers  

> If you believe in free education…  
> You belong to HobbyHive 💛

---

# ⭐ Support The Vision
If you love this idea:

- Star ⭐ this repo  
- Share it  
- Contribute  
- Join the Hive 🐝  

---

# 🐝 HobbyHive

### **Learn. Teach. Connect. Evolve.**
