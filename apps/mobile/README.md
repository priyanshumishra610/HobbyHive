# HobbyHive Mobile App

React Native mobile application for the HobbyHive platform, built with TypeScript, React Navigation, and Zustand.

## 📱 Overview

The HobbyHive mobile app enables users to:
- Connect with people who share similar hobbies
- Find matches for skill exchange
- Schedule learning sessions
- Chat with matches
- Manage their profile and bookings

## 🏗️ Architecture

### Tech Stack
- **React Native** 0.83.1
- **TypeScript** 5.8.3
- **React Navigation** 6.x (Stack & Bottom Tabs)
- **Zustand** 4.4.7 (State Management)
- **Axios** 1.6.2 (HTTP Client)
- **AsyncStorage** (Local Storage)

### Project Structure

```
apps/mobile/
├── src/
│   ├── app/                # Navigation setup
│   │   ├── navigation.tsx  # Navigation configuration
│   │   └── index.tsx       # App entry point
│   ├── screens/            # App screens
│   │   ├── auth/           # Login/Register
│   │   ├── onboarding/     # Onboarding flow
│   │   ├── home/           # Dashboard
│   │   ├── profile/        # Profile management
│   │   ├── matches/        # Matching suggestions
│   │   ├── chat/           # Chat list & detail
│   │   ├── booking/        # Session scheduling
│   │   └── settings/       # App settings
│   ├── components/         # Reusable components
│   │   ├── common/         # Common components (Header, etc.)
│   │   └── ui/             # UI components (Button, Card, Input)
│   ├── services/           # API services
│   │   └── api/            # API client & endpoints
│   ├── state/              # Zustand stores
│   ├── models/             # TypeScript types/interfaces
│   ├── utils/              # Helper functions
│   ├── constants/          # App constants
│   └── theme/              # Theme configuration
├── android/                # Android native code
├── ios/                    # iOS native code
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 20.0.0
- **npm** >= 9.0.0
- **React Native CLI** (installed globally or via npx)
- **Android Studio** (for Android development)
- **Xcode** (for iOS development, macOS only)
- **Java Development Kit (JDK)** 17 or higher

### Installation

1. **Install dependencies:**
   ```bash
   cd apps/mobile
   npm install
   ```

2. **iOS Setup (macOS only):**
   ```bash
   cd ios
   pod install
   cd ..
   ```

3. **Configure API URL:**
   
   Update `src/constants/index.ts` with your backend API URL:
   ```typescript
   export const API_URL = __DEV__
     ? 'http://localhost:3001/api'  // Development
     : 'https://api.hobbyhive.com/api'  // Production
   ```

   **Note:** For Android emulator, use `http://10.0.2.2:3001/api` instead of `localhost`.

### Running the App

#### Android

1. **Start Metro bundler:**
   ```bash
   npm start
   ```

2. **Run on Android emulator or device:**
   ```bash
   npm run android
   ```

   Or use the Android Studio emulator:
   - Open Android Studio
   - Start an emulator
   - Run `npm run android`

#### iOS (macOS only)

1. **Start Metro bundler:**
   ```bash
   npm start
   ```

2. **Run on iOS simulator:**
   ```bash
   npm run ios
   ```

   Or use Xcode:
   - Open `ios/HobbyHiveMobile.xcworkspace` in Xcode
   - Select a simulator
   - Click Run

### Development

#### Type Checking
```bash
npm run type-check
```

#### Linting
```bash
npm run lint
```

## 📦 Key Features

### Navigation

The app uses React Navigation with:
- **Auth Stack**: Login and Register screens
- **Main Tabs**: Home, Matches, Chat, Booking, Profile
- **Modal Screens**: Profile Create, Settings, Chat Detail, Booking Detail

### State Management

Zustand stores:
- **Auth Store**: User authentication state, token management
- Stores persist data using AsyncStorage

### API Integration

- Centralized API client with Axios
- Automatic token injection in requests
- Error handling and token refresh logic
- JWT authentication ready

### Theme System

Centralized theme configuration:
- Colors (primary, secondary, text, etc.)
- Typography (font sizes, weights, line heights)
- Spacing (consistent margins/padding)
- Border radius and shadows

## 🔧 Configuration

### Environment Variables

For production builds, configure environment variables:

**Android** (`android/app/build.gradle`):
```gradle
buildConfigField "String", "API_URL", '"https://api.hobbyhive.com/api"'
```

**iOS** (Info.plist or build settings):
Add API_URL configuration in Xcode build settings.

### API Configuration

Update the API base URL in `src/constants/index.ts`:

```typescript
export const API_URL = __DEV__
  ? 'http://localhost:3001/api'
  : 'https://your-api-domain.com/api'
```

**Important for Android Emulator:**
- Use `http://10.0.2.2:3001/api` instead of `localhost`
- This is the special IP that maps to the host machine's localhost

**Important for iOS Simulator:**
- Use `http://localhost:3001/api` (works directly)

**Important for Physical Devices:**
- Use your computer's local IP address (e.g., `http://192.168.1.100:3001/api`)
- Ensure your device and computer are on the same network

## 🐛 Troubleshooting

### Common Issues

#### Metro Bundler Issues
```bash
# Clear Metro cache
npm start -- --reset-cache
```

#### Android Build Issues
```bash
# Clean Android build
cd android
./gradlew clean
cd ..
npm run android
```

#### iOS Build Issues
```bash
# Clean iOS build
cd ios
rm -rf Pods Podfile.lock
pod install
cd ..
npm run ios
```

#### Dependency Issues
```bash
# Clear all caches and reinstall
rm -rf node_modules
npm install
cd ios && pod install && cd ..
```

#### API Connection Issues

**Android Emulator:**
- Ensure API URL uses `10.0.2.2` instead of `localhost`
- Check that backend server is running
- Verify network permissions in `AndroidManifest.xml`

**iOS Simulator:**
- Use `localhost` in API URL
- Check that backend server is running

**Physical Device:**
- Use your computer's local IP address
- Ensure device and computer are on same Wi-Fi network
- Check firewall settings

### Debugging

#### React Native Debugger
1. Shake device or press `Cmd+D` (iOS) / `Cmd+M` (Android)
2. Select "Debug"
3. Open Chrome DevTools at `http://localhost:8081/debugger-ui`

#### Flipper
Install Flipper for advanced debugging:
- Network inspector
- Redux/Zustand store inspection
- Layout inspector

## 📱 Building for Production

### Android

1. **Generate a signed APK:**
   ```bash
   cd android
   ./gradlew assembleRelease
   ```

2. **Generate a signed AAB (for Play Store):**
   ```bash
   ./gradlew bundleRelease
   ```

### iOS

1. **Archive in Xcode:**
   - Open `ios/HobbyHiveMobile.xcworkspace`
   - Select "Any iOS Device" as target
   - Product → Archive
   - Follow prompts to distribute

## 🧪 Testing

### Running Tests
```bash
npm test
```

### Test Structure
- Unit tests: `__tests__/`
- Component tests: Screen and component test files

## 📚 Additional Resources

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [React Navigation](https://reactnavigation.org/)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 🤝 Contributing

1. Follow the existing code structure
2. Add comments for complex logic
3. Use TypeScript for type safety
4. Follow the theme system for styling
5. Test on both iOS and Android

## 📄 License

Private - HobbyHive Platform

## 🆘 Support

For issues or questions:
1. Check the troubleshooting section
2. Review the code comments
3. Check React Native and library documentation
4. Contact the development team

---

**Built with ❤️ for HobbyHive**
