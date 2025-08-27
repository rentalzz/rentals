# Font System Documentation

This document explains how to use the comprehensive font system in the Rentals app, designed to work seamlessly with your Figma designs.

## Overview

The font system is built around the **Lato** font family and provides:

- Pre-defined font styles for common use cases
- Responsive scaling based on device dimensions
- Consistent typography across the entire app
- Easy-to-use helper functions
- Fallback fonts for cross-platform compatibility

## Quick Start

### 1. Basic Usage

```tsx
import { fontStyles } from '@theme/index';

// Use pre-defined styles
<Text style={fontStyles.heading.h1}>Page Title</Text>
<Text style={fontStyles.body.regular}>Regular body text</Text>
<Text style={fontStyles.button.primary}>Button Text</Text>
```

### 2. Combining with Colors

```tsx
import {fontStyles, colors} from '@theme/index';

<Text style={[fontStyles.heading.h2, {color: colors.primary}]}>Colored Heading</Text>;
```

### 3. Custom Font Styles

```tsx
import {createFontStyle} from '@theme/index';

// Create custom font style: family, size, weight, lineHeight, letterSpacing
const customStyle = createFontStyle('bold', 'xl', 'bold', 'tight', 'wide');
<Text style={customStyle}>Custom Text</Text>;
```

## Available Font Styles

### Display Styles

- `fontStyles.display.large` - Main app title (36px, Black weight)
- `fontStyles.display.medium` - Large headings (30px, Bold weight)
- `fontStyles.display.small` - Section titles (24px, Bold weight)

### Heading Styles

- `fontStyles.heading.h1` - Page titles (24px, Bold weight)
- `fontStyles.heading.h2` - Section titles (20px, Bold weight)
- `fontStyles.heading.h3` - Subsection titles (18px, Bold weight)
- `fontStyles.heading.h4` - Card titles (16px, Bold weight)

### Body Text Styles

- `fontStyles.body.large` - Important content (16px, Regular weight)
- `fontStyles.body.regular` - Standard content (14px, Regular weight)
- `fontStyles.body.small` - Secondary content (12px, Regular weight)
- `fontStyles.body.caption` - Metadata (10px, Regular weight)

### Button Styles

- `fontStyles.button.primary` - Main buttons (16px, Bold weight)
- `fontStyles.button.secondary` - Secondary buttons (16px, Regular weight)
- `fontStyles.button.small` - Compact buttons (14px, Bold weight)

### Label Styles

- `fontStyles.label.large` - Form labels (14px, Bold weight)
- `fontStyles.label.regular` - Standard labels (12px, Regular weight)
- `fontStyles.label.small` - Small labels (10px, Regular weight)

### Special Styles

- `fontStyles.special.appVersion` - App version text (10px, Regular weight)
- `fontStyles.special.logo` - Logo text (36px, Black weight)

## Font Families

The system uses these Lato font variants:

| Weight        | Font Family    | Usage                                 |
| ------------- | -------------- | ------------------------------------- |
| 100 (Thin)    | `Lato-Thin`    | Lightweight text, decorative elements |
| 300 (Light)   | `Lato-Light`   | Light text, secondary information     |
| 400 (Regular) | `Lato-Regular` | Body text, standard content           |
| 700 (Bold)    | `Lato-Bold`    | Headings, important text              |
| 900 (Black)   | `Lato-Black`   | Main titles, emphasis                 |

## Helper Functions

### `createFontStyle(family, size, weight?, lineHeight?, letterSpacing?)`

Creates custom font styles with specific parameters:

```tsx
// Basic usage
const style = createFontStyle('bold', 'xl');

// Advanced usage
const style = createFontStyle('light', '2xl', 'light', 'relaxed', 'wide');
```

### `getFontFamilyByWeight(weight)`

Gets the appropriate font family for a given weight:

```tsx
const fontFamily = getFontFamilyByWeight('bold'); // Returns 'Lato-Bold'
```

## Best Practices

### 1. Use Pre-defined Styles

Always use the pre-defined styles when possible for consistency:

```tsx
// ✅ Good - Uses pre-defined style
<Text style={fontStyles.heading.h1}>Title</Text>

// ❌ Avoid - Hardcoded styles
<Text style={{ fontSize: 24, fontWeight: 'bold' }}>Title</Text>
```

### 2. Combine Styles with Arrays

Use array syntax to combine font styles with other styles:

```tsx
<Text style={[fontStyles.body.regular, {color: colors.primary, textAlign: 'center'}]}>
  Styled Text
</Text>
```

### 3. Maintain Hierarchy

Use appropriate heading levels for content structure:

```tsx
// ✅ Good - Proper hierarchy
<Text style={fontStyles.heading.h1}>Page Title</Text>
<Text style={fontStyles.heading.h2}>Section Title</Text>
<Text style={fontStyles.body.regular}>Content</Text>

// ❌ Avoid - Inconsistent hierarchy
<Text style={fontStyles.heading.h1}>Page Title</Text>
<Text style={fontStyles.heading.h1}>Section Title</Text> // Should be h2
```

### 4. Responsive Design

The font system automatically scales based on device dimensions. Don't override font sizes:

```tsx
// ✅ Good - Uses theme scaling
<Text style={fontStyles.heading.h1}>Title</Text>

// ❌ Avoid - Hardcoded sizes
<Text style={[fontStyles.heading.h1, { fontSize: 20 }]}>Title</Text>
```

## Examples

### Button Component

```tsx
const Button = ({title, variant = 'primary'}) => (
  <TouchableOpacity style={styles.button}>
    <Text
      style={[fontStyles.button.primary, variant === 'secondary' && fontStyles.button.secondary]}>
      {title}
    </Text>
  </TouchableOpacity>
);
```

### Card Component

```tsx
const Card = ({title, content}) => (
  <View style={styles.card}>
    <Text style={fontStyles.heading.h4}>{title}</Text>
    <Text style={fontStyles.body.regular}>{content}</Text>
  </View>
);
```

### Form Component

```tsx
const FormField = ({label, placeholder}) => (
  <View style={styles.field}>
    <Text style={fontStyles.label.large}>{label}</Text>
    <TextInput
      style={[fontStyles.body.regular, styles.input]}
      placeholder={placeholder}
      placeholderTextColor={colors.textTertiary}
    />
  </View>
);
```

## Troubleshooting

### Font Not Loading

1. Ensure fonts are properly linked: `npx react-native link`
2. Check `react-native.config.js` has correct font path
3. Rebuild the app after adding fonts

### Font Weight Not Working

- Lato doesn't have Medium (500) or Semibold (600) weights
- Use Regular (400) or Bold (700) instead
- For custom weights, use `createFontStyle` with appropriate family

### Performance Issues

- Font styles are memoized, so they're efficient to use
- Avoid creating new style objects in render functions
- Use the pre-defined styles when possible

## Migration Guide

### From Old System

If you're migrating from the old typography system:

```tsx
// Old way
<Text style={{ fontSize: typography.fontSize.lg, fontWeight: '700' }}>

// New way
<Text style={fontStyles.button.primary}>
```

### From Hardcoded Styles

```tsx
// Old way
<Text style={{ fontSize: 16, fontWeight: 'bold' }}>

// New way
<Text style={fontStyles.button.primary}>
```

## Support

For questions or issues with the font system:

1. Check this documentation first
2. Look at the `TypographyExample.tsx` component for examples
3. Review the theme files for implementation details
4. Ensure fonts are properly linked and accessible
