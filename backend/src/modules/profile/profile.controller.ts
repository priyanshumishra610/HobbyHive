import { Request, Response } from 'express'
import { AppError } from '../../config/errorHandler'
import { prisma } from '../../config/database'

/**
 * Get current user's profile
 */
export const getProfile = async (req: Request, res: Response) => {
  const userId = (req as any).userId

  const profile = await prisma.userProfile.findUnique({
    where: { userId },
    include: {
      skills: {
        include: {
          skill: true,
        },
      },
    },
  })

  if (!profile) {
    return res.json({ success: true, profile: null })
  }

  res.json({ success: true, profile })
}

/**
 * Create or update user profile
 */
export const createOrUpdateProfile = async (req: Request, res: Response) => {
  const userId = (req as any).userId
  const { city, bio, timezone, availableDays, availableHoursStart, availableHoursEnd } = req.body

  const profile = await prisma.userProfile.upsert({
    where: { userId },
    update: {
      city,
      bio,
      timezone,
      availableDays: availableDays || [],
      availableHoursStart,
      availableHoursEnd,
    },
    create: {
      userId,
      city,
      bio,
      timezone: timezone || 'UTC',
      availableDays: availableDays || [],
      availableHoursStart: availableHoursStart || '09:00',
      availableHoursEnd: availableHoursEnd || '17:00',
    },
    include: {
      skills: {
        include: {
          skill: true,
        },
      },
    },
  })

  res.json({ success: true, profile })
}

/**
 * Add skill to teach
 */
export const addSkillToTeach = async (req: Request, res: Response) => {
  const userId = (req as any).userId
  const { skillName, category, level } = req.body

  if (!skillName || !category) {
    throw new AppError('Skill name and category are required', 400)
  }

  // Get or create profile
  let profile = await prisma.userProfile.findUnique({
    where: { userId },
  })

  if (!profile) {
    profile = await prisma.userProfile.create({
      data: {
        userId,
        timezone: 'UTC',
        availableDays: [],
        availableHoursStart: '09:00',
        availableHoursEnd: '17:00',
      },
    })
  }

  // Get or create skill
  let skill = await prisma.skill.findUnique({
    where: { name: skillName },
  })

  if (!skill) {
    skill = await prisma.skill.create({
      data: {
        name: skillName,
        category,
      },
    })
  }

  // Add skill to profile (teach relation)
  await prisma.userSkill.upsert({
    where: {
      profileId_skillId_type: {
        profileId: profile.id,
        skillId: skill.id,
        type: 'teach',
      },
    },
    update: { level },
    create: {
      profileId: profile.id,
      skillId: skill.id,
      type: 'teach',
      level,
    },
  })

  const updatedProfile = await prisma.userProfile.findUnique({
    where: { id: profile.id },
    include: {
      skills: {
        include: {
          skill: true,
        },
      },
    },
  })

  res.json({ success: true, profile: updatedProfile })
}

/**
 * Add skill to learn
 */
export const addSkillToLearn = async (req: Request, res: Response) => {
  const userId = (req as any).userId
  const { skillName, category, level } = req.body

  if (!skillName || !category) {
    throw new AppError('Skill name and category are required', 400)
  }

  // Get or create profile
  let profile = await prisma.userProfile.findUnique({
    where: { userId },
  })

  if (!profile) {
    profile = await prisma.userProfile.create({
      data: {
        userId,
        timezone: 'UTC',
        availableDays: [],
        availableHoursStart: '09:00',
        availableHoursEnd: '17:00',
      },
    })
  }

  // Get or create skill
  let skill = await prisma.skill.findUnique({
    where: { name: skillName },
  })

  if (!skill) {
    skill = await prisma.skill.create({
      data: {
        name: skillName,
        category,
      },
    })
  }

  // Add skill to profile (learn relation)
  await prisma.userSkill.upsert({
    where: {
      profileId_skillId_type: {
        profileId: profile.id,
        skillId: skill.id,
        type: 'learn',
      },
    },
    update: { level },
    create: {
      profileId: profile.id,
      skillId: skill.id,
      type: 'learn',
      level,
    },
  })

  const updatedProfile = await prisma.userProfile.findUnique({
    where: { id: profile.id },
    include: {
      skills: {
        include: {
          skill: true,
        },
      },
    },
  })

  res.json({ success: true, profile: updatedProfile })
}

/**
 * Remove skill from profile
 */
export const removeSkill = async (req: Request, res: Response) => {
  const userId = (req as any).userId
  const { skillId } = req.params

  const profile = await prisma.userProfile.findUnique({
    where: { userId },
  })

  if (!profile) {
    throw new AppError('Profile not found', 404)
  }

  await prisma.userSkill.deleteMany({
    where: {
      profileId: profile.id,
      skillId,
    },
  })

  res.json({ success: true, message: 'Skill removed' })
}

