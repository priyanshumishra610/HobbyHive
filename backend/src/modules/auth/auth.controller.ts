import { Request, Response } from 'express'
import { AppError } from '../../config/errorHandler'
import { prisma } from '../../config/database'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

/**
 * Generate JWT token
 */
const generateToken = (userId: string): string => {
  const secret = process.env.JWT_SECRET || 'your-secret-key'
  const expiresIn = process.env.JWT_EXPIRES_IN || '7d'
  return jwt.sign({ userId }, secret, { expiresIn })
}

/**
 * Login with email and password
 */
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body

  if (!email || !password) {
    throw new AppError('Email and password are required', 400)
  }

  // Find user
  const user = await prisma.user.findUnique({
    where: { email },
  })

  if (!user || !user.password) {
    throw new AppError('Invalid credentials', 401)
  }

  // Verify password
  const isValidPassword = await bcrypt.compare(password, user.password)
  if (!isValidPassword) {
    throw new AppError('Invalid credentials', 401)
  }

  // Generate token
  const token = generateToken(user.id)

  // Return user and token
  const { password: _, ...userWithoutPassword } = user
  res.json({
    success: true,
    user: userWithoutPassword,
    token,
  })
}

/**
 * Register new user
 */
export const register = async (req: Request, res: Response) => {
  const { email, password, name } = req.body

  if (!email || !password || !name) {
    throw new AppError('Email, password, and name are required', 400)
  }

  // Check if user exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  })

  if (existingUser) {
    throw new AppError('User already exists', 409)
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10)

  // Create user
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  })

  // Generate token
  const token = generateToken(user.id)

  // Return user and token
  const { password: _, ...userWithoutPassword } = user
  res.json({
    success: true,
    user: userWithoutPassword,
    token,
  })
}

/**
 * Login with Google OAuth
 */
export const loginWithGoogle = async (req: Request, res: Response) => {
  const { token } = req.body

  // TODO: Verify Google token and extract user info
  // For now, return placeholder response
  throw new AppError('Google OAuth not implemented yet', 501)
}

/**
 * Logout current user
 */
export const logout = async (req: Request, res: Response) => {
  // Token invalidation would typically be handled by a token blacklist
  // For MVP, we'll just return success
  res.json({ success: true, message: 'Logged out successfully' })
}

/**
 * Get current authenticated user
 */
export const getCurrentUser = async (req: Request, res: Response) => {
  const userId = (req as any).userId

  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      email: true,
      name: true,
      avatar: true,
      createdAt: true,
      updatedAt: true,
    },
  })

  if (!user) {
    throw new AppError('User not found', 404)
  }

  res.json({ success: true, user })
}

