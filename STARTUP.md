# 🚀 HobbyHive Startup Guide

Complete step-by-step instructions to get HobbyHive up and running on your local machine.

---

## 📋 Prerequisites

Before starting, ensure you have the following installed:

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 (comes with Node.js)
- **Git**
- **PostgreSQL** >= 14.0 (or use a managed cloud database - recommended for beginners)

### Check Prerequisites

Open a terminal and run:

```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Check Git version
git --version

# Check PostgreSQL (optional - only if using local PostgreSQL)
psql --version 2>/dev/null || echo "PostgreSQL not installed locally (OK if using cloud database)"
```

**Expected Output:**
- Node.js: `v18.x.x` or higher ✅
- npm: `9.x.x` or higher ✅
- Git: any recent version ✅
- PostgreSQL: Either:
  - `14.x` or higher (if installed locally), OR
  - Use a cloud database service (recommended)

### PostgreSQL Options

You have **two options** for the database:

#### Option 1: Cloud Database (Recommended - Easiest) ⭐

Use a free cloud PostgreSQL service (no local installation needed):

- **[Supabase](https://supabase.com)** - Free tier, easy setup
- **[Neon](https://neon.tech)** - Serverless PostgreSQL, free tier
- **[Railway](https://railway.app)** - Free tier available
- **[Render](https://render.com)** - Free tier available

**Benefits:**
- ✅ No local installation required
- ✅ Easy to share between team members
- ✅ Free tier available
- ✅ Automatic backups

**Get started:**
1. Sign up for one of the services above
2. Create a new PostgreSQL database
3. Copy the connection string they provide
4. Use it in your `backend/.env` file (see Step 3)

#### Option 2: Local PostgreSQL (Advanced)

If you want to run PostgreSQL locally:

**On macOS (using Homebrew):**
```bash
# Install PostgreSQL
brew install postgresql@14

# Start PostgreSQL service
brew services start postgresql@14

# Create database
createdb hobbyhive

# Verify installation
psql --version
```

**On Linux (Ubuntu/Debian):**
```bash
# Install PostgreSQL
sudo apt update
sudo apt install postgresql postgresql-contrib

# Start PostgreSQL service
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Create database
sudo -u postgres createdb hobbyhive

# Verify installation
psql --version
```

**On Windows:**
1. Download PostgreSQL from [postgresql.org/download](https://www.postgresql.org/download/windows/)
2. Run the installer
3. Follow the installation wizard
4. Use pgAdmin or command line to create a database

**For this guide, we'll assume you're using a cloud database (Option 1) unless otherwise specified.**

---

## 🔧 Step 1: Clone and Navigate to Project

### Terminal 1 - Initial Setup

```bash
# Navigate to your projects directory (or wherever you want to clone)
cd ~/Projects  # or your preferred location

# Clone the repository (if not already cloned)
git clone <repository-url>
cd HobbyHive

# Verify you're in the correct directory
pwd
# Should show: /path/to/HobbyHive
```

---

## 📦 Step 2: Install Dependencies

### Terminal 1 - Install All Dependencies

```bash
# Make sure you're in the project root (HobbyHive directory)
cd /Users/priyanshumishra/HobbyHive/HobbyHive

# Install all dependencies for all workspaces (frontend, backend, shared)
npm install

# This will install dependencies for:
# - Root workspace
# - apps/web (frontend)
# - backend
# - shared

# Wait for installation to complete (this may take a few minutes)
# You should see: "added X packages" message
```

**Expected Output:**
```
added 562 packages, and audited 562 packages in 30s
found 0 vulnerabilities
```

---

## 🔐 Step 3: Environment Variables Setup

### Create Backend Environment File

### Terminal 1 - Backend Environment Setup

```bash
# Navigate to backend directory
cd backend

# Create .env file (if it doesn't exist)
touch .env

# Open .env file in your editor
# For VS Code/Cursor:
code .env
# OR use nano:
# nano .env
```

**Add the following content to `backend/.env`:**

```env
# Server Configuration
NODE_ENV=development
PORT=3001

# Database Configuration
# Replace with your actual PostgreSQL connection string
DATABASE_URL=postgresql://user:password@localhost:5432/hobbyhive?schema=public

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-in-production-make-it-long-and-random
JWT_EXPIRES_IN=7d

# OAuth (Optional - for Google Sign In)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3000
```

**💡 Important Notes:**

**Database URL Options:**

1. **If using a cloud database (Recommended):**
   - Sign up for [Supabase](https://supabase.com), [Neon](https://neon.tech), or similar
   - They will provide a connection string like:
   - `postgresql://user:password@host.region.provider.com:5432/database?sslmode=require`
   - Copy and paste it directly into `DATABASE_URL`

2. **If using local PostgreSQL:**
   - Connection string format: `postgresql://username:password@localhost:5432/database_name?schema=public`
   - Example: `postgresql://postgres:postgres@localhost:5432/hobbyhive?schema=public`
   - Make sure PostgreSQL is running locally

**JWT Secret:**
- Generate a strong random string for `JWT_SECRET` (you can use: `openssl rand -base64 32`)
- This should be a long, random string for security

### Create Frontend Environment File (Optional)

### Terminal 1 - Frontend Environment Setup

```bash
# Navigate back to root, then to web app
cd ..
cd apps/web

# Create .env.local file (if it doesn't exist)
touch .env.local

# Open .env.local file in your editor
code .env.local
# OR use nano:
# nano .env.local
```

**Add the following content to `apps/web/.env.local` (Optional - has defaults):**

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3001/api

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Note:** The frontend has default values in `next.config.js`, so this file is optional but recommended.

```bash
# Navigate back to project root
cd ../..
```

---

## 🗄️ Step 4: Database Setup

### Terminal 1 - Database Setup Commands

```bash
# Navigate to backend directory
cd backend

# Step 4a: Generate Prisma Client
npm run db:generate

# Expected output:
# ✔ Generated Prisma Client (version X.X.X) to ./node_modules/.prisma/client

# Step 4b: Push database schema to your database
npm run db:push

# OR for production/version control, use migrations:
# npm run db:migrate

# Expected output:
# ✔ Your database is now in sync with your Prisma schema.

# (Optional) Step 4c: Open Prisma Studio to view/manage database
# npm run db:studio
# This will open a GUI at http://localhost:5555
```

**💡 Troubleshooting Database:**

- **Connection error?**
  - Verify your `DATABASE_URL` in `backend/.env` is correct
  - Check that the connection string includes `?schema=public` at the end
  - For cloud databases, ensure the connection string includes SSL mode if required

- **Using local PostgreSQL?**
  - Make sure PostgreSQL is running: 
    - macOS: `brew services list | grep postgresql`
    - Linux: `sudo systemctl status postgresql`
  - Test connection: `psql "your-connection-string-here"`

- **Using cloud database?**
  - Use the exact connection string provided by your service
  - Some services require `?sslmode=require` in the connection string
  - Make sure your database is created and accessible

---

## 🖥️ Step 5: Start Development Servers

You need **2 separate terminals** running simultaneously:

### Terminal 1 - Backend Server

```bash
# Navigate to project root
cd /Users/priyanshumishra/HobbyHive/HobbyHive

# Start backend development server
npm run dev:backend

# Expected output:
# 🚀 Server running on http://localhost:3001
# 📡 API available at http://localhost:3001/api
```

**Keep this terminal open and running!**

**What this does:**
- Starts Express.js backend server
- Runs on port **3001**
- Auto-reloads on file changes (using `tsx watch`)
- API endpoints available at `http://localhost:3001/api`

---

### Terminal 2 - Frontend Server

```bash
# Open a NEW terminal window/tab
# Navigate to project root
cd /Users/priyanshumishra/HobbyHive/HobbyHive

# Start frontend development server
npm run dev

# Expected output:
#   ▲ Next.js 15.0.0
#   - Local:        http://localhost:3000
#   - Ready in X.Xs
```

**Keep this terminal open and running!**

**What this does:**
- Starts Next.js frontend development server
- Runs on port **3000** (or next available if 3000 is busy)
- Hot module replacement enabled (auto-refresh on changes)
- Frontend available at `http://localhost:3000`

---

## ✅ Step 6: Verify Everything is Working

### Terminal 3 - Verification (Optional)

Open a **third terminal** to verify services:

```bash
# Check if backend is running
curl http://localhost:3001/health

# Expected output:
# {"status":"ok","timestamp":"2024-01-XX..."}

# Check if frontend is accessible
curl -I http://localhost:3000

# Expected output:
# HTTP/1.1 200 OK
# ... (headers)

# Check which ports are in use
lsof -i -P | grep LISTEN | grep -E "300[0-9]"

# Expected output:
# node  PID  ... TCP *:3000 (LISTEN)  <- Frontend
# node  PID  ... TCP *:3001 (LISTEN)  <- Backend
```

---

## 🌐 Step 7: Open in Browser

### Open Frontend Application

1. **Open your web browser** (Chrome, Firefox, Safari, Edge)
2. **Navigate to:** `http://localhost:3000`
3. **You should see:**
   - 🐝 HobbyHive landing page
   - "The World's Most Powerful Skill & Hobby Exchange Platform"
   - Get Started and Sign In buttons
   - Fully styled with Tailwind CSS

### Open Cursor Browser Preview

1. **In Cursor IDE:**
   - Open the browser preview panel (usually in the bottom panel)
   - Enter URL: `http://localhost:3000`
   - The page should render correctly with all styling

### Verify Backend API

1. **Open browser or use curl:**
   - Health check: `http://localhost:3001/health`
   - Should return: `{"status":"ok","timestamp":"..."}`

---

## 📝 Summary: Quick Command Reference

### First Time Setup (Run Once)

```bash
# 1. Install dependencies
cd /Users/priyanshumishra/HobbyHive/HobbyHive
npm install

# 2. Setup backend .env file
cd backend
touch .env
# Edit .env with your database credentials (see Step 3)

# 3. Setup database
npm run db:generate
npm run db:push

# 4. (Optional) Setup frontend .env.local
cd ../apps/web
touch .env.local
# Edit .env.local (see Step 3)
cd ../..
```

### Daily Development (Run Every Time)

```bash
# Terminal 1 - Backend
cd /Users/priyanshumishra/HobbyHive/HobbyHive
npm run dev:backend

# Terminal 2 - Frontend (in a NEW terminal)
cd /Users/priyanshumishra/HobbyHive/HobbyHive
npm run dev
```

---

## 🛑 Stopping the Servers

### To Stop Servers:

**In each terminal running a server:**
- Press `Ctrl + C` (or `Cmd + C` on Mac)
- This will gracefully stop the server

**Or kill by port:**
```bash
# Kill backend (port 3001)
lsof -ti:3001 | xargs kill -9

# Kill frontend (port 3000)
lsof -ti:3000 | xargs kill -9
```

---

## 🔍 Troubleshooting

### Issue: Port Already in Use

**Error:** `Port 3000 is already in use` or `Port 3001 is already in use`

**Solution:**
```bash
# Find and kill process using port 3000
lsof -ti:3000 | xargs kill -9

# Find and kill process using port 3001
lsof -ti:3001 | xargs kill -9

# Or use a different port (modify .env files)
```

---

### Issue: Dependencies Not Installed

**Error:** `Cannot find module 'xxx'` or `Module not found`

**Solution:**
```bash
# Reinstall dependencies
cd /Users/priyanshumishra/HobbyHive/HobbyHive
rm -rf node_modules package-lock.json
npm install

# Also reinstall in workspace directories
cd apps/web
rm -rf node_modules
cd ../../backend
rm -rf node_modules
cd ..
npm install
```

---

### Issue: Database Connection Error

**Error:** `Can't reach database server`, `Authentication failed`, or `psql: command not found`

**Solution:**

**If using a cloud database:**
```bash
# 1. Check your DATABASE_URL in backend/.env
cd backend
cat .env | grep DATABASE_URL

# 2. Verify the connection string is complete and includes:
#    - Host, port, username, password, database name
#    - ?schema=public or ?sslmode=require at the end

# 3. Test connection using Node.js (if psql is not available)
node -e "const { PrismaClient } = require('@prisma/client'); const prisma = new PrismaClient(); prisma.$connect().then(() => { console.log('✅ Connected!'); process.exit(0); }).catch(err => { console.error('❌ Error:', err.message); process.exit(1); });"

# 4. Double-check your database service dashboard:
#    - Supabase: Check your project settings → Database → Connection string
#    - Neon: Check your project dashboard → Connection string
#    - Make sure the database is active and not paused
```

**If using local PostgreSQL:**
```bash
# 1. Verify PostgreSQL is installed and running
# On macOS with Homebrew:
brew services list | grep postgresql

# On Linux:
sudo systemctl status postgresql

# If not installed, see Prerequisites section above

# 2. Check your DATABASE_URL in backend/.env
cd backend
cat .env | grep DATABASE_URL

# 3. Test connection (if psql is available)
psql "postgresql://user:password@localhost:5432/hobbyhive"

# 4. Verify database exists
psql -l | grep hobbyhive

# 5. If database doesn't exist, create it:
createdb hobbyhive
```

---

### Issue: Prisma Client Not Generated

**Error:** `@prisma/client did not initialize yet` or `PrismaClient is not defined`

**Solution:**
```bash
cd backend
npm run db:generate

# If that doesn't work:
rm -rf node_modules/.prisma
npm run db:generate
```

---

### Issue: Frontend Shows Empty Page

**Error:** Blank page or "This page isn't working"

**Solution:**
```bash
# 1. Check if frontend server is running
curl -I http://localhost:3000

# 2. Check browser console for errors (F12 → Console)

# 3. Verify dependencies are installed
cd apps/web
npm list --depth=0

# 4. Rebuild Next.js cache
rm -rf .next
cd ../..
npm run dev
```

---

### Issue: Backend API Not Responding

**Error:** `Cannot GET /api/...` or CORS errors

**Solution:**
```bash
# 1. Check if backend is running
curl http://localhost:3001/health

# 2. Verify backend .env has correct FRONTEND_URL
cd backend
cat .env | grep FRONTEND_URL

# 3. Check backend logs for errors
# Look at Terminal 1 (where backend is running)
```

---

## 📚 Additional Commands

### Database Commands (in backend directory)

```bash
cd backend

# Generate Prisma Client (after schema changes)
npm run db:generate

# Push schema changes to database (development)
npm run db:push

# Create migration (production/version control)
npm run db:migrate

# Open Prisma Studio (database GUI)
npm run db:studio
# Opens at http://localhost:5555
```

### Build Commands

```bash
# Build frontend for production
cd /Users/priyanshumishra/HobbyHive/HobbyHive
npm run build

# Build backend for production
npm run build:backend

# Run production frontend
cd apps/web
npm run start

# Run production backend
cd ../../backend
npm run start
```

### Code Quality Commands

```bash
# Type check all workspaces
npm run type-check

# Lint all workspaces
npm run lint

# Clean all node_modules (if needed)
npm run clean
```

---

## 🎯 Next Steps

Once everything is running:

1. ✅ Frontend: `http://localhost:3000`
2. ✅ Backend API: `http://localhost:3001/api`
3. ✅ Health Check: `http://localhost:3001/health`

**You're all set! Happy coding! 🎉**

---

## 📞 Need Help?

- Check the main `README.md` for architecture details
- Review `WEB_PREVIEW_SETUP.md` for web preview specific issues
- Check terminal logs for error messages
- Verify all environment variables are set correctly

---

**Last Updated:** January 2024
**Project:** HobbyHive MVP
**Status:** ✅ Ready for Development

