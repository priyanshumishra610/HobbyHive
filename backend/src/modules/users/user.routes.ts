import { Router } from 'express'
import { getUserById } from './user.controller'
import { authenticate } from '../middleware/auth'

const router = Router()

/**
 * User routes
 */
router.get('/:id', authenticate, getUserById)

export default router

