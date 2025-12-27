import { Router } from 'express'
import { login, register, loginWithGoogle, logout, getCurrentUser } from './auth.controller'
import { authenticate } from '../middleware/auth'

const router = Router()

/**
 * Authentication routes
 */
router.post('/login', login)
router.post('/register', register)
router.post('/google', loginWithGoogle)
router.post('/logout', authenticate, logout)
router.get('/me', authenticate, getCurrentUser)

export default router

