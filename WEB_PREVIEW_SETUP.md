# 🌐 HobbyHive Web Preview Setup Guide

## ✅ Fixed Issues

1. **Added missing `tailwindcss-animate` dependency** - Required by Tailwind config
2. **Installed all npm dependencies** - Project dependencies are now installed
3. **Started Next.js dev server** - Development server is running in the background

## 🚀 Quick Start

### Starting the Dev Server

The dev server should already be running. If not, start it with:

```bash
cd apps/web
npm run dev
```

Or from the root:

```bash
npm run dev
```

### Accessing the Application

The Next.js dev server typically runs on **port 3000** by default. If port 3000 is occupied, Next.js will automatically use the next available port (3001, 3002, etc.).

**To check which port is being used:**

```bash
lsof -i -P | grep -i "node.*LISTEN" | grep -E "300[0-9]"
```

**Or check the terminal output** when starting the dev server - it will show:
```
- Local:        http://localhost:3000
```

### Opening in Cursor Browser Preview

1. **Find the correct port** - Check which port the dev server is using (see above)
2. **Open Cursor's browser preview panel**
3. **Enter the URL**: `http://localhost:PORT` (replace PORT with the actual port, e.g., `http://localhost:3000` or `http://localhost:3002`)
4. The page should now display correctly with:
   - 🐝 HobbyHive landing page
   - Tailwind CSS styling
   - Shadcn UI components (Buttons, Cards)
   - Full responsive design

## 📋 What Was Fixed

### 1. Missing Dependency
- **Issue**: `tailwindcss-animate` was referenced in `tailwind.config.ts` but not in `package.json`
- **Fix**: Added `"tailwindcss-animate": "^1.0.7"` to `devDependencies`

### 2. Dependencies Not Installed
- **Issue**: `node_modules` directory was missing
- **Fix**: Ran `npm install` to install all dependencies

### 3. Dev Server Not Running
- **Issue**: Next.js dev server was not running
- **Fix**: Started `npm run dev` in the background

## 🔧 Troubleshooting

### If the page still appears empty:

1. **Check if the server is running:**
   ```bash
   ps aux | grep "next dev" | grep -v grep
   ```

2. **Check which port is in use:**
   ```bash
   lsof -i -P | grep LISTEN | grep node
   ```

3. **Verify the page loads in a regular browser:**
   - Open Chrome/Firefox/Safari
   - Navigate to `http://localhost:PORT`
   - If it works in a regular browser but not in Cursor, try:
     - Clearing Cursor's cache
     - Restarting Cursor
     - Using a different port

4. **Check for build errors:**
   ```bash
   cd apps/web
   npm run build
   ```

5. **Check browser console for errors:**
   - Open browser developer tools (F12)
   - Look for any JavaScript or CSS loading errors

### If port conflicts occur:

If port 3000 is already in use, Next.js will automatically try 3001, 3002, etc. You can also specify a port explicitly:

```bash
cd apps/web
PORT=3000 npm run dev
```

Or kill the process using port 3000:

```bash
lsof -ti:3000 | xargs kill -9
```

## 📁 Project Structure

```
apps/web/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with Providers
│   │   ├── page.tsx        # Home page (landing page)
│   │   └── ...
│   ├── components/
│   │   ├── ui/             # Shadcn UI components
│   │   └── providers.tsx   # React Query provider
│   └── styles/
│       └── globals.css     # Tailwind CSS + custom styles
├── tailwind.config.ts      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
```

## 🎨 Tech Stack

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn UI** - Component library (Button, Card, etc.)
- **TypeScript** - Type safety

## ✅ Verification Checklist

- [x] `tailwindcss-animate` added to dependencies
- [x] Dependencies installed (`node_modules` exists)
- [x] Dev server running
- [x] Page renders HTML correctly
- [x] CSS loads properly
- [x] No TypeScript/linting errors
- [x] Components render correctly

## 📝 Notes

- The dev server runs in **development mode** with hot-reloading
- For production builds, use: `npm run build` then `npm start`
- The app uses Next.js App Router (not Pages Router)
- All styling is handled via Tailwind CSS classes
- Components use Shadcn UI design system

---

**Status**: ✅ All issues resolved - Web preview should work correctly

**Current Status**: Dev server is running. Check which port is active using the commands above, then open `http://localhost:PORT` in Cursor's browser preview.

