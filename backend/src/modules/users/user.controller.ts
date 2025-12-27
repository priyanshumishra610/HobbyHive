import { Request, Response } from 'express'
import { AppError } from '../../config/errorHandler'
import { prisma } from '../../config/database'

/**
 * Get user by ID
 */
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params

  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      name: true,
      avatar: true,
      createdAt: true,
      updatedAt: true,
      profile: {
        include: {
          skillsToTeach: {
            include: {
              skill: true,
            },
          },
          skillsToLearn: {
            include: {
              skill: true,
            },
          },
        },
      },
    },
  })

  if (!user) {
    throw new AppError('User not found', 404)
  }

  res.json({ success: true, user })
}

