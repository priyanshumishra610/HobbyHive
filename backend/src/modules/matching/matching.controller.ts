import { Request, Response } from 'express'
import { AppError } from '../../config/errorHandler'
import { prisma } from '../../config/database'

/**
 * Get match recommendations for current user
 * TODO: Implement actual matching algorithm
 */
export const getRecommendations = async (req: Request, res: Response) => {
  const userId = (req as any).userId

  // Get user profile with skills
  const profile = await prisma.userProfile.findUnique({
    where: { userId },
    include: {
      skills: {
        include: { skill: true },
      },
    },
  })

  if (!profile) {
    return res.json({ success: true, matches: [] })
  }

  // TODO: Implement actual matching algorithm
  // For now, return empty array
  const matches: any[] = []

  res.json({ success: true, matches })
}

/**
 * Get all matches for current user
 */
export const getMatches = async (req: Request, res: Response) => {
  const userId = (req as any).userId

  const matches = await prisma.match.findMany({
    where: {
      OR: [
        { user1Id: userId },
        { user2Id: userId },
      ],
    },
    include: {
      user1: {
        select: {
          id: true,
          name: true,
          avatar: true,
          email: true,
        },
      },
      user2: {
        select: {
          id: true,
          name: true,
          avatar: true,
          email: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  res.json({ success: true, matches })
}

/**
 * Accept a match
 */
export const acceptMatch = async (req: Request, res: Response) => {
  const userId = (req as any).userId
  const { matchId } = req.params

  const match = await prisma.match.findUnique({
    where: { id: matchId },
  })

  if (!match) {
    throw new AppError('Match not found', 404)
  }

  if (match.user1Id !== userId && match.user2Id !== userId) {
    throw new AppError('Unauthorized', 403)
  }

  const updatedMatch = await prisma.match.update({
    where: { id: matchId },
    data: {
      status: 'active',
    },
    include: {
      user1: {
        select: {
          id: true,
          name: true,
          avatar: true,
          email: true,
        },
      },
      user2: {
        select: {
          id: true,
          name: true,
          avatar: true,
          email: true,
        },
      },
    },
  })

  res.json({ success: true, match: updatedMatch })
}

/**
 * Decline a match
 */
export const declineMatch = async (req: Request, res: Response) => {
  const userId = (req as any).userId
  const { matchId } = req.params

  const match = await prisma.match.findUnique({
    where: { id: matchId },
  })

  if (!match) {
    throw new AppError('Match not found', 404)
  }

  if (match.user1Id !== userId && match.user2Id !== userId) {
    throw new AppError('Unauthorized', 403)
  }

  await prisma.match.update({
    where: { id: matchId },
    data: {
      status: 'declined',
    },
  })

  res.json({ success: true, message: 'Match declined' })
}

