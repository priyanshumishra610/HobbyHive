import { Router } from 'express'
import { getChats, getChatById, sendMessage } from './chat.controller'
import { authenticate } from '../middleware/auth'

const router = Router()

/**
 * Chat routes
 */
router.get('/', authenticate, getChats)
router.get('/:id', authenticate, getChatById)
router.post('/:id/messages', authenticate, sendMessage)

export default router

