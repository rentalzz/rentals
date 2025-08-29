# 🚀 Development Scripts & Workflow

This document explains all the available scripts and development workflow for the Rentals app.

## 📦 **Package.json Scripts**

### **🚀 Development Scripts**

```bash
npm run dev              # Start development server
npm run dev:android      # Run on Android device/emulator
npm run dev:ios          # Run on iOS device/simulator
npm run dev:clean        # Clean builds and start dev server
```

### **🧹 Cleaning Scripts**

```bash
npm run clean            # Remove node_modules and reinstall
npm run clean:android    # Clean Android build
npm run clean:ios        # Clean iOS build and reinstall pods
npm run clean:all        # Clean both platforms
```

### **🔍 Quality Checks**

```bash
npm run check            # Run all checks (TypeScript + ESLint + Prettier)
npm run type-check       # Check TypeScript errors
npm run type-check:watch # Watch mode for TypeScript
npm run lint             # Run ESLint
npm run lint:fix         # Auto-fix ESLint issues
npm run format           # Format code with Prettier
npm run format:check     # Check if code is formatted
npm run fix              # Auto-fix all issues
```

### **📱 Platform-Specific Scripts**

```bash
npm run android          # Run on Android
npm run ios              # Run on iOS
npm run pod:install      # Install iOS pods
npm run pod:update       # Update iOS pods
npm run gradle:clean     # Clean Android Gradle
npm run gradle:build     # Build Android debug APK
```

### **🔄 Metro & Cache Scripts**

```bash
npm run start            # Start Metro bundler
npm run reset-cache      # Reset Metro cache
npm run metro:reset      # Reset Metro cache
npm run metro:clear      # Clear Metro cache
```

### **🏗️ Build Scripts**

```bash
npm run build:android    # Build Android release APK
npm run build:ios        # Build iOS release archive
npm run bundle:android   # Bundle Android assets
npm run bundle:ios       # Bundle iOS assets
```

### **🧪 Testing Scripts**

```bash
npm run test             # Run tests once
npm run test:watch       # Run tests in watch mode
npm run test:coverage    # Run tests with coverage
```

### **🎨 Font & Asset Scripts**

```bash
npm run fonts:setup      # Setup and verify fonts
```

## 🪝 **Git Hooks (Pre-commit)**

### **What Happens on Commit:**

1. **Pre-commit Hook** runs automatically
2. **Only staged files** are checked (not entire codebase)
3. **TypeScript errors** are caught
4. **ESLint issues** are auto-fixed
5. **Code formatting** is applied
6. **Commit is blocked** if any errors remain

### **Pre-commit Checks:**

- ✅ **TypeScript compilation** (no errors)
- ✅ **ESLint rules** (auto-fix when possible)
- ✅ **Prettier formatting** (auto-format)
- ✅ **Commit message format** (conventional commits)

### **Commit Message Format:**

```bash
# ✅ Valid formats:
feat(auth): add login functionality
fix(ui): resolve button alignment
docs(readme): update installation steps
style(theme): format color variables
refactor(api): simplify API calls
test(components): add button tests
chore(deps): update dependencies

# ❌ Invalid formats:
added login
fixed button
updated readme
```

## 🛠️ **Development Workflow Script**

### **Usage:**

```bash
./scripts/dev-workflow.sh [command]
```

### **Available Commands:**

```bash
./scripts/dev-workflow.sh setup    # Initial project setup
./scripts/dev-workflow.sh clean    # Clean all builds
./scripts/dev-workflow.sh dev      # Start development
./scripts/dev-workflow.sh android  # Run on Android
./scripts/dev-workflow.sh ios      # Run on iOS
./scripts/dev-workflow.sh check    # Run all checks
./scripts/dev-workflow.sh fix      # Auto-fix issues
./scripts/dev-workflow.sh test     # Run tests
./scripts/dev-workflow.sh fonts    # Setup fonts
./scripts/dev-workflow.sh help     # Show help
```

## 🚨 **Troubleshooting**

### **Pre-commit Hook Failing:**

```bash
# Check what's wrong
npm run check

# Auto-fix issues
npm run fix

# Try commit again
git add . && git commit -m "fix: resolve linting issues"
```

### **Fonts Not Working:**

```bash
# Clean and setup fonts
npm run fonts:setup

# Clean builds
npm run clean:all

# Re-run app
npm run dev:android  # or dev:ios
```

### **Metro Issues:**

```bash
# Reset Metro cache
npm run metro:reset

# Clear Metro cache
npm run metro:clear

# Restart development server
npm run dev
```

## 📋 **Daily Development Workflow**

### **1. Start Development:**

```bash
npm run dev              # Start Metro
npm run dev:android      # Run on Android (new terminal)
# or
npm run dev:ios          # Run on iOS (new terminal)
```

### **2. Before Committing:**

```bash
npm run check            # Run all checks
npm run fix              # Auto-fix issues
git add .                # Stage changes
git commit -m "feat: add new feature"  # Pre-commit hook runs automatically
```

### **3. When Things Go Wrong:**

```bash
npm run clean:all        # Clean everything
npm run fonts:setup      # Re-setup fonts
npm run dev:clean        # Clean start
```

## 🎯 **Best Practices**

1. **Always run `npm run check`** before committing
2. **Use conventional commit messages** (feat:, fix:, docs:, etc.)
3. **Let pre-commit hooks** handle formatting automatically
4. **Use `npm run fix`** to auto-resolve common issues
5. **Clean builds** when experiencing strange behavior
6. **Check TypeScript errors** with `npm run type-check`

## 🔧 **Customization**

### **Add New Scripts:**

```json
{
  "scripts": {
    "custom:script": "echo 'Custom script'"
  }
}
```

### **Modify Pre-commit Checks:**

Edit `.lintstagedrc.js` to add/remove checks for staged files.

### **Update Commit Message Rules:**

Edit `.husky/commit-msg` to modify commit message validation.

---

**Happy coding! 🎉**
