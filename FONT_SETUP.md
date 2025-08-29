# Lato Font Setup Guide

## Overview

The Figma design uses Lato font family. This guide shows how to add Lato fonts to your React Native project.

## Step 1: Download Lato Fonts

Download these font files from Google Fonts:

- `Lato-Regular.ttf`
- `Lato-Medium.ttf`
- `Lato-Bold.ttf`
- `Lato-Light.ttf`

## Step 2: Add Fonts to Project

1. Create folder: `src/assets/fonts/`
2. Copy font files to this folder

## Step 3: Link Fonts (iOS)

1. Add fonts to `ios/rentals/Info.plist`:

```xml
<key>UIAppFonts</key>
<array>
    <string>Lato-Regular.ttf</string>
    <string>Lato-Medium.ttf</string>
    <string>Lato-Bold.ttf</string>
    <string>Lato-Light.ttf</string>
</array>
```

## Step 4: Link Fonts (Android)

1. Create folder: `android/app/src/main/assets/fonts/`
2. Copy font files to this folder

## Step 5: Update Theme

Once fonts are linked, update `src/theme/index.ts`:

```typescript
fontFamily: {
  regular: 'Lato-Regular',
  medium: 'Lato-Medium',
  bold: 'Lato-Bold',
  light: 'Lato-Light',
},
```

## Step 6: Rebuild

- iOS: `cd ios && pod install && cd .. && npx react-native run-ios`
- Android: `npx react-native run-android`

## Alternative: Use System Fonts

If you prefer not to add custom fonts, the theme already falls back to system fonts.
