# ⚡ Quick Start - HobbyHive

Fast reference for getting HobbyHive running. For detailed instructions, see `STARTUP.md`.

---

## 🚀 Quick Setup (First Time Only)

```bash
# 1. Install dependencies
cd /Users/priyanshumishra/HobbyHive/HobbyHive
npm install

# 2. Setup backend .env
cd backend
cat > .env << 'EOF'
NODE_ENV=development
PORT=3001
DATABASE_URL=postgresql://user:password@localhost:5432/hobbyhive?schema=public
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRES_IN=7d
FRONTEND_URL=http://localhost:3000
EOF

# 3. Setup database
npm run db:generate
npm run db:push

# 4. (Optional) Frontend .env.local
cd ../apps/web
cat > .env.local << 'EOF'
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_APP_URL=http://localhost:3000
EOF

cd ../..
```

---

## 🖥️ Start Development Servers

### Terminal 1 - Backend
```bash
cd /Users/priyanshumishra/HobbyHive/HobbyHive
npm run dev:backend
```
➡️ Runs on: `http://localhost:3001`

### Terminal 2 - Frontend  
```bash
cd /Users/priyanshumishra/HobbyHive/HobbyHive
npm run dev
```
➡️ Runs on: `http://localhost:3000`

---

## ✅ Verify

```bash
# Backend health check
curl http://localhost:3001/health

# Frontend check
curl -I http://localhost:3000

# Check ports
lsof -i -P | grep LISTEN | grep -E "300[0-9]"
```

---

## 🛑 Stop Servers

Press `Ctrl+C` (or `Cmd+C` on Mac) in each terminal

Or kill by port:
```bash
lsof -ti:3000 | xargs kill -9  # Frontend
lsof -ti:3001 | xargs kill -9  # Backend
```

---

## 🔧 Common Fixes

```bash
# Port in use?
lsof -ti:3000 | xargs kill -9

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Rebuild Prisma Client
cd backend
npm run db:generate

# Clear Next.js cache
cd ../apps/web
rm -rf .next
```

---

**Full Guide:** See `STARTUP.md` for detailed instructions

