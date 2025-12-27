/**
 * App Entry Point
 * Main app component with providers and navigation
 */

import React from 'react'
import { StatusBar, useColorScheme } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { RootNavigator } from './navigation'
import { theme } from '../theme'

/**
 * Main App Component
 * Wraps the app with necessary providers and sets up navigation
 */
const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={theme.colors.background}
        />
        <RootNavigator />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

export default App

