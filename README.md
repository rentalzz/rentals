# React Native Rentals App

A comprehensive React Native boilerplate with modern development tools and best practices.

## 🚀 Features

- **React Native 0.81.0** with TypeScript
- **Redux Toolkit** + **RTK Query** for state management
- **React Navigation** for routing
- **ESLint** + **Prettier** with import organization rules
- **Path aliases** (@screens, @components, etc.)
- **AsyncStorage** integration
- **Environment variables** support
- **Pre-commit hooks** with Husky + lint-staged
- **Theme system** with consistent design tokens

## 📁 Project Structure

```
src/
├── assets/          # Images, fonts, and static assets
├── components/      # Reusable UI components
├── navigation/      # Navigation configuration
├── screens/         # Screen components
├── store/           # Redux store and RTK Query setup
├── services/        # API clients and external services
├── hooks/           # Custom React hooks
├── theme/           # Colors, typography, spacing
├── utils/           # Utility functions
└── types/           # TypeScript type definitions
```

## 🛠️ Setup

### Prerequisites

- Node.js >= 18
- React Native CLI
- iOS: Xcode (for iOS development)
- Android: Android Studio (for Android development)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd rentals
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **iOS setup (macOS only)**

   ```bash
   cd ios && pod install && cd ..
   ```

4. **Environment setup**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

### Environment Variables

Create a `.env` file in the root directory:

```env
# API Configuration
API_BASE_URL=https://api.example.com
API_TIMEOUT=30000

# App Configuration
APP_ENV=development
APP_VERSION=1.0.0

# Feature Flags
ENABLE_ANALYTICS=false
ENABLE_CRASH_REPORTING=false
```

## 🚀 Development

### Available Scripts

- `npm start` - Start Metro bundler
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm test` - Run tests

### Code Quality

The project uses ESLint and Prettier for code quality:

- **ESLint**: TypeScript, React, React Native, and import organization rules
- **Prettier**: Consistent code formatting
- **Pre-commit hooks**: Automatic linting and formatting on commit

### Import Organization

The project uses path aliases for clean imports:

```typescript
// Instead of relative imports

// Use path aliases
import HomeScreen from '@screens/HomeScreen';
import {store} from '@store/store';
import {colors} from '@theme/index';

import HomeScreen from '../../../screens/HomeScreen';
```

Available aliases:

- `@/*` → `src/*`
- `@components/*` → `src/components/*`
- `@screens/*` → `src/screens/*`
- `@navigation/*` → `src/navigation/*`
- `@store/*` → `src/store/*`
- `@services/*` → `src/services/*`
- `@hooks/*` → `src/hooks/*`
- `@theme/*` → `src/theme/*`
- `@utils/*` → `src/utils/*`
- `@assets/*` → `src/assets/*`

## 📱 App Structure

### Navigation

- **Stack Navigator** with Home and Login screens
- Type-safe navigation with TypeScript
- Customizable header styling

### State Management

- **Redux Toolkit** for global state
- **RTK Query** for API calls and caching
- **Redux Persist** for state persistence
- **AsyncStorage** integration

### Theme System

Consistent design tokens for:

- Colors (primary, secondary, semantic)
- Typography (fonts, sizes, weights)
- Spacing (consistent spacing scale)
- Border radius and shadows

## 🔧 Configuration Files

- **`.eslintrc.js`** - ESLint configuration with import rules
- **`.prettierrc.js`** - Prettier formatting rules
- **`babel.config.js`** - Babel with path aliases and env support
- **`tsconfig.json`** - TypeScript with path mapping
- **`.lintstagedrc.js`** - Pre-commit hook configuration

## 📚 Adding New Features

### Creating a New Screen

1. Create the screen component in `src/screens/`
2. Add navigation type to `src/navigation/index.tsx`
3. Add the screen to the navigator

### Creating a New Redux Slice

1. Create the slice in `src/store/slices/`
2. Add to the root reducer in `src/store/store.ts`
3. Add to persist whitelist if needed

### Adding API Endpoints

1. Create new API service in `src/store/services/`
2. Extend the base API with new endpoints
3. Use RTK Query hooks in components

## 🐛 Troubleshooting

### Common Issues

1. **Metro bundler issues**: Clear cache with `npm start -- --reset-cache`
2. **iOS build issues**: Clean build folder in Xcode
3. **Android build issues**: Clean project with `cd android && ./gradlew clean`

### Linting Issues

- Run `npm run lint:fix` to automatically fix most issues
- Check import organization rules in `.eslintrc.js`

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and tests
5. Submit a pull request

---

Built with ❤️ using React Native and modern development tools.
