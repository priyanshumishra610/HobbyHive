/**
 * Chat Detail Screen
 * Individual chat conversation view
 */

import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Header } from '../../components/common/Header'
import { AppIcon } from '../../components/ui/Icon'
import { theme } from '../../theme'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '../../app/navigation'

type Props = NativeStackScreenProps<RootStackParamList, 'ChatDetail'>

export const ChatDetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { chatId } = route.params
  const [message, setMessage] = useState('')
  
  // Placeholder data - will be replaced with API data
  const messages: any[] = []

  const handleSend = () => {
    if (message.trim()) {
      // TODO: Send message via API
      setMessage('')
    }
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <Header
        title="Chat"
        leftAction={{
          onPress: () => navigation.goBack(),
        }}
      />
      <ScrollView
        style={styles.messagesContainer}
        contentContainerStyle={styles.messagesContent}
      >
        {messages.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No messages yet</Text>
            <Text style={styles.emptySubtext}>Start the conversation!</Text>
          </View>
        ) : (
          messages.map((msg) => (
            <View
              key={msg.id}
              style={[
                styles.messageBubble,
                msg.senderId === 'current-user' ? styles.sentMessage : styles.receivedMessage,
              ]}
            >
              <Text style={styles.messageText}>{msg.content}</Text>
            </View>
          ))
        )}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.attachButton}>
          <AppIcon name="paperclip" size={20} color={theme.colors.textSecondary} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={message}
          onChangeText={setMessage}
          multiline
          placeholderTextColor={theme.colors.textLight}
        />
        <TouchableOpacity
          onPress={handleSend}
          style={[styles.sendButton, !message.trim() && styles.sendButtonDisabled]}
          disabled={!message.trim()}
        >
          <AppIcon name="send" size={20} color={theme.colors.textOnPrimary} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    padding: theme.spacing.md,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: theme.spacing.xxl,
  },
  emptyText: {
    fontSize: theme.typography.fontSize.lg,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  },
  emptySubtext: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textLight,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    marginBottom: theme.spacing.sm,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: theme.colors.primary,
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  messageText: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.text,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    backgroundColor: theme.colors.background,
  },
  attachButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.sm,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.full,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    marginRight: theme.spacing.sm,
    maxHeight: 100,
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.text,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
})

