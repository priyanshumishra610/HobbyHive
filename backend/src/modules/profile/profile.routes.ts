import { Router } from 'express'
import {
  getProfile,
  createOrUpdateProfile,
  addSkillToTeach,
  addSkillToLearn,
  removeSkill,
} from './profile.controller'
import { authenticate } from '../middleware/auth'

const router = Router()

/**
 * Profile routes
 */
router.get('/', authenticate, getProfile)
router.post('/', authenticate, createOrUpdateProfile)
router.post('/skills/teach', authenticate, addSkillToTeach)
router.post('/skills/learn', authenticate, addSkillToLearn)
router.delete('/skills/:skillId', authenticate, removeSkill)

export default router

