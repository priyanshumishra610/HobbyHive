import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import 'express-async-errors'

// Load environment variables
dotenv.config()

// Import routes
import authRoutes from './modules/auth/auth.routes'
import userRoutes from './modules/users/user.routes'
import profileRoutes from './modules/profile/profile.routes'
import matchingRoutes from './modules/matching/matching.routes'
import chatRoutes from './modules/chat/chat.routes'
import bookingRoutes from './modules/booking/booking.routes'

// Import middleware
import { errorHandler } from './config/errorHandler'

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(helmet())
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// API Routes
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/profile', profileRoutes)
app.use('/api/matching', matchingRoutes)
app.use('/api/chat', chatRoutes)
app.use('/api/booking', bookingRoutes)

// Error handling middleware (must be last)
app.use(errorHandler)

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
  console.log(`📡 API available at http://localhost:${PORT}/api`)
})

