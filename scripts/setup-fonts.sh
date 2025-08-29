#!/bin/bash

echo "🚀 Setting up fonts for React Native app..."

# Check if fonts directory exists
if [ ! -d "src/assets/fonts" ]; then
    echo "❌ Fonts directory not found at src/assets/fonts"
    echo "Please ensure your Lato fonts are placed in src/assets/fonts/"
    exit 1
fi

echo "✅ Fonts directory found"

# List available fonts
echo "📁 Available fonts:"
ls -la src/assets/fonts/

# Check react-native.config.js
if [ -f "react-native.config.js" ]; then
    echo "✅ react-native.config.js found"
    echo "📋 Current configuration:"
    cat react-native.config.js
else
    echo "❌ react-native.config.js not found"
    exit 1
fi

echo ""
echo "🔧 Next steps:"
echo "1. Clean your build:"
echo "   - iOS: cd ios && rm -rf build && cd .."
echo "   - Android: cd android && ./gradlew clean && cd .."
echo ""
echo "2. Rebuild your app:"
echo "   - iOS: npx react-native run-ios"
echo "   - Android: npx react-native run-android"
echo ""
echo "3. If fonts still don't work, try:"
echo "   - iOS: cd ios && pod install && cd .."
echo "   - Android: npx react-native run-android --reset-cache"
echo ""
echo "✅ Font setup complete!"
