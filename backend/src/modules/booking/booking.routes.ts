import { Router } from 'express'
import { createSession, getSessions, updateSession, cancelSession } from './booking.controller'
import { authenticate } from '../middleware/auth'

const router = Router()

/**
 * Booking routes
 */
router.post('/', authenticate, createSession)
router.get('/', authenticate, getSessions)
router.patch('/:id', authenticate, updateSession)
router.post('/:id/cancel', authenticate, cancelSession)

export default router

