/**
 * Navigation Setup
 * React Navigation configuration with stack and tab navigators
 */

import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppIcon } from '../components/ui/Icon'
import { useAuthStore } from '../state/auth'
import { STORAGE_KEYS } from '../constants'
import { theme } from '../theme'

// Screens
import { LoginScreen } from '../screens/auth/LoginScreen'
import { RegisterScreen } from '../screens/auth/RegisterScreen'
import { OnboardingScreen } from '../screens/onboarding/OnboardingScreen'
import { HomeScreen } from '../screens/home/HomeScreen'
import { ProfileScreen } from '../screens/profile/ProfileScreen'
import { ProfileCreateScreen } from '../screens/profile/ProfileCreateScreen'
import { MatchesScreen } from '../screens/matches/MatchesScreen'
import { ChatListScreen } from '../screens/chat/ChatListScreen'
import { ChatDetailScreen } from '../screens/chat/ChatDetailScreen'
import { BookingScreen } from '../screens/booking/BookingScreen'
import { BookingDetailScreen } from '../screens/booking/BookingDetailScreen'
import { SettingsScreen } from '../screens/settings/SettingsScreen'

// Navigation Types
export type AuthStackParamList = {
  Login: undefined
  Register: undefined
}

export type MainTabParamList = {
  Home: undefined
  Matches: undefined
  Chat: undefined
  Booking: undefined
  Profile: undefined
}

export type RootStackParamList = {
  Onboarding: undefined
  Auth: undefined
  Main: undefined
  ProfileCreate: undefined
  ChatDetail: { chatId: string }
  BookingDetail: { sessionId: string }
  Settings: undefined
}

const AuthStack = createNativeStackNavigator<AuthStackParamList>()
const MainTab = createBottomTabNavigator<MainTabParamList>()
const RootStack = createNativeStackNavigator<RootStackParamList>()

/**
 * Authentication Stack Navigator
 * Handles login and registration screens
 */
const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  )
}

/**
 * Main Tab Navigator
 * Bottom tab navigation for authenticated users
 */
const MainNavigator = () => {
  return (
    <MainTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textLight,
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: theme.colors.border,
          backgroundColor: theme.colors.background,
          paddingBottom: 4,
          paddingTop: 4,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: theme.typography.fontWeight.medium,
        },
      }}
    >
      <MainTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <AppIcon name="home" size={size} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="Matches"
        component={MatchesScreen}
        options={{
          tabBarLabel: 'Matches',
          tabBarIcon: ({ color, size }) => (
            <AppIcon name="heart" size={size} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="Chat"
        component={ChatListScreen}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color, size }) => (
            <AppIcon name="message-circle" size={size} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          tabBarLabel: 'Sessions',
          tabBarIcon: ({ color, size }) => (
            <AppIcon name="calendar" size={size} color={color} />
          ),
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <AppIcon name="user" size={size} color={color} />
          ),
        }}
      />
    </MainTab.Navigator>
  )
}

/**
 * Root Navigator
 * Handles onboarding, auth, and main app navigation
 */
export const RootNavigator = () => {
  const { isAuthenticated, isLoading, checkAuth } = useAuthStore()
  const [isOnboardingComplete, setIsOnboardingComplete] = React.useState<boolean | null>(null)

  useEffect(() => {
    // Check authentication status on mount
    checkAuth()
    
    // Check onboarding status
    AsyncStorage.getItem(STORAGE_KEYS.ONBOARDING_COMPLETE).then((value) => {
      setIsOnboardingComplete(value === 'true')
    })
  }, [checkAuth])

  // Show loading state while checking auth
  if (isLoading || isOnboardingComplete === null) {
    return null // You can add a loading screen here
  }

  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {!isOnboardingComplete ? (
          <RootStack.Screen name="Onboarding" component={OnboardingScreen} />
        ) : !isAuthenticated ? (
          <RootStack.Screen name="Auth" component={AuthNavigator} />
        ) : (
          <>
            <RootStack.Screen name="Main" component={MainNavigator} />
            <RootStack.Screen
              name="ProfileCreate"
              component={ProfileCreateScreen}
              options={{ presentation: 'modal' }}
            />
            <RootStack.Screen
              name="ChatDetail"
              component={ChatDetailScreen}
            />
            <RootStack.Screen
              name="BookingDetail"
              component={BookingDetailScreen}
            />
            <RootStack.Screen
              name="Settings"
              component={SettingsScreen}
              options={{ presentation: 'modal' }}
            />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

