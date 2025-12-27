import { Router } from 'express'
import { getRecommendations, getMatches, acceptMatch, declineMatch } from './matching.controller'
import { authenticate } from '../middleware/auth'

const router = Router()

/**
 * Matching routes
 */
router.get('/recommendations', authenticate, getRecommendations)
router.get('/matches', authenticate, getMatches)
router.post('/:matchId/accept', authenticate, acceptMatch)
router.post('/:matchId/decline', authenticate, declineMatch)

export default router

